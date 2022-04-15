import React from "react";
import { AppBar, Container } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
const NavBar = () => {
  return (
    <AppBar>
      <h2 className="nav-h2">Where in the world?</h2>
      <div className="nav-left">
        <DarkModeOutlinedIcon sx={{ marginX: 1 }} />
        <p>Dark Mode</p>
      </div>
    </AppBar>
  );
};

export default NavBar;
