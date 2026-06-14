import React, { useEffect, useRef } from "react";

const CircuitBackground = ({ useWindowSize = false }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = 0;
        let h = 0;
        let animationId = null;

        const traces = [];
        const particles = [];
        const nodes = [];

        const chip = { x: 0, y: 0, size: 150 };

        const rand = (min, max) => Math.random() * (max - min) + min;
        const isMobile = () => window.innerWidth < 768;

        const getPointAlongPath = (points, t) => {
            const segments = [];
            let total = 0;
            for (let i = 0; i < points.length - 1; i++) {
                const a = points[i];
                const b = points[i + 1];
                const len = Math.hypot(b.x - a.x, b.y - a.y);
                segments.push({ a, b, len });
                total += len;
            }
            let dist = t * total;
            for (const seg of segments) {
                if (dist <= seg.len) {
                    const r = seg.len === 0 ? 0 : dist / seg.len;
                    return {
                        x: seg.a.x + (seg.b.x - seg.a.x) * r,
                        y: seg.a.y + (seg.b.y - seg.a.y) * r,
                    };
                }
                dist -= seg.len;
            }
            return points[points.length - 1];
        };

        const createPath = (sx, sy, ex, ey) => {
            const points = [{ x: sx, y: sy }];
            const mx1 = sx + (ex - sx) * rand(0.2, 0.35);
            points.push({ x: mx1, y: sy });
            const my2 = sy + (ey - sy) * rand(0.3, 0.7);
            points.push({ x: mx1, y: my2 });
            const mx3 = ex + rand(-80, 80);
            points.push({ x: mx3, y: my2 });
            points.push({ x: mx3, y: ey });
            points.push({ x: ex, y: ey });
            return points;
        };

        const buildScene = () => {
            traces.length = 0;
            particles.length = 0;
            nodes.length = 0;

            const mobile = isMobile();
            const half = chip.size / 2;
            const step = mobile ? 18 : 20;
            const range = mobile ? 2 : 3;
            const starts = [];

            for (let i = -range; i <= range; i++) {
                starts.push({ x: chip.x + i * step, y: chip.y - half });
                starts.push({ x: chip.x + i * step, y: chip.y + half });
                starts.push({ x: chip.x - half, y: chip.y + i * step });
                starts.push({ x: chip.x + half, y: chip.y + i * step });
            }

            starts.forEach((sp) => {
                const branches = mobile ? 1 : (Math.random() > 0.5 ? 2 : 1);
                for (let b = 0; b < branches; b++) {
                    let ex = sp.x;
                    let ey = sp.y;

                    if (sp.y < chip.y - half + 2) ey = rand(30, h * 0.22);
                    else if (sp.y > chip.y + half - 2) ey = rand(h * 0.78, h - 30);
                    else if (sp.x < chip.x - half + 2) ex = rand(30, w * 0.22);
                    else if (sp.x > chip.x + half - 2) ex = rand(w * 0.78, w - 30);

                    if (Math.abs(ex - sp.x) < 50) ex += ex < chip.x ? -140 : 140;
                    if (Math.abs(ey - sp.y) < 50) ey += ey < chip.y ? -140 : 140;

                    const path = createPath(sp.x, sp.y, ex, ey);
                    traces.push({
                        points: path,
                        width: rand(0.8, 1.8),
                        progress: Math.random(),
                        speed: rand(0.002, 0.006),
                        glow: rand(8, 18),
                        color: Math.random() > 0.25 ? "#8ab4ff" : "#72ffd8",
                    });

                    path.forEach((p, i) => {
                        if (i > 0 && i < path.length - 1 && Math.random() > 0.45) {
                            nodes.push({
                                x: p.x, y: p.y,
                                size: rand(1.5, 3.5),
                                blink: rand(0.01, 0.03),
                                alpha: rand(0.2, 0.8),
                                color: Math.random() > 0.5 ? "#72ffd8" : "#8ab4ff",
                            });
                        }
                    });
                }
            });

            const particleCount = mobile ? 40 : 100;
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: rand(0, w),
                    y: rand(0, h),
                    r: rand(0.5, 1.8),
                    vx: rand(-0.08, 0.08),
                    vy: rand(-0.08, 0.08),
                    a: rand(0.08, 0.3),
                });
            }
        };

        const resizeCanvas = () => {
            // Cap DPR at 2 for performance
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const mobile = isMobile();

            w = window.innerWidth;
            h = window.innerHeight;

            canvas.width = w * dpr;
            canvas.height = h * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            chip.x = w / 2;
            chip.y = h / 2;
            // Responsive chip size
            chip.size = Math.min(w, h) * (mobile ? 0.13 : 0.10);

            buildScene();
        };

        const drawBackground = () => {
            const bg = ctx.createLinearGradient(0, 0, w, h);
            bg.addColorStop(0, "#040716");
            bg.addColorStop(0.45, "#0c1430");
            bg.addColorStop(1, "#19081d");
            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, w, h);

            const glow = ctx.createRadialGradient(chip.x, chip.y, 20, chip.x, chip.y, 300);
            glow.addColorStop(0, "rgba(114,180,255,0.20)");
            glow.addColorStop(0.35, "rgba(130,90,255,0.10)");
            glow.addColorStop(1, "rgba(0,0,0,0)");
            ctx.fillStyle = glow;
            ctx.fillRect(0, 0, w, h);

            const vignette = ctx.createRadialGradient(
                chip.x, chip.y, 100,
                chip.x, chip.y, Math.max(w, h) * 0.7
            );
            vignette.addColorStop(0, "rgba(0,0,0,0)");
            vignette.addColorStop(1, "rgba(0,0,0,0.35)");
            ctx.fillStyle = vignette;
            ctx.fillRect(0, 0, w, h);
        };

        const drawChip = () => {
            const s = chip.size;
            const x = chip.x - s / 2;
            const y = chip.y - s / 2;
            const mobile = isMobile();

            ctx.save();
            ctx.shadowColor = "#8ab4ff";
            ctx.shadowBlur = mobile ? 25 : 45;
            ctx.strokeStyle = "rgba(170,200,255,0.95)";
            ctx.lineWidth = mobile ? 1.5 : 2;
            ctx.strokeRect(x, y, s, s);

            ctx.strokeStyle = "rgba(120,160,255,0.35)";
            ctx.strokeRect(x - 8, y - 8, s + 16, s + 16);

            const fill = ctx.createLinearGradient(x, y, x + s, y + s);
            fill.addColorStop(0, "rgba(8,12,26,0.96)");
            fill.addColorStop(1, "rgba(20,22,48,0.96)");
            ctx.fillStyle = fill;
            ctx.fillRect(x, y, s, s);

            ctx.shadowBlur = 0;
            ctx.strokeStyle = "rgba(210,225,255,0.22)";
            ctx.strokeRect(x + 12, y + 12, s - 24, s - 24);

            const mark = mobile ? 10 : 16;
            ctx.strokeStyle = "rgba(180,220,255,0.85)";
            ctx.lineWidth = mobile ? 1.5 : 2;

            ctx.beginPath();
            ctx.moveTo(x + 18, y + 18 + mark);
            ctx.lineTo(x + 18, y + 18);
            ctx.lineTo(x + 18 + mark, y + 18);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(x + s - 18 - mark, y + 18);
            ctx.lineTo(x + s - 18, y + 18);
            ctx.lineTo(x + s - 18, y + 18 + mark);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(x + 18, y + s - 18 - mark);
            ctx.lineTo(x + 18, y + s - 18);
            ctx.lineTo(x + 18 + mark, y + s - 18);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(x + s - 18 - mark, y + s - 18);
            ctx.lineTo(x + s - 18, y + s - 18);
            ctx.lineTo(x + s - 18, y + s - 18 - mark);
            ctx.stroke();

            const pinCount = mobile ? 4 : 7;
            const pinStep = mobile ? 12 : 14;
            for (let i = 0; i < pinCount; i++) {
                ctx.fillStyle = i % 2 === 0 ? "rgba(110,255,220,0.8)" : "rgba(138,180,255,0.75)";
                ctx.fillRect(x + 24 + i * pinStep, y - 8, 8, 4);
                ctx.fillRect(x + 24 + i * pinStep, y + s + 4, 8, 4);
                ctx.fillRect(x - 8, y + 24 + i * pinStep, 4, 8);
                ctx.fillRect(x + s + 4, y + 24 + i * pinStep, 4, 8);
            }
            ctx.restore();
        };

        const drawTrace = (trace) => {
            const pts = trace.points;
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(pts[0].x, pts[0].y);
            for (let i = 1; i < pts.length; i++) {
                ctx.lineTo(pts[i].x, pts[i].y);
            }
            // Visible on both mobile and PC
            ctx.strokeStyle = "rgba(150,170,255,0.20)";
            ctx.lineWidth = trace.width + 3;
            ctx.stroke();
            ctx.strokeStyle = "rgba(130,150,255,0.38)";
            ctx.lineWidth = trace.width;
            ctx.stroke();
            ctx.restore();
        };

        const drawPulse = (trace) => {
            const p = getPointAlongPath(trace.points, trace.progress);
            ctx.save();
            ctx.shadowColor = trace.color;
            ctx.shadowBlur = trace.glow;
            ctx.fillStyle = trace.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2.6, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            trace.progress += trace.speed;
            if (trace.progress > 1) trace.progress = 0;
        };

        const drawNodes = (time) => {
            nodes.forEach((n) => {
                const alpha = n.alpha + Math.sin(time * n.blink) * 0.25;
                ctx.save();
                ctx.shadowColor = n.color;
                ctx.shadowBlur = 10;
                ctx.fillStyle = n.color;
                ctx.globalAlpha = Math.max(alpha, 0.15);
                ctx.fillRect(n.x - n.size, n.y - n.size, n.size * 2, n.size * 2);
                ctx.restore();
            });
        };

        const drawParticles = () => {
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = w;
                if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h;
                if (p.y > h) p.y = 0;
                ctx.fillStyle = `rgba(140,180,255,${p.a})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            });
        };

        const drawMicroDetails = () => {
            if (isMobile()) return;
            for (let i = 0; i < 22; i++) {
                const x = (i * 87) % w;
                const y = (i * 149) % h;
                ctx.fillStyle = "rgba(120,140,255,0.05)";
                ctx.fillRect(x, y, 22, 6);
                ctx.fillRect(x + 10, y + 12, 8, 18);
            }
        };

        const animate = (time = 0) => {
            ctx.clearRect(0, 0, w, h);
            drawBackground();
            drawMicroDetails();
            drawParticles();
            traces.forEach((trace) => {
                drawTrace(trace);
                drawPulse(trace);
            });
            drawNodes(time * 0.05);
            drawChip();
            animationId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        animate();

        let resizeTimer;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(resizeCanvas, 150);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (animationId) cancelAnimationFrame(animationId);
            clearTimeout(resizeTimer);
        };
    }, [useWindowSize]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',  // fixed → absolute (sirf intro section mein)
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,             // content ke peeche
                pointerEvents: 'none',
                display: 'block',
            }}
        />
    );
};

export default CircuitBackground;