function HeroSection() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden bg-black">
      <img
        src="/images/lego0.jpg"
        alt="Hero Banner"
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      <div className="relative z-10 flex h-full max-w-2xl flex-col justify-center px-12 text-white">
        <div className="mb-4">
          <span className="rounded bg-yellow-300 px-2 py-1 text-xs font-bold text-black">
            NEW
          </span>
          <span className="ml-2 text-xs font-bold text-yellow-300 underline">
            Exclusives
          </span>
        </div>

        <h1 className="mb-4 text-6xl font-black uppercase italic leading-tight">
          Race to glory!
        </h1>

        <p className="mb-8 max-w-md text-sm font-medium">
          Recreate the 2023 F1® Constructors' Champion with the LEGO® Technic™
          McLaren MCL38 F1 Car for a thrilling building project.
        </p>

        <div className="flex space-x-4">
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-bold text-black"
          >
            Buy now <span className="ml-2">→</span>
          </a>

          <a
            href="#"
            className="inline-flex items-center rounded-full border-2 border-white px-8 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-black"
          >
            Shop all new <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
