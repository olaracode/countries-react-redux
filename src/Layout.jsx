import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Home from "./views/Home";
import NavBar from "./NavBar";
import { dark } from "./Theme.js";
/**
 *
 * @details
 *    Estructura de las rutas y manejo de temas con MUI
 *
 * @funciones
 *   Controla el "Toggle" del modo oscuro
 *   Tiene
 *
 */

function App() {
  const darkTheme = createTheme(dark);
  const lightTheme = createTheme({});
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/details" element={<Details />} />  */}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
