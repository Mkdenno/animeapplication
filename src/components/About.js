import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ margin: "5%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sm={12}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="h5"
            sx={{
              margin: "2rem 0",
            }}
          >
            Anime is hand-drawn and computer-generated animation originating
            from Japan. Outside of Japan and in English, anime refers
            specifically to animation produced in Japan. However, in Japan and
            in Japanese, anime describes all animated works, regardless of style
            or origin
          </Typography>

        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <img
            src="https://i.pinimg.com/236x/60/36/d9/6036d90eec846e5e94866a4a65119504.jpg"
            alt="img"
            width='400px'
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;