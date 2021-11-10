import Home from "./pages/Home"
import Slider from './components/Slider'
import React from 'react'
import Announcement from './components/Announcement'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Products from './components/Products'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer';
import ProductPerBrand from "./pages/ProductPerBrand";
import Product from './pages/Product';
import { Brands, PopularCycle } from './components/Headings'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import About from "./pages/About"
import Blog from "./pages/Blog"

const App = () => {
  return (
    <BrowserRouter>
       
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/brand/:id" exact component={ProductPerBrand} />
          <Route path="/:id" exact component={Product} />
          <Route path="/about/cyclehub" exact component={About} />
          <Route path="/blog/cyclehub" exact component={Blog} />
        </Switch>
       <Newsletter />
       <Footer/>
       <Announcement/>
       </BrowserRouter>
  );
};


export default App;