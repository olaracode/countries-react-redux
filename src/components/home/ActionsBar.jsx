import React from "react";
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

const ActionsBar = () => {
  return (
    <Grid container sx={{ justifyContent: "space-between" }}>
      <Grid item lg={4} xs={8}>
        <TextField
          placeholder="Search for a country..."
          fullWidth
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
