import Navbar from "../components/Navbar.jsx";
import Searchbar from "../components/Searchbar.jsx";
import doctors from "../assets/doctors.png";
import Specialities from "../components/Specialities.jsx";
import Services from "../components/Services.jsx";
import About from "../components/About.jsx";
import Fouter from "../components/Fouter.jsx";

const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-bl from-[#25B4F8] from-[-30%]">
        <Navbar />
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-start ml-20 mt-[90px]">
            <h1 className="font-source-serif-pro font-bold text-6xl pb-2 text-[#214169]">
              Votre Partenaire en Santé et Bien-être
            </h1>
            <p className="font-playfair-display text-xl">
              Nous nous engageons à vous fournir les meilleurs services médicaux
              et de santé pour vous aider à vivre en meilleure santé et plus
              heureux.
            </p>
          </div>
          <div>
            <img src={doctors} alt="doctors" />
          </div>
        </div>
      </div>

      <Searchbar />
      <Specialities />
      <Services />
      <About />
      <Fouter />
      
    </div>
  );
};

export default Home;
