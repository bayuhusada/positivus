
import ilustration from "../assets/Illustration.svg"

import Amazon from "../assets/CompanyLogo/Amazon.png"
import Dribble from "../assets/CompanyLogo/dribble.png"
import Hubspot from "../assets/CompanyLogo/Hubspot.png"
import Notion from "../assets/CompanyLogo/notion.png"
import Netflix from "../assets/CompanyLogo/netflix.png"
import zoom from "../assets/CompanyLogo/Zoom.png"

const Hero = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-[35%] ">
          <h1 className="text-7xl  my-20 h-auto font-normal">Navigating the digital landscape for success</h1>
          <button className="bg-black text-white py-5 px-9 rounded-2xl">Book a consultation</button>
        </div>
        <div className="">
          <img src={ilustration} alt="" />
        </div>
      </div>
      <div className=" my-[70px] grid grid-cols-6">
        <img className="grayscale" src={Amazon} alt=""/>
        <img className="grayscale" src={Hubspot} alt=""/>
        <img className="grayscale" src={Dribble} alt=""/>
        <img className="grayscale" src={Notion} alt=""/>
        <img className="grayscale" src={Netflix} alt=""/>
        <img className="grayscale" src={zoom} alt=""/>
      </div>
    </div>
  )
}

export default Hero