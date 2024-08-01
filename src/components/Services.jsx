import React from 'react'

const Services = () => {
    const services = [
        {id: 1, title: "Bird Blender Service", description: "Need to add here!!!!", image:"/src/assets/services/blender.webp"},
        {id: 1, title: "Biomedical Service", description: "Need to add here!!!!", image:"/src/assets/services/ohm.webp"},
    ]
    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id="service">
            <div className='text-center my-8'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
                <p className='text-neutraGrey'>We have been working with some Fortune 500+ clients</p>

                {/* comapany logo*/}

                <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                    <img src="/src/assets/partners/alpha_click.jpeg" alt="" className='company-logo' />
                    <img src="/src/assets/partners/bbraun.svg" alt="" className='company-logo' />
                    <img src="/src/assets/partners/heal-with-laser-logo.png" alt="" className='company-logo' />
                    <img src="/src/assets/partners/medilaze.png" alt="" className='company-logo' />
                    <img src="/src/assets/partners/mindray.png" alt="" className='company-logo' />
                    <img src="/src/assets/partners/seimens.svg" alt="" className='company-logo' />
                </div>

                {/* services card */}

                <div className='mt-20 md:w-1/2 mx-auto text-center'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>We Provide Best In Class Services</h2>
                    <p className='text-neutraGrey'>Product Service</p>
                </div>

                {/* cards */}
                <div className='mt-14 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                    {
                        services.map(service => <div key={service.id}>
                            <div>
                                <div className='bg-[#E8F5E9] md-4 h-60 w-64 mx-auto rounded-tl-3xl
                                rounded-br-3xl'><img src={service.image} alt="" className='-ml-5' /></div>
                                <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                                <p className='text-sm text-neutralGrey'>{service.description}</p>

                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Services