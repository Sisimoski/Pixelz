import { useEffect, useState } from 'react';
import { commerce } from "./lib/commerce";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from './components/Products/';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Carousel/Intro';
import Filters from './components/Filters/Filters';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Register from './components/register/register';
import basket from './components/Basket/basket';
const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProducts((response && response.data) || []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log({ products });
  return (
    <Router >
      <Switch>
        <div>
          <header>
            <Navbar />
          </header>
          <Route exact path="/">
            <main>
              <Intro />
              <div id="google"></div>
              <Filters />
              <Products products={products} />
              <Contact />
            </main>
          </Route>
          <Route exact path="/basket">
            <main>
              <basket />
            </main>
          </Route>
          <Route exact path="/register">
            <main>
              <Register />
            </main>
          </Route>
          <footer>
            <Footer />
          </footer>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
