import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { reveal } from "../utils/animations";
import FormField from "./contact/FormField";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameError = formData.name.trim() === "";
    const emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
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
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "m0NOuyDY7ba6cSqg5",
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
        },
      );
  };

  const contactLinks = [
    {
      icon: "✉",
      label: "syomna444@gmail.com",
      href: "mailto:syomna444@gmail.com",
    },
    {
      icon: <Linkedin size={14} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yomna-s/",
    },
    {
      icon: <Github size={14} />,
      label: "GitHub",
      href: "https://github.com/syomna",
    },
  ];

  return (
    <section id="contact" className="border-b rule-b">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <motion.div
          {...reveal(0)}
          className="bg-dark-bg px-3 md:px-[60px] py-16 md:py-20 flex flex-col justify-between relative overflow-hidden border-r-0 md:border-r border-white/5"
        >
          <div
            className="absolute bottom-[-80px] left-[-80px] w-[320px] h-[320px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(107,124,94,0.15) 0%, transparent 70%)",
            }}
          />

          <div>
            <div className="flex items-center gap-5 mb-[52px]">
              <span className="font-mono text-[10px] tracking-[0.16em] text-white/25">
                05
              </span>
              <div className="flex-1 h-px bg-white/5" />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/25">
                Contact
              </span>
            </div>

            <h2 className="font-heading text-[40px] md:text-[64px] font-medium leading-[0.92] tracking-[-0.025em] text-paper mb-7 m-0">
              Let's make
              <br />
              <em className="italic text-sage">something great.</em>
            </h2>

            <p className="font-body text-[15px] leading-[1.9] text-paper/45 max-w-[38ch] mb-12 m-0">
              Available for{" "}
              <strong className="text-paper/80 font-medium">
                Flutter freelance projects
              </strong>{" "}
              and{" "}
              <strong className="text-paper/80 font-medium">
                full-time opportunities
              </strong>
              . If you need a mobile developer who cares about craft and
              delivery — I'm available now.
            </p>
          </div>

          <div className="flex flex-col">
            {contactLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 border-b border-white/5 no-underline group"
                style={{ transition: "padding-left 0.2s" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.paddingLeft = "8px";
                  const ic = e.currentTarget.querySelector(".ct-ic");
                  if (ic) {
                    ic.style.background = "#6b7c5e";
                    ic.style.borderColor = "#6b7c5e";
                    ic.style.color = "#fff";
                  }
                  const txt = e.currentTarget.querySelector(".ct-txt");
                  if (txt) txt.style.color = "#f8f6f1";
                  const arr = e.currentTarget.querySelector(".ct-arr");
                  if (arr) {
                    arr.style.transform = "translateX(4px)";
                    arr.style.color = "#f8f6f1";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.paddingLeft = "0";
                  const ic = e.currentTarget.querySelector(".ct-ic");
                  if (ic) {
                    ic.style.background = "";
                    ic.style.borderColor = "";
                    ic.style.color = "";
                  }
                  const txt = e.currentTarget.querySelector(".ct-txt");
                  if (txt) txt.style.color = "";
                  const arr = e.currentTarget.querySelector(".ct-arr");
                  if (arr) {
                    arr.style.transform = "";
                    arr.style.color = "";
                  }
                }}
              >
                <div className="flex items-center gap-[14px]">
                  <div
                    className="ct-ic w-8 h-8 border border-white/15 flex items-center justify-center font-mono text-[12px] text-white/30"
                    style={{ transition: "all 0.2s" }}
                  >
                    {icon}
                  </div>
                  <span
                    className="ct-txt font-body text-[14px] text-white/40"
                    style={{ transition: "color 0.2s" }}
                  >
                    {label}
                  </span>
                </div>
                <span
                  className="ct-arr text-[13px] text-white/20"
                  style={{ transition: "all 0.2s" }}
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...reveal(0.15)}
          className="px-3 md:px-[60px] py-16 md:py-20 bg-paper"
        >
          <form
            onSubmit={handleSubmit}
            className="border rule-b overflow-hidden"
          >
            <div className="grid grid-cols-2 border-b rule-b">
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
            </div>

            <div className="border-b rule-b">
              <FormField
                label="Subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
              />
            </div>

            <div className="border-b rule-b">
              <FormField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                multiline
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-between bg-ink border-none w-full px-5 py-[18px] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ transition: "background 0.25s" }}
              onMouseEnter={(e) => {
                if (!loading) e.currentTarget.style.background = "#6b7c5e";
              }}
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#181612")
              }
            >
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-paper">
                {loading ? "Sending..." : "Send message"}
              </span>
              <span
                className="text-paper text-[15px]"
                style={{ transition: "transform 0.2s" }}
              >
                →
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
