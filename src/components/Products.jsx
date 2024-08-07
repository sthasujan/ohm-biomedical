import React from 'react'
import img1 from "../assets/products/Vyaireventilators/blog2.png";
import img2 from "../assets/products/Carefusionbirdblenders/flow_meter.png";
import img3 from "../assets/services/ohm.webp";

const Products = () => {
  const services = [
    { 
      id: 1, 
      title: "Vyaire Ventilator", 
      description: "Comprehensive Sales & Support", 
      description1: "Expert Maintenance Services", 
      description2: "Training and Education", 
      image: img1 
    },
    { 
      id: 2, 
      title: "CareFusion Bird Blender", 
      description: "New Blender Sales", 
      description1: "Blender Replacement", 
      description2: "2-Year PM Overhaul", 
      image: img2 
    },
    { 
      id: 3, 
      title: "Biomedical Service", 
      description: "Preventative Maintenance & Repair", 
      description1: "Compliance with AS3551 Standards", 
      description2: "Rapid Response Guarantee", 
      image: img3 
    },
  ]

  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
      <div className='mt-15 md:w-1/2 mx-auto text-center'>
        <h2 className='text-xl text-black font-serif mb-3'>
          OHM Biomedical is the sole authorized distributor for Vyaire products in Australia and New Zealand, offering comprehensive sales and expert servicing for Vyaire ventilators and CareFusion Bird blenders. In addition to these specific products, we also provide a broad range of biomedical services, including preventive maintenance and repairs, catering to some of the top healthcare companies in the industry.
        </h2>
      </div>
      <div className='text-center my-8'>
        {/* cards */}
        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 md:w-11/12 mx-auto gap-12'>
          {
            services.map(service => (
              <div key={service.id}>
                <div>
                  <div className='md-4 h-60 w-64 mx-auto rounded-tl-3xl rounded-br-3xl'>
                    <img src={service.image} alt="" className='-ml-5' />
                  </div>
                  <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                  <ul className='text-sm text-neutralGrey list-disc list-inside px-4'>
                    <li>{service.description}</li>
                    <li>{service.description1}</li>
                    <li>{service.description2}</li>
                  </ul>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Products
