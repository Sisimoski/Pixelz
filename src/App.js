import { useEffect, useState, useContext } from 'react';
import { commerce } from "./lib/commerce";
import { UserContext } from "./lib/UserProvider";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from './components/Products/';
import Navbar from './components/Navbar/Navbar';
import Navbar2 from './components/Navbar/Navbar2';
import Intro from './components/Carousel/Intro';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Register from './components/register/register';
import Basket from './components/Basket/basket';
import ProductView from './components/ProductView/ProductView';
import Checkout from './components/Checkout/Checkout';
import Confirmation from './components/Checkout/Confirmation';
import Profile from './components/Profile/Profile';
import UserProvider from './lib/UserProvider';

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [basketData, setBasketData] = useState([{}]);
  const [orderInfo, setOrderInfo] = useState({});
  const [orderError, setOrderError] = useState("");

  const fetchProducts = async () => {
    const response = await commerce.products.list({ limit: 50 });
    const { data: products } = await commerce.products.list({ limit: 50 });
    const { data: categories } = await commerce.categories.list({ limit: 50 });

    const productsPerCategory = categories.reduce((acc, category) => {
      return [
        ...acc,
        {
          ...category,
          productsData: products.filter((product) =>
            product.categories.find((cat) => cat.id === category.id)
          ),
        },
      ];
    }, []);

    setCategories((productsPerCategory) || []);
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

  const handleCheckout = async (checkoutId, orderData) => {
    try {
      // const incomingOrder = await commerce.checkout.capture(
      //   checkoutId,
      //   orderData
      // );

      setOrderInfo(orderData);

      refreshBasket();
    } catch (error) {
      setOrderError(
        (error.data && error.data.error && error.data.error.message) ||
        "There is an error occurred"
      );
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchBasketData();

  }, []);
  console.log("danekoszyk", basketData);
  const user = useContext(UserContext);
  return (
    <Router >
      <Switch>
        <div>
          <header>
            <Navbar2 basketItems={basketData.total_items} totalCost={
              (basketData.subtotal &&
                basketData.subtotal.formatted_with_symbol) ||
              "00.00"
            } />
          </header>
          <Route exact path="/">
            <header>
              <Navbar basketItems={basketData.total_items} totalCost={
                (basketData.subtotal &&
                  basketData.subtotal.formatted_with_symbol) ||
                "00.00"
              } />
            </header>
            <main>
              <Intro />
              <div id="google"></div>
              <Products categories={categories} addProduct={addProduct} />
              <Contact />
            </main>
          </Route>
          <Route exact path="/basket">
            <main>
              <Basket
                basketData={basketData}
                updateProduct={updateProduct}
                handleEmptyBasket={handleEmptyBasket}
                RemoveItemFromBasket={RemoveItemFromBasket}
                products={products}
              />
            </main>
          </Route>
          <Route exact path="/register">
            <main>
              <Register />
            </main>
          </Route>
          <Route exact path="/product-view/:id">
            <main>
              <ProductView categories={categories} addProduct={addProduct} products={products} />
            </main>
          </Route>
          <Route exact path="/checkout">
            <main>
              <Checkout orderInfo={orderInfo} orderError={orderError} basketData={basketData} handleCheckout={handleCheckout} />
            </main>
          </Route>
          <Route exact path="/confirmation">
            <main>
              <Confirmation handleEmptyBasket={handleEmptyBasket} />
            </main>
          </Route>
          <Route exact path="/profile">
            <main>
              <Profile />
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
