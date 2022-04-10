import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, IconButton } from "@mui/material";
import apiConfig from "../app/apiConfig";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useAuth from "../hooks/useAuth";
import useFavorite from "../hooks/useFavorite";
import { useLocation } from "react-router-dom";

import { Box } from "@mui/system";

function ProductCard({ movie }) {
  const backgroundImage = apiConfig.originalImage(movie.backdrop_path);
  // movie.backgroundImage = backgroundImage;
  const posterImage = apiConfig.w500Image(movie.poster_path);
  // movie.posterImage = posterImage;
  const navigate = useNavigate();
  const isLogin = useAuth();
  const idList = useFavorite().idList;
  console.log("idList", idList);
  const setIdList = useFavorite().setIdList;
  const location = useLocation();

  return (
    <Card className="movie-card">
      <CardActionArea onClick={() => navigate(`/movie/${movie.id}`)}>
        <CardMedia
          component="img"
          height="140"
          className="card-media"
          image={movie.backdrop_path ? backgroundImage : posterImage}
          alt={movie.title}
        />
      </CardActionArea>
      <CardContent>
        <Box
          display="inline-flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
        >
          <Typography gutterBottom variant="body" component="div">
            {movie.title}
          </Typography>

          {idList[movie.id] ? (
            <button onClick={() => setIdList({ ...idList, [movie.id]: false })}>
              {" "}
              <FavoriteIcon />
            </button>
          ) : (
            <button
              onClick={
                isLogin.isAuthenticated
                  ? () =>
                      setIdList({
                        ...idList,
                        [movie.id]: movie,
                      })
                  : () => navigate("/login")
              }
              state={{ backgroundLocation: location }}
            >
              <FavoriteBorderIcon />
            </button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
