import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import banner from "../assets/banner.avif";

const heroLinks = {
  primary: { label: "Explore Blogs", path: "/blog" },
  secondary: { label: "About Us", path: "/about" },
};

function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: { xs: 20, md: 20 },
        px: 2,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)", // dark overlay for readability
          zIndex: 1,
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 2 }}>
        {/* Hero Title */}
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "32px", md: "52px" },
            fontWeight: 700,
            mb: 3,
            lineHeight: 1.2,
          }}
        >
          Discover the{" "}
          <Box component="span" sx={{ color: "#2563eb" }}>
            latest news
          </Box>{" "}
          & insights
        </Typography>

        {/* Hero Paragraph */}
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "16px", md: "18px" },
            color: "#e0e7ff",
            maxWidth: { xs: "90%", sm: "600px", md: "700px" },
            mx: "auto",
            mb: 5,
            lineHeight: 1.8,
          }}
        >
          Stay updated with insightful articles, industry trends, and stories
          that truly matter. Search, explore, and learn from blogs crafted to
          keep you informed and ahead in your field.
        </Typography>

        {/* Search Input */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 5, px: 2 }}>
          <TextField
            placeholder="Search blogs..."
            variant="outlined"
            size="large"
            sx={{
              width: { xs: "100%", sm: "400px", md: "500px" },
              backgroundColor: "#fff",
              borderRadius: 3,
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#2563eb" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* CTA Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 600,
              px: 5,
              py: 1.5,
              borderRadius: 3,
              backgroundColor: "#2563eb",
              textTransform: "none",
              "&:hover": { backgroundColor: "#1e40af" },
            }}
          >
            {heroLinks.primary.label}
          </Button>

          <Button
            variant="outlined"
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 500,
              px: 5,
              py: 1.5,
              borderRadius: 3,
              color: "#2563eb",
              borderColor: "#2563eb",
              textTransform: "none",
              "&:hover": { backgroundColor: "rgba(37,99,235,0.1)" },
            }}
          >
            {heroLinks.secondary.label}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
