import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faHeartbeat, faSyringe, faPills, faBandAid, faVirus } from '@fortawesome/free-solid-svg-icons';
import productBgImg from "../assets/products.webp";

// Sample data for the tabs
const tabData = [
    { 
        id: 1, 
        name: 'Preventive Maintainance and Repairs', 
        title: 'Optimizing Biomedical processes', 
        description: 'At OHM Biomedical Services, we understand the critical role that medical equipment plays in patient care, and we are committed to ensuring that your equipment meets the highest standards of safety and effectiveness. Our AS3551-compliant Preventative Maintenance & Repair service is designed to provide regular maintenance and repair services for your medical equipment, in accordance with the AS3551 standards.', 
        services: 
        [{ 
            icon: faCog, 
            name: 'Regular Maintenance', 
            desc: 'Our Biomedical Engineers conduct routine checks on your medical equipment to ensure safe and efficient operation. We perform inspections, tests, and calibrations to address potential issues early.' 
        }, 
        { 
            icon: faHeartbeat, 
            name: 'Repairs and Calibration', 
            desc: 'Prompt and reliable service for repairing, calibrating, and replacing components of your medical equipment. Our skilled engineers ensure your equipment is up and running quickly.'
        }, 
        { 
            icon: faHeartbeat, 
            name: 'Compliance Verify', 
            desc: 'Comprehensive documentation of our services, including equipment status, maintenance history, and compliance with AS3551 standards.'
        }
        ]
    },
    { 
        id: 2, 
        name: 'System Installation and Upgrades', 
        title: 'Boosting approvals in biomed sales', 
        description: 'At OHM Biomedical, we offer professional equipment installation and upgrades meeting AS3551 standards. Our experienced engineers ensure safe and efficient installation, minimizing downtime. We provide comprehensive project management, handling planning, scheduling, installation, and testing for a hassle-free experience.', 
        services: 
        [{ 
            icon: faSyringe, 
            name: 'Service C', 
            desc: 'Service C description' 
        }, 
        { 
            icon: faPills, 
            name: 'Service D', 
            desc: 'Service D description' 
        },
        { 
            icon: faPills, 
            name: 'Service D', 
            desc: 'Service D description' 
        },
        { 
            icon: faPills, 
            name: 'Service D', 
            desc: 'Service D description' 
        },
        { 
            icon: faPills, 
            name: 'Service D', 
            desc: 'Service D description' 
        },
        { 
            icon: faPills, 
            name: 'Service D', 
            desc: 'Service D description' 
        }
        ] 
    },
    { 
        id: 3, 
        name: 'TGA Recalls', 
        title: 'SLeading in healthcare equipment sales', 
        description: 'Description for Service 3', 
        services: 
        [{ 
            icon: faBandAid, 
            name: 'Service E', 
            desc: 'Service E description' 
        }, 
        { 
            icon: faVirus, 
            name: 'Service F', 
            desc: 'Service F description' 
        },
        { 
            icon: faBandAid, 
            name: 'Service E', 
            desc: 'Service E description' 
        }, 
        { 
            icon: faBandAid, 
            name: 'Service E', 
            desc: 'Service E description' 
        }, 
        { 
            icon: faBandAid, 
            name: 'Service E', 
            desc: 'Service E description' 
        }, 
        { 
            icon: faBandAid, 
            name: 'Service E', 
            desc: 'Service E description' 
        }, 
        ] 
    },
    // Add more tabs if needed
];

const Biomedicalservice = () => {
    const [selectedTab, setSelectedTab] = useState(tabData[0].id); // Default to the first tab

    const handleTabClick = (id) => {
        setSelectedTab(id);
    };

    const currentTab = tabData.find(tab => tab.id === selectedTab);

    return (
        <div>
            <div className='container relative pt-16 md:pt-0'>
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
                        Biomedical Service <br />
                    </h1>
                </div>
            </div>
            <div className="container mx-auto px-4 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Sidebar Tabs */}
                    <div className="md:col-span-1">
                        <div className="flex flex-col space-y-4">
                            {tabData.map(tab => (
                                <div
                                    key={tab.id}
                                    className={`p-4 cursor-pointer rounded-lg transition-colors duration-300 ${selectedTab === tab.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-blue-200'
                                        }`}
                                    onClick={() => handleTabClick(tab.id)}
                                >
                                    <h3 className="font-bold text-lg">{tab.name}</h3>
                                    <p className="text-sm mt-1">{tab.title}</p> {/* Added title below name */}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-3">
                        {currentTab && (
                            <div>
                                <h2 className="text-2xl font-bold mb-4">{currentTab.name}</h2>
                                <p className="text-gray-700 mb-6">{currentTab.description}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {currentTab.services.map((service, index) => (
                                        <div
                                            key={index}
                                            className="bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                                        >
                                            <div className="flex flex-col items-center mb-4">
                                                <FontAwesomeIcon icon={service.icon} className="text-blue-500 text-4xl mb-4" />
                                                <div className="text-center">
                                                    <h4 className="font-semibold text-lg text-gray-800 mb-2">{service.name}</h4>
                                                    <p className="text-gray-600">{service.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Biomedicalservice;
