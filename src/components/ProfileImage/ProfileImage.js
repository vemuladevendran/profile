import React from 'react';
import './ProfileImage.css';

const ProfileImage = () => (
  <div className="ProfileImage" id="about">
    <div className="image-wrapper text-center py-4">
      <img className="my-profile-img" src="/assets/my-img.jpeg" alt="my profile" />
    </div>
    <p className="text-center h4 px-5"  style={{color: 'rgb(103, 93, 93)'}}>
      How do you ethically steer the thoughts and actions of two billion people’s minds every day?  
    </p>
  </div>
);

ProfileImage.propTypes = {};

ProfileImage.defaultProps = {};

export default ProfileImage;
