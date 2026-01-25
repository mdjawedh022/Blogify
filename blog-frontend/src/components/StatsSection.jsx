import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import GroupIcon from "@mui/icons-material/Group";
import StarIcon from "@mui/icons-material/Star";

const stats = [
  {
    icon: <ArticleIcon fontSize="large" />,
    value: "120+",
    label: "Blogs Published",
  },
  {
    icon: <GroupIcon fontSize="large" />,
    value: "5,000+",
    label: "Monthly Readers",
  },
  {
    icon: <StarIcon fontSize="large" />,
    value: "4.8 / 5",
    label: "Average Rating",
  },
];

const StatsSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        px: 2,
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        color: "#fff",
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: 26, md: 36 },
            fontWeight: 700,
          mb: 2,
          letterSpacing: "-0.5px",
        }}
      >
        Trusted by Thousands of Readers
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          maxWidth: 620,
          mx: "auto",
          mb: 8,
          fontSize: { xs: 14, md: 16 },
          color: "#cbd5f5",
          lineHeight: 1.7,
        }}
      >
        We share high-quality, practical content that developers actually love
        to read and apply in real projects.
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={4} justifyContent="center">
        {stats.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                height: "100%",
                p: 4,
                textAlign: "center",
                borderRadius: 4,
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.15)",
                transition: "all 0.35s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 20px 40px rgba(37, 99, 235, 0.25)",
                },
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  mx: "auto",
                  mb: 3,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #2563eb, #60a5fa)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                {item.icon}
              </Box>

              {/* Number */}
              <Typography
                sx={{
               fontSize: { xs: 26, md: 36 },
            fontWeight: 700,
                  mb: 1,
                }}
              >
                {item.value}
              </Typography>

              {/* Label */}
              <Typography
                sx={{
                  fontSize: 15,
                  color: "#cbd5f5",
                  letterSpacing: "0.3px",
                }}
              >
                {item.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSection;
