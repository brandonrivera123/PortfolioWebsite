import { useEffect, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./Routes";
import { NavBar } from "./components/layout";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { darkModeContext } from "./styles/theme/themeHandler";

function App() {
  const DarkModeContext = useContext(darkModeContext);
  const { darkMode, setDarkMode } = DarkModeContext;
  const theme = darkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const theme = localStorage.getItem("preferred-theme");
    if (theme) {
      const themePreference = localStorage.getItem("preferred-theme");
      if (themePreference === "dark") {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    } else {
      localStorage.setItem("preferred-theme", "light");
      setDarkMode(false);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
