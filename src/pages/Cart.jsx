import React from 'react';

const Cart = () => {
  // Dummy cart data
  const dummyCartData = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 15 },
  ];

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {dummyCartData.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
