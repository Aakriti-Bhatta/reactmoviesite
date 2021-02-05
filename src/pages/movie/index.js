import React from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { BASE_URL, API_KEY } from "../../config";
import MovieCard from "../../components/Moviecard";
import MovieCarousel from "../../components/Moviecard/Carousel";
import Footer from "../../components/footer";

const Home = () => {
  const [trendings, setTrendings] = React.useState([]);
  const [playingNow, setPlayingNow] = React.useState([]);
  const [upcommimg, setUpcomming] = React.useState([]);

  React.useEffect(() => {
    getTrendingMovies();
    getPlayingNowMovies();
    getUpcommimgMovies();
  }, []);

  const getTrendingMovies = async () => {
    const res = await axios.get(`${BASE_URL}/trending/movie/week`, {
      params: { api_key: API_KEY },
    });
    setTrendings(res.data.results);
  };

  const getPlayingNowMovies = async () => {
    const res = await axios.get(`${BASE_URL}/movie/now_playing`, {
      params: { api_key: API_KEY },
    });
    setPlayingNow(res.data.results.splice(0, 6));
  };

  const getUpcommimgMovies = async () => {
    const res = await axios.get(`${BASE_URL}/movie/upcoming`, {
      params: { api_key: API_KEY },
    });
    setUpcomming(res.data.results);
  };

  return (
    <div>
      <div className="mt-4 text-light card bg-info p-2">
        <h3>Now Playing</h3>
      </div>
      <div className="row">
        {playingNow.map((movie) => {
          return (
            <div className="col-md-2">
              <MovieCard movie={movie} />
            </div>
          );
        })}
      </div>
      <div className="mt-4 text-light card bg-info p-2">
        <h3>Trending Now</h3>
      </div>
      <div className="row">
        {trendings.map((movie) => {
          return (
            <div className="col-md-2">
              <MovieCard movie={movie} />
            </div>
          );
        })}
      </div>
      <div className="mt-2 text-light card bg-info p-2">
        <h3>Upcommimg</h3>
      </div>
      <div className="row">
        {upcommimg.map((movie) => {
          return (
            <div className="col-md-2">
              <MovieCard movie={movie} />
            </div>
          );
        })}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
