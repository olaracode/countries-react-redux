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

const ActionsBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchByName(e.target.value));
  };

  return (
    <Grid container sx={{ justifyContent: "space-between" }}>
      <Grid item lg={4} xs={8}>
        <TextField
          placeholder="Search for a country..."
          fullWidth
          onChange={(e) => handleSearch(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ border: "none" }}
        />
      </Grid>
      <Grid item lg={2} xs={6}>
        <FormControl fullWidth>
          <InputLabel id="filter">Filter By Region</InputLabel>
          <Select
            label="Filter By Region"
            labelId="filter"
            autoWidth
            MenuProps={{
              PaperProps: {
                sx: { marginTop: "10px" },
              },
            }}
          >
            <MenuItem value="">America</MenuItem>
            <MenuItem value="">Africa</MenuItem>
            <MenuItem value="">America</MenuItem>
            <MenuItem value="">America</MenuItem>
            <MenuItem value="">America</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default ActionsBar;
