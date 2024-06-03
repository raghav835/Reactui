import React from 'react';
import './MyProfile.css';  

const MyProfile = () => {
  const profileData = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
    address: '123 Main St, City, Country',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam dui euismod orci bibendum gravida. Integer eu scelerisque elit, at volutpat sapien. Nullam rutrum enim eget arcu fringilla, ac eleifend enim maximus.'
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>
      <div className="profile-details">
        <p><strong>Name:</strong> {profileData.name}</p>
        <p><strong>Age:</strong> {profileData.age}</p>
        <p><strong>Email:</strong> {profileData.email}</p>
        <p><strong>Address:</strong> {profileData.address}</p>
        <p><strong>Bio:</strong> {profileData.bio}</p>
      </div>
    </div>
  );
};

export default MyProfile;
