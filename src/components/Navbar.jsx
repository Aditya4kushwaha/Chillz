import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar({ selectedFlavor }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const flavorColors = {
    strawberry: "bg-gradient-to-r from-pink-700 to-pink-400",
    blueberry: "bg-gradient-to-r from-blue-600 to-sky-400",
    chocolate: "bg-gradient-to-r from-orange-800 to-rose-200",
    evergreen: "bg-gradient-to-r from-green-600 to-green-400",
  };
  const bg = flavorColors[selectedFlavor] || flavorColors.strawberry;

  return (
    <nav className={`w-full ${bg} text-white relative z-50`}>
      <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between h-[100px] px-4 md:px-6 lg:px-8 relative">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Chillz Logo" className="w-[80px] h-[28px]" />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="cursor-pointer flex gap-6 items-center">
            {["Home", "Shop", "Delivery", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  className="font-poppins font-bold text-lg lg:text-[20px] "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Order Button on Desktop - Transparent background, white text & border */}
          <button className="cursor-pointer ml-6 w-auto min-w-[180px] h-[50px] rounded-[5px] border-2 border-white text-white whitespace-nowrap px-4">
  Order Your Ice-Cream
</button>

        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="lg:hidden flex flex-col items-center justify-center w-10 h-10 border-2 border-white rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-5 h-0.5 bg-white mb-1"></span>
          <span className="block w-5 h-0.5 bg-white mb-1"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white text-black w-full shadow-md flex flex-col items-center py-4 space-y-4 transition-all duration-300 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {["Home", "Shop", "Delivery", "Contact"].map((item, i) => (
          <a key={i} href="/" className="font-poppins font-bold text-lg">
            {item}
          </a>
        ))}
        <button className="w-[150px] sm:w-[180px] h-[45px] sm:h-[50px] rounded-[5px] bg-black text-white font-bold">
          Order Your Ice-Cream
        </button>
      </div>
    </nav>
  );
}
