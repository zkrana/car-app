
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import CustomFilter from '@/components/CustomFilter'


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y'>
        <div className='home__text-container'>
            <h1 className=' text-4xl font-extrabold'>
              Car catalogue
            </h1>
            <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />
        </div>
        <div className='home__filter-container'>
          <CustomFilter />
          <CustomFilter />
        </div>
      </div>
    </main>
  )
}
