import { Box, Button, Typography } from "@mui/material";
import styles from "./ShoppingCartStyles";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import CustomCard from "../UI/CustomCard";

const formatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});

const ShoppingCart = ({ close, checkout }) => {
	const ctx = useContext(CartContext);

	let totalSum = 0;
	ctx.cart.forEach((dish) => (totalSum += dish.price * dish.amount));

	return (
		<CustomCard>
			{ctx.cart.map((dish) => (
				<Box key={dish.name} sx={[styles.cardContentStyles, styles.borderStyles]}>
					<div>
						<Typography sx={styles.font}>{dish.name}</Typography>
						<Typography sx={styles.price}>${dish.price}</Typography>
						<Box sx={styles.amount}>x {dish.amount}</Box>
					</div>
					<Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
						<Button variant="outlined" onClick={() => ctx.updateCart(dish, -1)}>
							-
						</Button>
						<Button variant="outlined" onClick={() => ctx.updateCart(dish, 1)}>
							+
						</Button>
					</Box>
				</Box>
			))}
			<Box sx={styles.cardContentStyles}>
				<Typography sx={styles.font}>Total Amount</Typography>
				<Typography sx={styles.font}>{formatter.format(totalSum)}</Typography>
			</Box>
			<Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "end" }}>
				<Button variant="outlined" sx={{ borderRadius: "20px" }} onClick={close}>
					Close
				</Button>
				{totalSum > 0 && (
					<Button variant="solid" size="small" sx={styles.solid} onClick={checkout}>
						Order
					</Button>
				)}
			</Box>
		</CustomCard>
	);
};

export default ShoppingCart;
