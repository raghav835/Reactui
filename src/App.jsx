import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import MyProfile from './pages/MyProfile';
import ProductDetails from './pages/ProductDetails';
import Navbar from './components/NavBar';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { useState } from 'react';



const App = () => {
  const [cartCount, setCartCount] = useState(0); // Define cartCount state
  return (
    <header>
      <BrowserRouter>
        <Navbar cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<ProductDetails />} />
          <Route
          path="/product/:id"
          element={<ProductDetailsPage setCartCount={setCartCount} cartCount={cartCount} />}
        />
          <Route path="cart" element={<Cart />} />
          <Route path="myprofile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </header>
  )
}

export default App
