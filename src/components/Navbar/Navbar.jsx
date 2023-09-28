import ShoppingCartButton from "./ShoppingCartButton";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

import { navbarStyles } from "./NavBarStyles";

const Navbar = () => {
	return (
		<AppBar sx={navbarStyles}>
			<Typography variant="h4" component="div" fontWeight="600">
				ReactMeals
			</Typography>
			<ShoppingCartButton />
		</AppBar>
	);
};

export default Navbar;
