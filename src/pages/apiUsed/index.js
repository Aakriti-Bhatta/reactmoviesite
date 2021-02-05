import React from "react";
import { Badge } from "reactstrap";
import Footer from "../../components/footer";
import { Heading } from "../../components/widges/Heading";
import "./style.css";

const ApiUsed = (props) => {
  return (
    <div id="Apiused">
      <div className="main_Api">
        <Heading>
          TrendingMovies :{" "}
          <Badge
            href="https://developers.themoviedb.org/3/movies/get-popular-movies"
            color="light"
          >
            https://developers.themoviedb.org/3/movies/get-popular-movies
          </Badge>
        </Heading>
        <Heading>
          UpcommingMovies :{" "}
          <Badge href="https://www.themoviedb.org/movie/upcoming" color="light">
            https://www.themoviedb.org/movie/upcoming
          </Badge>
        </Heading>
        <Heading>
          NowPLayingMovies :{" "}
          <Badge
            href="https://www.themoviedb.org/movie/now-playing"
            color="light"
          >
            https://www.themoviedb.org/movie/now-playing
          </Badge>
        </Heading>
        <Heading>
          TopRatedMovies :{" "}
          <Badge
            href="https://www.themoviedb.org/movie/top-rated"
            color="light"
          >
            https://www.themoviedb.org/movie/top-rated
          </Badge>
        </Heading>
      </div>
    </div>
  );
};

export default ApiUsed;
