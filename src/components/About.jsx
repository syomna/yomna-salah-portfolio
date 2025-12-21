import { Stack, Typography } from "@mui/material";
import MotionLayout from "./MotionLayout";

const About = () => {
  return (
    <MotionLayout>
      <Stack pt={5} id="About" width={{ xs: "100%", md: "60%" }}>
        <Typography variant="h4" fontWeight="bold">
          About me
        </Typography>
        <Typography pt={2}>
          A passionate and versatile developer with over 3 years of experience
          in crafting innovative and user-friendly applications. Dedicated to
          continuous learning and growth, leveraging industry expertise to
          deliver exceptional results. Committed to creating visually stunning
          apps that seamlessly integrate form and function for an outstanding
          user experience.
        </Typography>
      </Stack>
    </MotionLayout>
  );
};

export default About;
