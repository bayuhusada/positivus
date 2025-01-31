import icon from "../assets/Icon.png";

const Navbar = () => {
  return (
    <nav className="container mx-auto py-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={icon} alt="Positivus Logo" className="w-12 h-12" />
          <h1 className="text-4xl font-semibold">Positivus</h1>
        </div>

        <div className="flex items-center gap-10 text-xl">
          <a href="#" className="hover:text-green transition">About Us</a>
          <a href="#" className="hover:text-green transition">Services</a>
          <a href="#" className="hover:text-green transition">Use Cases</a>
          <a href="#" className="hover:text-green transition">Pricing</a>
          <a href="#" className="hover:text-green transition">Blog</a>
          <button className="border border-black py-3 px-6 rounded-2xl hover:bg-black hover:text-green transition">
            Request a quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
