import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { fetchCountries } from "./store/countriesSlice";
import { useDispatch, useSelector } from "react-redux";

import NavBar from "./NavBar";
import Home from "./views/Home";
import Details from "./views/Details";
import { dark } from "./Theme.js";

/**
 *
 * @details
 *    Estructura de las rutas y manejo de temas con MUI
 *    Documentacion "Theming" Material UI
 *    https://mui.com/material-ui/customization/theming/#main-content
 *
 * @funciones
 *   Controla el "Toggle" del modo oscuro
 *
 */

function App() {
  const dispatch = useDispatch();
  const darkTheme = createTheme(dark);
  const lightTheme = createTheme({});

  const getCountries = () => {
    dispatch(fetchCountries());
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:name" element={<Details />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
