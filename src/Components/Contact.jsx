import { useState } from 'react'
import contact from '../assets/ilustration/Contact-block.svg'
import Footer from './Footer'

const Contact = () => {
  const [formType, setFormType] = useState("say-hi")

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    console.log("Form submitted:", { ...data, formType })
  }

  return (
    <div className="mt-[100px] px-4 md:px-10">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start text-center md:text-left">
        <h1 className="bg-green p-1 text-3xl md:text-4xl font-medium rounded-md">
          Contact Us
        </h1>
        <p className="md:w-[35%] text-gray-700">
        Connect with Us: Let s Discuss Your Digital Marketing Needs
        </p>
      </div>

      <div className="grid mt-10 md:mt-[70px] grid-cols-1 md:grid-cols-2 gap-8 bg-grey rounded-3xl p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start">
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
              <label htmlFor="name" className="block mb-1">Name</label>
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
              <label htmlFor="email" className="block mb-1">Email*</label>
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
                <label htmlFor="company" className="block mb-1">Company</label>
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

        <div className="flex justify-center md:justify-end">
          <img className="max-w-full w-2/3 md:w-full rotate-90 md:rotate-0" src={contact} alt="Contact illustration" />
        </div>
      </div>

     <Footer />
    </div>
  )
}

export default Contact
