import { Box, Typography } from "@mui/material";
import { INK, INK_LOW, RULE, SAGE_L } from "../../utils/tokens";

const FormField = ({ label, name, type = "text", value, onChange, placeholder, multiline, borderRight }) => (
  <Box
    sx={{
      position: "relative",
      borderRight: borderRight ? `1px solid ${RULE}` : "none",
      transition: "background 0.2s",
      "&:focus-within": { background: SAGE_L },
    }}
  >
    <Typography
      component="label"
      htmlFor={name}
      sx={{
        display: "block",
        fontFamily: "'DM Mono', monospace",
        fontSize: "9px", letterSpacing: "0.18em",
        textTransform: "uppercase", color: INK_LOW,
        padding: "14px 18px 0",
      }}
    >
      {label}
    </Typography>
    <Box
      component={multiline ? "textarea" : "input"}
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={multiline ? 4 : undefined}
      sx={{
        display: "block",
        width: "100%",
        background: "transparent",
        border: "none",
        outline: "none",
        fontFamily: "'Lora', Georgia, serif",
        fontSize: "14px",
        color: INK,
        padding: "5px 18px 14px",
        resize: "none",
        fontStyle: "italic",
        "&::placeholder": { color: INK_LOW, fontStyle: "italic" },
      }}
    />
  </Box>
);

export default FormField;