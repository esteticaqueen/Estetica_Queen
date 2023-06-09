import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../assets/css/style.css";
import imgWomanHome from "../assets/img/img-home.jpg";

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

// const LandingPage = () => {
//   useEffect(() => {
//     const Home__img_img = document.querySelector(".home__img img");
//     const Home__title = document.querySelector(".home__title");
//     const Home__primary = document.querySelector(".home__primary");
//       // 2,
//       //  {
//       //   width: "100%",
//       //   ease: Expo.easeInOut,
//       // });
//       gsap.from(Home__primary, {
//          duration:2,
//          width: "100%",
//          ease: Expo.easeInOut, });
//     gsap.from(Home__title, { opacity: 0, duration: 2, delay: 1.5, y: 100 });
//     gsap.from(Home__img_img, {
//       opacity: 0,
//       duration: 2,
//       delay: 1.5,
//       y: -100,
//     }, []);

//     /*HOME SECONDARY*/
//     const Home__year = document.querySelector(".home__year")
//     const Home__scroll = document.querySelector(".home__scroll")
//     const Home__seconday = document.querySelector(".home__secondary")
//     //  {
//     //   width: "100%",
//     //   ease: Expo.easeInOut,
//     // });
//     gsap.from(Home__seconday, {  duration: 2.5 , width: "100%",
//     ease: Expo.easeInOut, });
//     gsap.from(Home__scroll, { opacity: 0, duration: 3, x: -100 });
//     gsap.from(Home__year, {
//       opacity: -1,
//       duration: 1.5,
//       delay: 1.5,
//       x: 100,
//     });
//   }, []);

const LandingPage = () => {
  useEffect(() => {
    const Homeimg_img = document.querySelector(".home__img img");
    const Hometitle = document.querySelector(".home__title");
    const Homeprimary = document.querySelector(".home__primary");

    gsap.from(Homeprimary, {
      width: "100%",
      ease: Expo.easeInOut,
    });

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

    const Homeyear = document.querySelector(".home__year");
    const Homescroll = document.querySelector(".home__scroll");
    const Homesecondary = document.querySelector(".home__secondary");
    var tt = miAnimación.TiempoTotal();
    miAnimación.TiempoTotal(2);
    gsap.from(Homesecondary, {
      tt: tt,
      width: "100%",
      ease: Expo.easeInOut,
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
  }, []);

  return (
    <div>
      <header className="l-header">
        <nav className="nav bd-grid">
          <div className="nav__toggle" id="nav-toggle">
            {/*Ionicons*/}
            <ion-icon name="reorder-two-outline"></ion-icon>
          </div>
          <div>
            <a href="" className="nav__logo">
              Fashion
            </a>
          </div>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="" className="nav__link">
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

          <div className="nav__icon-cart">
            {/* Ionicon*/}
            <ion-icon name="cart-outline"></ion-icon>
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
