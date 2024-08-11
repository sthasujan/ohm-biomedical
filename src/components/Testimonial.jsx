import React from 'react';
import productBgImg from "../assets/products.webp";

// Testimonial data constant
const testimonials = [
  {
    name: "John Doe",
    company: "ABC Corp",
    description: "This is a wonderful product! It has significantly improved our workflow.This is a wonderful product! It has significantly improved our workflow.This is a wonderful product! It has significantly improved our workflow.This is a wonderful product! It has significantly improved our workflow.This is a wonderful product! It has significantly improved our workflow.",
    image: "path-to-image-1.jpg", // Replace with the actual image path
  },
  {
    name: "Jane Smith",
    company: "XYZ Inc.",
    description: "Excellent customer service and an outstanding product overall.Excellent customer service and an outstanding product overall.Excellent customer service and an outstanding product overall.Excellent customer service and an outstanding product overall.Excellent customer service and an outstanding product overall.",
    image: "path-to-image-2.jpg", // Replace with the actual image path
  },
  {
    name: "Samuel Green",
    company: "Green Solutions",
    description: "The product exceeded our expectations. Highly recommend it!The product exceeded our expectations. Highly recommend it!The product exceeded our expectations. Highly recommend it!The product exceeded our expectations. Highly recommend it!The product exceeded our expectations. Highly recommend it!",
    image: "path-to-image-3.jpg", // Replace with the actual image path
  },
  {
    name: "Emily White",
    company: "Tech Innovators",
    description: "A game-changer in our industry. We couldn't be happier with the results.A game-changer in our industry. We couldn't be happier with the results.A game-changer in our industry. We couldn't be happier with the results.A game-changer in our industry. We couldn't be happier with the results.A game-changer in our industry. We couldn't be happier with the results.",
    image: "path-to-image-4.jpg", // Replace with the actual image path
  },
];


const Testimonial = () => {
  return (
    <div>
      <div className='w-24 h-24'>
        <img src={productBgImg} alt="" />
      </div>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <div className="image-wrapper">
              <img src={testimonial.image} alt={`${testimonial.name}`} />
            </div>
            <div className="testimonial-text">
              <p className="description">{testimonial.description}</p>
              <p className="name">{testimonial.name}</p>
              <p className="company">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial