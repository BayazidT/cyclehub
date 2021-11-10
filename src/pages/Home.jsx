import Slider from '../components/Slider'
import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Brands, PopularCycle } from '../components/Headings'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
const Home = () => {
    return (
        <>
       <Slider/>
       <Brands/>
      <Categories/>
      <PopularCycle/>
      <Products/>
        </>
    )
}

export default Home
