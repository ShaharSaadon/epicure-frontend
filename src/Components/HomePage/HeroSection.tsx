import heroImage from '../../Assets/Images/HomePage/hero-image.jpg'
import Search from '../../Assets/Images/AppHeader/Search.svg'
export const HeroSection = () => {
  return (
    <section className="hero-section">
        <img src={heroImage} alt="" />
        <div className="box flex flex-column items-center text-center">
            <h2 className='text'>Epicure works with the top chef restaurants in Tel Aviv</h2>
            <div className="search flex">
                <img src={Search} alt="" className='search-icon' />
                <input type="text" className='search-input' placeholder='Search for restaurants cuisine, chef' />
            </div>
        </div>
    </section>
  )
}
