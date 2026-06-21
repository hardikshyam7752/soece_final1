import "./Follow_us.css";
const handleSoon = (e) => {
    e.preventDefault();
    alert("🚀 Coming Soon! Stay tuned.");
};

const Follow_us = () => {
    return (
        <div className="follow_us_container">
            <div className="follow_us_card">
                <div className="follow_us_content">
                    <span className="follow_eyebrow">Stay Connected</span>
                    <h1>Follow Us To Get All The</h1>
                    <h1 className="accent_text">Latest Updates</h1>
                    
                    <div className="social_links">
                        <a href="https://instagram.com/soece_nitj" target="_blank" rel="noreferrer" className="social_btn insta">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="#fff"
                            >
                                <path d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm10.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                            </svg>
                            <span>Instagram</span>
                        </a>

                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social_btn linked" onClick={handleSoon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            <span>LinkedIn</span>
                        </a>

                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noreferrer"
                            className="social_btn twitter"
                            onClick={handleSoon}
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="#000000"
                            >
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.472l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zm-1.296 19.482h2.039L6.486 3.25H4.298l13.307 17.385z" />
                            </svg>
                            <span>Twitter</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Follow_us;