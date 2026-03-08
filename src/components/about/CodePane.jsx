import { Box, Typography } from "@mui/material";
import { INK } from "../../utils/tokens";

const DOTS = ["#ff5f57", "#febc2e", "#28c840"];

const CODE_HTML = `<span style="color:rgba(255,255,255,0.2)">// The developer you've been looking for.</span>
<span style="color:#c084fc">class</span> <span style="color:#fbbf24">YomnaSalah</span> <span style="color:#c084fc">extends</span> <span style="color:#67e8f9">FlutterDeveloper</span> {
  <span style="color:#c084fc">final</span> expertise  = <span style="color:#86efac">'Flutter &amp; SwiftUI'</span>;
  <span style="color:#c084fc">final</span> patterns   = <span style="color:#86efac">'BLoC · MVVM · Clean'</span>;
  <span style="color:#c084fc">final</span> platforms  = <span style="color:#86efac">'iOS · Android · Web'</span>;
  <span style="color:#c084fc">final</span> ci_cd      = <span style="color:#86efac">'Codemagic'</span>;

  <span style="color:#67e8f9">Widget</span> <span style="color:#67e8f9">build</span>(BuildContext context) {
    <span style="color:#c084fc">return</span> <span style="color:#fbbf24">App</span>(
      users: <span style="color:#86efac">'10K+ and growing'</span>,
      quality: <span style="color:#fbbf24">Quality</span>.production,
    );
  }
}`;

const CodePane = () => (
  <Box sx={{ background: INK, overflow: "hidden" }}>
    {/* Window chrome */}
    <Box sx={{
      px: "16px", py: "10px",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      display: "flex", alignItems: "center", gap: "6px",
    }}>
      {DOTS.map((c) => (
        <Box key={c} sx={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
      ))}
      <Typography sx={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "10px",
        color: "rgba(255,255,255,0.2)",
        ml: "8px", letterSpacing: "0.04em",
      }}>
        yomna.dart
      </Typography>
    </Box>

    {/* Code body */}
    <Box
      component="pre"
      sx={{
        px: "18px", py: "22px",
        fontFamily: "'DM Mono', monospace",
        fontSize: "12px", lineHeight: 2.0,
        color: "rgba(255,255,255,0.68)",
        whiteSpace: "pre",
        overflowX: "auto",
        m: 0,
      }}
      dangerouslySetInnerHTML={{ __html: CODE_HTML }}
    />
  </Box>
);

export default CodePane;