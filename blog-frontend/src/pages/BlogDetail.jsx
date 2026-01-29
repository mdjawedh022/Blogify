import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Added useDispatch
import {
  Container,
  Typography,
  Button,
  Box,
  Divider,
  Paper,
  Avatar,
  Stack,
  Chip,
  CircularProgress, 
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

// Import your action (ensure path is correct)
import { fetchPublishedBlogs } from "../redux/blog/blogActions";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200";

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 1. Get blogs AND loading state from Redux
  const { blogs, loading } = useSelector((state) => state.blog);

  // 2. Find the specific blog
  const blog = blogs.find((b) => b.id === parseInt(id));

  // 3. EFFECT: Handle Refresh & Scroll
  useEffect(() => {
    window.scrollTo(0, 0);

    // If user refreshes and blogs are gone, fetch them again
    if (blogs.length === 0) {
      dispatch(fetchPublishedBlogs());
    }
  }, [dispatch, blogs.length]);

  // 4. LOADING STATE: Show while fetching data on refresh
  if (loading && !blog) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // 5. ERROR STATE: Only show if NOT loading and blog still not found
  if (!blog) {
    return (
      <Container sx={{ py: 15, textAlign: "center" }}>
        <Typography variant="h4" fontWeight={700}>
          Post Not Found
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          sx={{ mt: 2, borderRadius: 2 }}
        >
          Return to Feed
        </Button>
      </Container>
    );
  }

  // 6. MAIN CONTENT: Render once blog is found
  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
      {/* Fixed Navigation Bar */}
      <Box
        sx={{
          borderBottom: "1px solid #f0f0f0",
          py: 1.5,
          position: "sticky",
          top: 0,
          bgcolor: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(8px)",
          zIndex: 10,
        }}
      >
        <Container maxWidth="md">
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            sx={{
              color: "text.primary",
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Back to Articles
          </Button>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ pt: 6, pb: 10 }}>
        {/* Header Section */}
        <Box sx={{ mb: 4, textAlign: "left" }}>
          <Chip
            label="Published Content"
            size="small"
            color="primary"
            sx={{ mb: 2, borderRadius: 1, fontWeight: 600 }}
          />
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "3.2rem" },
              mb: 3,
              lineHeight: 1.1,
            }}
          >
            {blog.title}
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar sx={{ width: 40, height: 40, bgcolor: "primary.main" }}>
              {blog.user?.[0] || "A"}
            </Avatar>
            <Box>
              <Typography variant="subtitle2" fontWeight={700}>
                {blog.user || "Admin User"}
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                color="text.secondary"
              >
                <CalendarTodayIcon sx={{ fontSize: 14 }} />
                <Typography variant="caption">
                  {blog.date || "January 30, 2026"}
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Box>

        {/* Featured Image */}
        <Box sx={{ width: "100%", borderRadius: 4, overflow: "hidden", mb: 6 }}>
          <Box
            component="img"
            src={DEFAULT_IMAGE}
            alt={blog.title}
            sx={{ width: "100%", height: "auto", display: "block" }}
          />
        </Box>

        {/* Optimized Content Section */}
        <Box
          sx={{
            maxWidth: "780px",
            mx: "auto",
            mt: 6,
            px: { xs: 2, sm: 3 },
            borderLeft: "4px solid #e0e7ff",
            pl: { xs: 2, sm: 3 },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.05rem", md: "1.2rem" },
              lineHeight: 1.9,
              color: "#2d3748",
              textAlign: "justify",
              whiteSpace: "pre-line",
              letterSpacing: "0.2px",

              "& p": {
                mb: 3,
              },

              "&::first-letter": {
                fontSize: "3rem",
                fontWeight: 700,
                float: "left",
                lineHeight: 1,
                pr: 1,
                color: "#1e40af",
              },
            }}
          >
            {blog.content}
          </Typography>
        </Box>

        {/* Bottom Section */}
        <Box sx={{ mt: 10 }}>
          <Divider sx={{ mb: 6 }} />
          <Paper
            variant="outlined"
            sx={{
              p: { xs: 3, md: 5 },
              textAlign: "center",
              bgcolor: "#fcfcfc",
              borderRadius: 4,
              borderStyle: "dashed",
            }}
          >
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Thanks for reading!
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 3, maxWidth: "500px", mx: "auto" }}
            >
              If you found this helpful, feel free to share it or check out our
              other articles.
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button
                variant="contained"
                disableElevation
                sx={{ borderRadius: 2, px: 4 }}
              >
                Share
              </Button>
              <Button
                variant="outlined"
                onClick={() => navigate("/")}
                sx={{ borderRadius: 2 }}
              >
                Explore More
              </Button>
            </Stack>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default BlogDetail;
