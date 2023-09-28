import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import useHttpRequest from "../../hooks/useHttpRequest";
import CustomCard from "../UI/CustomCard";

const Confirmation = ({ cart, paymentDetails, close, clearCart }) => {
	const [orderSubmitted, setOrderSubmitted] = useState(false);
	const { isLoading, error, sendRequest } = useHttpRequest();

	let order = cart.map((dish) => {
		return { name: dish.name, amount: dish.amount };
	});

	useEffect(() => {
		const handleData = (data) => {
			setOrderSubmitted(true);
			clearCart([]);
		};

		sendRequest(
			{
				url: "https://react-http-21616-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
				method: "POST",
				body: JSON.stringify({ orderereItems: order, user: paymentDetails }),
				headers: {
					"Content-Type": "application/json",
				},
			},
			handleData
		);
	}, []);

	return (
		<CustomCard sx={{ zIndex: "10" }}>
			<Box
				component="form"
				sx={{
					display: "flex",
					flexDirection: "column",
					"& .MuiTextField-root": { m: 3, width: "25ch" },
				}}
				noValidate
				autoComplete="off"
			>
				{isLoading && <h2 style={{ textAlign: "center" }}>Confirming purchase...</h2>}
				{error && <h2 style={{ textAlign: "center" }}>Failed to load meals</h2>}
				{orderSubmitted && (
					<Typography variant="h5" my={4} align="center" fontWeight={700}>
						Order Submitted Successfully!
					</Typography>
				)}
			</Box>
			<Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "end" }}>
				<Button variant="outlined" sx={{ borderRadius: "20px", ml: "5" }} onClick={close}>
					Close
				</Button>
			</Box>
		</CustomCard>
	);
};

export default Confirmation;
