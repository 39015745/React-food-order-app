import { Box } from "@mui/material";
import styles from "./OverlayStyles";

const Overlay = (props) => {
	return (
		<Box sx={styles.boxStyles}>
			<Box sx={styles.overlayStyles}>
				<Box sx={styles.backdropStyles} onClick={props.close} />
				{props.children}
			</Box>
		</Box>
	);
};

export default Overlay;
