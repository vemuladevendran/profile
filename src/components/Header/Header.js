import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = () => (
  <div className="Header">
    <section className="container">
      <div className="row">
        <div className="col-9 col-md-6">
          <h1>DEVENDRAN</h1>
        </div>
        <div className="col-6 d-none d-md-none">
        <h5>[ Developer</h5>
        </div>
      </div>
    </section>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
