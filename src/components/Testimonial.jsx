import React from 'react';
import productBgImg from "../assets/products.webp";
import img1 from "../assets/Testimonials/Carol.jpg";
import img2 from "../assets/Testimonials/Lee.jpg";
import img3 from "../assets/Testimonials/Jordan.jpg";
import img4 from "../assets/Testimonials/Fran.jpg";

// Testimonial data constant
const testimonials = [
  {
    name: "Carol",
    company: "EVP Sales & Operations, Beacon International",
    title: "Project management",
    subtitle: "Imaging Systems re-sales",
    description: "I have had the pleasure of engaging MELmed Electrical to ramp down and deinstall several MRI systems I have had come out of Australia.  The project management team pays attention to the details, tracks the project timelines, MELmed knows and works with all the key players, OEM’s, Riggers, Logistics, which creates a seamless transition.  David and his team are very knowledgeable in multiple diagnostic imaging modalities.  David is a true professional that oversees a job from system inspection to completion of the deinstallation.  I look forward to working with MELmed on all future projects.",
    image: img1,
  },
  {
    name: "Samuel Green",
    company: "Green Solutions",
    title: "Medical system removals",
    subtitle: "MRI de-installation",
    description: "I have worked with MELmed Electrical on many complex MR projects both in Australia and New Zealand.  MELmed is a trusted partner and will always get the job done.  We worked together on a Philips 3T MR removal in early 2020 in New Zealand and he went above and beyond to make sure the work was completed correctly and on time.  I would recommend MELmed Electrical for any medical imaging equipment projects or electrical projects.  You will love working with MELmed electrical!",
    image: img2,
  },
  {
    name: "Lee",
    company: "General Manager, High Tech Otees Limited | Premier Healthcare",
    title: "Imaging Systems Installations",
    subtitle: "Cath Lab - Papua New Guinea",
    description: "Premier Healthcare reached out to MELmed Electrical through some trusted industry contacts due to requiring a reputable organisation to assist in the installation of a GE Cardiac Cath Lab. This system had been decommissioned from a Victorian Hospital and kindly donated to Port Moresby General Hospital in Papua New Guinea.",
    image: img3,
  },
  {
    name: "Fran",
    company: "Mobile CT Project Lead | The Royal Melbourne Hospital",
    title: "Contracting & Servicing",
    subtitle: "Mobile CT, Stroke Ambulance",
    description: "Premier Healthcare reached out to MELmed Electrical through some trusted industry contacts due to requiring a reputable organisation to assist in the installation of a GE Cardiac Cath Lab. This system had been decommissioned from a Victorian Hospital and kindly donated to Port Moresby General Hospital in Papua New Guinea.",
    image: img4,
  }
];

const Testimonial = () => {
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
            Testimonials <br />
          </h1>
        </div>
      </div>
      <div className="px-4 py-8 md:px-16 md:py-16">
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div
              className={`flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              <div className="w-full md:w-1/2 p-4 flex justify-center">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}`}
                  className="w-3/4 rounded-md shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 p-4">
                <h3 className="text-2xl font-semibold">{testimonial.title}</h3>
                <h4 className="text-lg font-light text-gray-500">
                  {testimonial.subtitle}
                </h4>
                <p className="mt-4 text-gray-600">{testimonial.description}</p>
                <p className="mt-6 font-medium">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.company}</p>
              </div>
            </div>
            {index < testimonials.length - 1 && (
              <hr className="border-t border-gray-300 my-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
