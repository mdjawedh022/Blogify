import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Avatar,
  Stack,
  alpha,
} from "@mui/material";
import {
  AutoGraph,
  AutoStories,
  Groups,
  Verified,
  ArrowForward,
  TipsAndUpdates,
} from "@mui/icons-material";

const About = () => {
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      {/* ===== Hero Section: Glassmorphism & Mesh Gradient ===== */}
      <Box
        sx={{
          position: "relative",
          background:
            "radial-gradient(circle at 20% 50%, #28487e 0%, #1a1c22 100%)",
          color: "#fff",
          pt: { xs: 15, md: 25 },
          pb: { xs: 10, md: 20 },
          overflow: "hidden",
        }}
      >
        {/* Decorative background element */}
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            right: "-5%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "linear-gradient(45deg, rgba(63, 81, 181, 0.2), transparent)",
            filter: "blur(80px)",
          }}
        />

        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="overline"
            sx={{ fontWeight: 800, color: "#4f91ff", letterSpacing: 3 }}
          >
            OUR STORY
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.5rem", md: "4rem" },
              mb: 3,
              lineHeight: 1.1,
              background: "linear-gradient(to bottom, #ffffff, #b0b0b0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Empowering Minds <br /> Through Quality Content.
          </Typography>
          <Typography
            sx={{
              maxWidth: 600,
              mx: "auto",
              fontSize: "1.2rem",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.6,
            }}
          >
            We bridge the gap between complex information and daily application,
            helping thousands of readers grow every day.
          </Typography>
        </Container>
      </Box>

      {/* ===== Split Content Section: High Visual Impact ===== */}
      <Container sx={{ py: { xs: 8, md: 15 } }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                sx={{
                  width: "100%",
                  borderRadius: 8,
                  boxShadow: "0 32px 64px rgba(0,0,0,0.15)",
                  zIndex: 2,
                  position: "relative",
                }}
              />
              {/* Floating Stat Card */}
              <Paper
                sx={{
                  position: "absolute",
                  bottom: -30,
                  right: -20,
                  p: 3,
                  borderRadius: 4,
                  display: { xs: "none", sm: "block" },
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  zIndex: 3,
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar sx={{ bgcolor: "#4f91ff" }}>
                    <Groups />
                  </Avatar>
                  <Box>
                    <Typography fontWeight={900}>50K+</Typography>
                    <Typography variant="caption" color="textSecondary">
                      Active Readers
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              fontWeight={800}
              gutterBottom
              sx={{ letterSpacing: -1 }}
            >
              Who We Are
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              paragraph
              sx={{ fontSize: "1.1rem", mb: 4 }}
            >
              Founded in 2024, our blog serves as a beacon for those navigating
              the vast sea of digital information. We believe that clarity is
              the ultimate sophistication.
            </Typography>

            <Stack spacing={3}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Verified color="primary" />
                <Box>
                  <Typography fontWeight={700}>Verified Insights</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Every article is researched and fact-checked by experts.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <TipsAndUpdates color="primary" />
                <Box>
                  <Typography fontWeight={700}>Actionable Knowledge</Typography>
                  <Typography variant="body2" color="text.secondary">
                    We don't just share news; we share "how-to" guides for
                    growth.
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      {/* ===== Feature Grid: Bento Box Style ===== */}
      <Box sx={{ bgcolor: "#f8fafc", py: { xs: 8, md: 12 } }}>
        <Container>
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h4"
              fontWeight={900}
              gutterBottom
              sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" } }}
            >
              Our Core Values
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ fontSize: { xs: "0.95rem", md: "1rem" } }}
            >
              The principles that guide our editorial team.
            </Typography>
          </Box>

          <Grid
            container
            spacing={{ xs: 3, md: 4 }}
            justifyContent="center" // Center all cards horizontally
          >
            {[
              {
                title: "Transparency",
                icon: <AutoStories />,
                color: "#6366f1",
              },
              { title: "Growth", icon: <AutoGraph />, color: "#10b981" },
              { title: "Quality", icon: <Verified />, color: "#f59e0b" },
              { title: "Community", icon: <Groups />, color: "#ef4444" },
            ].map((feature, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center", // Center each card inside the Grid item
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: 4,
                    textAlign: "center",
                    border: "1px solid #e2e8f0",
                    transition: "0.3s",
                    maxWidth: 300, // Optional: limit card width
                    width: "100%",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                      borderColor: feature.color,
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: alpha(feature.color, 0.1),
                      color: feature.color,
                      mx: "auto",
                      mb: 2,
                      width: { xs: 50, sm: 55, md: 60 },
                      height: { xs: 50, sm: 55, md: 60 },
                    }}
                  >
                    {feature.icon}
                  </Avatar>
                  <Typography
                    fontWeight={800}
                    variant="h6"
                    sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, fontSize: { xs: "0.85rem", md: "0.95rem" } }}
                  >
                    Ensuring every reader finds the value they are looking for.
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ===== CTA Section: Modern Gradient Card ===== */}
      <Container sx={{ py: 10 }}>
        <Paper
          sx={{
            p: { xs: 4, md: 8 },
            borderRadius: 10,
            textAlign: "center",
            background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
            color: "#fff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Typography variant="h3" fontWeight={900} sx={{ mb: 2 }}>
            Ready to start reading?
          </Typography>
          <Typography sx={{ opacity: 0.8, mb: 4, maxWidth: 600, mx: "auto" }}>
            Join our newsletter and never miss an update on the latest tech,
            lifestyle, and professional insights.
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            sx={{
              bgcolor: "#fff",
              color: "#1e3c72",
              fontWeight: 800,
              px: 6,
              py: 2,
              borderRadius: 4,
              "&:hover": { bgcolor: alpha("#fff", 0.9) },
            }}
          >
            Get Started
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;
