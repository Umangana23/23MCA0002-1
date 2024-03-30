import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minprice=1&maxPrice=10000')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error In fetching products:',error));
  }, []);

  return (
    <div className="App">
      <h1>Top Products</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
