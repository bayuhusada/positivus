// Import icon
import arrow from "../assets/icon/Ellipse 1.png";
import whiteArrow from "../assets/icon/whiteArrow.svg";

// Import ilustrasi gambar
import optimaz from "../assets/ilustration/optimaz.svg";
import ads from "../assets/ilustration/ads.svg";
import market from "../assets/ilustration/mark.svg";
import email from "../assets/ilustration/email-mark.svg";
import content from "../assets/ilustration/content.svg";
import track from "../assets/ilustration/tracking.svg";

import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const Services = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  // Data layanan untuk mapping
  const services = [
    {
      title: "Search Engine Optimization",
      bg: "bg-grey",
      img: optimaz,
      textWhite: false,
    },
    {
      title: "Pay-per-click Advertising",
      bg: "bg-green",
      img: ads,
      textWhite: false,
    },
    {
      title: "Social Media Marketing",
      bg: "bg-dark",
      img: market,
      textWhite: true,
    },
    {
      title: "Email Marketing",
      bg: "bg-grey",
      img: email,
      textWhite: false,
    },
    {
      title: "Content Creation",
      bg: "bg-green",
      img: content,
      textWhite: false,
    },
    {
      title: "Analytics and Tracking",
      bg: "bg-dark",
      img: track,
      textWhite: true,
    },
  ];

  return (
    <div className="mb-20">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <h1 className="bg-green p-2 text-3xl md:text-4xl font-medium rounded-md">
          Services
        </h1>
        <p className="w-full md:w-2/3 text-center md:text-left">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="zoom-out-down"
            className={`flex flex-col sm:flex-row items-center sm:justify-between border rounded-3xl p-10 ${service.bg}`}
          >
            <div className="grid gap-8 text-center sm:text-left">
              <h1
                className={`w-full sm:w-[300px] text-2xl sm:text-3xl md:text-4xl font-medium rounded-md ${
                  service.textWhite ? "bg-green text-white" : "bg-white text-black"
                }`}
              >
                {service.title}
              </h1>
              <a
                href="#"
                className={`flex items-center justify-center sm:justify-start text-lg sm:text-xl gap-3 ${
                  service.textWhite ? "text-white" : "text-black"
                }`}
              >
                <img
                  src={service.textWhite ? whiteArrow : arrow}
                  className="w-[30px] sm:w-[40px] h-[30px] sm:h-[40px]"
                  alt="arrow"
                />
                Learn More
              </a>
            </div>
            <img src={service.img} alt={service.title} className="w-[100px] sm:w-[120px] md:w-[150px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
