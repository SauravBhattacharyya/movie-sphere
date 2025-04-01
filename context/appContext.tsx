"use client";
import { fetchPopularMovies } from "@/api/services";
import { MovieListType } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";

interface AppContextType {
  movieList: MovieListType[] | null;
  isMovieListLoading: boolean;
  getPopularMovies: (page: number) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [movieList, setMovieList] = useState<any[] | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isMovieListLoading, setIsMovieListLoading] = useState<boolean>(false);

  const getPopularMovies = async (page: number) => {
    setIsMovieListLoading(true);
    try {
      const response = await fetchPopularMovies(page);
      if (response.status === 200) {
        const newMovies = response?.data?.results || [];
        const combinedMovies = [...(movieList || []), ...newMovies];
        const uniqueMovies = Array.from(
          new Map(combinedMovies.map((movie) => [movie.id, movie])).values()
        );
        setMovieList(uniqueMovies);
        setErrorMessage("");
      } else {
        console.warn("Unexpected response status", response.status);
        setErrorMessage(
          `Failed to fetch movies. Status code ${response.status}`
        );
      }
    } catch (e) {
      console.error("Error fetching popular movies", e);
      setErrorMessage(
        "An error occurred while fetching popular movies. Please try again later."
      );
    } finally {
      setIsMovieListLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{ movieList, isMovieListLoading, getPopularMovies }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
