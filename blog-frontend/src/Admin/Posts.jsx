import React, { useState } from "react";
import {
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Avatar,
  Stack,
  Button,
  Card,
  CardContent,
  Divider,
  useMediaQuery,
  Chip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Add,
  Edit,
  Delete,
  Visibility,
  InsertDriveFile,
} from "@mui/icons-material";
import PostModal from "./PostModal";

const PostsTable = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [posts] = useState([
    {
      id: 1,
      title: "The Future of AI",
      author: "Jane Doe",
      category: "Technology",
      date: "24 May 2026",
      content: "AI is transforming industries rapidly...",
    },
    {
      id: 2,
      title: "React Design Patterns",
      author: "John Smith",
      category: "Development",
      date: "22 May 2026",
      content: "Learn scalable React patterns...",
    },
  ]);

  const [modalMode, setModalMode] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleOpen = (mode, post = null) => {
    setModalMode(mode);
    setSelectedPost(post);
  };

  const handleClose = () => {
    setModalMode(null);
    setSelectedPost(null);
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: "#f4f7fe", minHeight: "100vh" }}>
      {/* Header */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        mb={3}
      >
        <Box>
          <Typography variant="h4" fontWeight={800}>
            Blog Posts
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Create, edit and manage blog articles
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{ borderRadius: 3, fontWeight: 700 }}
          onClick={() => handleOpen("add")}
        >
          New Post
        </Button>
      </Stack>

      {/* 🔹 MOBILE VIEW */}
      {isMobile ? (
        <Stack spacing={2}>
          {posts.map((post) => (
            <Card key={post.id} sx={{ borderRadius: 3 }}>
              <CardContent>
                <Stack direction="row" spacing={2}>
                  <Avatar sx={{ bgcolor: "#e3e7ff", color: "#3f51b5" }}>
                    <InsertDriveFile />
                  </Avatar>
                  <Box>
                    <Typography fontWeight={700}>{post.title}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {post.author} • {post.date}
                    </Typography>
                  </Box>
                </Stack>

                <Chip
                  label={post.category}
                  size="small"
                  sx={{ mt: 1.5, fontWeight: 600 }}
                />

                <Divider sx={{ my: 1.5 }} />

                <Stack direction="row" justifyContent="flex-end">
                  <IconButton onClick={() => handleOpen("view", post)}>
                    <Visibility />
                  </IconButton>
                  <IconButton
                    onClick={() => handleOpen("edit", post)}
                    color="primary"
                  >
                    <Edit />
                  </IconButton>
                  <IconButton color="error">
                    <Delete />
                  </IconButton>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      ) : (
        /* 🔹 DESKTOP VIEW */
        <TableContainer component={Paper} sx={{ borderRadius: 4 }}>
          <Table>
            <TableHead sx={{ bgcolor: "#f8f9fa" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>POST</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>CATEGORY</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>DATE</TableCell>
                <TableCell align="right" sx={{ fontWeight: 700 }}>
                  ACTIONS
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id} hover>
                  <TableCell>
                    <Stack direction="row" spacing={2}>
                      <Avatar sx={{ bgcolor: "#e3e7ff", color: "#3f51b5" }}>
                        <InsertDriveFile />
                      </Avatar>
                      <Box>
                        <Typography fontWeight={700}>{post.title}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {post.author}
                        </Typography>
                      </Box>
                    </Stack>
                  </TableCell>
                  <TableCell>{post.category}</TableCell>
                  <TableCell>{post.date}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleOpen("view", post)}>
                      <Visibility />
                    </IconButton>
                    <IconButton
                      onClick={() => handleOpen("edit", post)}
                      color="primary"
                    >
                      <Edit />
                    </IconButton>
                    <IconButton color="error">
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <PostModal
        open={!!modalMode}
        mode={modalMode}
        post={selectedPost}
        onClose={handleClose}
      />
    </Box>
  );
};

export default PostsTable;
