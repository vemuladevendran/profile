import React from 'react';
import './Header.css';

const Header = () => (
  <div className="Header" id="home">
    <section className="container-fluid">
      <div className="row header py-5">
        <div className="col-9 col-md-6">
          <h1 className="text-end text-white my-name">DEVENDRAN</h1>
        </div>
        <div className="col-6 d-none d-md-block">
          <h3 className="text-center text-white"> Developer</h3>
        </div>
      </div>
      <div className="col-12 d-flex justify-content-center pt-2 pb-3">
        <a href="#home" className="nav-links"> Home </a>
        <a href="#about" className="nav-links"> About </a>
        <a href="#projects" className="nav-links"> Projects </a>
        <a href="#links" className="nav-links"> Links </a>
      </div>
    </section>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
