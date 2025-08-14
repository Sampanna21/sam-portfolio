import React from 'react';

const Contact = () => (
  <footer className="footer">
    <div className="footer-content">
      <h2>Contact</h2>
      <p>
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" 
          alt="Email" 
          style={{ width: '20px', verticalAlign: 'middle', marginRight: '8px' }} 
        />
        Email: sampanna.mishra11@gmail.com
      </p>
      <p>
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
          alt="LinkedIn" 
          style={{ width: '20px', verticalAlign: 'middle', marginRight: '8px' }} 
        />
        LinkedIn: <a href="https://www.linkedin.com/in/sampanna-mishra-77517b36a/" target="_blank" rel="noopener noreferrer">My Profile</a>
      </p>
      <p>
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
          alt="GitHub" 
          style={{ width: '20px', verticalAlign: 'middle', marginRight: '8px', filter: 'invert(1)' }} 
        />
        GitHub: <a href="https://github.com/Sampanna21/" target="_blank" rel="noopener noreferrer">My GitHub</a>
      </p>
      <p>© {new Date().getFullYear()} Sam Portfolio</p>
    </div>
  </footer>
);

export default Contact;