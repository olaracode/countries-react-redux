import React from "react";
import { Card, CardMedia, CardContent, Box } from "@mui/material";

const cardStyles = {
  paddingY: "3vh",
  paddingX: "2vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const CountryCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        image="https://via.placeholder.com/100"
        alt="Country"
      />
      <CardContent>
        <Box sx={cardStyles}>
          <h3 className="card-title">Country Name</h3>
          <p className="card-description">
            <strong>Population: </strong> 1111111111
          </p>
          <p className="card-description">
            <strong>Region: </strong> 1111111111
          </p>
          <p className="card-description">
            <strong>Capital: </strong> 1111111111
          </p>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
