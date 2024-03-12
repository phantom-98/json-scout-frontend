import { Home } from "./(Header and footer)/home/page";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/page";

export default (props: any) => {
  return (
    <>
    <Header/>
      <div className="sm:mt-0 mt-[18rem] sm:px-[14%] px-[12rem] overflow-hidden">
        <Home />
      </div>
    <Footer/>
    </>
  );
}