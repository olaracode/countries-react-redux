import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "./store/countriesSlice";
import NavBar from "./NavBar";
import Home from "./views/Home";
import Details from "./views/Details";
import { dark, light } from "./Theme.js";

/**
 *
 * @details
 *    Estructura de las rutas y manejo de temas con MUI
 *    Documentacion "Theming" Material UI
 *    https://mui.com/material-ui/customization/theming/#main-content
 *
 * @funciones
 *   Controla el "Toggle" del modo oscuro
 *   Crea el layout de la aplicacion
 *   Provee el themeprovider a la aplicacion
 *
 */

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.countries.isDarkTheme);

  const darkTheme = createTheme(dark);
  const lightTheme = createTheme(light);

  const getCountries = () => {
    dispatch(fetchCountries());
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
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
