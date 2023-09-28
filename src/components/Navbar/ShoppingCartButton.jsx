import { useContext, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Checkout from "../ShoppingCart/Checkout";
import Overlay from "../Background/Overlay";
import Confirmation from "../ShoppingCart/Confirmation";

import { cartButtonStyles, ProductCountStyles } from "./ShoppingCartButtonStyles";
import CartContext from "../store/CartContext";

const ShoppingCartButton = () => {
	const ctx = useContext(CartContext);
	const [showCart, setShowCart] = useState(false);
	const [showCheckOut, setShowCheckout] = useState(false);
	const [showConfirmation, setshowConfirmation] = useState(false);
	const [paymentDetails, setPaymentDetails] = useState("");

	const closePurchase = () => {
		setShowCart(false);
		setShowCheckout(false);
		setshowConfirmation(false);
	};

	const cart = () => {
		setShowCart(true);
	};
	const checkout = () => {
		setShowCart(false);
		setShowCheckout(true);
	};
	const confirmation = (details) => {
		setPaymentDetails(details);
		setShowCheckout(false);
		setshowConfirmation(true);
	};

	return (
		<>
			<Button variant="contained" sx={cartButtonStyles} onClick={cart}>
				<ShoppingCartIcon sx={{ fontSize: "1.2rem" }} />
				<Typography sx={{ px: 1, textTransform: "none" }}>Your Cart</Typography>
				<Box sx={ProductCountStyles}>{ctx.cart.length}</Box>
			</Button>
			{(showCart || showCheckOut || showConfirmation) && (
				<Overlay close={closePurchase}>
					{showCart && <ShoppingCart close={closePurchase} checkout={checkout} />}
					{showCheckOut && <Checkout close={closePurchase} confirmation={confirmation} />}
					{showConfirmation && (
						<Confirmation
							close={closePurchase}
							paymentDetails={paymentDetails}
							cart={ctx.cart}
							clearCart={ctx.setCart}
						/>
					)}
				</Overlay>
			)}
		</>
	);
};

export default ShoppingCartButton;
