import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import icon from "../assets/Icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-5 px-6 mb-[100px]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={icon} alt="Positivus Logo" className="w-12 h-12" />
          <h1 className="text-4xl font-semibold">Positivus</h1>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <List size={32} />}
        </button>

        <div className={`
          md:flex md:items-center md:gap-10 md:text-xl 
          absolute md:relative top-20 md:top-0 right-0 bg-white md:bg-transparent w-full md:w-auto 
          flex-col md:flex-row shadow-lg md:shadow-none p-6 md:p-0 transition-all duration-300 
          ${isOpen ? "flex" : "hidden"}
        `}>
          <a href="#" className="hover:text-green transition block md:inline">About Us</a>
          <a href="#" className="hover:text-green transition block md:inline">Services</a>
          <a href="#" className="hover:text-green transition block md:inline">Use Cases</a>
          <a href="#" className="hover:text-green transition block md:inline">Pricing</a>
          <a href="#" className="hover:text-green transition block md:inline">Blog</a>
          <button className="border border-black py-3 px-6 rounded-2xl hover:bg-black hover:text-green transition w-full md:w-auto mt-4 md:mt-0">
            Request a quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
