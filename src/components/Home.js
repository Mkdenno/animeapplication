import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const homeStyle = {
  margin: "5%",
};

const Home = () => {
  return (
    <Box sx={homeStyle}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sm={12}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            Anime
          </Typography>
          <Typography
            variant="h5"
            sx={{
              margin: "2rem 0",
            }}
          >
            Complete anime data. Ranking, synopsis, genre, search by title. Over
            20k data updated everyday.
          </Typography>

          <Button variant="contained">See More</Button>
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <img
            src="https://images.unsplash.com/photo-1627012441283-79151a20adf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fDNkJTIwYW5pbWF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="img"
            width="450px"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;