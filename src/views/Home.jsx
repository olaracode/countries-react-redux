import React from "react";
import { useSelector } from "react-redux";
import { Paper, Grid } from "@mui/material";
import ActionsBar from "../components/home/ActionsBar";
import CountryCard from "../components/home/CountryCard";
import PlaceholderCard from "../components/home/PlaceholderCard";

/**
 *
 * @Details
 *  Vista principal de la aplicación
 *
 * @Components
 *    Barra de acciones(Busqueda/Filtro) - ActionBar.jsx
 *    Carta de pais - CountryCard.jsx
 *    Carta de loading - PlaceholderCard.jsx
 *
 */

const Home = () => {
  let placeHolders = [1, 2, 3, 4];

  const countries = useSelector((state) => state.countries.countries);

  const filteredCountries = useSelector(
    (state) => state.countries.filteredCountries
  );

  return (
    <Paper sx={{ minHeight: "100vh", padding: "15vh 5vw" }}>
      <ActionsBar />
      <Grid container spacing={10} sx={{ marginY: "5vh" }}>
        {countries.length < 1
          ? placeHolders.map((placeholder) => {
              return (
                <Grid item lg={3} md={6} xs={12} key={placeholder}>
                  <PlaceholderCard />
                </Grid>
              );
            })
          : filteredCountries.length !== 0
          ? filteredCountries.map((country) => {
              return (
                <Grid
                  item
                  lg={3}
                  md={6}
                  xs={12}
                  key={country.population + country.name.common}
                >
                  <CountryCard country={country} />
                </Grid>
              );
            })
          : countries.map((country) => {
              return (
                <Grid
                  item
                  lg={3}
                  md={6}
                  xs={12}
                  key={country.population + country.name.common}
                >
                  <CountryCard country={country} />
                </Grid>
              );
            })}
      </Grid>
    </Paper>
  );
};

export default Home;
