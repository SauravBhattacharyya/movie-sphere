import { MovieListType } from "@/types";
import { TMDBIMGURL } from "@/utils";
import Image from "next/image";

export default function MovieCard({ movie }: { movie: MovieListType }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <Image
        src={`${TMDBIMGURL}${movie.poster_path}`}
        alt={movie.title}
        width={500}
        height={750}
        layout="responsive"
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-black">{movie.title}</h3>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #Action
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #Drama
        </span>
      </div>
    </div>
  );
}
