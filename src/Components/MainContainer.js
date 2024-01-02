import React from "react"
import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
console.log(mainMovie)

//   // Check if movies is not an array or empty
//   if (!Array.isArray(movies) || movies.length === 0) {
//     return <p>No movies available</p>; // Or return a message indicating no movies
//   }

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
        <VideoBackground/>
        {/* <VideoTitle/> */} 
      <VideoTitle title={original_title} overview={overview} />
      {/* <VideoBackground movieId={id} /> */}
    </div>
  );
};



export default MainContainer