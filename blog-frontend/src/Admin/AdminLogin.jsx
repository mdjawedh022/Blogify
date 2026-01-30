import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Paper,
  Link,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff, Email, Lock } from "@mui/icons-material";
import { loginAdmin } from "../utils/auth";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill all fields");
      return;
    }

    const success = loginAdmin(formData.email, formData.password);

    if (success) {
      toast.success("Login successful 🎉");
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1200);
    } else {
      toast.error("Wrong credentials ❌");
    }
  };

  return (
    <>
      <Toaster position="top-right" />

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          py: { xs: 5, sm: 15 },
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={10}
            sx={{
              p: { xs: 2, sm: 4, md: 5 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 4,
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(12px)",
              maxWidth: 450,
              mx: "auto",
            }}
          >
            {/* Icon */}
            <Box
              sx={{
                width: 60,
                height: 60,
                bgcolor: "primary.main",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
                boxShadow: "0px 4px 15px rgba(25,118,210,0.4)",
              }}
            >
              <Lock sx={{ color: "#fff", fontSize: 30 }} />
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: "#1a237e",
                mb: 1,
              }}
            >
              Admin Portal
            </Typography>

            <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
              Welcome back! Please login.
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ width: "100%" }}
            >
              <TextField
                fullWidth
                margin="normal"
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <FormControlLabel
                control={<Checkbox />}
                label="Remember me"
                sx={{ mt: 1 }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  py: 1.4,
                  borderRadius: 3,
                  fontWeight: "bold",
                }}
              >
                Sign In
              </Button>
              <Typography
                variant="body2"
                align="center"
                sx={{
                  mt: 2,
                  cursor: "pointer",
                  fontWeight: 600,
                  color: "primary.main",
                }}
                onClick={() => navigate("/")}
              >
                ← Back to Home
              </Typography>
              <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                Don&apos;t have an account?{" "}
                <Link sx={{ fontWeight: 700 }}>Contact Admin</Link>
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default AdminLogin;
