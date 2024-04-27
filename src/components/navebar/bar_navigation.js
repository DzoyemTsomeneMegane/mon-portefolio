// import './navbar.css'; 
// import React from 'react';
// import { Link } from 'react-router-dom';
// // import { FaBars } from 'react-icons/fa'; // Utilisez les icônes de react-icons

// const Navba = () => {
//   return (
//     <nav>
//       <div className="manav">
//         <div className='logos'>
//           <Link to="/" className="logo">          
//             D 
//           </Link>
//           <Link to="/" className="momail">
//             meganetsdzoyem@gmail.com
//           </Link>
//         </div>
//           <ul className="navbar-links">
//             <li><Link to="/">Accueil</Link></li>
//             <li><a href="/about">À propos</a></li>
//             <li><a href="/projects">Projets</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//         </div>
//     </nav>
//   );
// };

// export default Navba;

import React from 'react';
import './navbar.css';
import { useState } from 'react';

function Bar_navigation(props) {
  const [active, setActive]=useState("nav__menu")
  const[toggleIcon, setToggleIcon]=useState("nav__toggler")
  const navToggle=()=>{
    active==='nav__menu'? setActive('nav__menu nav__active'): setActive('nav__menu')
    // toggle animation
    toggleIcon === 'nav__toggler'
    ? setToggleIcon('nav__toggler toggle'): setToggleIcon('nav__toggler')
  }

  return (
    <nav className='nav'>
      <a href="#" className='nav__brand'>mon site</a>
      <ul className={active}>
          {/* Ajoutez ici vos éléments de menu */}
          <li className='nav__item'><a href="#section1" className='nav_link'>Accueil</a> </li>
          <li className='nav__item'><a href="#section2" className='nav_link'>À propos</a></li>
          <li className='nav__item'><a href="#section3" className='nav_link'>Projets</a></li>
          <li className='nav__item'><a href="#section4" className='nav_link'>Contact</a></li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </nav> 
  );
}

export default Bar_navigation;