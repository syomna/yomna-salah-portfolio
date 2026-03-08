import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { LinkedIn, GitHub } from "@mui/icons-material";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import { reveal } from "../utils/animations";
import { PAPER, INK_LOW, INK, SAGE, RULE } from "../utils/tokens";
import FormField from "./contact/FormField";


const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameError    = formData.name.trim() === "";
    const emailError   = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const messageError = formData.message.trim() === "";

    if (nameError || emailError || messageError) {
      toast.error("Please fill in all required fields correctly.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_18lv4li",
        "template_y6mlthg",
        {
          from_name: formData.name,
          reply_to:  formData.email,
          subject:   formData.subject,
          message:   formData.message,
        },
        "m0NOuyDY7ba6cSqg5"
      )
      .then(
        () => {
          toast.success("Message sent — I'll be in touch soon!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setLoading(false);
        },
        () => {
          toast.error("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{ borderBottom: `1px solid ${RULE}` }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        }}
      >
        {/* ── LEFT: dark statement panel ────────────── */}
        <Box
          component={motion.div}
          {...reveal(0)}
          sx={{
            background: "#1a1916",
            px: { xs: 3, md: "60px" },
            py: { xs: "64px", md: "80px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
            borderRight: { md: `1px solid rgba(255,255,255,0.06)` },
          }}
        >
          {/* Faint sage orb */}
          <Box sx={{
            position: "absolute", bottom: "-80px", left: "-80px",
            width: "320px", height: "320px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(107,124,94,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <Box>
            {/* Section label */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px", mb: "52px" }}>
              <Typography sx={{
                fontFamily: "'DM Mono', monospace", fontSize: "10px",
                color: "rgba(255,255,255,0.25)", letterSpacing: "0.16em",
              }}>
                05
              </Typography>
              <Box sx={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
              <Typography sx={{
                fontFamily: "'DM Mono', monospace", fontSize: "10px",
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
              }}>
                Contact
              </Typography>
            </Box>

            {/* Headline */}
            <Typography sx={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: { xs: "40px", md: "64px" },
              fontWeight: 500,
              lineHeight: 0.92,
              letterSpacing: "-0.025em",
              color: "#f8f6f1",
              mb: "28px",
            }}>
              Let's make<br />
              <Box component="em" sx={{ fontStyle: "italic", color: SAGE }}>
                something great.
              </Box>
            </Typography>

            <Typography sx={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "15px", lineHeight: 1.9,
              color: "rgba(248,246,241,0.45)",
              maxWidth: "38ch", mb: "48px",
            }}>
              Open to <strong style={{ color: "rgba(248,246,241,0.8)", fontWeight: 500 }}>
                freelance projects
              </strong> and <strong style={{ color: "rgba(248,246,241,0.8)", fontWeight: 500 }}>
                full-time roles
              </strong>. If you need a mobile developer who cares about craft and delivery — I'm available now.
            </Typography>
          </Box>

          {/* Contact links */}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {[
              { icon: "✉", label: "syomna444@gmail.com", href: "mailto:syomna444@gmail.com" },
              { icon: <LinkedIn sx={{ fontSize: "14px" }} />, label: "LinkedIn", href: "https://linkedin.com/in/yomna-s/" },
              { icon: <GitHub sx={{ fontSize: "14px" }} />,   label: "GitHub",   href: "https://github.com/syomna" },
            ].map(({ icon, label, href }) => (
              <Box
                key={label}
                component="a"
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  py: "16px",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  textDecoration: "none",
                  transition: "padding-left 0.2s",
                  "&:hover": { pl: "8px" },
                  "&:hover .ct-ic": {
                    background: SAGE,
                    borderColor: SAGE,
                    color: "#fff",
                  },
                  "&:hover .ct-txt": { color: "#f8f6f1" },
                  "&:hover .ct-arr": { transform: "translateX(4px)", color: "#f8f6f1" },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <Box
                    className="ct-ic"
                    sx={{
                      width: "32px", height: "32px",
                      border: "1px solid rgba(255,255,255,0.12)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "'DM Mono', monospace", fontSize: "12px",
                      color: "rgba(255,255,255,0.3)",
                      transition: "all 0.2s",
                    }}
                  >
                    {icon}
                  </Box>
                  <Typography
                    className="ct-txt"
                    sx={{
                      fontFamily: "'Lora', serif", fontSize: "14px",
                      color: "rgba(255,255,255,0.4)",
                      transition: "color 0.2s",
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
                <Box
                  className="ct-arr"
                  sx={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.2)",
                    transition: "all 0.2s",
                  }}
                >
                  →
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── RIGHT: Form panel ─────────────────────── */}
        <Box
          component={motion.div}
          {...reveal(0.15)}
          sx={{
            px: { xs: 3, md: "60px" },
            py: { xs: "64px", md: "80px" },
            background: PAPER,
          }}
        >
          <Typography sx={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "9px", letterSpacing: "0.2em",
            textTransform: "uppercase", color: INK_LOW,
            mb: "22px",
          }}>
            {
              // Send a message
            }
          </Typography>

          {/* Form */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ border: `1px solid ${RULE}`, overflow: "hidden" }}
          >
            {/* Row 1: Name + Email */}
            <Box sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              borderBottom: `1px solid ${RULE}`,
            }}>
              <FormField
                label="Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                borderRight
              />
              <FormField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </Box>

            {/* Row 2: Subject */}
            <Box sx={{ borderBottom: `1px solid ${RULE}` }}>
              <FormField
                label="Subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
              />
            </Box>

            {/* Row 3: Message */}
            <Box sx={{ borderBottom: `1px solid ${RULE}` }}>
              <FormField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                multiline
              />
            </Box>

            {/* Submit */}
            <Box
              component="button"
              type="submit"
              disabled={loading}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: INK,
                border: "none",
                width: "100%",
                padding: "18px 20px",
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.7 : 1,
                transition: "background 0.25s",
                "&:hover": { background: SAGE },
              }}
            >
              <Typography sx={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px", letterSpacing: "0.14em",
                textTransform: "uppercase", color: PAPER,
              }}>
                {loading ? "Sending..." : "Send message"}
              </Typography>
              <Box sx={{ color: PAPER, fontSize: "15px", transition: "transform 0.2s" }}>
                →
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};


export default ContactForm;