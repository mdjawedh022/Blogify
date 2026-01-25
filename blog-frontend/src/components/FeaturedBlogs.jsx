import React from "react";
import Slider from "react-slick";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";

const featuredBlogs = [
  {
    title: "React 18 Features",
    description:
      "Discover the new updates in React 18 and improve your projects. Learn about concurrent rendering, automatic batching, and new hooks for better performance. This is a must-read for all React developers.",
    author: "Md Jawed Hussain",
    image:
      "https://thumbs.dreamstime.com/b/idyllic-summer-landscape-clear-mountain-lake-alps-45054687.jpg",
  },
  {
    title: "Next.js Tips",
    description:
      "Boost your Next.js projects with these essential tips. Optimize images, improve SEO, and leverage API routes efficiently. Perfect for beginners and intermediate developers looking to scale apps.",
    author: "Md Jawed Hussain",
    image:
      "https://thumbs.dreamstime.com/b/idyllic-summer-landscape-clear-mountain-lake-alps-45054687.jpg",
  },
  {
    title: "Spring Boot Guide",
    description:
      "A beginner's guide to Spring Boot for robust backend applications. Understand annotations, REST APIs, and database integration to create full-fledged applications quickly.",
    author: "Md Jawed Hussain",
    image:
      "https://thumbs.dreamstime.com/b/idyllic-summer-landscape-clear-mountain-lake-alps-45054687.jpg",
  },
  {
    title: "JavaScript Tricks",
    description:
      "Level up your JavaScript with these advanced tricks. Learn about closures, async/await, and ES6+ features to write cleaner, faster, and more maintainable code.",
    author: "Md Jawed Hussain",
    image:
      "https://thumbs.dreamstime.com/b/idyllic-summer-landscape-clear-mountain-lake-alps-45054687.jpg",
  },
];

const FeaturedBlogsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box sx={{ py: 12, px: 5, backgroundColor: "#f3f4f6" }}>
      <Typography
        sx={{
          fontSize: { xs: 28, md: 36 },
          fontWeight: 700,
          mb: 6,
          textAlign: "center",
        }}
      >
        Featured Blogs
      </Typography>

      <Slider {...settings}>
        {featuredBlogs.map((blog, index) => (
          <Box key={index} sx={{ px: 1,py:2 }}>
            <Card
              sx={{
                height: 350,
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                boxShadow: 4,
                transition: "0.3s",
                "&:hover": { transform: "translateY(-5px)", boxShadow: 8 },
              }}
            >
              {/* Blog Image */}
              <CardMedia
                component="img"
                height="150"
                image={blog.image}
                alt={blog.title}
              />

              {/* Blog Content */}
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: 18, fontWeight: 600, mb: 1 }}>
                    {blog.title}
                  </Typography>

                  {/* Description limited to 4 lines */}
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: "#6b7280",
                      mb: 2,
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {blog.description}
                  </Typography>
                </Box>

                {/* Author + Button */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      backgroundColor: "#2563eb",
                      "&:hover": { backgroundColor: "#1e40af" },
                      fontSize: 13,
                      px: 2,
                      py: 0.8,
                    }}
                  >
                    Read More
                  </Button>
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
