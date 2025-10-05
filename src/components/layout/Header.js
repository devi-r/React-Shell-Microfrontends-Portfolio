import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const Header = ({ onMenuClick }) => {
  return (
    <div className="bg-[#0F2430] flex items-center justify-between py-4 pl-4 pr-8 md:hidden">
      <button
        onClick={onMenuClick}
        className="text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group relative"
      >
        <HiMenu className="w-5 h-5 group-hover:scale-110 transition-transform text-[#A1F6FF]" />
      </button>

      <Link to={ROUTES.LANDING} className="flex items-center">
        <h2 className="text-white text-2xl lg:text-2xl font-semibold tracking-tight truncate">
          Devi R
        </h2>
      </Link>
    </div>
  );
};

export default Header;
