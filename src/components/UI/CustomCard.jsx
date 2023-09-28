import { Card, CardContent } from "@mui/material";

const CustomCard = ({ children }) => {
	return (
		<Card sx={{ borderRadius: "20px", minWidth: "40%", zIndex: "2" }}>
			<CardContent>{children}</CardContent>
		</Card>
	);
};

export default CustomCard;
