import { useEffect, useState } from 'react';
import { commerce } from "./lib/commerce";
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Products from './components/Products/';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Carousel/Intro';
import Filters from './components/Filters/Filters';

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
    <Switch>
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <Intro />
          <Filters />
          <Products products={products} />
        </main>
      </div>
    </Switch>
  );
}

export default App;
