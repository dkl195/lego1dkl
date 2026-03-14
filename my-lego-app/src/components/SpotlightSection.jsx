function SpotlightSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-black uppercase italic">
          Find the perfect set
        </h2>
      </div>

      <div className="grid h-[800px] grid-cols-1 grid-rows-2 gap-4 md:grid-cols-4">
        <div className="relative overflow-hidden rounded-lg md:col-span-2 md:row-span-2">
          <img
            src="/images/lego4.jpg"
            alt="Build 1"
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
          />
        </div>

        <div className="relative overflow-hidden rounded-lg">
          <img
            src="/images/lego2.jpg"
            alt="Build 2"
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
          />
        </div>

        <div className="relative overflow-hidden rounded-lg">
          <img
            src="/images/lego6.jpg"
            alt="Build 3"
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
          />
        </div>

        <div className="relative overflow-hidden rounded-lg">
          <img
            src="/images/lego7.jpg"
            alt="Build 4"
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
          />
        </div>

        <div className="relative overflow-hidden rounded-lg">
          <img
            src="/images/lego8.jpg"
            alt="Build 5"
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}

export default SpotlightSection
