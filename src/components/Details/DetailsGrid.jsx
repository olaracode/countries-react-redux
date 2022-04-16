import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const DetailsGrid = ({ details }) => {
  const navigate = useNavigate();

  const countries = useSelector((state) => state.countries.countries);
  const borders = countries.filter((country) => {
    let isBorder = false;
    details.borders.map((border) => {
      // console.log(country.fifa, border);
      if (border === country.cioc) {
        isBorder = !isBorder;
      }
    });
    if (isBorder) return country;
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
          {borders.map((border) => (
            <Button
              key={border.name.common}
              component={motion.button}
              onClick={() =>
                navigate(`/details/${border.name.common.replaceAll(" ", "&")}`)
              }
              variant="contained"
              sx={{ margin: 2 }}
              whileHover={{
                backgroundColor: "inherit",
                boxShadow: "0px 0px 5px #ffffff",
              }}
            >
              {border.name.common}
            </Button>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DetailsGrid;
