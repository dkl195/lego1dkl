function CategorySection() {
  const categories = [
    {
      id: 1,
      title: "All new sets",
      bg: "bg-cyan-400",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDa9708kxRLjmZKRvM9rZjMa_-tHBepAK-8pchGho_9DD9kJgm87lUq3-jh372YgIqwl4Rbvyorgxh6FaCe-oU5wCzzosk6RPaw9auOn5ZJd23bDvok-3DusZGURiRcb2cI5g0E1urs6gYZpTZdsX-GuTJmRmulIZWbYIH36iu6KdELC_jAXYa3LjI4Lgep0wP4Xubv8NJgHnENK4TwzHWVO5DG0-VwD-qS3LAfLjwn4keeTizrz836MmF0qSmD4ubVahasMovwPvo",
    },
    {
      id: 2,
      title: "Exclusives",
      bg: "bg-blue-800",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAqnkzyYtAo2P5eLzat3mp3pFw7RLRUldfuKA1WkkfOzmc8XBem-q3JDzaKWD6PmkR4Fyxb2PsyW_c7w6tkL0g7jc5BtbH3XNPxE2vpMQgZRhAtl_lZIS61HGmFirzTO8waDZp4ZBZs18BfWOFGiHUqNpSZ0C32hEiOu2D1hhL4AGoGpSHMd-AZMsxxXEuZPfaW6YYmp6ojzRSUly4MCbSt6iVi16wA4mBoS_84xU1idQqIV07u3DZVMA_PmkOyMVF2SQn9DPRVWqs",
    },
    {
      id: 3,
      title: "Offers",
      bg: "bg-purple-600",
      type: "offer",
    },
    {
      id: 4,
      title: "Pokémon",
      bg: "bg-green-900",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCrOIFtrswrHUhOdrHI1yiypoPZC62c776lIbgD7YGRjPX6A8WRj4PthBQq89YyyPPUxEjSoCzDQh6WDGn9cGaULO7fY4uGWHUUWAIMImHpVNjAnePOK5vt6yTQCf4lY8fFT7i4SuC8Hh0lHOqj5WNdV36v1aiE2tVRMh9Q8yHZz4Ny4y4mJzJjgI-Hiehq-xiqCjVwUpkyRkbPQFKZYYp2d7lJ1NJWFb-WChGcOmu6NXZo3OMu5rMZdeCoUqPhmRFq_mS8I9rsFQI",
    },
    {
      id: 5,
      title: "Smart Play™ sets",
      bg: "bg-indigo-900",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAxNASqG5m-LO7iI1JyGhhZ6_lee1m5KWFSOYIkAeuLCwxVeMR0HscTIOE9SZkaVNMf3LSlVRJdZ_0x9gUNrX9wn8SkpmuTsGvp7mqDCPzhC7JfGQtmbstrsImvD0bYyZXqVBRzMd5v7zbA2l1K1_Qh0Y_qwfsgqJN6UoynR9usNJ5qlU9vWaNYA5P9FJFLlKVi-1sU0Ot757lYLWvprDRNV1yXItLP6CclAJ77tpMLfsGgyBMX-1hYpCnkC_pvrXQbAs_69q1Y7EY",
    },
    {
      id: 6,
      title: "Art",
      bg: "bg-pink-500",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuClFTT4sUl6WRavDx7tyZuzZyIqh5Cjs3cgVrHgV7l38pD1k95Vg44mjUZI1buauHsHH7kfp2ljEewJ4cPtnD2X3wOxXwZqhxv5S_cjHLDNpNi0OuLL1Ei7mWmGqf80KnWpTzLanF8YCOZQ3daT9KwzW0-iO-IlIwX3XfOVu1BNuUnxhVZs8fU8ELU0FPVv6rGP35Fvyr5IHRMAkBglzFCaSkuijvqomkXv4em7kjElGlyFT8GWr2MKwev4C9bePuymfETn2MNqBEQ",
    },
    {
      id: 7,
      title: "Icons",
      bg: "bg-black border border-gray-700",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDVuQ0hKUkGjhyk20VQDJoFtEGS26HCjb26tpF7L7Ya1itPlVRuKMuLymDLxMUe_J5uQBId8BxYGN6yxx49N-yrVoW9Y2FXATa3a5rFrZOZR0Bj8yrIM5kF-HDcziTBqwTMnRks_bYsnd5DQozpZglp3qyaSHksE8_Jw2OxiuHP22A_HER0kHa6YMMiIBqxgdmhaxJUmPKrFdAp94djH9Td27bkzYjtSUpfZ0bduDQjKIDQcD9yVUnz7401rMakWVztwR2RLwdOp1o",
    },
    {
      id: 8,
      title: "Great Rewards",
      bg: "bg-white",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDlsiyw5elrDVNh7zug-LjHOkvr46uFxk0aMJ2dOEVhDx90IG8pX4tKfTNAe2RZ3i3KDJudkZHijmhgwqZlpReV22slN10nRnH9wV6pcLbAyZzfuJCoxTOO7FiAnDJ3xV8OfWCtTZQruUirSRMMCB_F6FW1OT6kYPIR-O_B1iIa7jqBEOm-fXm5QIwYhwCdnu7vBVXZOUUn1H8CHp4yCXkg7Uyn1OtM9GJzlckdJixT9PiIGDu9SDyyF2r2Q110ssBDr4YYqMITH9k",
      type: "rewards",
    },
  ]

  return (
    <section className="bg-[#1a1a1a] py-8 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex space-x-6">
          <button className="border-b-2 border-white pb-1 text-sm font-bold">
            What&apos;s new
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-8">
          {categories.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div
                className={`aspect-square rounded-lg overflow-hidden flex items-center justify-center p-2 ${item.bg}`}
              >
                {item.type === "offer" ? (
                  <div className="flex h-16 w-12 items-center justify-center rounded bg-red-500 shadow-lg">
                    <span className="text-xl font-bold text-white">%</span>
                  </div>
                ) : item.type === "rewards" ? (
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-1 rounded bg-blue-600 p-2 text-[8px] font-bold uppercase text-white">
                      Insiders
                    </div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-auto w-full object-contain"
                  />
                )}
              </div>

              <p
                className={`mt-2 text-center text-[11px] font-bold uppercase ${
                  item.id === 8 ? "text-white" : "text-white"
                }`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection
