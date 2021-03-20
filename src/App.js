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

  const RemoveItemFromBasket = async (itemId) => {
    const response = await commerce.cart.remove(itemId);
    setBasketData(response.cart);
  };

  const handleEmptyBasket = async () => {
    const response = await commerce.cart.empty();
    setBasketData(response.cart);
  };

  const updateProduct = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setBasketData(response.cart);
  };

  const refreshBasket = async () => {
    const newBasketData = await commerce.cart.refresh();
    setBasketData(newBasketData);
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
            <Navbar basketItems={basketData.total_items} totalCost={
              (basketData.subtotal &&
                basketData.subtotal.formatted_with_symbol) ||
              "00.00"
            } />
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
              <Basket
                basketData={basketData}
                updateProduct={updateProduct}
                handleEmptyBasket={handleEmptyBasket}
                RemoveItemFromBasket={RemoveItemFromBasket} />
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
