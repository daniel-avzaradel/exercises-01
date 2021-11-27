import styles from "./styles.css";
import { Box, Button } from "@mui/material";

function App() {
  return (
    <div>
      <Box justifyContent="center">
        <h1>Material UI</h1>
        <Button variant="outlined" color="primary">
          Click me
        </Button>
      </Box>
    </div>
  );
}

export default App;
