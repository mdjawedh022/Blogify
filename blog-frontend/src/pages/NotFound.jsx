import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const NotFound = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
       mt:5,
        color: "#2f2d2d",
        textAlign: "center",
      }}
    >
      <Box>
        {/* Icon */}
        <ErrorOutlineIcon
          sx={{
            fontSize: 90,
            color: "#60a5fa",
            mb: 2,
          }}
        />

        {/* 404 */}
        <Typography
          sx={{
            fontSize: { xs: 72, md: 96 },
            fontWeight: 900,
            letterSpacing: "-2px",
          }}
        >
          404
        </Typography>

        {/* Text */}
        <Typography
          sx={{
            fontSize: { xs: 20, md: 26 },
            fontWeight: 600,
            mb: 2,
          }}
        >
          Page Not Found
        </Typography>

        <Typography
          sx={{
            maxWidth: 460,
            mx: "auto",
            mb: 4,
            fontSize: 15,
            color: "#2d2e30",
            lineHeight: 1.7,
          }}
        >
          Sorry, the page you are looking for doesn’t exist or has been moved.
          Please check the URL or go back to the homepage.
        </Typography>

        {/* Button */}
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            backgroundColor: "#2563eb",
            textTransform: "none",
            fontWeight: 600,
            px: 4,
            py: 1.2,
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "#1e40af",
            },
          }}
        >
          Back to Home
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
