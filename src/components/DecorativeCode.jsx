import { Box, Typography, Stack, useTheme, Grid } from "@mui/material";
import { motion } from "framer-motion";
export const DecorativeCode = () => {
    const theme = useTheme();
    return <Grid item xs={12} md={5} sx={{ display: { xs: "none", md: "block" } }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            sx={{
              p: 4,
              borderRadius: 4,
              backgroundColor: theme.palette.mode === "dark" ? "rgba(30, 30, 30, 0.5)" : "rgba(245, 245, 245, 0.8)",
              backdropFilter: "blur(10px)",
              border: `1px solid ${theme.palette.divider}`,
              fontFamily: "'Courier Prime', monospace",
              boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
              <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ff5f56" }} />
              <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ffbd2e" }} />
              <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#27c93f" }} />
            </Stack>

            <Typography variant="body2" sx={{ fontFamily: "inherit", color: "#808080", mb: 1 }}>
              // Mobile Developer Profile
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography variant="body2" sx={{ fontFamily: "inherit", color: "#c678dd" }}>class</Typography>
              <Typography variant="body2" sx={{ fontFamily: "inherit", color: "#e5c07b" }}>YomnaSalah</Typography>
              <Typography variant="body2" sx={{ fontFamily: "inherit", color: "#abb2bf" }}>{"{"}</Typography>
            </Box>
            
            <Box sx={{ pl: 3, mt: 1 }}>
              <Typography variant="body2" sx={{ fontFamily: "inherit", color: "#abb2bf" }}>
                <span style={{ color: "#e06c75" }}>final</span> <span style={{ color: "#d19a66" }}>expertise</span> = <span style={{ color: "#98c379" }}>'Flutter'</span>;
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: "inherit", color: "#abb2bf" }}>
                <span style={{ color: "#e06c75" }}>final</span> <span style={{ color: "#d19a66" }}>expandingTo</span> = <span style={{ color: "#98c379" }}>'SwiftUI'</span>;
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: "inherit", color: "#abb2bf", mt: 1 }}>
                <span style={{ color: "#61afef" }}>void</span> <span style={{ color: "#61afef" }}>onBuild</span>() {"{"}
              </Typography>
              <Box sx={{ pl: 3 }}>
                <Typography variant="body2" sx={{ fontFamily: "inherit", color: "#98c379" }}>
                  print(<span style={{ color: "#ce9178" }}>"Cross-platform & Native power."</span>);
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ fontFamily: "inherit", color: "#abb2bf" }}>{"}"}</Typography>
            </Box>
            <Typography variant="body2" sx={{ fontFamily: "inherit", color: "#abb2bf" }}>{"}"}</Typography>
          </Box>
        </Grid>
}