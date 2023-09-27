import { Paper, Switch } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode);

  const appTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  const handleChange = () => {
    if (mode) {
      setMode(false);
    } else {
      setMode(true);
    }
  };

  return (
    <ThemeProvider theme={appTheme}>
      <Paper elevation={0} sx={{ height: "100vh" }} square>
        <h1>Dark Mode Tutorial</h1>

        <Switch
          checked={mode}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
