
const Studies = () => {
  return (
    <div>
      <div className="flex gap-10">
        <h1 className="bg-green p-1 text-4xl font-medium rounded-md">Case Studies</h1>
        <p className="w-[35%]">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
      </div>
      <div className="grid grid-cols-3 gap-16 p-10 bg-dark rounded-3xl mt-20 text-white">
        <div className="border-r p-10 w-[80%]">
          <p className="mb-10">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
          <a href="" className="flex items-center gap-5">Learn More
          <img src="/src/assets/icon/limeIcon.svg" alt="" />
          </a>
        </div>
        <div className="border-r p-10 w-[80%]">
          <p className="mb-10">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
          <a href="" className="flex items-center gap-5">Learn More
          <img src="/src/assets/icon/limeIcon.svg" alt="" />
          </a>
        </div>
        <div className="border-r p-10 w-[80%]">
          <p className="mb-10">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
          <a href="" className="flex items-center gap-5">Learn More
          <img src="/src/assets/icon/limeIcon.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Studies