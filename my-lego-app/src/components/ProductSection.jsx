import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Eevee",
    price: "$39.99",
    age: "18+",
    pieces: "387 pcs",
    rating: "4.9",
    image: "https://m.media-amazon.com/images/I/71Y88f7vS2L._AC_SL1500_.jpg",
  },
  {
    id: 2,
    name: "Claude Monet - Water Lilies",
    price: "$249.99",
    age: "18+",
    pieces: "3278 pcs",
    rating: "4.3",
    image: "https://m.media-amazon.com/images/I/81S7mO2S39L._AC_SL1500_.jpg",
  },
  {
    id: 3,
    name: "Sunflower Bouquet",
    price: "$39.99",
    age: "18+",
    pieces: "454 pcs",
    rating: "5.0",
    image: "https://m.media-amazon.com/images/I/71Y88f7vS2L._AC_SL1500_.jpg",
  },
  {
    id: 4,
    name: "Magnolia Branches",
    price: "$49.99",
    age: "18+",
    pieces: "438 pcs",
    rating: "5.0",
    image: "https://m.media-amazon.com/images/I/71Y88f7vS2L._AC_SL1500_.jpg",
  },
  {
    id: 5,
    name: "Pikachu and Poké Ball",
    price: "$199.99",
    age: "18+",
    pieces: "2050 pcs",
    rating: "3.8",
    image: "https://m.media-amazon.com/images/I/71Y88f7vS2L._AC_SL1500_.jpg",
  },
]

function ProductSection() {
  const [wishlist, setWishlist] = useState([])

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-8 text-center">
        <h2 className="mb-8 text-3xl font-bold">What makes us different</h2>
        <div className="flex justify-center border-b border-gray-200">
          <h3 className="pb-2 text-sm text-gray-500">
            Browse thousands of sets for every age and interest.
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {products.map((product) => {
          const isActive = wishlist.includes(product.id)

          return (
            <div
              key={product.id}
              className="relative flex flex-col rounded-lg border border-gray-200 bg-white p-4"
            >
              <span className="absolute right-2 top-2 rounded bg-yellow-300 px-2 py-0.5 text-[10px] font-bold">
                NEW
              </span>

              <div className="mb-4 aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain transition duration-300 hover:scale-105"
                />
              </div>

              <div className="mb-2 flex items-center space-x-1 text-[10px] font-bold text-gray-500">
                <span>{product.age}</span>
                <span>|</span>
                <span>{product.pieces}</span>
                <span>|</span>
                <span className="text-yellow-500">★ {product.rating}</span>
              </div>

              <h3 className="mb-4 flex-grow text-sm font-bold">{product.name}</h3>
              <p className="mb-4 text-lg font-black">{product.price}</p>

              <div className="flex space-x-2">
                <button className="flex-grow rounded-md bg-orange-500 py-2.5 text-xs font-black uppercase text-white">
                  Add to Bag
                </button>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`rounded-md border p-2 transition ${
                    isActive
                      ? "border-red-500 bg-red-100 text-red-500"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  ♡
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProductSection
