import limeIcon from "../assets/icon/limeIcon.svg";

const Studies = () => {
  return (
    <div className="px-6 md:px-10 lg:px-20 my-20">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
        <h1 className="bg-green h-fit p-2 text-3xl md:text-4xl font-medium rounded-md">
          Case Studies
        </h1>
        <p className="w-full md:w-[60%] text-lg">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-6 md:p-10 bg-dark rounded-3xl mt-10 text-white">
        {[
          {
            text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
          },
          {
            text: "For a B2B software company, we developed an SEO strategy that resulted in a first-page ranking for key keywords and a 200% increase in organic traffic.",
          },
          {
            text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
          },
        ].map((study, index) => (
          <div
            key={index}
            className={`p-6 md:p-10 w-full md:w-[80%] ${
              index !== 2 ? "border-b md:border-b-0 md:border-r lg:border-r" : ""
            }`}
          >
            <p className="mb-6 text-lg">{study.text}</p>
            <a href="#" className="flex items-center gap-3 text-green hover:text-white transition">
              Learn More
              <img src={limeIcon} alt="Arrow Icon" className="w-6 h-6" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Studies;
