/* Root file for all code specfically used to create the landing page */
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";

const LandingPage = () => {
  return (
    <>
        <Header />
        <HeroSection />
        <div className="h-[50px] bg-[#000000] opacity-90 fixed bottom-0 left-0 z-20 w-full flex flex-row items-center justify-evenly">
          <p className="text-white/80 text-base md:text-lg font-semibold md:leading-[60px] whitespace-nowrap flex flex-row">Footer section TBA</p>
        </div>
    </>
  )
}
export default LandingPage