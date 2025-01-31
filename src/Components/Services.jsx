
// icon
import arrow from '../assets/icon/Ellipse 1.png'
import whiteArrow from '../assets/icon/whiteArrow.svg'

// gambar ilustrasi
import optimaz from '../assets/ilustration/optimaz.svg'
import ads from '../assets/ilustration/ads.svg'
import market from '../assets/ilustration/mark.svg'
import email from '../assets/ilustration/email-mark.svg'
import content from '../assets/ilustration/content.svg'
import track from '../assets/ilustration/tracking.svg'


import 'aos/dist/aos.css';
import { useEffect } from 'react'
import Aos from 'aos'

const Services = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000, 
      once: false,     
    });
  }, []);
  return (
    <div className="my-[100px]">
      <div className="flex items-center gap-10">
        <h1 className="bg-green p-1 text-4xl font-medium rounded-md">Services</h1>
        <p className="w-[35%]">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </div>
      <div className="my-[100px] grid grid-cols-2 gap-[40px] bg-grey rounded-3xl">
        <div data-aos='zoom-out-down' className="flex justify-between border rounded-3xl p-14">
          <div className="grid gap-20">
            <h1 className="w-[300px] bg-green text-4xl font-medium rounded-md">Search Engine Optimization</h1>
            <a href="" className="flex tiems-center text-xl gap-3 ">
              <img src={arrow} className="w-[40px]zoom-out-down" alt=""/>
              Learn More</a>
          </div>
          <img src={optimaz} alt=""/>
        </div>
        <div data-aos='zoom-out-down' className="flex justify-between border rounded-3xl bg-green p-14">
          <div className="grid gap-20">
            <h1 className="w-[300px] bg-white text-4xl font-medium rounded-md">Pay-per-click Advertising</h1>
            <a href="" className="flex tiems-center text-xl gap-3 ">
              <img src={arrow} className="w-[40px] h-[40px]" alt=""/>
              Learn More</a>
          </div>
          <img src={ads} alt=""/>
        </div>
        <div data-aos='zoom-out-down' className="flex justify-between border rounded-3xl bg-dark p-14">
          <div className="grid gap-20">
            <h1 className="w-[300px] bg-green text-4xl font-medium rounded-md">Social Media Marketing</h1>
            <a href="" className="flex items-center text-xl text-white gap-3 ">
              <img src={whiteArrow} className="w-[40px] h-[40px]" alt=""/>
              Learn More</a>
          </div>
          <img src={market} alt=""/>
        </div>
        <div data-aos='zoom-out-down' className="flex justify-between border rounded-3xl p-14">
          <div className="grid gap-20">
            <h1 className="w-[200px] bg-green text-4xl font-medium rounded-md">Email Marketing</h1>
            <a href="" className="flex items-center text-xl gap-3 ">
              <img src={arrow} className="w-[40px] h-[40px]" alt=""/>
              Learn More</a>
          </div>
          <img src={email} alt=""/>
        </div>
        <div data-aos='zoom-out-down' className="flex justify-between border rounded-3xl bg-green p-14">
          <div className="grid gap-20">
            <h1 className="w-[200px] bg-white text-4xl font-medium rounded-md">Content Creation</h1>
            <a href="" className="flex items-center text-xl gap-3 ">
              <img src={arrow} className="w-[40px] h-[40px]" alt=""/>
              Learn More</a>
          </div>
          <img src={content} alt=""/>
        </div>
        <div data-aos='zoom-out-down' className="flex justify-between border rounded-3xl bg-dark p-14">
          <div className="grid gap-20">
            <h1 className="w-[300px] bg-green text-4xl font-medium rounded-md">Analytics and Tracking</h1>
            <a href="" className="flex items-center text-xl gap-3 text-white">
              <img src={whiteArrow} className="w-[40px] h-[40px]" alt=""/>
              Learn More</a>
          </div>
          <img src={track} alt=""/>
        </div>

    
      </div>
    </div>
  )
}

export default Services