const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const { mongoserver } = require('./config/database');

const app = express();

app.set('trust proxy', 1);

app.use(cors({
    origin: [
        "https://soece-nitj.in",
        "https://www.soece-nitj.in"
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.options('*', cors()); // preflight

// ─── SECURITY HEADERS ─
// ─── SECURITY HEADERS ─
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https:"],
            imgSrc: ["'self'", "data:", "https:"],
            connectSrc: ["'self'", "https://soece-nitj.in", "https://www.soece-nitj.in"],
            fontSrc: ["'self'", "data:", "https:"],
            objectSrc: ["'none'"],
            baseUri: ["'self'"],  // Clickjacking protection
            formAction: ["'self'"],       // Form hijacking protection
        },
    },
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: { policy: "cross-origin" }, // API resources allow
    hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true
    },
    referrerPolicy: { policy: "strict-origin-when-cross-origin" },
    xContentTypeOptions: true,
}));

app.use((req, res, next) => {
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    next();
});


app.use(express.json());

// ─── RATE LIMITING 
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 500,
    message: { error: 'Too many requests, please try again later' }
});
app.use('/api/', limiter);

// ─── CACHING ──
const cache = {};
const CACHE_TTL = 5 * 60 * 1000;

function cacheMiddleware(req, res, next) {
    const key = req.originalUrl;
    const cached = cache[key];
    if (cached && Date.now() - cached.time < CACHE_TTL) {
        return res.json(cached.data);
    }
    const originalJson = res.json.bind(res);
    res.json = (data) => {
        cache[key] = { data, time: Date.now() };
        originalJson(data);
    };
    next();
}


app.get('/', (req, res) => res.json({ status: 'ok', message: 'SoECE API running' }));
// app.get('/ping', (req, res) => res.json({ status: 'ok' }));

app.use('/api/events', cacheMiddleware, require('./api/events'));
app.use('/api/faculty', cacheMiddleware, require('./api/faculty'));
app.use('/api/gallery', cacheMiddleware, require('./api/gallery'));
app.use('/api/placements', cacheMiddleware, require('./api/placements'));


const PORT = process.env.PORT || 5000;

mongoserver(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});