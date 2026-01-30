import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Chip,
  Stack,
  Button,
} from "@mui/material";

const PostDetailModal = ({ open, post, onClose }) => {
  if (!post) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{post.title}</DialogTitle>

      <DialogContent>
        <Stack spacing={2}>
          <Chip
            label={post.published ? "PUBLISHED" : "DRAFT"}
            color={post.published ? "success" : "warning"}
            size="small"
          />

          <Typography variant="body1" whiteSpace="pre-line">
            {post.content}
          </Typography>

          <Button onClick={onClose} variant="outlined">
            Close
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default PostDetailModal;
