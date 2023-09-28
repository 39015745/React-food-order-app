import { useContext, useRef } from "react";

import { Box, Button, Typography } from "@mui/material";
import { ButtonStyles, inputStyles, labelStyles, formStyles, boxStyles } from "./FoodItemStyles";

import CartContext from "../store/CartContext";

const FoodItem = ({ dish }) => {
	const ctx = useContext(CartContext);
	const amountRef = useRef(null);

	const submitHandler = (event) => {
		event.preventDefault();

		const amount = amountRef.current.value;

		if (amount > 0) {
			const alredyInCart = ctx.cart.some((cartDish) => {
				return dish.name === cartDish.name;
			});

			if (!alredyInCart) {
				ctx.setCart((prevCart) => [...prevCart, { ...dish, amount }]);
			} else {
				ctx.setCart((prevCart) =>
					prevCart.map((cartDish) =>
						cartDish.name === dish.name
							? { ...cartDish, amount: parseInt(cartDish.amount) + parseInt(amount) }
							: cartDish
					)
				);
			}
			amountRef.current.value = "";
		}
	};

	return (
		<Box>
			<Box sx={boxStyles}>
				<Box>
					<Typography variant="h6" sx={{ fontWeight: "600" }}>
						{dish.name}
					</Typography>
					<Typography>{dish.desc}</Typography>
					<Typography variant="h6" color="primary" sx={{ fontWeight: "600" }}>
						${dish.price}
					</Typography>
				</Box>
				<Box>
					<form style={formStyles} onSubmit={submitHandler}>
						<Box>
							<label htmlFor="Amount" style={labelStyles}>
								Amount
							</label>
							<input type="number" min={0} id="Amount" ref={amountRef} style={inputStyles} />
						</Box>
						<Button variant="contained" sx={ButtonStyles} type="submit">
							+ Add
						</Button>
					</form>
				</Box>
			</Box>
			<hr />
		</Box>
	);
};

export default FoodItem;
