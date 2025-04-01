import ControlComponent from "@/components/controlComponent";
import Header from "@/components/header";
import MovieComponent from "@/components/movieComponent";
import { AppProvider } from "@/context";

export default function Home() {
  return (
    <>
      <AppProvider>
        <Header />
        {/* <ControlComponent /> */}
        <MovieComponent />
      </AppProvider>
    </>
  );
}
