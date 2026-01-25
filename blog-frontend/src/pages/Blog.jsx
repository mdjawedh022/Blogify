"use client";
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
} from "@mui/material";

const blogPosts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    excerpt:
      "React Hooks let you use state and other React features without writing a class...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2k9R51R1Lj6NgwdDO3p32fzdtE4-z5hXZBw&s",
    category: "React",
    date: "Jan 20, 2026",
    link: "/blog/react-hooks",
  },
  {
    id: 2,
    title: "JavaScript ES2026 Features",
    excerpt:
      "ES2026 introduces some exciting new features for JavaScript developers...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2k9R51R1Lj6NgwdDO3p32fzdtE4-z5hXZBw&s",
    category: "JavaScript",
    date: "Jan 18, 2026",
    link: "/blog/es2026",
  },
  {
    id: 3,
    title: "Building Responsive UI with MUI",
    excerpt:
      "Learn how to build beautiful and responsive user interfaces using Material UI...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2k9R51R1Lj6NgwdDO3p32fzdtE4-z5hXZBw&s",
    category: "UI Design",
    date: "Jan 15, 2026",
    link: "/blog/mui-responsive",
  },
  {
    id: 1,
    title: "Understanding React Hooks",
    excerpt:
      "React Hooks let you use state and other React features without writing a class...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2k9R51R1Lj6NgwdDO3p32fzdtE4-z5hXZBw&s",
    category: "React",
    date: "Jan 20, 2026",
    link: "/blog/react-hooks",
  },
  {
    id: 2,
    title: "JavaScript ES2026 Features",
    excerpt:
      "ES2026 introduces some exciting new features for JavaScript developers...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2k9R51R1Lj6NgwdDO3p32fzdtE4-z5hXZBw&s",
    category: "JavaScript",
    date: "Jan 18, 2026",
    link: "/blog/es2026",
  },
  {
    id: 3,
    title: "Building Responsive UI with MUI",
    excerpt:
      "Learn how to build beautiful and responsive user interfaces using Material UI...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2k9R51R1Lj6NgwdDO3p32fzdtE4-z5hXZBw&s",
    category: "UI Design",
    date: "Jan 15, 2026",
    link: "/blog/mui-responsive",
  },
  {
    id: 1,
    title: "Understanding React Hooks",
    excerpt:
      "React Hooks let you use state and other React features without writing a class...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2k9R51R1Lj6NgwdDO3p32fzdtE4-z5hXZBw&s",
    category: "React",
    date: "Jan 20, 2026",
    link: "/blog/react-hooks",
  },
  {
    id: 2,
    title: "JavaScript ES2026 Features",
    excerpt:
      "ES2026 introduces some exciting new features for JavaScript developers...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2k9R51R1Lj6NgwdDO3p32fzdtE4-z5hXZBw&s",
    category: "JavaScript",
    date: "Jan 18, 2026",
    link: "/blog/es2026",
  },
  {
    id: 3,
    title: "Building Responsive UI with MUI",
    excerpt:
      "Learn how to build beautiful and responsive user interfaces using Material UI...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2k9R51R1Lj6NgwdDO3p32fzdtE4-z5hXZBw&s",
    category: "UI Design",
    date: "Jan 15, 2026",
    link: "/blog/mui-responsive",
  },
];

const Blog = () => {
  return (
    <Box sx={{ background: "#eef2ff", py: { xs: 8, md: 14 }, px: 2 }}>
      {/* Hero Section */}
      <Box
        sx={{
          maxWidth: 900,
          mx: "auto",
          mb: 10,
          mt:10,
          p: 5,
          textAlign: "center",
          borderRadius: 3,
          background: "linear-gradient(135deg, #2d3648, #253a7f)",
          color: "#fff",
          boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 32, md: 48 },
            fontWeight: 900,
            mb: 2,
            background: "linear-gradient(90deg, #ff6a00, #ffcc00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Welcome to Our Blog
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 16, md: 18 },
            color: "#f0f4ff",
            maxWidth: 700,
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Stay updated with the latest tutorials, tips, and news from our team.
          Explore our guides, learn something new, and keep your skills sharp.
        </Typography>
      </Box>

      {/* Blog Cards */}
      <Grid container spacing={5} justifyContent="center">
        {blogPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                overflow: "hidden",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                />
                <Chip
                  label={post.category}
                  color="primary"
                  sx={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    background: "linear-gradient(135deg, #2563eb, #1e40af)",
                    color: "#fff",
                  }}
                />
              </Box>

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    color: "#0f172a",
                    transition: "color 0.3s",
                    "&:hover": { color: "#2563eb" },
                  }}
                >
                  {post.title}
                </Typography>
                <Typography sx={{ fontSize: 14, color: "#475569", mb: 2 }}>
                  {post.excerpt}
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#94a3b8" }}>
                  {post.date}
                </Typography>
              </CardContent>

              <Box sx={{ p: 2, pt: 0 }}>
                <Button
                  href={post.link}
                  variant="contained"
                  sx={{
                    background: "linear-gradient(135deg, #2563eb, #1e40af)",
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": { opacity: 0.9 },
                  }}
                  fullWidth
                >
                  Read More
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Blog;
