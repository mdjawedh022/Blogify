"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
  CircularProgress,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { Toaster, toast } from "react-hot-toast";
import {
  Email,
  Phone,
  GitHub,
  LinkedIn,
  Twitter,
  ArrowForward,
  ChatBubbleOutline,
} from "@mui/icons-material";

const Contact = () => {
 const [loading, setLoading] = useState(false);
 const [formData, setFormData] = useState({
   name: "",
   email: "",
   subject: "",
   message: "",
 });

 const handleChange = (e) => {
   setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = async (e) => {
   e.preventDefault();

   // Simple validation
   if (!formData.name || !formData.email || !formData.message) {
     toast.error("Please fill all required fields");
     return;
   }

   try {
     setLoading(true);

     const response = await fetch("https://formspree.io/f/mzbqrgzo", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
       },
       body: JSON.stringify(formData),
     });

     const result = await response.json();

     if (response.ok) {
       toast.success("Message sent successfully!");
       setFormData({
         name: "",
         email: "",
         subject: "",
         message: "",
       });
     } else {
       toast.error(result?.error || "Failed to send message");
     }
   } catch (error) {
     toast.error("Something went wrong. Try again later.");
   } finally {
     setLoading(false);
   }
 };
  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        minHeight: "100vh",
        py: { xs: 8, md: 12 },
        position: "relative",
      }}
    >
      <Toaster position="top-center" />

      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Left Side: Content & Socials */}
          <Grid item xs={12} md={5}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="overline"
                sx={{ letterSpacing: 3, color: "#2563eb", fontWeight: 800 }}
              >
                CONTACT US
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  mt: 2,
                  mb: 3,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  color: "#1e293b",
                  lineHeight: 1.1,
                }}
              >
                Have a project? <br />
                <span style={{ color: "#2563eb" }}>Let's talk.</span>
              </Typography>
              <Typography sx={{ color: "#64748b", mb: 6, fontSize: "1.1rem" }}>
                We help brands and businesses stand out in the digital age. Drop
                us a line and we'll get back to you within 24 hours.
              </Typography>

              <Stack spacing={3} sx={{ mb: 6 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Email sx={{ color: "#2563eb" }} />
                  <Typography fontWeight={600} color="#334155">
                    hello@yourstudio.com
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Phone sx={{ color: "#10b981" }} />
                  <Typography fontWeight={600} color="#334155">
                    +1 (555) 000-1234
                  </Typography>
                </Box>
              </Stack>

              <Stack
                direction="row"
                spacing={2}
                sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
              >
                {[<GitHub />, <LinkedIn />, <Twitter />].map((icon, i) => (
                  <IconButton
                    key={i}
                    sx={{
                      bgcolor: "#f1f5f9",
                      color: "#1e293b",
                      "&:hover": { bgcolor: "#2563eb", color: "white" },
                    }}
                  >
                    {icon}
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Right Side: The Form Card */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: 8,
                bgcolor: "#ffffff",
                border: "1px solid #f1f5f9",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
                position: "relative",
              }}
            >
              {/* Subtle Icon Badge */}
              <Box
                sx={{
                  position: "absolute",
                  top: -25,
                  right: 40,
                  width: 50,
                  height: 50,
                  bgcolor: "#2563eb",
                  borderRadius: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  boxShadow: "0 10px 20px rgba(37,99,235,0.3)",
                }}
              >
                <ChatBubbleOutline />
              </Box>

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="body2"
                      sx={{ mb: 1, fontWeight: 700, color: "#1e293b" }}
                    >
                      Full Name
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="enter name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          bgcolor: "#f8fafc",
                          borderRadius: 3,
                          "& fieldset": { border: "none" },
                          "&.Mui-focused fieldset": {
                            border: "2px solid #2563eb",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="body2"
                      sx={{ mb: 1, fontWeight: 700, color: "#1e293b" }}
                    >
                      Email Address
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="enter email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          bgcolor: "#f8fafc",
                          borderRadius: 3,
                          "& fieldset": { border: "none" },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="body2"
                      sx={{ mb: 1, fontWeight: 700, color: "#1e293b" }}
                    >
                      Subject
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Project Inquiry"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          bgcolor: "#f8fafc",
                          borderRadius: 3,
                          "& fieldset": { border: "none" },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="body2"
                      sx={{ mb: 1, fontWeight: 700, color: "#1e293b" }}
                    >
                      Message
                    </Typography>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      placeholder="Tell us about your project..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          bgcolor: "#f8fafc",
                          borderRadius: 3,
                          "& fieldset": { border: "none" },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      disabled={loading}
                      sx={{
                        py: 2,
                        mt: 2,
                        bgcolor: "#1e293b",
                        color: "white",
                        borderRadius: 3,
                        fontWeight: 700,
                        textTransform: "none",
                        fontSize: "1rem",
                        "&:hover": { bgcolor: "#2563eb" },
                        transition: "0.3s",
                      }}
                    >
                      {loading ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        <Stack direction="row" spacing={1} alignItems="center">
                          <span>Send Message</span>
                          <ArrowForward fontSize="small" />
                        </Stack>
                      )}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
