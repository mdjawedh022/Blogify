import React, { useState } from "react";
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

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        py: { xs:5, sm:15 }, 
        px: 0,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={10}
          sx={{
            p: { xs: 1.5, sm: 4, md: 5 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 4,
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(0,0,0,0.05)",
            width: "100%",
            maxWidth: 450, // Limit max width for large screens
            mx: "auto",
          }}
        >
          {/* Logo / Icon */}
          <Box
            sx={{
              width: { xs: 50, sm: 60 },
              height: { xs: 50, sm: 60 },
              bgcolor: "primary.main",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
              boxShadow: "0px 4px 15px rgba(25, 118, 210, 0.4)",
            }}
          >
            <Lock sx={{ color: "white", fontSize: { xs: 24, sm: 30 } }} />
          </Box>

          <Typography
            component="h1"
            variant="h4"
            sx={{
              fontWeight: 800,
              color: "#1a237e",
              mb: 1,
              fontSize: { xs: "1.6rem", sm: "2rem" },
              textAlign: "center",
            }}
          >
            Admin Portal
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mb: 3,
              color: "rgba(0,0,0,0.6)",
              textAlign: "center",
              fontSize: { xs: "0.85rem", sm: "0.95rem" },
            }}
          >
            Welcome back! Please enter your credentials.
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            sx={{ width: "100%" }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="action" />
                  </InputAdornment>
                ),
              }}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center" },
                mt: 1,
                gap: 1,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                    sx={{ borderRadius: 1 }}
                  />
                }
                label={<Typography variant="body2">Remember me</Typography>}
              />
              <Link
                href="#"
                variant="body2"
                sx={{ fontWeight: 600, textDecoration: "none" }}
              >
                Forgot password?
              </Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 3,
                mb: 2,
                py: 1.5,
                borderRadius: 3,
                fontWeight: "bold",
                textTransform: "none",
                fontSize: { xs: "1rem", sm: "1.1rem" },
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0px 15px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              Sign In
            </Button>

            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 2, fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
            >
              Don't have an account?{" "}
              <Link href="#" sx={{ fontWeight: 700, textDecoration: "none" }}>
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default AdminLogin;
