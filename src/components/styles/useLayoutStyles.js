import { styled } from "@mui/material/styles";
import Layout from "../Layout/Layout";

const MyCustomLayout = styled(Layout)(({ theme }) => ({
	display: "block",
	justifyContent: "center",
}));

export default MyCustomLayout;
