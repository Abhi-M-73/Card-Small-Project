import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

//create custom hook
export const useCart = () => {
    const cart = useContext(CartContext);
    return cart;
}

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    return (
        <CartContext.Provider value={{ items, setItems }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
