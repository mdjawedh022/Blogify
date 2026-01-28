import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  Avatar,
  Container,
  alpha,
  Rating,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const testimonials = [
  {
    name: "Vicky Sharma",
    role: "Full Stack Developer",
    text: "Amazing articles! I learned so much about React. The content is clear, concise, and easy to follow. A goldmine for devs.",
    avatar: "https://i.pravatar.cc/150?u=divansh",
    rating: 5,
  },
  {
    name: "Divansh Sharma",
    role: "Frontend Engineer",
    text: "The blog posts are very detailed and easy to understand. I really enjoy the practical examples and deep dives.",
    avatar: "https://i.pravatar.cc/150?u=divansh",
    rating: 5,
  },
  {
    name: "Ashish",
    role: "UI/UX Designer",
    text: "Great resource for developers of all levels. I always come back for new insights and tips. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?u=ashish",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        backgroundColor: "#f8fafc", // Very light slate
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)",
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            sx={{
              fontSize: "0.85rem",
              fontWeight: 800,
              color: "#2563eb",
              textTransform: "uppercase",
              letterSpacing: 2,
              mb: 1,
            }}
          >
            Testimonials
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 900,
              color: "#0f172a",
            }}
          >
            What Our Readers Say
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  p: 4,
                  borderRadius: 6,
                  backgroundColor: "#fff",
                  border: "1px solid #e2e8f0",
                  transition: "all 0.4s ease",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
                    borderColor: "#2563eb",
                  },
                }}
              >
                {/* Header: Quote & Rating */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 3,
                  }}
                >
                  <FormatQuoteIcon
                    sx={{ fontSize: 48, color: alpha("#2563eb", 0.2) }}
                  />
                  <Rating
                    value={item.rating}
                    readOnly
                    size="small"
                    sx={{ color: "#2563eb" }}
                  />
                </Box>

                {/* Testimonial Content */}
                <Typography
                  sx={{
                    fontSize: "1.05rem",
                    color: "#475569",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    flexGrow: 1,
                    mb: 4,
                  }}
                >
                  "{item.text}"
                </Typography>

                {/* Author Info */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar
                    src={item.avatar}
                    sx={{
                      width: 50,
                      height: 50,
                      border: "2px solid #2563eb",
                      p: 0.3,
                      bgcolor: "#fff",
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 800,
                        fontSize: "1rem",
                        color: "#0f172a",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        color: "#64748b",
                        fontWeight: 500,
                      }}
                    >
                      {item.role}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
