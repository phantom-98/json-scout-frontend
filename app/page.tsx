import { Home } from "./(Header and footer)/home/page";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/page";

export default (props: any) => {
  return (
    <>
    <Header/>
      <div className="mt-0 sm:px-[14%] sm:w-full px-[12rem] overflow-hidden">
        <Home />
      </div>
    <Footer/>
    </>
  );
}