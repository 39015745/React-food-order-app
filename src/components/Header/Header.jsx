import { Card, CardContent, Typography } from "@mui/material";

const Header = () => {
	return (
		<Card sx={{ bgcolor: "#303030", color: "white", mt: 30, mb: 5, borderRadius: "20px", minWidth: "40%" }}>
			<CardContent sx={{ textAlign: "center" }}>
				<Typography variant="h4">Delicious Food, Delivered To You</Typography>
				<br />
				<Typography>
					Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at
					home.
				</Typography>
				<br />
				<Typography>
					All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Header;
