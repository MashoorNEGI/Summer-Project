import './header.scss';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../images/images'
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
const Header = () => {
  function showMenu() {
    document.getElementById("fa-bars").style.display = "none";
    document.getElementById("navLinks").style.width = "40%";
  }
  function hideMenu() {
    document.getElementById("fa-bars").style.display = "block";
    document.getElementById("navLinks").style.width = "0px";
  }
  function changeBg() {
    var navbar = document.getElementById("navbar")
    var scrollValue = window.scrollY
    console.log(scrollValue)
    if (scrollValue > 71) {
      navbar.classList.remove("color")
      navbar.classList.add("bg-color")
    }
    else {
      navbar.classList.add("color")
      navbar.classList.remove("bg-color")
    }

  }
  window.addEventListener("scroll", changeBg)

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <nav className=" sticky-top navbar navbar-expand-lg color" id='navbar'>
        <a className="navbar-brand" href="/"><img className='img' src={Logo} alt="" /></a>
        <div className=" navbar-collapse navlinks" id="navLinks">
          <div className='adjust fa-bars' onClick={hideMenu}>
            <IconButton className='ms-auto'
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: -3 }}
            />
            <ClearIcon className='fix' />
          </div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/Home">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/Support">Support</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Login">Login</a>
            </li>
          </ul>
        </div>
        <div className='position' id='fa-bars' onClick={showMenu}>
          <IconButton className="ms-auto"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: -3 }}
          />
          <MenuIcon className='' id='fa' />
        </div>
      </nav>
    </>

  )
}

export default Header