
import Product from './Product';
import { useEffect, useState } from 'react';
const Productscomp = () => {
const URL='https://private-anon-6a6c772cb5-pizzaapp.apiary-mock.com/orders/';
const [Products, setProducts] = useState([]);
useEffect(() => {
  
  fetch('URL')
  .then(Response => Response.json())
  .then(data =>{
    console.log(data);
  });
}, []);




  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-5 my-8 gap-24">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          </div>
      </div>
   
  )
}

export default Productscomp;
