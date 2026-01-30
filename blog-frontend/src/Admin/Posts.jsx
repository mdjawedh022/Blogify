// PostPage.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  CircularProgress,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  Chip,
  Stack,
  Card,
  CardContent,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Edit,
  Delete,
  Visibility,
  Add,
  InsertDriveFile,
} from "@mui/icons-material";
import toast from "react-hot-toast";

import { fetchBlogs, deleteBlog } from "../redux/blog/blogActions";
import PostModal from "./PostModal";
import PostDetailModal from "./components/PostDetailModal";

const PostPage = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { blogs, loading, error } = useSelector((state) => state.blog);

  const [openForm, setOpenForm] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [editData, setEditData] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  /* DELETE */
  const handleDelete = (id) => {
    if (window.confirm("Delete this post?")) {
      dispatch(deleteBlog(id));
      toast.success("Post deleted");
    }
  };


  /* VIEW */
  const handleView = (post) => {
    setSelectedPost(post);
    setOpenView(true);
  };

  /* EDIT */
 const handleEdit = (post) => {
   setEditData(post);
   setOpenForm(true);
 };
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" align="center">
        {error}
      </Typography>
    );
  }

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      {/* HEADER */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "stretch", sm: "center" }}
        spacing={2}
        mb={3}
      >
        <Typography variant="h5" fontWeight={800}>
          Blog Management
        </Typography>

        <Button
          fullWidth={isMobile}
          variant="contained"
          startIcon={<Add />}
          onClick={() => {
            setEditData(null);
            setOpenForm(true);
          }}
        >
          Add Post
        </Button>
      </Stack>

      {/* MOBILE VIEW */}
      {isMobile ? (
        <Stack spacing={2}>
          {blogs.map((post) => (
            <Card
              key={post.id}
              sx={{
                borderRadius: 3,
                boxShadow: 3,
              }}
            >
              <CardContent>
                <Stack spacing={1.5}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ bgcolor: "#e3e7ff", color: "#3f51b5" }}>
                      <InsertDriveFile />
                    </Avatar>

                    <Typography
                      fontWeight={700}
                      sx={{ wordBreak: "break-word" }}
                    >
                      {post.title}
                    </Typography>
                  </Stack>

                  <Chip
                    label={post.published ? "PUBLISHED" : "DRAFT"}
                    color={post.published ? "success" : "warning"}
                    size="small"
                    sx={{ alignSelf: "flex-start" }}
                  />

                  <Stack direction="row" justifyContent="flex-end" spacing={1}>
                    <IconButton onClick={() => handleView(post)}>
                      <Visibility />
                    </IconButton>
                    <IconButton
                      onClick={() => handleEdit(post)}
                      color="primary"
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(post.id)}
                    >
                      <Delete />
                    </IconButton>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      ) : (
        /* DESKTOP TABLE */
        <TableContainer component={Paper} sx={{ borderRadius: 4 }}>
          <Table>
            <TableHead sx={{ bgcolor: "#f5f5f5" }}>
              <TableRow>
                <TableCell>
                  <b>POST</b>
                </TableCell>
                <TableCell>
                  <b>STATUS</b>
                </TableCell>
                <TableCell align="right">
                  <b>ACTIONS</b>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {blogs.map((post) => (
                <TableRow key={post.id} hover>
                  <TableCell>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar sx={{ bgcolor: "#e3e7ff", color: "#3f51b5" }}>
                        <InsertDriveFile />
                      </Avatar>
                      <Typography fontWeight={700}>{post.title}</Typography>
                    </Stack>
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={post.published ? "PUBLISHED" : "DRAFT"}
                      color={post.published ? "success" : "warning"}
                      size="small"
                    />
                  </TableCell>

                  <TableCell align="right">
                    <IconButton onClick={() => handleView(post)}>
                      <Visibility />
                    </IconButton>
                    <IconButton
                      onClick={() => handleEdit(post)}
                      color="primary"
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(post.id)}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* CREATE / EDIT MODAL */}
      <PostModal
        open={openForm}
        editData={editData}
        onClose={() => {
          setOpenForm(false);
          setEditData(null);
        }}
      />

      {/* VIEW DETAIL MODAL */}
      <PostDetailModal
        open={openView}
        post={selectedPost}
        onClose={() => setOpenView(false)}
      />
    </Box>
  );
};

export default PostPage;
