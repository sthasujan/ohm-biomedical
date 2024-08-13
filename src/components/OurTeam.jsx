import React, { useState } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons
import productBgImg from "../assets/products.webp";

const teamMembers = [
    {
        name: "Sovit Baral",
        post: "Founder",
        image: "path-to-image-1.jpg",
        description: "Sovit is the CEO with over 20 years of experience in the industry.",
        email: "sovit.baral@example.com",
        linkedin: "https://www.linkedin.com/in/sovitbaral",
    },
    {
        name: "Suman Kharel",
        post: "Co Founder",
        image: "path-to-image-2.jpg",
        description: "Suman leads the technology team with a focus on innovation.",
        email: "suman.kharel@example.com",
        linkedin: "https://www.linkedin.com/in/sumankharel",
    },
    {
        name: "Samuel Green",
        post: "CFO",
        image: "path-to-image-3.jpg",
        description: "Samuel manages the financial operations with a strategic vision.",
        email: "samuel.green@example.com",
        linkedin: "https://www.linkedin.com/in/samuelgreen",
    },
    {
        name: "Emily White",
        post: "COO",
        image: "path-to-image-4.jpg",
        description: "Emily oversees the company's operations and ensures efficiency.",
        email: "emily.white@example.com",
        linkedin: "https://www.linkedin.com/in/emilywhite",
    },
    {
        name: "Michael Brown",
        post: "Head of Marketing",
        image: "path-to-image-5.jpg",
        description: "Michael is responsible for all marketing initiatives and strategies.",
        email: "michael.brown@example.com",
        linkedin: "https://www.linkedin.com/in/michaelbrown",
    },
    {
        name: "Sophia Wilson",
        post: "HR Manager",
        image: "path-to-image-6.jpg",
        description: "Sophia manages human resources and talent acquisition.",
        email: "sophia.wilson@example.com",
        linkedin: "https://www.linkedin.com/in/sophiawilson",
    },
    {
        name: "David Clark",
        post: "Lead Developer",
        image: "path-to-image-7.jpg",
        description: "David is the lead developer with expertise in full-stack development.",
        email: "david.clark@example.com",
        linkedin: "https://www.linkedin.com/in/davidclark",
    },
    {
        name: "Olivia Johnson",
        post: "Product Manager",
        image: "path-to-image-8.jpg",
        description: "Olivia ensures product development aligns with market needs.",
        email: "olivia.johnson@example.com",
        linkedin: "https://www.linkedin.com/in/oliviajohnson",
    },
    {
        name: "William Taylor",
        post: "Customer Support Lead",
        image: "path-to-image-9.jpg",
        description: "William leads the customer support team, ensuring client satisfaction.",
        email: "william.taylor@example.com",
        linkedin: "https://www.linkedin.com/in/williamtaylor",
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
            <div className='w-28 h-28'>
                <img src={productBgImg} alt="" />
            </div>
            <div className="team-container">
                <h2 className="team-header">Our Team</h2>
                <p className="team-description">
                    Meet the dedicated professionals who make everything possible.
                </p>
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
