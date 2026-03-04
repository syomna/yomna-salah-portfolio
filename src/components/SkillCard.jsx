
import { Box, Typography, Grid, Paper, Chip, Stack, useTheme } from "@mui/material";

export const SkillCard = ({ category, index }) => {
      const theme = useTheme();
    
    return (
        <Grid item xs={12} sm={6} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: "100%",
                      background: theme.palette.mode === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 4,
                      transition: "all 0.3s ease",
                      "&:hover": { 
                        transform: "translateY(-5px)",
                        borderColor: "primary.main",
                        background: theme.palette.mode === "dark" ? "rgba(187, 134, 252, 0.05)" : "rgba(98, 0, 238, 0.03)"
                      }
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2, color: "primary.main" }}>
                      {category.icon}
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {category.title}
                      </Typography>
                    </Stack>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {category.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            borderRadius: "6px",
                            backgroundColor: theme.palette.mode === "dark" ? "rgba(187, 134, 252, 0.1)" : "rgba(98, 0, 238, 0.05)",
                            color: theme.palette.primary.main,
                            fontWeight: 500,
                            border: "none"
                          }}
                        />
                      ))}
                    </Box>
                  </Paper>
                </Grid>
    );
};