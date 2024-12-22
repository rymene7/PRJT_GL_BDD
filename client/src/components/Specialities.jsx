import PropTypes from "prop-types";
import { memo } from "react";
import Cardiologie from "../assets/Cardiologie.png";
import Neurologie from "../assets/Neurologie.png";
import Pneumologie from "../assets/Pneumologie.png";
import Gastro from "../assets/Gastro-entérologie.png";
import Dermatologie from "../assets/Dermatologie.png";
import ORL from "../assets/ORL.png";
import Orthopédie from "../assets/Orthopédie.png";
import Dentisterie from "../assets/Dentisterie.png";

const specialties = [
  { id: 1, name: "Cardiologie", image: Cardiologie },
  { id: 2, name: "Neurologie", image: Neurologie },
  { id: 3, name: "Pneumologie", image: Pneumologie },
  { id: 4, name: "Gastro-entérologie", image: Gastro },
  { id: 5, name: "Dermatologie", image: Dermatologie },
  { id: 6, name: "ORL", image: ORL },
  { id: 7, name: "Orthopédie", image: Orthopédie },
  { id: 8, name: "Dentisterie", image: Dentisterie },
];

const SpecialtyCard = memo(({ name, image }) => (
  <div className="flex flex-col items-center bg-white p-7 rounded-lg shadow-2xl shadow-[#E1E3E6] transition-transform hover:scale-105">
    <img
      src={image}
      alt={name}
      className={`object-contain ${
        name === "Orthopédie" ? "w-[33px] h-[70px]" : "w-[70px] h-[70px]"
      }`}
    />
    <p className="font-poppins text-[#ABB6C7] font-medium pt-4">{name}</p>
  </div>
));

SpecialtyCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

SpecialtyCard.displayName = "SpecialtyCard";

const Specialties = () => (
  <section className="bg-gradient-to-bl from-[#25B4F8] from-[-30%] pb-24">
    <h2 className="font-source-serif-pro text-[#214169] font-bold text-4xl text-center py-12">
      Nos meilleures spécialités
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 px-6 md:px-12 lg:px-24 py-4 max-w-[1240px] mx-auto">
      {specialties.map((specialty) => (
        <SpecialtyCard
          key={specialty.id}
          name={specialty.name}
          image={specialty.image}
        />
      ))}
    </div>
  </section>
);

export default memo(Specialties);
