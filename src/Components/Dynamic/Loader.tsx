import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loader = () => {
    return (
        <Box sx={{ display: "flex" }} className="loader">
            <CircularProgress size={100} />
        </Box>
    );
};

export default Loader;
