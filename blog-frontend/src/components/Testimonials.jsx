import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const testimonials = [
  {
    name: "Vicky Sharma",
    text: "Amazing articles! I learned so much about React. The content is clear, concise, and easy to follow.",
    avatar: "https://via.placeholder.com/60",
  },
  {
    name: "Divansh Sharma",
    text: "The blog posts are very detailed and easy to understand. I really enjoy the examples and explanations.",
    avatar: "https://via.placeholder.com/60",
  },
  {
    name: "Ashish",
    text: "Great resource for developers of all levels. I always come back for new insights and tips.",
    avatar: "https://via.placeholder.com/60",
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: { xs: 10, md: 16 }, px: 2, backgroundColor: "#eef2f7" }}>
      {/* Section Heading */}
      <Typography
        sx={{
          fontSize: { xs: 28, md: 36 },
          fontWeight: 700,
          mb: 10,
          textAlign: "center",
          color: "#1e293b",
        }}
      >
        What Our Readers Say
      </Typography>

      {/* Grid */}
      <Grid container spacing={6} justifyContent="center">
        {testimonials.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                boxShadow: 4,
                p: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "0.4s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 8,
                },
                position: "relative",
              }}
            >
              {/* Quote Icon */}
              <FormatQuoteIcon
                sx={{
                  fontSize: 40,
                  color: "#2563eb",
                  position: "absolute",
                  top: 16,
                  left: 16,
                }}
              />

              <CardContent sx={{ mt: 3 }}>
                {/* Testimonial Text */}
                <Typography
                  sx={{
                    fontSize: 15,
                    fontStyle: "italic",
                    color: "#334155",
                    lineHeight: 1.6,
                    mb: 4,
                  }}
                >
                  "{item.text}"
                </Typography>

                {/* Author */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar
                    src={item.avatar}
                    alt={item.name}
                    sx={{ width: 50, height: 50 }}
                  />
                  <Typography
                    sx={{ fontWeight: 600, fontSize: 16, color: "#1e293b" }}
                  >
                    {item.name}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
