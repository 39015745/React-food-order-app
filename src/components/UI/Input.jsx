import { TextField } from "@mui/material";

const Input = ({ inputConfig }) => {
	return (
		<TextField
			label={inputConfig.name}
			variant="outlined"
			value={inputConfig.value}
			onChange={inputConfig.valueChangeHandler}
			onBlur={inputConfig.inputBlurHandler}
			error={inputConfig.hasError}
			helperText={inputConfig.hasError ? `${inputConfig.name} is required` : ""}
		/>
	);
};

export default Input;
