import React from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
function Thumbnail({ results }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="p-6 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        src={
          `${BASE_URL}${results.backdrop_path || results.poster_path}` ||
          `${BASE_URL}${results.poster_path}`
        }
        height={1080}
        width={1920}
      ></Image>
      <div>
        <p className="truncate max-wd-md">{results.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {results.title || results.original_name}
        </h2>
        <p className="flex items-center  opacity-0 group-hover:opacity-100">
          {results.media_type && `${results.media_type}`} {"    "}release Date:{" "}
          {results.release_date} {"  "}
          <ThumbUpIcon className="h-5 mx-2"></ThumbUpIcon>
          {results.vote_count}{" "}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;
