import React, { useContext } from 'react'
import CartContext from '../contexts/CartContext'

function Cart() {
    const cart = useContext(CartContext);
    const totalAmount = cart.items.reduce((acc, elem) => acc + elem.price, 0);
    return ( 
        <div className='flex items-center justify-center mt-20'>
             <div className="w-96 p-4 bg-white shadow-lg rounded-lg border-b-4 border-t-4 border-indigo-600">
                <h2 className="text-2xl font-bold mb-4 text-center">Products</h2>
                <div className="flex flex-col text-xl font-bold mb-4">
                    {cart && cart.items.map((items) => (<span className='text-gray-600'>{items.title} : {items.price}</span>))}
                    <h2 className='mt-4'>Total Amount : {totalAmount} </h2>
                </div>
            </div>
        </div>
    )
}

export default Cart
