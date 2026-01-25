import React from "react";
import { Box, Typography, IconButton, Stack, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import blog_logo from "../assets/blogify.png"

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0f172a", // darker & premium
        color: "#e5e7eb",
        pt: 8,
        pb: 4,
        px: 2,
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          textAlign: "center",
        }}
      >
        {/* Logo + Name */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1.5,
            mb: 2,
          }}
        >
          <Box
            component="img"
            src={blog_logo}
            alt="Blog Logo"
            sx={{ height: 42,borderRadius:"10px" }}
          />
        </Box>

        {/* Short Description */}
        <Typography
          sx={{
            maxWidth: 520,
            mx: "auto",
            fontSize: 14,
            color: "#cbd5e1",
            lineHeight: 1.7,
            mb: 4,
          }}
        >
          Sharing quality blogs, tutorials, and insights to help developers
          learn, grow, and stay ahead in tech.
        </Typography>

        {/* Social Media Icons */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mb: 4 }}
        >
          <IconButton
            component="a"
            href="https://facebook.com"
            target="_blank"
            sx={{
              color: "#cbd5e1",
              border: "1px solid #334155",
              "&:hover": {
                color: "#1877f2",
                borderColor: "#1877f2",
              },
            }}
          >
            <FacebookIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://instagram.com"
            target="_blank"
            sx={{
              color: "#cbd5e1",
              border: "1px solid #334155",
              "&:hover": {
                color: "#e1306c",
                borderColor: "#e1306c",
              },
            }}
          >
            <InstagramIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://youtube.com"
            target="_blank"
            sx={{
              color: "#cbd5e1",
              border: "1px solid #334155",
              "&:hover": {
                color: "#ff0000",
                borderColor: "#ff0000",
              },
            }}
          >
            <YouTubeIcon />
          </IconButton>
        </Stack>

        <Divider sx={{ borderColor: "#334155", mb: 3 }} />

        {/* Copyright */}
        <Typography
          sx={{
            fontSize: 13,
            color: "#94a3b8",
          }}
        >
          © {new Date().getFullYear()} YourBlog. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
