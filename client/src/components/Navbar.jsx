import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Accueil");

  const navItems = ["Accueil", "Trouver un médecin", "À propos"];

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="font-source-serif-pro font-extrabold flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-xl">
      <img src={logo} alt="DZ-TABIB logo" className="w-[200px]" />

      <ul className="flex text-[#0069AB]">
        {navItems.map((item) => (
          <li
            key={item}
            onClick={() => handleItemClick(item)}
            className={`
              p-4 cursor-pointer transition-all duration-300
              ${
                activeItem === item
                  ? "text-[#214169] underline font-bold"
                  : "text-[#0069AB] hover:text-opacity-70"
              }
            `}
          >
            {item}
          </li>
        ))}
      </ul>

      <button className="text-[#307BC4] bg-[#C4EBFD] p-4 rounded-2xl">
        Vous êtes docteur?
      </button>

      <button className="text-[#B8F4FF] bg-[#0069AB] py-4 px-10 rounded-2xl">
        Se connecter
      </button>
    </div>
  );
};

export default Navbar;
