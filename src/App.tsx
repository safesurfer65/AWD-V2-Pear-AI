import React from 'react';
import { LampDemo } from './components/ui/lamp';
import ContactForm from './components/ContactForm';

export default function App() {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <img src="/images/logo3.jpg" alt="Aberdeen Web Design" className="logo-img" />
          </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section id="home" className="hero">
        <LampDemo />
      </section>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <i className="fas fa-laptop-code"></i>
            <h3>Web Design</h3>
            <p>Custom-designed websites that capture your brand's essence and engage your audience.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-mobile-alt"></i>
            <h3>Responsive Design</h3>
            <p>Websites that look and function perfectly on all devices and screen sizes.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-search"></i>
            <h3>SEO Optimization</h3>
            <p>Enhanced visibility in search engines to reach more potential customers.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-paint-brush"></i>
            <h3>UI/UX Design</h3>
            <p>Intuitive user interfaces that provide exceptional user experiences.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>St Duthac Crescent, Banchory, Aberdeenshire</p>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p>markpurmal@gmail.com</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <p>+44 07719 975799</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}