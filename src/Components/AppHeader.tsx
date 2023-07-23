import Logo from '../Assets/Images/AppHeader/Logo.svg'
import Bug from '../Assets/Images/AppHeader/Bug.svg'
import Profile from '../Assets/Images/AppHeader/Profile.svg'
import Search from '../Assets/Images/AppHeader/Search.svg'
import Hamburger from '../Assets/Images/AppHeader/Hamburger.svg'
export const AppHeader = () => {
  return (
    <div className='app-header flex justify-between items-center'>
      <img src={Hamburger} alt="Hamburger" />
      <img src={Logo} alt="Logo" className="center-block" />

      <div className="right-nav flex">
        <img src={Search} alt="Search" />
        <img src={Profile} alt="Profile" />
        <img src={Bug} alt="Bug" />
      </div>

    </div>
  )
}
