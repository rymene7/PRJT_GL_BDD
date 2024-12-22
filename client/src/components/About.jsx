import about from "../assets/about.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const About = () => {
  return (
    <div className="grid grid-cols-2 font-source-serif-pro bg-gradient-to-l from-white from-[-25%] via-[#e1f5ff] via-20% to-white to-75% pb-36">
      <div className="pl-16">
        <img src={about} alt="À propos de nous" />
      </div>
      <div className="flex flex-col justify-center p-24">
        <div>
          <h2 className=" font-bold text-5xl text-[#214169] p-2">
            À propos de nous
          </h2>
          <h3 className="text-2xl text-[#0069AB] font-semibold p-2">
            DZ-Tabib
          </h3>
        </div>
        <div className="grid grid-cols-8 py-14">
          <div>
            <IoIosArrowRoundForward
              className="text-[#307BC4] mt-[-12px]"
              size={55}
            />
          </div>
          <div className="col-span-7 pl-2">
            <h3 className="text-xl text-[#007299]">
              Notre mission est de rendre la santé plus accessible et plus
              pratique
            </h3>
            <p className="text-sm text-[#8C9396] py-6 leading-6">
              DZ-TABIB est une plateforme de santé en ligne en Algérie pour
              trouver et réserver des rendez-vous médicaux simplement. Obtenez
              des consultations sécurisées tout en assurant la confidentialité
              de vos données.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
