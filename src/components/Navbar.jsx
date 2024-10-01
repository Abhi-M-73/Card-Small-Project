import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='h-16 flex items-center justify-center bg-[#333] text-white'> 
            <ul className='flex items-center justify-center gap-10 text-lg font-semibold'>
                <li><Link to="/">Collection</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
