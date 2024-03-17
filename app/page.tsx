import { Home } from "./(Header and footer)/home/page";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/page";

export default (props: any) => {
  return (
    <>
    <Header/>
      <div className="sm:mt-[12rem] mt-[36rem] sm:px-[33rem] sm:w-[215rem] px-[12rem] overflow-hidden">
        <Home />
      </div>
    <Footer/>
    </>
  );
}