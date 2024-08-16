import React, { useState } from 'react';
import productBgImg from "../assets/products.webp";
import pic1 from "../assets/ConsumableItems/pic1.png";
import pic2 from "../assets/ConsumableItems/pic2.png";
import pic3 from "../assets/ConsumableItems/pic3.png";
import pic4 from "../assets/ConsumableItems/pic4.png";
import pic5 from "../assets/ConsumableItems/pic5.png";
import pic6 from "../assets/ConsumableItems/pic6.png";
import pic7 from "../assets/ConsumableItems/pic7.png";

const salesItems = [
    {
        partNo: 'Part Number: 777000S',
        title: 'INFANT FLOW LP NASAL PRONGS, SMALL',
        sizes: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
        image: pic1,
    },
    {
        partNo: 'Part Number: 777040S',
        title: 'INFANT FLOW LP HEADGEAR, SMALL',
        sizes: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
        image: pic2,
    },
    {
        partNo: 'Part Number: 777002S',
        title: 'Infant Flow LP nasal mask, single Patient use small',
        sizes: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
        image: pic3,
    },
    {
        partNo: 'Part Number: 030.811.020',
        title: 'Internal battery bellavista 1000',
        sizes: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
        image: pic4,
    },
    {
        partNo: 'Part Number: 770150',
        title: 'SCAVENGER NITRIC OXIDE 3100A/B',
        sizes: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
        image: pic5,
    },
    {
        partNo: 'Part Number: 766896',
        title: 'CAP/DIAPHRAGM SET, BOX OF 4, 3100A/B',
        sizes: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
        image: pic6,
    },
    {
        partNo: 'Part Number: 301.328.020',
        title: 'FLOW, ADVANCED, PAEDIATRIC/ADULT, 200 S PROXIMAL, FOR BELLAVISTA 1000e VENTILATOR, SINGLE PATIENT USE',
        sizes: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
        image: pic7 ,
    },
    {
        partNo: '12345',
        title: 'High-Quality Consumable Item',
        sizes: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
        image: 'path/to/image1.jpg',
    },
    // Add more items here
];

const Consumablessales = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handlePopupOpen = (item) => {
        setSelectedItem(item);
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
        setSelectedItem(null);
    };

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
                        Consumables Sales <br />
                    </h1>
                </div>
            </div>
            <div className="p-4 lg:mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {salesItems.slice(0, 12).map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                            onClick={() => handlePopupOpen(item)}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-42 object-cover"
                            />
                            <div className="p-4">
                                <p className="font-bold text-gray-700">{item.partNo}</p>
                                <p className="text-gray-500 truncate">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {showPopup && selectedItem && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg p-6 relative max-w-lg w-auto mx-4 lg:mx-0">
                            <button
                                className="absolute top-4 right-4 bg-gray-700 text-white rounded-full p-2"
                                onClick={handlePopupClose}
                            >
                                X
                            </button>
                            <img
                                src={selectedItem.image}
                                alt={selectedItem.title}
                                className="w-full h-auto max-h-60 object-cover mb-4"
                            />
                            <p className="font-bold text-gray-700 text-center">{selectedItem.partNo}</p>
                            <p className="text-gray-800 text-center mb-4">{selectedItem.title}</p>
                            <p className="text-gray-600 text-center mb-2">Available in:</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {selectedItem.sizes.map((size, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm"
                                    >
                                        {size}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
};

export default Consumablessales;
