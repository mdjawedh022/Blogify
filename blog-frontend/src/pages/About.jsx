import React from "react";
import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";

const About = () => {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #24282f, #28487e)",
          color: "#fff",
          py: { xs: 25, md: 12,lg:20 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: "2rem", md: "2.8rem" },
          }}
        >
          About Our Blog
        </Typography>

        <Typography
          sx={{
            maxWidth: 700,
            mx: "auto",
            fontSize: { xs: "1rem", md: "1.1rem" },
            opacity: 0.9,
          }}
        >
          Sharing knowledge, insights, and stories to help readers grow and stay
          informed.
        </Typography>
      </Box>

      {/* ===== About Content ===== */}
      <Container sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={5} alignItems="center">
          {/* Left Text */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "1.6rem", md: "2rem" },
              }}
            >
              Who We Are
            </Typography>

            <Typography
              sx={{
                color: "#555",
                lineHeight: 1.8,
                fontSize: "1rem",
              }}
            >
              Our blog is a platform created for readers who love learning,
              exploring new ideas, and staying updated with quality content. We
              focus on simplicity, clarity, and value in every article we
              publish.
            </Typography>

            <Typography
              sx={{
                color: "#555",
                lineHeight: 1.8,
                mt: 2,
                fontSize: "1rem",
              }}
            >
              Whether you are a beginner or an experienced reader, our goal is
              to provide content that is helpful, engaging, and easy to
              understand.
            </Typography>
          </Grid>

          {/* Right Cards */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 3, borderRadius: 3 }}>
                  <Typography fontWeight={700} mb={1}>
                    Our Mission
                  </Typography>
                  <Typography color="#666" fontSize="0.95rem">
                    To deliver reliable and easy-to-understand content that
                    empowers readers.
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 3, borderRadius: 3 }}>
                  <Typography fontWeight={700} mb={1}>
                    Our Vision
                  </Typography>
                  <Typography color="#666" fontSize="0.95rem">
                    To become a trusted knowledge hub for readers worldwide.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* ===== Why Choose Us ===== */}
      <Box sx={{ backgroundColor: "#f9fafc", py: { xs: 6, md: 10 } }}>
        <Container>
          <Typography
            textAlign="center"
            fontWeight={700}
            sx={{
              mb: 5,
              fontSize: { xs: "1.6rem", md: "2rem" },
            }}
          >
            Why Choose Us?
          </Typography>

          <Grid container spacing={4}>
            {[
              "High quality content",
              "Simple & clear explanations",
              "Regular updates",
              "Reader-focused approach",
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    textAlign: "center",
                    borderRadius: 3,
                    height: "100%",
                  }}
                >
                  <Typography fontWeight={600}>{item}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ===== CTA Section ===== */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          textAlign: "center",
        }}
      >
        <Typography
          fontWeight={700}
          sx={{
            mb: 2,
            fontSize: { xs: "1.5rem", md: "1.8rem" },
          }}
        >
          Join Our Reading Community
        </Typography>

        <Typography sx={{ color: "#666", mb: 3 }}>
          Subscribe to stay updated with our latest posts and insights.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            px: 4,
            py: 1.2,
            borderRadius: 2,
            backgroundColor: "#1e3c72",
          }}
        >
          Subscribe Now
        </Button>
      </Box>
    </>
  );
};

export default About;
