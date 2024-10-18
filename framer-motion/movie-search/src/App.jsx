import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import MovieCard from "./components/MovieCard/MovieCard";

function App() {
  const title = "Movie Search";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=your-api-key=Harry%20Potter"
      );
      const data = await response.json();
      setTimeout(() => {
        setMovies(data.Search);
      }, 2000);
    }
    if (movies.length === 0) getMovies();
  }, []);

  const movieCardComps = movies.map((movie) => {
    return <MovieCard movie={movie} key={movie.imdbID} />;
  });

  const movieVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <main>
      <h2>{title}</h2>
      {movies.length === 0 ? (
        <motion.div
          className="loader"
          animate={{
            rotate: 360,
          }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      ) : (
        <motion.section
          initial="hidden"
          animate="visible"
          variants={movieVariants}
          className="movie-cards"
        >
          {movieCardComps}
        </motion.section>
      )}
    </main>
  );
}

export default App;
