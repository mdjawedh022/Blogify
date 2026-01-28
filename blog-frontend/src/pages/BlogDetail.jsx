import React from "react";
import { Box, Typography, Button, Container, Chip } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../Data/blog";

function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find blog by slug from link
  const blog = blogPosts.find((b) => b.link === `/blog/${slug}`);

  if (!blog) {
    return (
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h5">Blog not found 😢</Typography>
        <Button onClick={() => navigate("/blog")} sx={{ mt: 2 }}>
          Go Back to Blog
        </Button>
      </Container>
    );
  }

  return (
    <>
      {/* ===== Blog Banner Image ===== */}
      <Box
        sx={{
          height: { xs: 260, md: 360 },
          backgroundImage: `url(${blog.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* ===== Blog Content ===== */}
      <Container maxWidth="md" sx={{ py: 6 }}>
        {/* Back Button */}
        <Button
          onClick={() => navigate(-1)}
          sx={{
            mb: 3,
            textTransform: "none",
            color: "#2563eb",
            fontWeight: 600,
          }}
        >
          ← Back to Blog
        </Button>

        {/* Category + Date */}
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <Chip
            label={blog.category}
            sx={{
              backgroundColor: "#e0e7ff",
              color: "#1e40af",
              fontWeight: 600,
            }}
          />
          <Typography color="text.secondary">{blog.date}</Typography>
        </Box>

        {/* Title */}
        <Typography fontSize={{ xs: 26, md: 34 }} fontWeight={800} mb={3}>
          {blog.title}
        </Typography>

        {/* Content */}
        <Typography fontSize={16} lineHeight={1.9} color="text.secondary">
          {blog.excerpt}
        </Typography>

        {/* Dummy full content (replace later with real HTML/content) */}
        <Typography fontSize={16} lineHeight={1.9} mt={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nunc ut laoreet facilisis, nunc nisl aliquet nunc, vitae aliquam nisl
          nunc eu nisl. Cras sit amet sapien sed lorem tincidunt tincidunt.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas.
        </Typography>
      </Container>
    </>
  );
}

export default BlogDetail;
