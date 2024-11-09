import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import VacancyCards from "../components/VacancyCards";
import BetweenCards from "../components/BetweenCards";
import Another from "../components/Another";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <BetweenCards />
      <VacancyCards />
      <Another />
      <Footer />
    </div>
  );
};

export default Home;
