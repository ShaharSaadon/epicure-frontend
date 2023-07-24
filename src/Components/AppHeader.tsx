import Logo from '../Assets/Images/AppHeader/Logo.svg'
import Bag from '../Assets/Images/AppHeader/Bag.svg'
import Profile from '../Assets/Images/AppHeader/Profile.svg'
import Search from '../Assets/Images/AppHeader/Search.svg'
import Hamburger from '../Assets/Images/AppHeader/Hamburger.svg'
export const AppHeader = () => {
  return (
    <div className='app-header flex justify-between items-center'>
      <img src={Hamburger} alt="Hamburger" className='hamburger' />
      <img src={Logo} alt="Logo" className="logo" />

      <div className="right-nav flex">
        <img src={Search} alt="Search" className='search'/>
        <img src={Profile} alt="Profile" className='profile'/>
        <img src={Bag} alt="Bug" />
      </div>

      <div className=""></div>

    </div>
  )
}
