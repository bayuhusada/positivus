import ilustration from "../assets/Illustration.svg";

import Amazon from "../assets/CompanyLogo/Amazon.png";
import Dribble from "../assets/CompanyLogo/dribble.png";
import Hubspot from "../assets/CompanyLogo/Hubspot.png";
import Notion from "../assets/CompanyLogo/notion.png";
import Netflix from "../assets/CompanyLogo/netflix.png";
import zoom from "../assets/CompanyLogo/Zoom.png";

const Hero = () => {
  return (
    <div className="px-6 py-[70px] md:px-16">
      {/* Bagian atas */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-[35%] text-center md:text-left">
          <h1 className="text-4xl md:text-7xl my-10 md:my-20 font-normal">
            Navigating the digital landscape for success
          </h1>
          <button className="bg-black text-white py-4 px-6 md:py-5 md:px-9 rounded-2xl">
            Book a consultation
          </button>
        </div>
        <div className="w-full md:w-auto">
          <img className="max-w-full" src={ilustration} alt="Illustration" />
        </div>
      </div>

      {/* Bagian logo perusahaan */}
      <div className="py-[70px] grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-8 items-center">
        <img className="grayscale max-w-full" src={Amazon} alt="Amazon" />
        <img className="grayscale max-w-full" src={Hubspot} alt="Hubspot" />
        <img className="grayscale max-w-full" src={Dribble} alt="Dribble" />
        <img className="grayscale max-w-full" src={Notion} alt="Notion" />
        <img className="grayscale max-w-full" src={Netflix} alt="Netflix" />
        <img className="grayscale max-w-full" src={zoom} alt="Zoom" />
      </div>
    </div>
  );
};

export default Hero;
