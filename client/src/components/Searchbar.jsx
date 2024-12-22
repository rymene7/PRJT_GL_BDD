import { FiSearch } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
const Searchbar = () => {
  return (
    <div>
      <div className="font-source-serif-pro my-20 mx-28 bg-gradient-to-bl from-[#57C9FF] from-20% p-px rounded-3xl shadow-lg shadow-[#F1F1F1]">
        <div className="p-8 bg-gradient-to-t from-[#EEFAFF] from-[-100%] to-white rounded-3xl">
          <h3 className="text-[#0069AB] text-3xl font-bold pb-2">
            Réservez facilement un rendez-vous en quelques clics.
          </h3>
          <div className="grid grid-cols-5 p-3">
            <div className="col-span-4 flex justify-around">
              <div className="flex flex-col">
                <div className="flex justify-start gap-2 py-4">
                  <FiSearch size={28} className="iconfy text-[#3A9AD9]" />
                  <label
                    htmlFor="specialite"
                    className="text-[#888888] font-bold pt-0.5"
                  >
                    Spécialité
                  </label>
                </div>
                <input
                  type="text"
                  id="specialite"
                  name="specialite"
                  className="font-manrope text-[13px] font-medium placeholder-[#E7E7E7] border border-[#E7E7E7] p-4 rounded-xl w-56 focus:outline-[#3A9AD9] focus:outline-double"
                  placeholder="Entrez la spécialité"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-start gap-2 py-4">
                  <IoLocationSharp
                    size={28}
                    className="iconfy text-[#3A9AD9]"
                  />
                  <label
                    htmlFor="localisation"
                    className="text-[#888888] font-bold pt-0.5"
                  >
                    Localisation
                  </label>
                </div>
                <input
                  type="text"
                  id="localisation"
                  name="localisation"
                  className="font-manrope text-[13px] font-medium placeholder-[#E7E7E7] border border-[#E7E7E7] p-4 rounded-xl w-56 focus:outline-[#3A9AD9] focus:outline-double"
                  placeholder="Entrez la localisation"
                />
              </div>
            </div>
            <div className="flex flex-col items-end">
              <button className="bg-[#3A9AD9] font-semibold text-white text-lg py-3 px-4 rounded-xl flex gap-2 mt-[3.75rem]">
                Rechercher <FaCircleCheck className="mt-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Searchbar;
