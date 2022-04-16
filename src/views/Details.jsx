import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Paper, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DetailsGrid from "../components/Details/DetailsGrid";

/**
 *
 * @returns
 *  Vista de Detalles del pais
 *
 * @functions
 *  Maneja la navegacion de vuelta al home
 *  Creacion de url valida para React Router Dom
 *  Encuentra el pais a mostrar usando el param: name
 *
 * @components
 *  DetailsGrid
 *
 */

const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const countries = useSelector((state) => state.countries.countries);
  let name = params.name.replace("%", " ");
  const details = countries?.find((country) => country.name.common === name);

  return (
    <Paper sx={{ minHeight: "100vh", padding: "15vh 5vw" }}>
      <Button
        variant="contained"
        sx={{ marginBottom: 10 }}
        onClick={() => navigate("/")}
      >
        <ArrowBackIcon sx={{ marginRight: "10px" }} />
        Back
      </Button>
      {countries.length > 0 ? <DetailsGrid details={details} /> : null}
    </Paper>
  );
};

export default Details;
