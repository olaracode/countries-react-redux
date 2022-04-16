import React from "react";
import { Card, CardMedia, CardContent, Box } from "@mui/material";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const cardStyles = {
  paddingY: "3vh",
  paddingX: "2vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const PlaceholderCard = ({ placeholder }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image="https://via.placeholder.com/100"
        alt="Country"
      />
      <CardContent>
        <Box sx={cardStyles}>
          <Box
            sx={{ height: "20px", width: "80%", backgroundColor: "#fafafa" }}
          />
          <Box
            sx={{
              height: "16px",
              width: "70%",
              backgroundColor: "#fafafa",
              marginBottom: 1,
              marginTop: 3,
            }}
          />
          <Box
            sx={{
              height: "16px",
              width: "60%",
              backgroundColor: "#fafafa",
              marginY: 1,
            }}
          />
          <Box
            sx={{
              height: "16px",
              width: "50%",
              backgroundColor: "#fafafa",
              marginY: 1,
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

PlaceholderCard.propTypes = {
  placeholder: PropTypes.number,
};

export default PlaceholderCard;
