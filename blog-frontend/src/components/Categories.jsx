import React from "react";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  Container,
  alpha,
} from "@mui/material";
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
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              color: "#0f172a",
              mb: 2,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            Explore Categories
          </Typography>
          <Box
            sx={{
              width: "60px",
              height: "4px",
              bgcolor: "#2563eb",
              mx: "auto",
              borderRadius: "10px",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)", // 2 columns on mobile
              sm: "repeat(3, 1fr)", // 3 columns on tablet
              md: "repeat(6, 1fr)", // 6 columns on desktop
            },
            gap: { xs: 2, md: 3 },
          }}
        >
          {categories.map((category, index) => (
            <Card
              key={index}
              elevation={0}
              sx={{
                borderRadius: { xs: 4, md: 6 },
                border: "1px solid #f1f5f9",
                background: "linear-gradient(145deg, #ffffff, #f8fafc)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: `0 20px 40px ${alpha(category.color, 0.15)}`,
                  borderColor: alpha(category.color, 0.3),
                  "& .icon-box": {
                    transform: "rotate(10deg) scale(1.1)",
                    boxShadow: `0 10px 20px ${alpha(category.color, 0.4)}`,
                  },
                },
              }}
            >
              <CardActionArea
                sx={{
                  py: { xs: 3, md: 5 },
                  px: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Box
                  className="icon-box"
                  sx={{
                    width: { xs: 50, md: 70 },
                    height: { xs: 50, md: 70 },
                    borderRadius: "20px",
                    backgroundColor:
                      category.color === "#000000" ? "#1e293b" : category.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: { xs: "24px", md: "32px" },
                    transition: "all 0.3s ease",
                    boxShadow: `0 8px 16px ${alpha(category.color, 0.2)}`,
                  }}
                >
                  {category.icon}
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    fontWeight: 800,
                    color: "#334155",
                    textAlign: "center",
                  }}
                >
                  {category.name}
                </Typography>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Categories;
