import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div className="home-page">
      <h1>Home</h1>
      <div className="categories">
        <h2>Categories</h2>
        <div className="category-list-box">
          {categories.map(category => (
            <span key={category} className="category-item">
              <Link to={`/category/${category}`} className="category-link">{category}</Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
