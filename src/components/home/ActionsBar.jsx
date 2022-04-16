import React, { useState } from "react";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { setSearchByName } from "../../store/countriesSlice";
import { setSearchByRegion } from "../../store/countriesSlice";

/**
 *
 * @returns
 *  Barra de acciones(Busqueda por nombre o continente)
 *
 * @functions
 *  Despacha las funciones busqueda por region y busqueda por nombre al store
 *
 */

const ActionsBar = () => {
  const dispatch = useDispatch();
  const [regionFilter, setRegionFilter] = useState("");

  const handleRegionFilter = (e) => {
    setRegionFilter(e.target.value);
    dispatch(setSearchByRegion(e.target.value));
  };

  const handleSearch = (e) => {
    setRegionFilter("");
    dispatch(setSearchByName(e.target.value));
  };
  return (
    <Grid container sx={{ justifyContent: "space-between" }}>
      <Grid item lg={4} xs={8}>
        <TextField
          placeholder="Search for a country..."
          fullWidth
          variant={"outlined"}
          sx={{ boxShadow: 3 }}
          onChange={(e) => handleSearch(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item lg={2} xs={6} sx={{ marginTop: { lg: 0, sm: 5, xs: 5 } }}>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="filter">Filter By Region</InputLabel>
          <Select
            label="Filter By Region"
            labelId="filter"
            value={regionFilter}
            onChange={handleRegionFilter}
            sx={{ boxShadow: 3 }}
            MenuProps={{
              PaperProps: {
                sx: { marginTop: "10px" },
              },
            }}
          >
            <MenuItem value={""}>None</MenuItem>

            <MenuItem value={"Africa"}>Africa</MenuItem>
            <MenuItem value={"Americas"}>America</MenuItem>
            <MenuItem value={"Asia"}>Asia</MenuItem>
            <MenuItem value={"Europe"}>Europe</MenuItem>
            <MenuItem value={"Oceania"}>Oceania</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default ActionsBar;
