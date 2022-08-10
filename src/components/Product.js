import React from 'react'

function Product({product,setShow}) {

    const getDetailsOfProduct = (productId) =>  {
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res=>res.json())
        .then(product=>{console.log(product)
            setShow(true,product)
        })
    }

  return (
                   
                    <div className='card' onClick={() => {getDetailsOfProduct(product?.id)}}>
                        <img src={product.image}/>
                    </div>
  )
}

export default Product