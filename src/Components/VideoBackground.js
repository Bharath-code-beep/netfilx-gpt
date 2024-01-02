import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utilis/constants';
const VideoBackground = ({movieId}) => {
    const getMovieVideos = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/976573/videos?language=en-US',API_OPTIONS)
const json = await data.json();
console.log(json);
const filterData = json.results.filter(video => video.type === "Trailer" );
const trailer = filterData.length ? filterData[0] : json.results[0];
console.log(trailer);
    };
    useEffect (() => {
      getMovieVideos();
    }, []);
    return <div><iframe width="1500" height="315" src="https://www.youtube.com/embed/qN3wfuPYTI4?si=YKeI-fcxq-uZiyBB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>;
};

export default VideoBackground