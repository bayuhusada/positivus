import { FacebookLogo, LinkedinLogo, TwitterLogo } from '@phosphor-icons/react'
import icon from '../assets/iconWhite.png'


const Footer = () => {
  return (
    <footer className="bg-dark py-12 mt-[70px] rounded-t-3xl text-white">
    <div className="mx-auto px-6 md:px-20 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <nav className="flex flex-wrap justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold flex gap-5 items-center">
              <img src={icon} alt="icon" className="h-8 w-8" />
              Positivus
            </h2>
            <div className="flex flex-wrap gap-6 underline">
              <a href="#" className="hover:text-green">About us</a>
              <a href="#" className="hover:text-green">Services</a>
              <a href="#" className="hover:text-green">Use Cases</a>
              <a href="#" className="hover:text-green">Pricing</a>
              <a href="#" className="hover:text-green">Blog</a>
            </div>
          </nav>

          <div className="space-y-2 text-gray-400">
            <h1 className="bg-green p-1 w-fit text-dark text-lg font-medium rounded-md">Contact Us</h1>
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St</p>
            <p>Moonstone City, Stardust State 12345</p>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center md:items-end">
          <div className="flex gap-4">
            <a href="#" className="hover:text-green rounded-full"><LinkedinLogo size={32} weight='fill' /></a>
            <a href="#" className="hover:text-green"><FacebookLogo size={32} weight='fill' /></a>
            <a href="#" className="hover:text-green"><TwitterLogo size={32} weight='fill' /></a>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center bg-darkGrey rounded-2xl px-8 py-6 mt-10 w-full md:w-auto">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 border bg-darkGrey border-gray-700 rounded-md text-white w-full md:w-auto"
            />
            <button className="bg-green text-dark px-4 py-2 rounded-md hover:bg-[#a3ff33] transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-center pt-8 border-t border-gray-800 text-sm text-gray-400 text-center md:text-left">
        <p>© {new Date().getFullYear()} Positivus. All Rights Reserved.</p>
        <a href="#" className="hover:text-green">Privacy Policy</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer