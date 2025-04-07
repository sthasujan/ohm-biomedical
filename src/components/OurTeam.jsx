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
import team10 from "../assets/Ourteam/Ayusha.jpeg";
import team11 from "../assets/Ourteam/Smiriti Koirala.png";
import { motion, AnimatePresence } from "framer-motion";

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
        post: "Co-Founder",
        image: team2,
        description: "Suman Kharel is a Swinburne University graduate and former GE Healthcare professional, now leading as Workshop Manager at OHM Biomedical. He oversees the service and maintenance of critical Biomedical devices, ensuring high standards and operational excellence. Known for his meticulous approach and dedication to continuous improvement, Suman has enhanced the company’s reputation by focusing on advanced training and strict compliance. His leadership not only uplifts his team but also solidifies OHM Biomedical’s role as a trusted partner in the healthcare industry.",
        email: "Suman@ohmBiomedical.com.au",
        linkedin: "https://www.linkedin.com/in/kBiomedical/?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=ios_app",
    },
    {
        name: "Subash Basnet",
        post: "Co-Founder",
        image: team3,
        description: "Subash Basnet: Senior Biomedical Engineer with 10+ years' experience, excels in optimizing and repairing critical medical equipment, specializing in Anaesthesia, Patient Monitors, Central Monitors, Telemetry, Ventilators, and more.",
        email: "Subash@ohmBiomedical.com.au",
        linkedin: "https://www.linkedin.com/in/subas1/?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=ios_app",
    },
    {
        name: "Anupam Acharya",
        post: "Co-Founder",
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
    {
        name: "Aayushi Koirala",
        post: "Sales Consultant",
        image: team10,
        description: "Aayushi brings in vibrant energy, a strong background in customer service, and a passion for problem-solving and value-added selling. In her role, she supports both inbound and outbound sales inquiries, contributing to business development initiatives, and assisting with key account management. She plays a key role in expanding our advanced ventilation portfolio (Zoll Medical), engaging with OEM vendors and partners, and contributing to our specialist biomedical engineering programs as part of our ongoing collaboration with OEMs and industry stakeholders.",
        email: "AAYUSHI.KOIRALA28@GMAIL.COM",
        linkedin: "",
    },
    {
        name: "Smiriti Koirala",
        post: "Marketing Co-Ordinator",
        image: team11,
        description: "With an undergraduate education in business administration and experience in the retail sector, Smriti plays a key role at OHM Biomedical. She is responsible for coordinating marketing campaigns, managing social media presence, and supporting branding initiatives. Her creativity and strategic approach help drive engagement and enhance the company’s visibility in the biomedical industry. Smriti is passionate about marketing and always brings fresh ideas and a positive attitude to the team. Her ability to multitask and collaborate effectively makes her an invaluable part of OHM Biomedical’s growth and success",
        email: "smriti@ohmbiomedical.com.au",
        linkedin: "",
    },
];

const OurTeam = () => {
    const [selectedMember, setSelectedMember] = React.useState(null);

    const openPopup = (member) => setSelectedMember(member);
    const closePopup = () => setSelectedMember(null);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
        hover: {
            y: -5,
            scale: 1.03,
            transition: { duration: 0.2 },
        },
    };

    const popupVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
    };

    return (
        <div>
            <div className="relative w-full h-[120px]">
                {/* Fixed Height Image Container */}
                <div className="relative w-full h-full overflow-hidden">
                    <img
                        src={productBgImg}
                        alt="Product Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Animated Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center px-2">
                    <motion.h1
                        className="font-semibold text-white text-center mx-auto
                            text-sm xs:text-base sm:text-lg md:text-xl
                            px-3 py-1 bg-black bg-opacity-40 rounded-md
                            backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Our Team
                    </motion.h1>
                </div>
            </div>
            <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-screen-2xl mx-auto">
                {/* Team Grid */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 md:gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                            variants={itemVariants}
                            whileHover="hover"
                        >
                            <div className="relative pt-[100%] overflow-hidden">
                                <motion.img
                                    src={member.image}
                                    alt={member.name}
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                            <div className="p-4 text-center">
                                <motion.h3
                                    className="text-lg md:text-xl font-semibold text-gray-800 mb-1 cursor-pointer hover:text-brandPrimary transition-colors"
                                    onClick={() => openPopup(member)}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    {member.name}
                                </motion.h3>
                                <p className="text-sm md:text-base text-gray-600">{member.post}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Popup Modal - Now Fully Responsive */}
                <AnimatePresence>
                    {selectedMember && (
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="bg-white rounded-xl w-full max-w-4xl mx-4 shadow-2xl relative max-h-[90vh] overflow-y-auto"
                                variants={popupVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <button
                                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm"
                                    onClick={closePopup}
                                >
                                    &times;
                                </button>

                                <div className="flex flex-col lg:flex-row">
                                    {/* Image Section - Mobile Optimized */}
                                    <div className="w-full lg:w-2/5 relative h-48 sm:h-64 lg:h-auto lg:min-h-[400px]">
                                        <img
                                            src={selectedMember.image}
                                            alt={selectedMember.name}
                                            className="absolute top-0 left-0 w-full h-full object-cover object-center"
                                        />
                                    </div>

                                    {/* Content Section with improved text alignment */}
                                    <div className="w-full lg:w-3/5 p-4 md:p-6 lg:p-8 flex flex-col">
                                        {/* Name - Mobile Optimized */}
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">
                                            {selectedMember.name}
                                        </h3>

                                        {/* Post - Mobile Optimized */}
                                        <p className="text-base sm:text-lg text-brandPrimary font-medium mb-3 sm:mb-4">
                                            {selectedMember.post}
                                        </p>

                                        {/* Optimized Description Container */}
                                        <div className="flex-grow overflow-y-auto pr-1 md:pr-3 mb-4 md:mb-6 max-h-[40vh] md:max-h-[50vh] scrollbar-thin">
                                            <p className="text-gray-600 text-sm md:text-base leading-snug md:leading-normal text-justify md:text-justify lg:text-justify hyphens-auto">
                                                {selectedMember.description}
                                            </p>
                                        </div>

                                        {/* Social Links */}
                                        <div className="flex space-x-4 mt-auto">
                                            <a
                                                href={`mailto:${selectedMember.email}`}
                                                className="text-gray-700 hover:text-brandPrimary text-xl transition-colors p-2"
                                                title="Email"
                                            >
                                                <FaEnvelope />
                                            </a>
                                            {selectedMember.linkedin && (
                                                <a
                                                    href={selectedMember.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-700 hover:text-brandPrimary text-xl transition-colors p-2"
                                                    title="LinkedIn"
                                                >
                                                    <FaLinkedin />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default OurTeam;