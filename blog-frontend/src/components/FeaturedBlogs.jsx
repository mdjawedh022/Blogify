import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  Chip,
  Container,
  Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { fetchPublishedBlogs } from "../redux/blog/blogActions";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeaturedBlogs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { blogs, loading } = useSelector((state) => state.blog);

  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(fetchPublishedBlogs());
    }
  }, [dispatch, blogs.length]);

  const featuredData = blogs.slice(0, 6);

  if (loading || featuredData.length === 0) return null;

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: "#fafafa" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 2,
              color: "#2563eb",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Editor's Choice
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: 900, fontSize: { xs: "1.8rem", md: "2.6rem" } }}
          >
            Featured Articles
          </Typography>
        </Box>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
        >
          {featuredData.map((blog) => (
            <SwiperSlide key={blog.id}>
              <Card
                sx={{
                  borderRadius: 5,
                  overflow: "hidden",
                  height: "100%",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                  transition: "0.4s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
                  },
                }}
              >
                {/* Image */}
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={
                      blog.image ||
                      "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                    }
                    alt={blog.title}
                  />

                  <Chip
                    label="Featured"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      fontWeight: 700,
                      fontSize: 10,
                      bgcolor: "white",
                      color: "primary.main",
                    }}
                  />
                </Box>

                {/* Content */}
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 900,
                      mb: 1,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {blog.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 3,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {blog.content}
                  </Typography>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar
                        sx={{
                          width: 30,
                          height: 30,
                          bgcolor: "primary.main",
                          fontSize: 12,
                        }}
                      >
                        {blog.user?.[0] || "A"}
                      </Avatar>
                      <Typography variant="caption" fontWeight={700}>
                        {blog.user || "Admin"}
                      </Typography>
                    </Stack>

                    <Box
                      onClick={() => navigate(`/blog/${blog.id}`)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        color: "primary.main",
                        fontWeight: 800,
                        cursor: "pointer",
                      }}
                    >
                      Read
                      <ArrowForwardIcon sx={{ fontSize: 16 }} />
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default FeaturedBlogs;
