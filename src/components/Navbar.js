import { useState } from 'react';
import logo from '../images/logo.png';

const Navbar = () => {
  const [ showNav, setShowNav ] = useState(false);

  const changeBg = () => {
    if(window.scrollY >= 50 ) {
        setShowNav(true);
    } else {
        setShowNav(false);
    }
  }

  window.addEventListener('scroll', changeBg);
  
  return (
    <nav className={ showNav ? 'nav active' : 'nav'}>
      <a href="#" className="logo">
        <img src={logo} alt="logo" />
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>

      <ul className="menu">
        <li>
          <a href="#" className='active'>Home</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">UI SS</a>
        </li>
        <li>
          <a href="#">Download</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
