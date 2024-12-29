import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Introduction Section */}
      <div className="about-section intro">
        <h1>About Us 🌟</h1>
        <p>
          We are a passionate team dedicated to creating innovative solutions that transform the way people experience technology. From cutting-edge products to customer-centric services, we aim to make a lasting impact on the world.
        </p>
      </div>

      {/* Mission Section */}
      <div className="about-section mission">
        <h2>Our Mission 🚀</h2>
        <p>
          Our mission is to build a more connected and sustainable world by offering products and services that inspire growth and creativity. We believe in the power of innovation to drive positive change.
        </p>
      </div>

      {/* Vision Section */}
      <div className="about-section vision">
        <h2>Our Vision 👀</h2>
        <p>
          We envision a future where technology empowers individuals to unlock their full potential, connecting people in meaningful ways across the globe.
        </p>
      </div>

      {/* Values Section */}
      <div className="about-section values">
        <h2>Our Values ❤️</h2>
        <p>
          We are guided by values that shape everything we do. These values drive us to create the best experiences for our customers, partners, and team:
        </p>
        <ul>
          <li>Integrity 🤝: We act with honesty and transparency.</li>
          <li>Innovation 💡: We strive to innovate and push the boundaries of what's possible.</li>
          <li>Customer-Centric 🧑‍🤝‍🧑: We prioritize our customers in every decision we make.</li>
          <li>Excellence 🏆: We pursue perfection and ensure high standards in every detail.</li>
        </ul>
      </div>

      {/* Contact Information Section */}
      <div className="about-section contact">
        <h2>Get In Touch 📩</h2>
        <p>
          Have any questions or want to learn more? We'd love to hear from you! Feel free to reach out to us anytime.
        </p>
        <p>Email us at: <a href="mailto:contact@company.com">contact@company.com</a></p>
      </div>
    </div>
  );
};

export default About;
