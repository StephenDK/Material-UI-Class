import React from "react";
import { ThemeProvider } from "@mui/material/styles";

// Components
import theme from "./ui/theme";
import Header from "./ui/header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello
    </ThemeProvider>
  );
}

export default App;
