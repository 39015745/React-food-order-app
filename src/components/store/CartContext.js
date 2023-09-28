import { createContext, useState } from "react";

const CartContext = createContext();

export const CartContexProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const updateCart = (dish, amountChange) => {
		const updatedCart = cart.map((cartDish) =>
			cartDish.name === dish.name ? { ...cartDish, amount: parseInt(cartDish.amount) + amountChange } : cartDish
		);
		setCart(updatedCart.filter((cartDish) => cartDish.amount !== 0));
	};

	return <CartContext.Provider value={{ cart, setCart, updateCart }}>{children}</CartContext.Provider>;
};

export default CartContext;
