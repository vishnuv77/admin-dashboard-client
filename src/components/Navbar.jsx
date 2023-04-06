import React from "react";
import { Box, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      <Typography variant="h6" component="h1">
        Dashboard
      </Typography>
      <Typography variant="body1">hello@example.com</Typography>
    </Box>
  );
};

export default Navbar;
