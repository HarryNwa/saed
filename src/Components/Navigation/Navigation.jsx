// import React from "react";
// import style from "./Navigation.module.css";
// import nysc from "../../assets/nysc.png";

// const Navigation = () => {
//     return (
//         <nav>
//             <img src={nysc} alt="NYSC Logo" className={style.logo} />
//             <ul>
//                 <li><a href="/">Home</a></li>
//                 <li><a href="/about">About</a></li>
//                 <li><a href="/contact">Contact</a></li>
//             </ul>
//             <ul>
//                 <li><a href="/login"><button>Login</button></a></li>
//                 <li><a href="/register"><button>Register</button></a></li>
//             </ul>
//         </nav>
//     );
// }

// export default Navigation;



import React from "react";
import style from "./Navigation.module.css";
import nysc from "../../assets/nysc.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={style.navContainer}>
      <div className={style.navContent}>
        <div className={style.logoContainer}>
          <img src={nysc} alt="NYSC Logo" className={style.logo} />
          <button className={style.mobileMenuButton} onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div
          className={`${style.navLinksContainer} ${
            isMobileMenuOpen ? style.mobileMenuOpen : ""
          }`}
        >
          <ul className={style.navLinks}>
            <li>
              <a href="/" className={style.navLink}>
                Home
              </a>
            </li>
            <li>
              <a href="/ict" className={style.navLink}>
                ICT
              </a>
            </li>
            <li>
              <a href="/fashion" className={style.navLink}>
                Fashion
              </a>
            </li>
            <li>
              <a href="/bakery" className={style.navLink}>
                Bakery
              </a>
            </li>
            <li>
              <a href="/contact" className={style.navLink}>
                Contact
              </a>
            </li>
          </ul>

          <ul className={style.authLinks}>
            <li>
              <a href="/login" className={style.authLink}>
                <button className={style.loginButton}>Login</button>
              </a>
            </li>
            <li>
              <a href="/register" className={style.authLink}>
                <button className={style.registerButton}>Register</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;


