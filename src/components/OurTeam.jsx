import React, { useState } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons
import productBgImg from "../assets/products.webp";
import team1 from "../assets/Ourteam/sovit.png";
import team2 from "../assets/Ourteam/suman.jpeg";
import team3 from "../assets/Ourteam/subash.jpg";
import team4 from "../assets/Ourteam/anupam.jpg";
import team5 from "../assets/Ourteam/soyuz.png";
import team6 from "../assets/Ourteam/sitesh.jpg";
import team7 from "../assets/Ourteam/abhiske.png";
import team8 from "../assets/Ourteam/sujata.webp";
import team9 from "../assets/Ourteam/abhishekk.png";

const teamMembers = [
    {
        name: "Sovit Baral",
        post: "Founder",
        image: team1,
        description: "Sovit Baral, a seasoned healthcare business professional, brings over a decade of expertise in managing critical medical devices. As the Managing Director of OHM Biomedical, Sovit is dedicated to delivering quality services with a focus on compliance and integrity.",
        email: "Sovit@ohmBiomedical.com.au",
        linkedin: "https://www.linkedin.com/in/sovitbaral/?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=ios_app",
    },
    {
        name: "Suman Kharel",
        post: "Co Founder",
        image: team2,
        description: "Suman Kharel is a Swinburne University graduate and former GE Healthcare professional, now leading as Workshop Manager at OHM Biomedical. He oversees the service and maintenance of critical Biomedical devices, ensuring high standards and operational excellence. Known for his meticulous approach and dedication to continuous improvement, Suman has enhanced the company’s reputation by focusing on advanced training and strict compliance. His leadership not only uplifts his team but also solidifies OHM Biomedical’s role as a trusted partner in the healthcare industry.",
        email: "Suman@ohmBiomedical.com.au",
        linkedin: "https://www.linkedin.com/in/kBiomedical/?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=ios_app",
    },
    {
        name: "Subash Basnet",
        post: "Co Founder",
        image: team3,
        description: "Subash Basnet: Senior Biomedical Engineer with 10+ years' experience, excels in optimizing and repairing critical medical equipment, specializing in Anaesthesia, Patient Monitors, Central Monitors, Telemetry, Ventilators, and more.",
        email: "Subash@ohmBiomedical.com.au",
        linkedin: "https://www.linkedin.com/in/subas1/?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=ios_app",
    },
    {
        name: "Anupam Acharya",
        post: "Co Founder",
        image: team4,
        description: "A highly accomplished professional with over 10 years of experience in the biomedical field, holding a Master of Biomedical Engineering and an MBA. Demonstrates a proven track record in managing diverse projects and leading crossfunctional teams to achieve strategic objectives. Adept at integrating technical expertise with business acumen to drive innovation, optimize processes, and deliver exceptional results. Recognized for strong leadership, project management skills, and the ability to cultivate collaborative environments. Committed to advancing biomedical solutions through strategic planning and effective team management.",
        email: "anupam@ohmBiomedical.com.au",
        linkedin: "https://www.linkedin.com/in/anupam-acharya-a121b356/?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=ios_app",
    },
    {
        name: "Soyuz Baral",
        post: "Back Office Manager",
        image: team5,
        description: "Soyuz Baral, OHM Bio's Back Office & Social Media Manager, uses a Microbiology degree and sales background for effective marketing. Skilled in creative design and customer service, Soyuz blends science and sales for a seamless back-office role.",
        email: "soyuz@ohmBiomedical.com.au",
        linkedin: "https://www.linkedin.com",
    },
    {
        name: "Sitesh Sharan Shah",
        post: "Service Engineer",
        image: team6,
        description: "Sitesh, a skilled Biomedical Technician, joins OHM Biomedical with expertise in dental and general Biomedical devices. His proficiency in maintenance aligns with our to high-quality services. Sitesh is a valuable asset, bringing a positive attitude and dedication to patient care.",
        email: "Sitesh@ohmbiomedial.com.au",
        linkedin: "https://www.linkedin.com/in/sitesh-sharan-shah-472370191/?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=ios_app",
    },
    {
        name: "Abhishek Prasai",
        post: "Account/Admin Officer",
        image: team7,
        description: "With an undergraduate degree in Commerce/Accounting, Abhishek has been important part of OHM Biomedical. With his knowledge in Accounting and Admin field Abhishek looks after stocks, reports, orders, accounts, shipments etc. He has passion for his job and is always on a positive sides.",
        email: "support@ohmBiomedical.com.au",
        linkedin: "https://www.linkedin.com/in/abhishek-prasai-2405b4195/?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=ios_app",
    },
    {
        name: "Sujata Kafley",
        post: "Biomedical Engineer",
        image: team8,
        description: "Sujata is a Biomedical Engineer with a Master's in Electronic Engineering, specializing in Biomedical. Registered with Engineers Australia, she brings over 5 years of experience in customer-facing roles, excelling in understanding and meeting customer needs. Known for her empathy, active listening, and problem-solving skills, Sujata always looks forward towards contributing her expertise at Ohm Biomedical.",
        email: "sujata@ohmbiomedial.com.au",
        linkedin: "https://www.linkedin.com",
    },
    {
        name: "Rameshwor Khadka",
        post: "Technical Officer",
        image: team9,
        description: "Rameshwor is currently in his final year of studying cybersecurity and working as a Blender Technician at OHM Biomedical Company. Rameshwor specializes in following strict protocols to guarantee that medical blenders are well-maintained and ready for reuse. At OHM Biomedical Company, Rameshwor is committed to quickly solving concerns and ensuring that products are returned to clients in excellent shape.",
        email: "admin_ws@ohmBiomedical.com.au",
        linkedin: "https://www.linkedin.com/in/rk201221/?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=ios_app",
    },
];

const OurTeam = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    const openPopup = (member) => {
        setSelectedMember(member);
    };

    const closePopup = () => {
        setSelectedMember(null);
    };

    return (
        <div>
            <div className='relative pt-16 md:pt-0'>
                <img
                    src={productBgImg}
                    alt="Product Background"
                    className='w-full h-[30vh] md:h-[40vh] object-cover'
                />
                {/* Adjust positioning for mobile and larger screens */}
                <div
                    className='absolute bottom-[22%] md:top-[65%] w-full flex justify-center px-4'
                >
                    <h1
                        className='font-semibold mb-2 leading-tight text-white text-xl sm:text-2xl text-center w-full md:w-3/4'
                    >
                        Our Team <br />
                    </h1>
                </div>
            </div>
            <div className="team-container">
                {/* <h2 className="team-header">Our Team</h2>
                <p className="team-description">
                    Meet the dedicated professionals who make everything possible.
                </p> */}
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div className="team-member" key={index}>
                            <img src={member.image} alt={member.name} />
                            <h3 className="team-name" onClick={() => openPopup(member)}>
                                {member.name}
                            </h3>
                            <p className="team-post">{member.post}</p>
                        </div>
                    ))}
                </div>

                {selectedMember && (
                    <div className="popup">
                        <div className="popup-content">
                            <button className="close-button" onClick={closePopup}>
                                &times;
                            </button>
                            <img src={selectedMember.image} alt={selectedMember.name} />
                            <h3>{selectedMember.name}</h3>
                            <p className="popup-post">{selectedMember.post}</p>
                            <p className="popup-description">{selectedMember.description}</p>
                            <div className="popup-icons">
                                <a href={`mailto:${selectedMember.email}`} className="popup-icon" title="Email">
                                    <FaEnvelope />
                                </a>
                                <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="popup-icon" title="LinkedIn">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
};

export default OurTeam;
