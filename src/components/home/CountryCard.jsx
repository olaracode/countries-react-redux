import React from "react";
import { Card, CardMedia, CardContent, Box } from "@mui/material";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/**
 *
 * @props
 *  objeto de country
 *
 * @returns
 *  Carta con detalles de los paises
 *
 * @functions
 *   Crea un url valido para react router dom(reemplaza los " " por "%")
 *   Maneja la navegacion a la vista de detalles
 *
 */

const CountryCard = ({ country }) => {
  let population = country.population;
  let navigate = useNavigate();

  let detailsUrl = country.name.common.replaceAll(" ", "%");

  return (
    <Card
      onClick={() => navigate(`/details/${detailsUrl}`)}
      component={motion.div}
      whileHover={{
        boxShadow: "0px 0px 5px #ffffff",
        cursor: "pointer",
        y: -10,
      }}
    >
      <CardMedia component="img" image={country.flags.png} alt="Country" />
      <CardContent>
        <Box sx={{ paddingY: "3vh", paddingX: "2vh" }}>
          <h3 className="card-title">{country.name.common}</h3>
          <p className="card-description">
            <strong>Population: </strong> {population.toLocaleString()}
          </p>
          <p className="card-description">
            <strong>Region: </strong> {country.region}
          </p>
          <p className="card-description">
            <strong>Capital: </strong> {country.capital}
          </p>
        </Box>
      </CardContent>
    </Card>
  );
};

CountryCard.propTypes = {
  country: PropTypes.object,
};
export default CountryCard;
