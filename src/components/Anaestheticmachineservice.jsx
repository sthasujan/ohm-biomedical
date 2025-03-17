import React from "react";
import productBgImg from "../assets/products.webp";
import { motion } from "framer-motion";

const Anaestheticmachineservice = () => {
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
                        Anaesthetic Machines Service <br />
                    </h1>
                </div>
            </div>
            <div className="bg-gray-100 text-gray-900">
                {/* Hero Section */}
                <section className="relative text-black py-20 text-center bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.h1
                            className="text-3xl font-bold mb-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Cost-Effective Servicing for <span className="text-red-700">GE & Mindray</span> Anaesthetic Machines
                        </motion.h1>
                        <motion.p
                            className="text-center text-lg font-semibold text-white-600 mb-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Vendor-Trained Engineers | OEM-Quality | Lower Cost
                        </motion.p>
                        <motion.p
                            className="text-sm mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            At OHM Biomedical, we specialize in servicing GE and Mindray anaesthetic machines with vendor-trained engineers, ensuring your equipment operates at peak performance while reducing maintenance costs.
                        </motion.p>
                        <motion.button
                            className="bg-white text-blue-900 font-bold py-3 px-6 rounded shadow-md hover:bg-gray-200"
                            whileHover={{ scale: 1.05 }}
                        >
                            Get a Quote
                        </motion.button>
                        <motion.p 
                            className="text-white-600 font-medium mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            💰 Why pay more for the same service? Get OEM-level maintenance at a fraction of the cost with our expert team.
                        </motion.p>
                    </div>
                </section>

                {/* Service Benefits Section */}
                <section className="py-16 px-6">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-2">Why Choose OHM Biomedical?</h2>
                        <p className="text-lg md:text-xl text-ohm-text mt-4 max-w-3xl mx-auto reveal mb-6" style={{ transitionDelay: '0.1s' }}>
                            We deliver exceptional service with significant cost savings
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "Vendor-Trained Engineers",
                                "Same Quality, Lower Cost",
                                "Comprehensive Maintenance & Repairs",
                                "Fast Turnaround & Flexible Scheduling",
                                "Genuine & Compatible Parts",
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 bg-white rounded-lg shadow-md"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.08 }}
                                >
                                    {item}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Equipment Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-6">We Service All Major GE & Mindray Anaesthetic Machines</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: "GE Models", desc: "✔Aespire™ & Aisys™ models | ✔Avance™ series | ✔Carestation™ series | ✔Other GE-compatible anaesthesia equipment" },
                                { title: "Mindray Models", desc: "✔Full range of Mindray anaesthetic machines" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 bg-gray-100 rounded-lg shadow-md text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.08 }}
                                >
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <p className="text-gray-700 mt-2">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Advert Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-6">Maximize Performance & Reduce Costs</h2>
                        <div className="grid md:grid-cols-1">
                            {[
                                { title: "", desc: "Hospitals and clinics trust OHM Biomedical for cost-effective servicing without compromising quality. Our team ensures full compliance with AS3551:2012 and vendor preventive maintenance standards, helping you maintain equipment reliability while keeping service costs in check." },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 bg-gray-100 rounded-lg shadow-md text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.08 }}
                                >
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <p className="text-gray-700 mt-2">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Anaestheticmachineservice;

// import React, { useEffect } from "react";
// import { ArrowDown, CheckCircle, Clock, Wrench, Shield, DollarSign, CheckCircle2, Phone } from "lucide-react";
// // import { Button } from "@/components/ui/button";

// const Anaestheticmachineservice = () => {
//   useEffect(() => {
//     // Intersection Observer for reveal animations
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("active");
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     // Observe all elements with the reveal class
//     const revealElements = document.querySelectorAll(".reveal");
//     revealElements.forEach((el) => observer.observe(el));

//     return () => {
//       revealElements.forEach((el) => observer.unobserve(el));
//     };
//   }, []);

//   const benefits = [
//     {
//       icon: <CheckCircle className="w-6 h-6 text-ohm-blue" />,
//       title: "Vendor-Trained Engineers",
//       description: "Our team has experience and vendor training for GE and Mindray anaesthesia, ensuring expert servicing that meets manufacturer standards and compliance."
//     },
//     {
//       icon: <DollarSign className="w-6 h-6 text-ohm-blue" />,
//       title: "Same Quality, Lower Cost",
//       description: "Get the same high-quality service as OEM providers at significantly lower hourly rates."
//     },
//     {
//       icon: <Wrench className="w-6 h-6 text-ohm-blue" />,
//       title: "Comprehensive Maintenance & Repairs",
//       description: "Whether it's routine servicing or complex repairs, we keep your machines performing optimally."
//     },
//     {
//       icon: <Clock className="w-6 h-6 text-ohm-blue" />,
//       title: "Fast Turnaround & Flexible Scheduling",
//       description: "We minimize downtime with efficient, on-time service, ensuring your anaesthetic machines are ready when you need them."
//     },
//     {
//       icon: <Shield className="w-6 h-6 text-ohm-blue" />,
//       title: "Genuine & Compatible Parts",
//       description: "We use high-quality parts sourced directly from GE and Mindray, ensuring reliability and extended equipment lifespan."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-ohm-lightGray">
//         <div className="container mx-auto px-4 py-12 md:py-20">
//           <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
//             <div className="md:col-span-7 space-y-6">
//               <div className="inline-block reveal">
//                 <span className="bg-ohm-lightBlue text-ohm-blue px-4 py-1 rounded-full text-sm font-medium">
//                   Medical Equipment Service Experts
//                 </span>
//               </div>
              
//               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ohm-dark reveal" style={{transitionDelay: '0.2s'}}>
//                 Cost-Effective Servicing for <span className="text-ohm-blue">GE & Mindray</span> Anaesthetic Machines
//               </h1>
              
//               <h2 className="text-lg md:text-xl text-ohm-text reveal" style={{transitionDelay: '0.3s'}}>
//                 Vendor-Trained Engineers | OEM-Quality | Lower Cost
//               </h2>
              
//               <p className="text-ohm-text mt-4 max-w-2xl text-base md:text-lg reveal" style={{transitionDelay: '0.4s'}}>
//                 At OHM Biomedical, we specialize in servicing GE and Mindray anaesthetic machines with 
//                 vendor-trained engineers, ensuring your equipment operates at peak performance while reducing maintenance costs.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4 mt-8 reveal" style={{transitionDelay: '0.5s'}}>
//                 <button 
//                   className="bg-ohm-blue hover:bg-ohm-blue/90 text-white px-8 py-6 rounded-md shadow-md transition-all duration-300 transform hover:-translate-y-1"
//                   size="lg"
//                 >
//                   Get a Free Consultation
//                 </button>
//                 <button 
//                   variant="outline" 
//                   className="border-ohm-blue text-ohm-blue hover:bg-ohm-lightBlue px-8 py-6 rounded-md transition-all duration-300 transform hover:-translate-y-1"
//                   size="lg"
//                 >
//                   View Our Services
//                 </button>
//               </div>
              
//               <p className="text-ohm-text font-medium mt-6 reveal" style={{transitionDelay: '0.6s'}}>
//                 💰 Why pay more for the same service? Get OEM-level maintenance at a fraction of the cost with our expert team.
//               </p>
//             </div>
            
//             <div className="md:col-span-5 reveal" style={{transitionDelay: '0.7s'}}>
//               <div className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden">
//                 <div className="absolute -right-8 -top-8 w-24 h-24 bg-ohm-lightBlue rounded-full opacity-50"></div>
//                 <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-ohm-blue rounded-full opacity-20"></div>
                
//                 <div className="relative">
//                   <img 
//                     src="https://images.unsplash.com/photo-1579684288361-5c1a2957cc38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
//                     alt="Anaesthetic Machine"
//                     className="w-full h-auto rounded-lg object-cover aspect-video shadow"
//                   />
//                   <div className="mt-6">
//                     <h3 className="font-semibold text-xl text-ohm-dark">Expert Service. Lower Cost.</h3>
//                     <p className="text-ohm-text mt-2">
//                       Our vendor-trained engineers deliver OEM-level service at significantly reduced rates.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex justify-center mt-12 md:mt-24 animate-bounce">
//             <a 
//               href="#why-choose" 
//               className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
//               aria-label="Scroll to why choose us section"
//             >
//               <ArrowDown className="h-5 w-5 text-ohm-blue" />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section 
//         id="why-choose" 
//         className="py-16 md:py-20 bg-white"
//       >
//         <div className="container mx-auto px-4 md:px-8">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ohm-dark mb-4 reveal">Why Choose OHM Biomedical</h2>
//             <p className="text-lg md:text-xl text-ohm-text max-w-3xl mx-auto reveal" style={{transitionDelay: '0.1s'}}>
//               We deliver exceptional service with significant cost savings
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             {benefits.map((benefit, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 reveal"
//                 style={{transitionDelay: `${0.1 * (index + 1)}s`}}
//               >
//                 <div className="w-12 h-12 rounded-full bg-ohm-lightBlue flex items-center justify-center mb-4">
//                   {benefit.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-ohm-dark">{benefit.title}</h3>
//                 <p className="text-ohm-text">{benefit.description}</p>
//               </div>
//             ))}
//           </div>
          
//           <div className="mt-16 p-6 md:p-8 bg-ohm-lightBlue rounded-xl shadow-sm reveal" style={{transitionDelay: '0.6s'}}>
//             <div className="flex flex-col md:flex-row items-center justify-between">
//               <div className="mb-6 md:mb-0 md:mr-8">
//                 <h3 className="text-2xl font-semibold text-ohm-dark">Maximize Performance & Reduce Costs</h3>
//                 <p className="mt-2 text-ohm-text max-w-2xl">
//                   Hospitals and clinics trust OHM Biomedical for cost-effective servicing without compromising quality.
//                   Our team ensures full compliance with AS3551:2012 and vendor preventive maintenance standards,
//                   helping you maintain equipment reliability while keeping service costs in check.
//                 </p>
//               </div>
//               <div className="flex-shrink-0">
//                 <button className="bg-ohm-blue hover:bg-ohm-blue/90 text-white font-medium py-3 px-6 rounded-md shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
//                   Contact Us
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Equipment Section */}
//       <section id="equipment" className="py-16 md:py-20 bg-ohm-gray">
//         <div className="container mx-auto px-4 md:px-8">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ohm-dark mb-4 reveal">We Service All Major GE & Mindray Anaesthetic Machines</h2>
//             <p className="text-lg md:text-xl text-ohm-text max-w-3xl mx-auto reveal" style={{transitionDelay: '0.1s'}}>
//               Comprehensive servicing for a wide range of models
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
//             <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 reveal" style={{transitionDelay: '0.2s'}}>
//               <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-ohm-blue mb-6">
//                 <span className="text-sm font-medium">GE Models</span>
//               </div>
              
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <CheckCircle2 className="h-5 w-5 text-ohm-blue flex-shrink-0 mt-0.5" />
//                   <span className="ml-3 text-ohm-text">Aespire™ & Aisys™ models</span>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle2 className="h-5 w-5 text-ohm-blue flex-shrink-0 mt-0.5" />
//                   <span className="ml-3 text-ohm-text">Avance™ series</span>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle2 className="h-5 w-5 text-ohm-blue flex-shrink-0 mt-0.5" />
//                   <span className="ml-3 text-ohm-text">Carestation™ series</span>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle2 className="h-5 w-5 text-ohm-blue flex-shrink-0 mt-0.5" />
//                   <span className="ml-3 text-ohm-text">Other GE-compatible anaesthesia equipment</span>
//                 </div>
//               </div>
              
//               <div className="mt-8">
//                 <img 
//                   src="https://images.unsplash.com/photo-1581595219315-a187dd71c8f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
//                   alt="GE Anaesthetic Machine"
//                   className="w-full h-auto rounded-lg object-cover aspect-video shadow"
//                 />
//               </div>
//             </div>
            
//             <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 reveal" style={{transitionDelay: '0.3s'}}>
//               <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-ohm-blue mb-6">
//                 <span className="text-sm font-medium">Mindray Models</span>
//               </div>
              
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <CheckCircle2 className="h-5 w-5 text-ohm-blue flex-shrink-0 mt-0.5" />
//                   <span className="ml-3 text-ohm-text">Full range of Mindray anaesthetic machines</span>
//                 </div>
//               </div>
              
//               <div className="mt-8">
//                 <img 
//                   src="https://images.unsplash.com/photo-1647350345368-4ec873c14e20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
//                   alt="Mindray Anaesthetic Machine"
//                   className="w-full h-auto rounded-lg object-cover aspect-video shadow"
//                 />
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-16 bg-white p-6 md:p-8 rounded-xl shadow-md text-center reveal" style={{transitionDelay: '0.4s'}}>
//             <h3 className="text-xl md:text-2xl font-semibold mb-4 text-ohm-dark">Keep your anaesthetic machines running at peak efficiency—<br className="hidden md:inline" />without the OEM price tag! 🚑🔧</h3>
//             <button className="mt-4 bg-ohm-blue hover:bg-ohm-blue/90 text-white font-medium py-3 px-6 rounded-md shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
//               Schedule Service Today
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Anaestheticmachineservice;