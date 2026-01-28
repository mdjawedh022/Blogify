import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Container,
  alpha,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
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
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#0f172a",
        pt: { xs: 12, md: 0 },
        pb: { xs: 4, md: 0 },
      }}
    >
      {/* Background Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `linear-gradient(to bottom, 
              ${alpha("#0f172a", 0.8)} 0%, 
              ${alpha("#0f172a", 0.4)} 50%, 
              ${alpha("#0f172a", 0.95)} 100%)`,
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "900px",
            mx: "auto",
            px: { xs: 2, sm: 0 },
          }}
        >
          {/* Responsive Badge */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: { xs: 1.5, md: 2 },
              py: 0.5,
              mb: { xs: 2, md: 4 },
              borderRadius: "50px",
              bgcolor: alpha("#2563eb", 0.15),
              border: `1px solid ${alpha("#2563eb", 0.3)}`,
              backdropFilter: "blur(10px)",
            }}
          >
            <TrendingUpIcon
              sx={{ color: "#60a5fa", fontSize: { xs: 14, md: 18 } }}
            />
            <Typography
              variant="caption"
              sx={{
                color: "#dbeafe",
                fontWeight: 700,
                letterSpacing: 1,
                fontSize: { xs: "0.65rem", md: "0.75rem" },
              }}
            >
              LATEST INSIGHTS FOR 2026
            </Typography>
          </Box>

          {/* Hero Title - Fluid Font Size */}
          <Typography
            sx={{
              fontSize: {
                xs: "2.2rem", // Small mobile
                sm: "3.2rem", // Tablets
                md: "4.5rem", // Desktop
              },
              fontWeight: 900,
              color: "#fff",
              lineHeight: { xs: 1.2, md: 1.1 },
              mb: { xs: 2, md: 3 },
              letterSpacing: "-0.04em",
              textShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          >
            Discover the{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #60a5fa, #2563eb)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              latest news
            </Box>{" "}
            & insights
          </Typography>

          {/* Subtitle - Fluid Font Size */}
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              color: alpha("#fff", 0.7),
              mb: { xs: 4, md: 6 },
              lineHeight: 1.6,
              maxWidth: "700px",
              mx: "auto",
              px: { xs: 2, md: 0 },
            }}
          >
            Stay ahead of the curve with deep dives into industry trends and
            expertly crafted stories designed for the modern reader.
          </Typography>

          {/* Glassmorphic Search Bar - Stacks on Mobile */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 1.5, sm: 2 },
              mb: { xs: 2, md: 6 },
              width: "100%",
            }}
          >
            <TextField
              placeholder="Search by topic..."
              variant="outlined"
              fullWidth
              sx={{
                maxWidth: { xs: "100%", sm: "450px" },
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  bgcolor: alpha("#fff", 0.07),
                  backdropFilter: "blur(20px)",
                  borderRadius: { xs: "12px", md: "16px" },
                  border: `1px solid ${alpha("#fff", 0.1)}`,
                  height: { xs: "50px", md: "56px" },
                  "& fieldset": { border: "none" },
                  "&.Mui-focused": {
                    bgcolor: alpha("#fff", 0.12),
                    border: `1px solid ${alpha("#2563eb", 0.5)}`,
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon
                      sx={{ color: "#60a5fa", fontSize: { xs: 20, md: 24 } }}
                    />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              variant="contained"
              fullWidth={false}
              sx={{
                width: { xs: "100%", sm: "auto" },
                height: { xs: "50px", md: "56px" },
                px: 4,
                borderRadius: { xs: "12px", md: "16px" },
                bgcolor: "#2563eb",
                fontWeight: 700,
                textTransform: "none",
                fontSize: { xs: "0.9rem", md: "1rem" },
                "&:hover": {
                  bgcolor: "#1d4ed8",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Find Blogs
            </Button>
          </Box>

          {/* Secondary Link */}
          <Button
            variant="text"
            sx={{
              color: "#fff",
              fontWeight: 600,
              fontSize: { xs: "0.85rem", md: "1rem" },
              "&:hover": { color: "#60a5fa", bgcolor: "transparent" },
              textDecoration: "underline",
              textUnderlineOffset: "8px",
            }}
          >
            {heroLinks.secondary.label}
          </Button>
        </Box>
      </Container>

      {/* Bottom Fade */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: { xs: "80px", md: "150px" },
          background: "linear-gradient(to top, #0f172a, transparent)",
          zIndex: 1,
        }}
      />
    </Box>
  );
}

export default Hero;
