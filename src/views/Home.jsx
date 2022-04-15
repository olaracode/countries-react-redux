import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Grid } from "@mui/material";
import { fetchCountries } from "../store/countriesSlice";
import ActionsBar from "../components/home/ActionsBar";
import CountryCard from "../components/home/CountryCard";
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
  console.log(countries);
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  // let filterTerm = "filterTerm";
  return (
    <Paper sx={{ minHeight: "100vh" }}>
      <ActionsBar />
      <Grid container spacing={5} sx={{ marginY: "5vh" }}>
        {placeHolders.map((placeholder) => {
          return (
            <Grid item lg={3} md={6} xs={12}>
              <CountryCard />
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default Home;
