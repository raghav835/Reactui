import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';
import './Navbar.css';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyStore</Link>
      </div>
      <div className="navbar-search">
        <SearchBar />
      </div>
      <div className="navbar-icons">
        

        <Link to="/myprofile" className="navbar-icon">  
          <FontAwesomeIcon icon={faUser} />
      </Link>

      <Link to="/cart" className="navbar-icon cart-icon">  
          <FontAwesomeIcon icon={faShoppingCart} />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
         
      </div>

    </nav>
  );
}

export default Navbar;
