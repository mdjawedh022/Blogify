"use client";
import { useState } from "react";
import { Box, Typography, TextField, Button} from "@mui/material";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formspree.io/f/mzbqrgzo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully 🚀");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message");
      }
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: 2,
        py: { xs: 10, md: 14 },
        background: "linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Toaster position="top-center" />

      <Box sx={{ maxWidth: 1100, width: "100%" }}>
        {/* Heading */}
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: 28, md: 40 },
            fontWeight: 900,
            mb: 2,
            color: "#0f172a",
          }}
        >
          Get in Touch
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            maxWidth: 600,
            mx: "auto",
            mb: 8,
            color: "#475569",
            fontSize: { xs: 14, md: 16 },
          }}
        >
          Have a project, idea, or collaboration in mind? Drop a message — I
          usually reply within 24 hours.
        </Typography>

        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          sx={{
            p: { xs: 3, md: 5, lg: 5 },
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            sx={{
              width: { xs: "98%", md: "80%", lg: "65%" },
              gap: 3,
            }}
          >
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              variant="outlined"
            />

            <TextField
              fullWidth
              multiline
              rows={5}
              label="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              variant="outlined"
            />

            <Button
              type="submit"
              fullWidth
              sx={{
                py: 1.5,
                fontSize: 16,
                fontWeight: 700,
                textTransform: "none",
                borderRadius: 3,
                color: "white",
                background: "linear-gradient(135deg, #2563eb, #1e40af)",
                boxShadow: "0 10px 25px rgba(37,99,235,0.35)",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 15px 35px rgba(37,99,235,0.45)",
                },
              }}
            >
              Send Message 🚀
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
