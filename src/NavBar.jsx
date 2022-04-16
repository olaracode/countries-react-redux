import React from "react";
import { AppBar, Container } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { setTheme } from "./store/countriesSlice";

/**
 *
 * @details
 *  Barra de navegacion de la aplicacion.
 *
 * @functions
 *  Maneja el cambio de tema y navegacion a home
 *
 */

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <AppBar>
      <motion.h2
        className="nav-h2"
        onClick={() => navigate("/")}
        whileHover={{ cursor: "pointer", scale: 1.1 }}
      >
        Where in the world?
      </motion.h2>
      <motion.div
        className="nav-left"
        onClick={() => dispatch(setTheme())}
        whileHover={{ cursor: "pointer", scale: 1.1 }}
      >
        <DarkModeOutlinedIcon sx={{ marginX: 1 }} />
        <p>Dark Mode</p>
      </motion.div>
    </AppBar>
  );
};

export default NavBar;
