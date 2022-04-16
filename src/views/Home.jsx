import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Grid } from "@mui/material";
import { fetchCountries } from "../store/countriesSlice";
import ActionsBar from "../components/home/ActionsBar";
import CountryCard from "../components/home/CountryCard";
import PlaceholderCard from "../components/home/PlaceholderCard";
/**
 *
 * @Details
 *  Vista principal de la aplicación
 *  Componentes:
 *    Barra de acciones(Busqueda/Filtro) - ActionBar.jsx
 *    Carta de pais - CountryCard.jsx
 *
 */

const Home = () => {
  let dispatch = useDispatch();
  let placeHolders = [1, 2, 3, 4];
  const countries = useSelector((state) => state.countries.countries);
  const filteredCountries = useSelector(
    (state) => state.countries.filteredCountries
  );

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <Paper sx={{ minHeight: "100vh" }}>
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
          : filteredCountries.length > 0
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
