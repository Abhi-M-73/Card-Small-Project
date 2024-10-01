import React from "react";
import { useCart } from "../contexts/CartContext";
// import CartContext from '../contexts/CartContext';

const Card = ({ title, price, image }) => {
  // const cart = useContext(CartContext);      // this is rarly use 
  const cart = useCart();          // this way is mostly usasge

  const handleAddToCart = () => {
    // Add the new item to the existing cart items
    cart.setItems([...cart.items, { title, price, image }]);
    alert("Product is added in Cart");
  };

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border-b-2 border-t-2 border-green-600">
        <img className="w-60 h-48 object-cover" src={image} alt="product-img" />
        <div className="px-6 py-1">
          <h1 className="font-bold text-xl mb-1">{title} </h1>
          <h1 className="font-bold text-xl mb-1">{price} </h1>
          <button onClick={handleAddToCart} className='px-5 py-2 bg-indigo-500 text-white rounded-lg mb-2'>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Card;
