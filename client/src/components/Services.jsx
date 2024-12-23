import tele from "../assets/tele.png";
import rdv from "../assets/rdv.png";
import rech from "../assets/rech.png";
import note from "../assets/note.png";
import comment from "../assets/comment.png";
import PropTypes from "prop-types";

const SERVICES = [
  {
    id: "teleconsultation",
    icon: tele,
    title: "Téléconsultations",
    description:
      "Consultez les meilleurs médecins de diverses spécialités via communication vidéo. C'est entièrement sécurisé, privé et pratique. Choisissez le meilleur créneau pour une consultation en ligne grâce à notre système de planification facile à utiliser.",
    span: 2,
  },
  {
    id: "appointments",
    icon: rdv,
    title: "Prise de rendez-vous",
    description:
      "Planifiez vos rendez-vous de manière simple avec notre système convivial.",
    span: 1,
  },
  {
    id: "search",
    icon: rech,
    title: "Recherche avancée",
    description:
      "Trouvez facilement le médecin dont vous avez besoin avec notre recherche avancée.",
    span: 1,
  },
  {
    id: "rating",
    icon: note,
    title: "Système de notation",
    description:
      "Consultez les évaluations des patients pour choisir le meilleur spécialiste.",
    span: 1,
  },
  {
    id: "comments",
    icon: comment,
    title: "Commentaires",
    description:
      "Partagez et consultez des commentaires pour une meilleure expérience de soins.",
    span: 1,
  },
];

const ServiceCard = ({ icon, title, description, span = 1 }) => (
  <div
    className={`grid ${
      span > 1 ? "col-span-2" : ""
    } bg-gradient-to-br from-[#C5ECFF] to-[#95DDFF] p-[1.5px] rounded-3xl shadow-lg shadow-[#F1F1F1]`}
  >
    <div className="bg-white rounded-3xl p-8">
      <img src={icon} alt={title} className="w-[38px]" />
      <h3 className="text-[#0069AB] font-bold text-lg py-2">{title}</h3>
      <p className="text-[#6D6D6D] text-xs leading-6">{description}</p>
    </div>
  </div>
);

ServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  span: PropTypes.number,
};

const Services = () => {
  return (
    <section className="py-20 font-source-serif-pro">
      <h2 className="text-[#214169] font-bold text-4xl text-center mb-20">
        Nos meilleurs services
      </h2>
      <div className="grid grid-cols-3 grid-rows-2 gap-8 px-48 max-w-[1240px] mx-auto">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            span={service.span}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
