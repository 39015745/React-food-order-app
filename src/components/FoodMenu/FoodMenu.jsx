import { Card, CardContent } from "@mui/material";
import FoodItem from "./FoodItem";
import useHttpRequest from "../../hooks/useHttpRequest";
import { useEffect } from "react";

const dishes = [];

const FoodMenu = () => {
	const { isLoading, error, sendRequest } = useHttpRequest();

	useEffect(() => {
		const handleData = (data) => {
			for (const dishKey in data) {
				const dish = data[dishKey];
				dishes.push({ id: dishKey, name: dish.name, desc: dish.desc, price: dish.price });
			}
		};

		sendRequest(
			{
				url: "https://react-http-21616-default-rtdb.europe-west1.firebasedatabase.app/dishes.json",
			},
			handleData
		);
	}, []);

	return (
		<Card sx={{ minWidth: "50%", borderRadius: "20px" }}>
			<CardContent>
				{isLoading && <h2 style={{ textAlign: "center" }}>Loading</h2>}
				{error && <h2 style={{ textAlign: "center" }}>Failed to load meals</h2>}
				{dishes.map((dish) => (
					<FoodItem key={dish.id} dish={dish} />
				))}
			</CardContent>
		</Card>
	);
};

export default FoodMenu;
