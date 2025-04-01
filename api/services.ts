import { axiosInstance } from "./axiosInstance";
import { ENDPOINTS } from "./endpoints";

export const fetchPopularMovies = async (page: number) => {
  try {
    const response = await axiosInstance.get(
      `${ENDPOINTS.POPULAR}?page=${page}`
    );
    return response;
  } catch (e) {
    console.error("Error fetching popular movies", e);
    throw e;
  }
};
