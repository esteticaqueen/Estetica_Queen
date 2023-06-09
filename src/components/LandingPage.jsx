import React, { useEffect, useRef } from "react";
import { gsap, Expo } from "gsap";
import "../assets/css/style.css";
import imgWomanHome from "../assets/img/img-home.jpg";





const LandingPage = () => {

  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
  
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  };
  showMenu("nav-toggle", "nav-menu");
  
const toggleRef = useRef(null);
const navRef = useRef(null);

useEffect(() => {
  const toggle = toggleRef.current;
  const nav = navRef.current;

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
}, []);
  

//   return (
//     <div>
//       {/* Resto del contenido de tu componente */}
//       <button ref={toggleRef}>Toggle</button>
//       <nav ref={navRef}>
//         {/* Contenido del menú */}
//       </nav>
//     </div>
//   );
// };


  /*GSAP */
  useEffect(() => {
    const Homeimg_img = document.querySelector(".home__img img");
    const Hometitle = document.querySelector(".home__title");

    const Homeyear = document.querySelector(".home__year");
    const Homescroll = document.querySelector(".home__scroll");
    const Homeprimary = document.querySelector(".home__primary");
    const Homesecondary = document.querySelector(".home__secondary");
    const delay = 0.0;

    setTimeout(() => {
      gsap.from(Homeprimary, {
        // duration:0,
        // overwrite:"none",

        onComplete: () => {
          gsap.to(Homeprimary, {
            width: "100%",
            ease: Expo.easeInOut,
            delay: 0.4,
            duration: 0.7,
            transition: 0.4,
          });
        },
      });

      gsap.from(Homesecondary, {
        // duration:0,
        // overwrite: "none",

        onComplete: () => {
          gsap.to(Homesecondary, {
            width: "100%",
            ease: Expo.easeInOut,
            delay: 0.5,
            duration: 0.6,
            transition: 0.6,
          });
        },
      });
    }, delay * 1000);

    gsap.from(Hometitle, {
      opacity: 0,
      duration: 2,
      delay: 1.5,
      y: 100,
    });

    gsap.from(Homeimg_img, {
      opacity: 0,
      duration: 2,
      delay: 1.5,
      y: -100,
    });

    gsap.from(Homescroll, {
      opacity: 0,
      duration: 3,
      x: -100,
    });

    gsap.from(Homeyear, {
      opacity: 0,
      duration: 1.5,
      delay: 1.5,
      x: 100,
    });
  });

  return (
  

    <div>
      <header className="l-header">
        <nav className="nav bd-grid">
          <div className="nav__toggle" id="nav-toggle">
            {/*Ionicons*/}
            {/* <ion-icon name="reorder-two-outline"></ion-icon> */}
            <i ref={toggleRef} className="bi bi-distribute-vertical"></i>
          
          </div>
          <div>
            <a href="" className="nav__logo">
              Fashion
            </a>
          </div>

          <div >  
         
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a ref={navRef} className="nav__link">
                  {" "}
                  Home
                </a>{" "}
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  {" "}
                  Woman
                </a>{" "}
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  {" "}
                  Man
                </a>{" "}
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  Explore
                </a>{" "}
              </li>
            </ul>
          </div>
          </div>
          
      
        </nav>
      </header>

      <main className="main-bg">
        {/* HOME*/}
        <div className="home">
          <div className="home__primary">
            <h1 className="home__title">
              Fashion Online <br />
              Store
            </h1>
            <div className="home__img">
              <img src={imgWomanHome} alt="image woman-home" />
            </div>
          </div>

          <div className="home__secondary">
            <a className="home__scroll" href="#about">
              SCROLLDOWN
            </a>
            <span className="home__year">2023</span>
          </div>
        </div>
      </main>
    </div>
  );
};


export default LandingPage;
