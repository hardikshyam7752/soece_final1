import "./Intro_page.css";
import CircuitBackground from "../CircuitBackground";

const Intro_page = () => {
    return (
        <section className="intro-container">
            <CircuitBackground useWindowSize={true} />
            <div className="intro-content">
                <h1 className="soece-title">SoECE</h1>
                <p className="tagline">LET'S MAKE ELECTRONICS EASY</p>

                <div className="cta-section">
                    <a
                        href="https://www.nitj.ac.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nitj-button"
                    >
                        NITJ Official <span className="arrow">≫</span>
                    </a>
                </div>

                <div className="info-footer">
                    <p className="dept-name">
                        Department of Electronics and Communication Engineering
                    </p>
                    <p className="college-name">NIT JALANDHAR</p>
                </div>
            </div>
        </section>
    );
};

export default Intro_page;