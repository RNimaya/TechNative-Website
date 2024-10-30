import React from "react";
import "../components/Testimonials.css";
import Logo from "../assets/logo.jpg";



const testimonialsData = [
  {
    name: "John Doe",
    feedback: "This company is amazing! They exceeded all our expectations.",
    logo: "Logo",
  },
  {
    name: "Jane Smith",
    feedback: "Working with them was an absolute pleasure. Highly recommended!",
    logo: "Logo",
  },
  {
    name: "Michael Johnson",
    feedback: "A reliable partner for all our projects. Fantastic results every time!",
    logo: "Logo",
  },
];

const clientLogos = [
  "Logo",
  "Logo",
  "Logo",
  "Logo",
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>

      {/* Carousel */}
      <div className="carousel">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={Logo} alt={testimonial.name} className="client-logo" />
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <p className="client-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>

      {/* Client Logos Strip */}
      <div className="client-logos">
        {clientLogos.map((logo, index) => (
          <img src={logo} alt={`Client ${index + 1}`} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
