import React from 'react';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import Product from './pages/products/product/Product';
import Register from './pages/register/Register';
import Home from './pages/Home';
import ProductList from './pages/products/ProductList';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom"
import Footer from './components/footer/Footer';
import Newsletter from './components/newsletter/Newsletter';
import Navbar from './components/navbar/Navbar';
import Announcement from './components/announcement/Announcement';

const App = () => {
  const user = true;
  return (
    <Router>
      <Announcement />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/products/:category" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={ user ? <Navigate to="/"/> : <Login />}></Route>
        <Route path="/register" element={ user ? <Navigate to="/"/> : <Register />}></Route>
      </Routes>
      <Newsletter />
      <Footer />
    </Router>
  )
}

export default App;
