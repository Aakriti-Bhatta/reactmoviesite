import React from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "../../config";
import MovieCarousel from "../../components/Moviecard/Carousel";
import Footer from "../../components/footer";

const MovieDb = () => {
  const [topRated, setTopRated] = React.useState([]);
  React.useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const res = await axios.get(`${BASE_URL}/movie/top_rated`, {
      params: { api_key: API_KEY },
    });
    setTopRated(res.data.results.splice(0, 6));
  };

  return (
    <div>
      <div className="movie-carousel">
        <MovieCarousel movies={topRated} />
      </div>
      <Footer />
    </div>
  );
};

export default MovieDb;
