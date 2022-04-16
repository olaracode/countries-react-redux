import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

/**
 *
 * @props
 *  Recibe los detalles del pais en forma de objeto
 *
 * @returns
 *  Componente principal de Details
 *
 * @functions
 *  Genera un array con los objetos de los paises fronterizos a partir de details.borders
 *  Genera Links para los detalles de los paises fronterizos
 *
 */
const DetailsGrid = ({ details }) => {
  const navigate = useNavigate();

  const countries = useSelector((state) => state.countries.countries);
  // eslint-disable-next-line
  const borders = countries.filter((country) => {
    let isBorder = false;
    details.borders.map((border) => {
      if (border === country.cioc) {
        isBorder = true;
      }
      return isBorder;
    });
    if (isBorder) {
      return country;
    }
  });
  return (
    <Grid container spacing={10}>
      <Grid item lg={6} sm={12}>
        <img src={details.flags.svg} style={{ width: "100%" }} alt={`flag`} />
      </Grid>
      <Grid item lg={6} sm={12}>
        <Box sx={{ marginLeft: { lg: 5, sm: 0 }, marginY: 5 }}>
          <h2 className="card-title">{details.name.common}</h2>
          <Grid container>
            <Grid item lg={6} sm={12}>
              <p className="details">
                <strong>Native Name: </strong>
                {details.name.official}
              </p>
              <p className="details">
                <strong>Population: </strong>
                {details.population}
              </p>
              <p className="details">
                <strong>Region: </strong>
                {details.region}
              </p>
              <p className="details">
                <strong>Sub Region: </strong>
                {details.subregion}
              </p>
              <p className="details">
                <strong>Capital: </strong>
                {details.capital}
              </p>
            </Grid>
            <Grid item lg={6} sm={12}>
              <p className="details">
                <strong>Top Level Domain: </strong>
                {details.tld[0]}
              </p>
              <p className="details">
                <strong>Currencies: </strong>
                {details.currencies[Object.keys(details.currencies)[0]].name}
              </p>
              <p className="details">
                <strong>Languages: </strong>
                {details.languages[Object.keys(details.languages)[0]]}
              </p>
              <p className="details">
                <strong>Sub Region: </strong>
                {details.subregion}
              </p>
            </Grid>
          </Grid>
        </Box>
        <Grid
          container
          sx={{
            marginLeft: { lg: 5, sm: 0 },
            marginY: 5,
            alignItems: "center",
          }}
        >
          <p>Border Countries: </p>
          {details.borders.length > 0 &&
            borders.map((border) => (
              <Button
                key={border.name.common}
                component={motion.button}
                onClick={() =>
                  navigate(
                    `/details/${border.name.common.replaceAll(" ", "%")}`
                  )
                }
                variant="contained"
                sx={{ margin: 2 }}
              >
                {border.name.common}
              </Button>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

DetailsGrid.propTypes = {
  details: PropTypes.object,
};

export default DetailsGrid;
