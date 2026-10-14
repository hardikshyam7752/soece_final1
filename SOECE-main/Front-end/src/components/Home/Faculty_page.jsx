import "./Faculty_page.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import poojaImage from "../../assets/pooja_mam_image.jpg";
import secondImage from "../../assets/manjeet-sir-new.jpg"; // add second image
import thirdImage from "../../assets/hemant_sir_image.jpg";

const facultyData = [
    {
        name: "Dr. Pheiroijam Pooja",
        designation: "Assistant Professor, ECE Dept.",
        image: poojaImage,
        quote1:
            "Innovation is not a destination, it's a direction. Every idea we nurture today becomes the foundation someone else will build upon tomorrow.",
        quote2:
            "The most powerful tool in any room is a curious mind. We don't just solve problems — we reimagine the questions."
    },
    {
        name: "Dr. Manjeet Singh",
        designation: "Assistant Professor, ECE Dept.",
        image: secondImage,
        quote1:
            "Innovation and research are the pillars of engineering excellence.",
        quote2:
            "Our aim is to guide students toward strong fundamentals and real-world implementation."
    },

    {
        name: "Dr. Hemant Kumar",
        designation: "Assistant Professor, ECE Dept.",
        image: thirdImage,
        quote1:
            "Excellence in engineering begins with curiosity, innovation, and a commitment to lifelong learning.",
        quote2:
            "My goal is to empower students with strong technical foundations and the skills to turn knowledge into practical solutions."
    }

];

const Faculty_page = () => {
    const [index, setIndex] = useState(0);

    const nextAdvisor = () => {
        setIndex((prev) => (prev + 1) % facultyData.length);
    };

    const faculty = facultyData[index];

    return (
        <section className="faculty_section">
            <div className="faculty_card">
                <h1 className="faculty_title">Our Faculty Advisor</h1>
                <div className="faculty_accent_bar"></div>

                <div className="faculty_content_flex">
                    <div className="faculty_image_container">
                        <Link to="/" className="faculty_link_wrapper">
                            <img src={faculty.image} alt="Faculty Advisor" className="faculty_img" />
                        </Link>
                    </div>

                    <div className="faculty_text_container">
                        <div className="quote_icon">“</div>
                        <p>{faculty.quote1}</p>
                        <p>{faculty.quote2}</p>

                        <div className="faculty_signature">
                            <h4>{faculty.name}</h4>
                            <span>{faculty.designation}</span>
                        </div>
                    </div>
                </div>
                {/* Bottom Right Button */}
                <button className="faculty_switch_btn" onClick={nextAdvisor}>
                    Next Advisor →
                </button>
            </div>
        </section>
    );
};

export default Faculty_page;