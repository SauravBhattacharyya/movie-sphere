"use client";
import { useAppContext } from "@/context";
import { useEffect, useState } from "react";
import Loader from "../loader";
import MovieCard from "../movieCard";

export default function MovieComponent() {
  const { movieList, isMovieListLoading, getPopularMovies } = useAppContext();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getPopularMovies(page);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        !isMovieListLoading
      ) {
        setPage((prevState) => prevState + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMovieListLoading]);

  if (isMovieListLoading) return <Loader />;

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10">
      {movieList && movieList?.length > 0 ? (
        movieList.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <div>No movies found</div>
      )}
    </div>
  );
}
