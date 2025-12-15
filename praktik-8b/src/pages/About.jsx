// File: src/pages/About.jsx

import React from 'react';

const About = () => {
  return (
    <div className="page about-page">
      <h1>📖 About Us</h1>
      <div className="about-content">
        <section>
          <h2>Our Story</h2>
          <p>
            Kami adalah perusahaan yang berdedikasi untuk memberikan solusi terbaik menggunakan teknologi modern.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            Menyediakan pengalaman pengguna yang luar biasa melalui aplikasi web yang inovatif.
          </p>
        </section>

        <section>
          <h2>Technology Stack</h2>
          <ul>
            <li>React JS</li>
            <li>React Router</li>
            <li>Modern CSS</li>
            <li>Responsive Design</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;