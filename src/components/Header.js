import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <img src={require('../assets/img/taste_bite.jpg')} alt="TasteBite" className="title" />
      <h2 className="subtitle">POPULAR RECIPES</h2>
    </div>
  );
};

export default Header;

