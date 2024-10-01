import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Cart from './components/Cart';

function App() {
  const products = [
    {
      image: "https://i.pinimg.com/236x/c1/16/25/c11625bf23e1c55353a707c1c1ff2356.jpg",
      title: "Headset music",
      price: "$20",
    },
    {
      image: "https://i.pinimg.com/236x/1a/3c/5a/1a3c5aad06239bb1e100140720941bfd.jpg",
      title: "Ear Buds",
      price: "$10",
    }
  ];

  return (
    <>
      {/* Navbar should be outside Routes so it appears on all pages */}
      <Navbar />

      {/* Define Routes for different pages */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col gap-5 items-center h-screen bg-gray-100">
              <h1 className='text-5xl font-semibold mt-10'>Buy Now</h1>
              <div className='flex gap-10'>
                {products.map((item, index) => (
                  <Card key={index} image={item.image} title={item.title} price={item.price} />
                ))}
              </div>
            </div>
          }
        />
        <Route path="/cart" element={
          <div>
            <h1 className='text-5xl font-semibold m-5 text-center'>Cart</h1>
            <Cart />
          </div>
        } />
      </Routes>
    </>
  );
}

export default App;
