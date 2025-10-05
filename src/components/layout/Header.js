import { HiMenu } from "react-icons/hi";

const Header = ({ onMenuClick }) => {
  return (
    <div className="bg-[#0F2430] flex items-center justify-between p-4 md:hidden">
      <button
        onClick={onMenuClick}
        className="text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group relative"
      >
        <HiMenu className="w-5 h-5 group-hover:scale-110 transition-transform text-[#A1F6FF]" />
      </button>

      <div className="flex items-center ml-3">
        <h2 className="text-white text-sm md:text-base lg:text-xl font-semibold tracking-tight truncate">
          Devi R
        </h2>
      </div>
    </div>
  );
};

export default Header;
