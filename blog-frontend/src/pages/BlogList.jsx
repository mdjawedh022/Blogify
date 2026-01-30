import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CircularProgress,
  Alert,
  Divider,
  Chip,
} from "@mui/material";
import { fetchPublishedBlogs } from "../redux/blog/blogActions";

function BlogList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, blogs, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchPublishedBlogs());
  }, [dispatch]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress thickness={5} size={50} />
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Hero / Header Section with Top Padding */}
      <Box
        sx={{
          pt: { xs: 8, md: 12 }, // Large top padding
          pb: { xs: 6, md: 8 },
          background: "linear-gradient(to bottom, #ffffff, #f9f9f9)",
          borderBottom: "1px solid #eee",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="overline"
            display="block"
            align="center"
            gutterBottom
            sx={{ letterSpacing: 2, color: "primary.main", fontWeight: "bold" }}
          >
            Our Notebook
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            align="center"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "3.75rem" },
              mb: 2,
            }}
          >
            Latest Insights
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
          >
            Exploring the world of technology, design, and development.
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {error ? (
          <Alert severity="error" variant="outlined">
            {error}
          </Alert>
        ) : (
          <Grid container spacing={4}>
            {blogs &&
              blogs.reverse().map((blog) => (
                <Grid item key={blog.id} xs={12} sm={6} md={4}>
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 4,
                      border: "1px solid #e0e0e0",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
                        borderColor: "primary.main",
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Chip
                        label="Article"
                        size="small"
                        sx={{ mb: 2, borderRadius: 1 }}
                        color="primary"
                        variant="outlined"
                      />
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{ fontWeight: 700, lineHeight: 1.3, mb: 2 }}
                      >
                        {blog.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.7,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {blog.content}
                      </Typography>
                    </CardContent>

                    <Divider variant="middle" />

                    <Box sx={{ p: 3 }}>
                      <Button
                        variant="text"
                        color="primary"
                        sx={{
                          fontWeight: "bold",
                          px: 0,
                          "&:hover": {
                            backgroundColor: "transparent",
                            textDecoration: "underline",
                          },
                        }}
                        onClick={() => navigate(`/blog/${blog.id}`)}
                      >
                        Read Full Article →
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
          </Grid>
        )}

        {blogs?.length === 0 && !loading && !error && (
          <Box textAlign="center" py={10}>
            <Typography variant="h6" color="text.secondary">
              No published blogs available at the moment.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default BlogList;
