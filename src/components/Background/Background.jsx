import { Box } from "@mui/material";

const Background = ({ children }) => {
	const backgroundImg = {
		backgroundImage: `url(${process.env.PUBLIC_URL}/meals.jpg)`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		bgcolor: "black",
		height: "400px",
		overflow: "hidden",
		clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)",
	};
	return (
		<Box sx={{ height: "100%", width: "100%", bgcolor: "black", position: "absolute", zIndex: "-1" }}>
			<Box sx={backgroundImg}></Box>
			{children}
		</Box>
	);
};

export default Background;
