const baseUrl = "https://api.themoviedb.org/3/";

export const ENDPOINTS = {
  NOWPLAYING: `${baseUrl}/movie/now_playing`,
  POPULAR: `${baseUrl}/movie/popular`,
  TOPRATED: `${baseUrl}/movie/top_rated`,
  UPCOMING: `${baseUrl}/movie/upcoming`,
  GENRESLIST: `${baseUrl}/genre/movie/list`,
};
