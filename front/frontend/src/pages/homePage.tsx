import MainCard from '../components/MainCard'
import Navbar from '../components/Navbar'
import { CarouselSize } from '../components/Carusel'

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Основной контент страницы с отступами */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        <MainCard />
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Konferensiyalar</h2>
          <CarouselSize />
        </div>
      </main>
    </div>
  )
}

export default HomePage