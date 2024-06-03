import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './productdetail.css';

function ProductsDetails() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [category]);

  return (
    <div>
      <h1 className='product-text'>Products in {category}</h1>
      <div className="product-container">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <Link to={`/product/${product.id}`} className="product-link">
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-title">{product.title}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsDetails;
