import { useState } from "react";
import './App.css';
import Categories from "./components/categories";
import Modal from "./components/Modal/Modal";
import Products from './components/Products';
function App() {

  
  const [products,setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(false);
  const selectCategoy = (categoryName) => {
    console.log(categoryName)
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
            .then(res=>res.json())
            .then(products=>{console.log(products)
              setProducts(products)
            })
  } 

  const showModal = (flag,product) => {
    setShow(flag)
    setSelectedProduct(product)

  }

  return (
    <div className="App">
      <b><header className="App-header">Products Available</header></b>
      <Categories selectCategoy={selectCategoy}/>
      <Products setShow={showModal} products={products}/>
      <Modal title={selectedProduct?.title} product={selectedProduct} onClose={() => setShow(false)} show={show}/>
    </div>
  );
}

export default App;