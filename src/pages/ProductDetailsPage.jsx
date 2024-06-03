import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProductDetailsPage.css';  

function ProductDetailsPage({ setCartCount, cartCount }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  const handleAddToCart = () => {
    console.log('Adding product to cart');
    setCartCount(cartCount + 1);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details-container">
  <div className="product-image-container">
    <img src={product.image} alt={product.title} className="product-image" />
  </div>
  <div className="product-info">
    <div className="product-info-box">
      <h1>{product.title}</h1>
    </div>
    <div className="product-info-box">
      <p>{product.description}</p>
    </div>
    <div className="product-info-box">
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  </div>
</div>

  );
}

export default ProductDetailsPage;
