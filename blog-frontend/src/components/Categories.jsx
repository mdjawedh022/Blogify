import React from "react";
import { Box, Typography, Card, CardActionArea } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";
import CloudIcon from "@mui/icons-material/Cloud";
import BrushIcon from "@mui/icons-material/Brush";
import BuildIcon from "@mui/icons-material/Build";

const categories = [
  { name: "React", icon: <CodeIcon />, color: "#61dafb" },
  { name: "Next.js", icon: <WebIcon />, color: "#000000" },
  { name: "JavaScript", icon: <BuildIcon />, color: "#f7df1e" },
  { name: "Node.js", icon: <CloudIcon />, color: "#3c873a" },
  { name: "Spring Boot", icon: <StorageIcon />, color: "#6db33f" },
  { name: "CSS", icon: <BrushIcon />, color: "#2965f1" },
];

const Categories = () => {
  return (
    <Box
      sx={{
        py: 12,
        px: 2,
        textAlign: "center",
        backgroundColor: "#f3f4f6",
      }}
    >
      <Typography sx={{ fontSize: "32px", fontWeight: 700, mb: 6 }}>
        Explore Categories
      </Typography>

      {/* Flex container with wrap */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap", // wrap cards automatically
          justifyContent: "center",
          gap: 4, // spacing between cards
        }}
      >
        {categories.map((category, index) => (
          <Card
            key={index}
            sx={{
              width: 200, // fixed width
              height: 200, // fixed height
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "0.3s",
              "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
            }}
          >
            <CardActionArea
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: category.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "30px",
                }}
              >
                {category.icon}
              </Box>
              <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                {category.name}
              </Typography>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Categories;
