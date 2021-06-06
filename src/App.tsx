import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./modules";
import { ThemePrimary } from "./assets/theme";
import { ThemeProvider } from "@material-ui/styles";

// TODO: Material ui Grid system + UI
// TODO: Service & Store setup
// TODO: Language switch (low Priority)

const App: React.FC = () => {
  return (
    <ThemeProvider theme={ThemePrimary}>
      <Router>
        <Router>
          <Routes />
        </Router>
      </Router>
    </ThemeProvider>
  );
};

export default App;
