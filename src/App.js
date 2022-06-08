import React from 'react';
import {
  BrowserRouter as Router, Navigate, Route, Routes
} from "react-router-dom";
import Announcement from './components/announcement/Announcement';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Newsletter from './components/newsletter/Newsletter';
import Cart from './pages/cart/Cart';
import Home from './pages/Home';
import Login from './pages/login/Login';
import Product from './pages/products/product/Product';
import ProductList from './pages/products/ProductList';
import Register from './pages/register/Register';


const App = () => {
  const user = true;
  // useEffect(()=>{
  //   const test = async () =>{
  //     const data = await axios.get(`https://qb-employeedata-app.herokuapp.com/api/employee/employees`)
  //     console.log(data.data.employeeCount)
  //   }
  //   test()
  // },[])
  return (
    <Router>
      <Announcement />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/products/:category" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}></Route>
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}></Route>
      </Routes>
      <Newsletter />
      <Footer />
    </Router>
  )
}

export default App;
