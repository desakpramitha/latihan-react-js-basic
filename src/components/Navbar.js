import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [selected, setSelected] = useState(null);

  return (
    <nav className="navbar">
      <div className="navbar-column">
        <Link
          to="/semua"
          className={`navbar-button ${selected === 'semua' ? 'selected' : ''}`}
          onClick={() => setSelected('semua')}
        >
          SEMUA
        </Link>
      </div>
      <div className="navbar-column">
        <Link
          to="/makanan"
          className={`navbar-button ${selected === 'makanan' ? 'selected' : ''}`}
          onClick={() => setSelected('makanan')}
        >
          MAKANAN
        </Link>
      </div>
      <div className="navbar-column">
        <Link
          to="/minuman"
          className={`navbar-button ${selected === 'minuman' ? 'selected' : ''}`}
          onClick={() => setSelected('minuman')}
        >
          MINUMAN
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

