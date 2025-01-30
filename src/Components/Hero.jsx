
const Hero = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-[35%] ">
          <h1 className="text-7xl  my-20 h-auto font-normal">Navigating the digital landscape for success</h1>
          <button className="bg-black text-white py-5 px-9 rounded-2xl">Book a consultation</button>
        </div>
        <div className="">
          <img src="/src/assets/Illustration.svg" alt="" />
        </div>
      </div>
      <div className=" my-[70px] grid grid-cols-6">
        <img className="grayscale" src="/src/assets/CompanyLogo/Amazon.png" alt=""/>
        <img className="grayscale" src="/src/assets/CompanyLogo/dribble.png" alt=""/>
        <img className="grayscale" src="/src/assets/CompanyLogo/Hubspot.png" alt=""/>
        <img className="grayscale" src="/src/assets/CompanyLogo/notion.png" alt=""/>
        <img className="grayscale" src="/src/assets/CompanyLogo/netflix.png" alt=""/>
        <img className="grayscale" src="/src/assets/CompanyLogo/Zoom.png" alt=""/>
      </div>
    </div>
  )
}

export default Hero