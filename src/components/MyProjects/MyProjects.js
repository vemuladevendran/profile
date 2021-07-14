import React from 'react';
import './MyProjects.css';

const MyProjects = () => (
  <div id="projects">
    <div className="MyProjects">
      <p className="py-5 project-description text-white">
        I have started my career in 2020 during pandemic. I have very much intrested in web development
        so i start learing HTML, CSS and Js with the hepl of my brothers. Later i start learing Angular and
        i start working with small applications. The first project that i have worked is Question paper generater which is madfe for
        final year college students, my second project is <a href="https://www.bangalorewaits.in/">BANGALORE WAITS</a> which made for bangalore peoples
        for known avalibilities Beds, oxygen and etc.. as a volunteer . But now it is close due to decreasing cases in bangalore.
        and i have created android app called <a href="https://play.google.com/store/apps/details?id=com.devendran.flamesapp">Flames</a>  using Ionic and angular.
        At present i have working as inten in vertisize solutions. Now i am working in a project called Lamp.

      </p>
    </div>
    <div className="github-link text-center p-5">
      <h4 className="mb-3">To known more about code. Hit the button</h4>
      <div>
        <a className="git-link-btn" href="https://github.com/vemuladevendran" target="_blank" rel="noreferrer">GITHUB</a>
      </div>
    </div>
  </div>
);

MyProjects.propTypes = {};

MyProjects.defaultProps = {};

export default MyProjects;
