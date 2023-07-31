import React from 'react'
import Offers from "./Offers";
import Navbar from "./Navbar";
import Slider from "./Slider";
import ProductList from "./ProductList";
import Email from './Email'
import Categories from "./Categories";
import Footer from './Footer'
const Home = () => {
  return (
    <>
     <Offers />
      <Navbar />
      <Slider />
      <ProductList />
      {/* <Categories /> */}
      {/* <div><ProductList/></div> */}
      <Email/>
      <Footer/>
    </>
  )
}

export default Home