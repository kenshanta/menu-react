import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./modules";
import { ThemePrimary } from "./assets/theme";
import { ThemeProvider } from "@material-ui/styles";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={ThemePrimary}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
