import { useEffect } from "react";
import Product from "./Product";

const axios = require("axios");

const Products=({products,setShow})=>{

    useEffect(() => {
        
    },[])
    return (
        <div className="d-flex">
            {products?.map((product) => (
                    <Product setShow={setShow} product={product}/>
            ))}
        </div>
  )
}
export default Products
