import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import CategorySection from "../components/CategorySection"
import ProductSection from "../components/ProductSection"
import SpotlightSection from "../components/SpotlightSection"
import Footer from "../components/Footer"

function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      <main>
        <HeroSection />
        <CategorySection />
        <ProductSection />
        <SpotlightSection />
      </main>

      <Footer />
    </div>
  )
}

export default Home
