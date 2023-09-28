import Background from "../Background/Background";
import Navbar from "../Navbar/Navbar";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
	return (
		<Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
			<Background />
			<Navbar />
			{children}
		</Box>
	);
};

export default Layout;
