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
import Basket from './components/Basket/basket';
const App = () => {
  const [products, setProducts] = useState([]);
  const [basketData, setBasketData] = useState([{}]);

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProducts((response && response.data) || []);
  };

  const fetchBasketData = async () => {
    const response = await commerce.cart.retrieve();
    setBasketData(response);
  };

  const addProduct = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setBasketData(response.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchBasketData();
  }, []);
  console.log({ products });
  console.log({ basketData });
  return (
    <Router >
      <Switch>
        <div>
          <header>
            <Navbar basketItems={basketData.total_items} />
          </header>
          <Route exact path="/">
            <main>
              <Intro />
              <div id="google"></div>
              <Filters />
              <Products products={products} addProduct={addProduct} />
              <Contact />
            </main>
          </Route>
          <Route exact path="/basket">
            <main>
              <Basket />
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
