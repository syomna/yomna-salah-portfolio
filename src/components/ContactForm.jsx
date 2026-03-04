import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  Stack, 
  IconButton, 
  useTheme, 
  Paper 
} from "@mui/material";
import { motion } from "framer-motion";
import { SendRounded, LinkedIn, GitHub, EmailRounded } from "@mui/icons-material";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple Validation
    const nameError = formData.name.trim() === "";
    const emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const messageError = formData.message.trim() === "";

    if (nameError || emailError || messageError) {
      toast.error("Please fill in all required fields correctly.");
      return;
    }

    setLoading(true);

    // EmailJS Send Logic
    emailjs
      .send(
        "service_18lv4li", 
        "template_y6mlthg", 
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "m0NOuyDY7ba6cSqg5"
      )
      .then(
        (result) => {
          toast.success("Email successfully sent!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setLoading(false);
        },
        (error) => {
          toast.error("Error sending email. Please try again later.");
          setLoading(false);
        }
      );
  };

  const fieldStyles = {
    "& .MuiInput-root": { mt: 2.5 },
    "& label": { fontSize: "1rem", fontWeight: 600, color: "text.primary" }
  };

  return (
    <Box id="contact" sx={{ py: 10 }}>
      <Grid container spacing={8} alignItems="center">
        {/* Left Side: Text & Socials */}
        <Grid item xs={12} md={5}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 800, fontFamily: "'Courier Prime', monospace" }}>
              05. Get In Touch
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
              I’m currently open to new opportunities as a <strong>Senior Flutter Developer</strong>. 
              Whether you have a question or just want to say hi, my inbox is always open!
            </Typography>
            <Stack spacing={3}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <EmailRounded color="primary" />
                <Typography variant="body1">syomna444@gmail.com</Typography>
              </Box>
              <Stack direction="row" spacing={2}>
                <IconButton href="https://linkedin.com/in/yomna-s/" target="_blank" sx={{ border: `1px solid ${theme.palette.divider}` }}><LinkedIn /></IconButton>
                <IconButton href="https://github.com/syomna" target="_blank" sx={{ border: `1px solid ${theme.palette.divider}` }}><GitHub /></IconButton>
              </Stack>
            </Stack>
          </motion.div>
        </Grid>

        {/* Right Side: Form */}
        <Grid item xs={12} md={7}>
          <Paper
            component={motion.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 6,
              background: theme.palette.mode === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
              border: `1px solid ${theme.palette.divider}`,
              backdropFilter: "blur(12px)",
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth name="name" label="Name" variant="standard" required 
                  value={formData.name} onChange={handleChange} InputLabelProps={{ shrink: true }} sx={fieldStyles} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth name="email" label="Email" variant="standard" required type="email"
                  value={formData.email} onChange={handleChange} InputLabelProps={{ shrink: true }} sx={fieldStyles} 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  fullWidth name="subject" label="Subject" variant="standard" 
                  value={formData.subject} onChange={handleChange} InputLabelProps={{ shrink: true }} sx={fieldStyles} 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  fullWidth name="message" label="Message" variant="standard" multiline rows={4} required 
                  value={formData.message} onChange={handleChange} InputLabelProps={{ shrink: true }} sx={fieldStyles} 
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth type="submit" variant="contained" size="large" disabled={loading}
                  endIcon={<SendRounded />} sx={{ mt: 2, py: 1.8, borderRadius: 2, fontWeight: 700 }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;