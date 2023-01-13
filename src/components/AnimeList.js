import React from "react";
import "./home.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Grid } from "@mui/material";

const style = {

  margin: '10%',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap'
}

const AnimeList = ({ movies,isLoading }) => {
  console.log(isLoading)
  return (

        <Box sx={style}>
          {
            isLoading ? 
            <div className="loaderImage">
            <img src="./images/Rocket.gif" width={600} alt="" />
          </div>
            :
            movies.map((movie) => (
                
              <Card sx={{ width: 250, marginTop: '1rem'}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height= "100"
                    image={movie.image}
                    alt="green iguana"
                    sx={{height: '150px'}}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h8" component="div">
                      {movie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Episodes: {movie.episodes}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Rankings:{movie.ranking}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Type:{movie.type}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" href={movie.link}>
                    Play
                  </Button>
                </CardActions>
              </Card>
            ))}
          
        
        
      </Box>
      )


};

export default AnimeList;