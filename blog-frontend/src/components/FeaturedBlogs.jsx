import React from "react";
import Slider from "react-slick";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  Chip,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const featuredBlogs = [
  {
    title: "React 18 Features",
    description:
      "Discover updates in React 18 and improve your projects with concurrent rendering and automatic batching.",
    author: "Md",
    category: "Development",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
  },
  {
    title: "Next.js Tips & Tricks",
    description:
      "Boost your Next.js projects with essential tips and performance optimizations.",
    author: "Md",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Spring Boot Guide",
    description:
      "Beginner-friendly Spring Boot guide for building robust backend applications.",
    author: "Md",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  },
];

const FeaturedBlogsSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 6 } }}>
      {/* Section Heading */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: 1,
          color: "#2563eb",
          mb: 1,
        }}
      >
        EDITOR&apos;S CHOICE
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: 28, md: 42 },
          fontWeight: 800,
          mb: { xs: 4, md: 6 },
        }}
      >
        Featured Articles
      </Typography>

      {/* Slider */}
      <Slider {...settings}>
        {featuredBlogs.map((blog, index) => (
          <Box key={index} sx={{ px: 1.5 }}>
            <Card
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                height: "100%",
                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 20px 45px rgba(0,0,0,0.12)",
                },
              }}
            >
              {/* Image */}
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  image={blog.image}
                  alt={blog.title}
                  sx={{
                    height: { xs: 200, md: 220 },
                    objectFit: "cover",
                  }}
                />

                {/* Category */}
                <Chip
                  label={blog.category}
                  sx={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    background: "#fff",
                    fontWeight: 600,
                    fontSize: 12,
                  }}
                />
              </Box>

              {/* Content */}
              <CardContent sx={{ p: 3 }}>
                <Typography sx={{ fontSize: 20, fontWeight: 700, mb: 1 }}>
                  {blog.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#6b7280",
                    mb: 3,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {blog.description}
                </Typography>

                {/* Footer */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    <Typography sx={{ fontSize: 14 }}>{blog.author}</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      color: "#2563eb",
                      fontWeight: 600,
                      fontSize: 14,
                      cursor: "pointer",
                    }}
                  >
                    Read
                    <ArrowForwardIcon fontSize="small" />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default FeaturedBlogsSlider;
