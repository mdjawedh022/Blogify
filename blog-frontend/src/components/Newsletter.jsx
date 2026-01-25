import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import newsletterBg from "../assets/banner.avif"; // change if needed

const Newsletter = () => {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 8, md: 12 },
        px: 2,
        textAlign: "center",
        color: "#fff",
        backgroundImage: `url(${newsletterBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.65), rgba(0,0,0,0.75))",
          zIndex: 1,
        },
      }}
    >
      {/* Content Wrapper */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        {/* Heading */}
        <Typography
          sx={{
            fontSize: { xs: 26, md: 36 },
            fontWeight: 700,
            mb: 2,
          }}
        >
          Subscribe to our Newsletter
        </Typography>

        {/* Subtext */}
        <Typography
          sx={{
            mb: 6,
            fontSize: { xs: 14, md: 16 },
            color: "#e5e7eb",
            maxWidth: 620,
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
          Get updates on the latest blogs, tutorials, and insights directly in
          your inbox. No spam, just quality content.
        </Typography>

        {/* Input + Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
            maxWidth: 520,
            mx: "auto",
          }}
        >
          <TextField
            placeholder="Enter your email"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: "#2563eb" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: "#fff",
              borderRadius: 2,
              flex: 1,
              minWidth: { xs: "100%", sm: 300 },
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                height: 50,
              },
            }}
          />

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2563eb",
              color: "#fff",
              textTransform: "none",
              fontSize: 15,
              fontWeight: 600,
              height: 50,
              px: 4,
              borderRadius: 2,
              whiteSpace: "nowrap",
              "&:hover": { backgroundColor: "#1e40af" },
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Newsletter;
