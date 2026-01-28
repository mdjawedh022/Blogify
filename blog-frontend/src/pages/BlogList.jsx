import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Container,
  Chip,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "../Data/blog";

// Banner image
import blogBanner from "../assets/banner.avif";

function BlogList() {
  const navigate = useNavigate();

  return (
    <>
      {/* ===== Banner Section ===== */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 280, md: 360 },
          backgroundImage: `url(${blogBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(15,23,42,0.85), rgba(30,64,175,0.85))",
          }}
        />

        <Container
          maxWidth="md"
          sx={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Typography fontSize={{ xs: 32, md: 44 }} fontWeight={800} mb={2}>
            Our Blog
          </Typography>
          <Typography fontSize={18} sx={{ opacity: 0.9 }}>
            Articles, tutorials & insights for modern web developers.
          </Typography>
        </Container>
      </Box>

      {/* ===== Blog Grid ===== */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {blogPosts.map((blog, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  },
                }}
              >
                {/* Blog Image */}
                <CardMedia
                  component="img"
                  height="180"
                  image={blog.image}
                  alt={blog.title}
                />

                <CardContent sx={{ p: 3 }}>
                  {/* Category + Date */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 1.5,
                    }}
                  >
                    <Chip
                      label={blog.category}
                      size="small"
                      sx={{
                        backgroundColor: "#e0e7ff",
                        color: "#1e40af",
                        fontWeight: 600,
                      }}
                    />
                    <Typography fontSize={13} color="text.secondary">
                      {blog.date}
                    </Typography>
                  </Box>

                  {/* Title */}
                  <Typography
                    fontSize={18}
                    fontWeight={700}
                    lineHeight={1.4}
                    mb={1}
                  >
                    {blog.title}
                  </Typography>

                  {/* Excerpt */}
                  <Typography
                    fontSize={14}
                    color="text.secondary"
                    lineHeight={1.7}
                    mb={2}
                  >
                    {blog.excerpt}
                  </Typography>

                  {/* Read More */}
                  <Button
                    onClick={() => navigate(blog.link)}
                    sx={{
                      textTransform: "none",
                      fontWeight: 600,
                      color: "#2563eb",
                      p: 0,
                      "&:hover": {
                        backgroundColor: "transparent",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default BlogList;
