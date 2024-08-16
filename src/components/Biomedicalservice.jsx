import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faHeartbeat, faSyringe, faPills, faBandAid, faVirus, faShieldAlt, faFlask, faBookOpen, faFileContract, 
    faHeadset, faLaptopCode, faVials, faFileAlt, faBolt, faChartLine, faChartBar, faTools, faCogs, faDollarSign, faFileSignature,
    faUserMd, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
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
            icon: faShieldAlt, 
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
            name: 'Pre-Installation Check: Site Survey, Planning, and IT Requirements', 
            desc: '' 
        }, 
        { 
            icon: faPills, 
            name: 'Equipment Installation and Setup', 
            desc: '' 
        },
        { 
            icon: faFlask, 
            name: 'Onsite Electrical Safety Testing and Calibration', 
            desc: '' 
        },
        { 
            icon: faBookOpen, 
            name: 'Training on Proper Usage and Maintenance', 
            desc: '' 
        },
        { 
            icon: faFileContract, 
            name: 'Documentation and Compliance Reporting: ARTG Number Verification', 
            desc: '' 
        },
        { 
            icon: faHeadset, 
            name: 'Post-Installation Support and Maintenance Services', 
            desc: '' 
        }
        ] 
    },
    { 
        id: 3, 
        name: 'TGA Recalls', 
        title: 'SLeading in healthcare equipment sales', 
        description: 'Facing TGA recalls is stressful and poses risks to your organization`s reputation. At OHM Biomedical, we prioritize timely and effective TGA Recall remediation. Our skilled Biomedical Engineers upgrade your software/hardware, conduct user acceptance testing (UAT), ensuring compliance with TGA regulations. We guarantee minimal equipment downtime, offering comprehensive project management from start to finish. Trust OHM Biomedical for TGA standards compliance, ensuring the highest level of patient care.', 
        services: 
        [{ 
            icon: faBandAid, 
            name: 'Identification of affected equipment and documentation of the recall notice.', 
            desc: '' 
        }, 
        { 
            icon: faVirus, 
            name: 'Development and implementation of remediation plans in line with TGA regulations and standards.', 
            desc: '' 
        },
        { 
            icon: faBandAid, 
            name: 'Coordinating with equipment manufacturers and the end users to ensure timely availability of necessary parts and upgrades.', 
            desc: '' 
        }, 
        { 
            icon: faLaptopCode, 
            name: 'Installation of software/hardware upgrades and performing necessary UAT.', 
            desc: '' 
        }, 
        { 
            icon: faVials, 
            name: 'Comprehensive testing and validation of upgraded equipment to ensure compliance and safety.', 
            desc: '' 
        }, 
        { 
            icon: faFileAlt, 
            name: 'Documentation of the entire process for TGA compliance purposes.', 
            desc: '' 
        }, 
        ] 
    },
    { 
        id: 4, 
        name: 'AS3551 Testing Electrical Safety and Performance Verifications', 
        title: 'Ensuring timely payments and support', 
        description: 'OHM Biomedical is committed to ensuring that your medical equipment meets the highest safety standards. We offer AS3551 testing services to verify the electrical safety and performance of your medical devices. Our team of experienced Engineers are trained and certified to perform these tests in accordance with Australian and New Zealand standards.', 
        services: 
        [{ 
            icon: faBolt, 
            name: 'Electrical safety testing', 
            desc: 'We perform a range of tests to ensure that your equipment is electrically safe for use. This includes insulation resistance testing, earth continuity testing, and leakage current testing.' 
        }, 
        { 
            icon: faChartLine, 
            name: 'Performance verification', 
            desc: 'We also perform tests to verify the performance of your equipment. This includes accuracy and calibration testing, as well as functionality testing to ensure that your equipment is operating as it should.' 
        },
        { 
            icon: faChartBar, 
            name: 'Comprehensive reporting', 
            desc: 'We provide you with a detailed report outlining the results of our testing, including any recommended actions to address any issues we identify.' 
        }, 
        ] 
    },
    { 
        id: 5, 
        name: 'Virtual Workshop', 
        title: 'Virtual Workshop for Biomedical Engineers', 
        description: 'Looking to bring innovative Biomedical equipment to Australia, but don`t want to set up your own workshop? Look no further than OHM Biomedical`s WAAS (Workshop as a Service) offering. Our Virtual Workshop is here to help, providing instant access to trained engineers and technicians who can maintain a wide range of medical devices. With our expert Biomedical consultants guiding you through the repair process, you can rest assured that your equipment is in good hands. Our Virtual Workshop offers a range of services to help you stay focused on bringing new and innovative equipment to Australia:', 
        services: 
        [{ 
            icon: faTools, 
            name: 'Workshop Repair and Maintenance for Your Biomedical Equipment', 
            desc: '' 
        }, 
        { 
            icon: faCogs, 
            name: 'Customized Maintenance and Service Plans to Fit Customer Needs', 
            desc: '' 
        },
        { 
            icon: faDollarSign, 
            name: 'Cost-Effective Solutions to Reduce Operational Expenses', 
            desc: '' 
        }, 
        { 
            icon: faFileSignature,
            name: 'Develop Maintenance Service Agreements for Your Equipment', 
            desc: '' 
        }, 
        { 
            icon: faUserMd, 
            name: 'Expert Biomedical Consultants for Service Strategy and Lifecycle Management', 
            desc: '' 
        }, 
        { 
            icon: faPhoneAlt, 
            name: 'Remote Diagnostics and Troubleshooting Support', 
            desc: '' 
        }, 
        ] 
    },
    { 
        id: 6, 
        name: 'Test and Tag', 
        title: 'Test and Tag Services for Biomedical Engineers', 
        description: 'Our team of highly skilled technicians can provide comprehensive test and tag services to ensure your medical equipment is compliant with AS/NZS 3760 regulations. Our services include electrical safety testing, visual inspections, and tagging of all equipment with clear identification labels to indicate compliance. We use state-of-the-art testing equipment to ensure accurate and efficient testing and provide detailed reports and recommendations for any necessary repairs or replacements. Our team can work around your schedule to minimize downtime and ensure minimal disruption to your operations.', 
        services: 
        [
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
                                    className={`p-4 cursor-pointer rounded-lg transition-colors duration-300 ${selectedTab === tab.id ? 'bg-blue-950 text-white' : 'bg-gray-100 text-gray-700 hover:bg-blue-200'
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
                                                <FontAwesomeIcon icon={service.icon} className="text-blue-950 text-4xl mb-4" />
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
