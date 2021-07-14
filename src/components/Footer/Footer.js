import React from 'react';
import './Footer.css';


const date = new Date();
const Footer = () => (
  <div className="Footer">
    <div className="col-12 d-flex justify-content-center pt-2 pb-3">
      <a href="#home" className="nav-links"> Home </a>
      <a href="#about" className="nav-links"> About </a>
      <a href="#projects" className="nav-links"> Projects </a>
      <a href="#links" className="nav-links"> Links </a>
    </div>
    <div className="col-12 d-flex justify-content-center pt-2 pb-3">
      <a href="https://github.com/vemuladevendran" target="_blank" rel="noreferrer"><i className="footer-links bi bi-github h4"></i></a>
      <a href="https://www.facebook.com/devendranvemula" target="_blank" rel="noreferrer"><i className="footer-links bi bi-facebook h4"></i></a>
      <a href="https://www.linkedin.com/in/devendran-vemula/" target="_blank" rel="noreferrer"><i className="footer-links bi bi-linkedin h4"></i></a>
    </div>

    <p className="col-12 d-flex justify-content-center text-white pt-2 pb-3">
      <span className="mx-2">&copy; {date.getFullYear()}</span> by Devendran
    </p>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
