import React from 'react';
import './Attention.css';

const Attention = () => (
  <div className="Attention" id="links">
    <div className="row justify-content-center">
      <div className="col-12 col-md-6 col-lg-3 text-center text-md-start text-lg-end">
        <img className="eye-img shadow-lg bg-body rounded" src="/assets/eye.png" data-aos='fade-up' />
      </div>
      <div className="col-12 col-md-6">
        <p className="eye-text text-white px-md-1 px-lg-5 mt-2">
          Technology companies are locked in an arms race to seize our attention, and that race is tearing apart the social fabric.
        </p>
        <p className="eye-text text-white px-md-1 px-lg-5">
          In this podcast from the Center for Humane Technology, co-founders Tristan Harris and Aza Raskin explore how technology
          has manipulated human nature and warped our world.
        </p>
        <p className="eye-text text-white px-md-1 px-lg-5">
          In each episode, Tristan and Aza interview experts on human nature and the ways technology
          impacts society – ranging from how technology influences attention spans, drives addiction,
          spreads rumors and disinformation, topples democracies – and explore potential ways we might
          fix it.
        </p>
      </div>
      {/* underline */}
      <div className="d-flex justify-content-center">
        <div className="col-12 mt-3 border-bottom border-white"></div>
      </div>
      <div className="mt-4">
        <div className="d-flex justify-content-center align-items-center">
          <span className="text-white fw-bold h3 d-none d-md-block">Follow On :</span>
          <a href="https://github.com/vemuladevendran" target="_blank" rel="noreferrer"><img className="social-icons" data-aos='fade-right' src="/assets/github.jpg" /></a>
          <a href="https://www.facebook.com/devendranvemula" target="_blank" rel="noreferrer"><img className="social-icons" data-aos='fade-right' src="/assets/fb.png"></img></a>
          <a href="https://www.instagram.com/devendran_vemula/" target="_blank" rel="noreferrer"><img className="social-icons" data-aos='fade-right' src="/assets/insta.jpeg"></img></a>
        </div>
      </div>
    </div>
  </div>
);

Attention.propTypes = {};

Attention.defaultProps = {};

export default Attention;
