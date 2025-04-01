import { useAppContext } from "@/context";
import { MovieListType } from "@/types";
import { TMDBIMGURL } from "@/utils";
import Image from "next/image";

export default function MovieCard({ movie }: { movie: MovieListType }) {
  const { genresList } = useAppContext();
  console.log(movie);
  return (
    <div className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg bg-white transform hover:scale-105 transition duration-300">
      <Image
        src={`${TMDBIMGURL}${movie.poster_path}`}
        alt={movie.title}
        width={300}
        height={450}
        layout="responsive"
      />
      <div className="px-6">
        <div className="pt-4">
          <h3 className="font-bold text-xl mb-2 text-black">{movie.title}</h3>
        </div>
        <p className="text-sm mb-2 text-gray-700">
          {new Date(movie.release_date).toLocaleString("default", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
        <div className="text-sm mb-2 text-gray-700 font-bold">
          {` ${(movie.vote_average * 10).toFixed(2)}% `}
          <span className="font-normal">{`(${movie.vote_count} votes)`}</span>
        </div>
        <div className="pt-4 pb-2">
          {movie.genre_ids.length > 0 &&
            movie.genre_ids.map((genre) => {
              const genreName =
                genresList?.find((g) => g.id === genre)?.name || "Unknown";

              return (
                <span
                  key={genre}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-2"
                >
                  #{genreName}
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
}
