import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { CartContexProvider } from "./components/store/CartContext";

import App from "./App";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<CartContexProvider>
			<App />
		</CartContexProvider>
	</ThemeProvider>
);
