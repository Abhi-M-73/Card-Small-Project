import React from 'react';
import Card from './components/Card';
import Cart from './components/Cart';

function App() {
  return (
    <div className="flex flex-col gap-5 items-center h-screen bg-gray-100">
      <h1 className='text-5xl font-semibold mt-10'>Buy Now</h1>
      <div className='flex gap-10'>
       <Card image="https://i.pinimg.com/236x/c1/16/25/c11625bf23e1c55353a707c1c1ff2356.jpg" title="Headset music" price= "$20" />
       <Card image="https://i.pinimg.com/236x/1a/3c/5a/1a3c5aad06239bb1e100140720941bfd.jpg" title="Ear Buds" price= "$10" />
      </div>
      <div>
      <h1 className='text-5xl font-semibold m-5'>Cart</h1>
        <Cart />
      </div>
    </div>
  );
}

export default App;
