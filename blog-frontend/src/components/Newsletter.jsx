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
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import newsletterBg from "../assets/banner.avif";

const Newsletter = () => {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 10, md: 15 },
        px: 2,
        overflow: "hidden",
        backgroundColor: "#020617",
      }}
    >
      {/* Background Image with Parallax-like feel */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${newsletterBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to bottom, 
              ${alpha("#020617", 0.9)}, 
              ${alpha("#2563eb", 0.2)}, 
              ${alpha("#020617", 0.9)})`,
          },
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2 , maxWidth:{xs:"100%",md:"md"} }}>
        <Box
          sx={{
            p: { xs: 1, md: 8 },
            borderRadius: { xs: 6, md: 10 },
            textAlign: "center",
            backdropFilter: "blur(15px)",
            backgroundColor: alpha("#fff", 0.03),
            border: `1px solid ${alpha("#fff", 0.1)}`,
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
          }}
        >
          {/* Animated Icon Circle */}
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              bgcolor: alpha("#2563eb", 0.1),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 4,
              border: `1px solid ${alpha("#2563eb", 0.3)}`,
              color: "#60a5fa",
            }}
          >
            <EmailIcon sx={{ fontSize: 35 }} />
          </Box>

          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.8rem" },
              fontWeight: 900,
              color: "#fff",
              mb: 2,
              letterSpacing: "-0.02em",
            }}
          >
            Keep Up to Date
          </Typography>

          <Typography
            sx={{
              mb: 6,
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              color: "#94a3b8",
              maxWidth: "500px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Join our developer community and get the latest tutorials, industry
            news, and code snippets delivered weekly.
          </Typography>

          {/* Integrated Modern Input Group */}
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              maxWidth: "550px",
              mx: "auto",
              p: 1,
              borderRadius: { xs: 4, sm: "24px" },
              bgcolor: { xs: "transparent", sm: alpha("#fff", 0.05) },
              border: { xs: "none", sm: `1px solid ${alpha("#fff", 0.1)}` },
              transition: "0.3s",
              "&:focus-within": {
                borderColor: alpha("#2563eb", 0.5),
                boxShadow: `0 0 20px ${alpha("#2563eb", 0.2)}`,
              },
            }}
          >
            <TextField
              fullWidth
              placeholder="Enter your email address"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start" sx={{ ml: 2 }}>
                    <EmailIcon sx={{ color: "#64748b" }} />
                  </InputAdornment>
                ),
                sx: {
                  color: "#fff",
                  height: "54px",
                  fontSize: "1rem",
                },
              }}
              sx={{
                bgcolor: { xs: alpha("#fff", 0.05), sm: "transparent" },
                borderRadius: { xs: "16px", sm: 0 },
                px: { xs: 1, sm: 0 },
              }}
            />

            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                height: "54px",
                px: 4,
                borderRadius: { xs: "16px", sm: "18px" },
                bgcolor: "#2563eb",
                fontWeight: 700,
                textTransform: "none",
                boxShadow: "0 10px 15px -3px rgba(37, 99, 235, 0.4)",
                "&:hover": {
                  bgcolor: "#1d4ed8",
                  transform: "translateY(-2px)",
                },
                transition: "0.3s",
              }}
            >
              Subscribe
            </Button>
          </Box>

          <Typography
            variant="caption"
            sx={{ color: "#475569", display: "block", mt: 3, fontWeight: 500 }}
          >
            We respect your privacy. Unsubscribe at any time.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Newsletter;
