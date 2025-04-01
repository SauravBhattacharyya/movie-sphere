"use client";
import ControlComponent from "@/components/controlComponent";
import Header from "@/components/header";
import MovieComponent from "@/components/movieComponent";
import { useAppContext } from "@/context";
import { useEffect } from "react";

export default function Home() {
  const { getGenresList } = useAppContext();

  useEffect(() => {
    getGenresList();
  }, []);

  return (
    <>
      <Header />
      <ControlComponent />
      <MovieComponent />
    </>
  );
}
