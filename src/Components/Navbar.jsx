
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between my-[70px]">
        <div className="flex items-center gap-4">
          <img src="/src/assets/Icon.png" alt="" />
          <h1 className="text-4xl font-semibold">Positivus</h1>
        </div>
        <div className="flex items-center gap-10 text-xl">
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Use Cases</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
          <button className=" border border-black py-5 px-9 rounded-2xl">Request a quote</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar