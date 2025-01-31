import { useState } from "react";
import plus from "../assets/icon/plus.svg";
import minus from "../assets/icon/mines.svg";

const data = [
  {
    id: 1,
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 2,
    title: "Research and Strategy Development",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: 3,
    title: "Implementation",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: 4,
    title: "Monitoring and Optimization",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: 5,
    title: "Reporting and Comunication",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: 6,
    title: "Continual Improvement",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
];

const Proces = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleProces = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-[100px]">
      <h1 className="bg-green w-fit px-4 py-2 text-4xl font-medium rounded-md">
        Our Working Process
      </h1>

    <div data-aos='zoom-out-down' className=" mt-[70px] mx-auto space-y-4">

      {data.map((item, index) => (
        <div
          key={item.id}
          className={`border rounded-2xl p-8 shadow-[0px_10px_0px_0px_#000000] transition-all ${
            openIndex === index ? "bg-green text-dark" : "bg-white"
          }`}
        >
          <button
            onClick={() => toggleProces(index)}
            className="flex justify-between items-center w-full p-5 text-lg font-semibold"
          >
            <span className="flex items-center gap-3">
              <span className="text-4xl font-bold">{`0${item.id}`}</span>
              {item.title}
            </span>
            <img
              src={openIndex === index ? minus : plus}
              alt="Toggle"
              className="w-6 h-6"
            />
          </button>

          {openIndex === index && (
            <div className="p-5 border-t">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  </div>
  );
};

export default Proces;
