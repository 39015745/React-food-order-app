import { Box, Button, Typography } from "@mui/material";
import useInput from "../../hooks/useInput";
import Input from "../UI/Input";
import CustomCard from "../UI/CustomCard";

const Checkout = ({ close, confirmation }) => {
	const firstNameInput = useInput((value) => value.trim() !== "" && value.length > 2);
	const lastNameInput = useInput((value) => value.trim() !== "");
	const emailInput = useInput((value) => value.includes("@"));
	const cityInput = useInput((value) => value.trim() !== "");
	const streetInput = useInput((value) => value.trim() !== "");
	const postCodeInput = useInput((value) => value.trim() !== "");

	const inputs = [
		{ name: "First name", ...firstNameInput },
		{ name: "Last name", ...lastNameInput },
		{ name: "Email", ...emailInput },
		{ name: "City", ...cityInput },
		{ name: "Street", ...streetInput },
		{ name: "Postal code", ...postCodeInput },
	];

	let formHasErrors = true;
	if (inputs.every((config) => config.isValid)) {
		formHasErrors = false;
	}

	const formSubmitHandler = (event) => {
		event.preventDefault();

		if (inputs.some((config) => !config.isValid)) {
			return;
		}

		inputs.forEach((config) => config.reset());
		confirmation({
			firstName: inputs[0].value,
			lastName: inputs[1].value,
			email: inputs[2].value,
			city: inputs[3].value,
			street: inputs[4].value,
			postalCode: inputs[5].value,
		});
	};

	return (
		<CustomCard>
			<Box
				component="form"
				onSubmit={formSubmitHandler}
				sx={{
					display: "flex",
					flexDirection: "column",
					"& .MuiTextField-root": { m: 1, width: "25ch" },
				}}
				noValidate
				autoComplete="off"
			>
				<Typography variant="h5" my={2} ml={1}>
					Checkout
				</Typography>
				<Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
					<Box sx={{ gap: 5, mb: 2 }}>
						<Input inputConfig={inputs[0]} />
						<Input inputConfig={inputs[1]} />
						<Input inputConfig={inputs[2]} />
					</Box>
					<Box sx={{ gap: 5 }}>
						<Input inputConfig={inputs[3]} />
						<Input inputConfig={inputs[4]} />
						<Input inputConfig={inputs[5]} />
					</Box>
				</Box>
				<Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "end" }}>
					<Button variant="outlined" sx={{ borderRadius: "20px" }} onClick={close}>
						Cancel
					</Button>
					<Button variant="contained" sx={{ borderRadius: "20px", ml: "5" }} disabled={formHasErrors} type="submit">
						Proceed
					</Button>
				</Box>
			</Box>
		</CustomCard>
	);
};

export default Checkout;
