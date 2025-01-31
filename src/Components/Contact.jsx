
import { useState } from 'react'
import contact from '../assets/ilustration/Contact-block.svg'
import icon from '../assets/iconWhite.png'
const Contact = () => {

  const [formType, setFormType] = useState("say-hi")

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    console.log("Form submitted:", { ...data, formType })
  }
  return (
    <div className="mt-[100px]">
      <div className="flex gap-10">
        <h1 className="bg-green p-1 text-4xl font-medium rounded-md">Case Studies</h1>
        <p className="w-[35%]">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
      </div>
      <div className="">
      <div className="grid mt-[70px] md:grid-cols-2 justify-between gap-8 bg-grey rounded-3xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-4 mb-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="contact-type"
                  value="say-hi"
                  checked={formType === "say-hi"}
                  onChange={(e) => setFormType(e.target.value)}
                  className="form-radio text-green"
                />
                <span>Say Hi</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="contact-type"
                  value="get-quote"
                  checked={formType === "get-quote"}
                  onChange={(e) => setFormType(e.target.value)}
                  className="form-radio text-green"
                />
                <span>Get a Quote</span>
              </label>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1">
                  Email*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {formType === "get-quote" && (
                <div>
                  <label htmlFor="company" className="block mb-1">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              )}

              <div>
                <label htmlFor="message" className="block mb-1">
                  {formType === "get-quote" ? "Project Details*" : "Message*"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={formType === "get-quote" ? "Tell us about your project" : "Your message"}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md min-h-[150px]"
                  required
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-dark text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
            >
              {formType === "get-quote" ? "Request Quote" : "Send Message"}
            </button>
          </form>
          <div className="flex justify-end ">
            <img className='max-w-full' src={contact} alt=""/>
          </div>
        </div>
      </div>

      <footer className="bg-dark py-12 mt-[70px] rounded-t-3xl text-white ">
        <div className=" mx-auto px-20 py-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <nav className="flex justify-between mb-1">
                <div className="">
                   <h2 className="text-2xl font-bold mb-6 flex gap-5">
                     <img src={icon} alt="icon" />
                       Positivus</h2>
                </div>
                <div className=" flex mx-auto gap-9 underline">
                <a href="#" className="hover:text-green">
                  About us
                </a>
                <a href="#" className="hover:text-green">
                  Services
                </a>
                <a href="#" className="hover:text-green">
                  Use Cases
                </a>
                <a href="#" className="hover:text-green">
                  Pricing
                </a>
                <a href="#" className="hover:text-green">
                  Blog
                </a>
                </div>
              </nav>
              <div className="space-y-2 text-gray-400">
                <h1 className=" bg-green p-1 w-fit text-dark text-lg font-medium rounded-md">Contact Us</h1>
                <p>Email: info@positivus.com</p>
                <p>Phone: 555-567-8901</p>
                <p>Address: 1234 Main St</p>
                <p>Moonstone City, Stardust State 12345</p>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex gap-4 justify-end">
                <a href="#" className="hover:text-green">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-green">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-green">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
              <div className="flex gap-4 items-center bg-darkGrey rounded-2xl px-14 py-16 mt-10">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-3 py-2 border bg-darkGrey border-gray-700 rounded-md text-white"
                />
                <button className="bg-green text-dark px-4 py-2 rounded-md hover:bg-[#a3ff33] transition duration-300">
                  Subscribe to news
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center pt-8 border-t border-gray-800 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Positivus. All Rights Reserved.</p>
            <a href="#" className="hover:text-green">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Contact