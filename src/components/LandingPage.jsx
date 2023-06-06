import React from "react";
import "../assets/css/LandingPage.css";
import imgWomanHome from "../assets/img-home.jpg";

/*MENU SHOW */
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

const LandingPage = () => {
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
                <a href="" className="nav__link"></a>{" "}
              </li>
              <li className="nav__item">
                <a href="" className="nav__link"></a>{" "}
              </li>
              <li className="nav__item">
                <a href="" className="nav__link"></a>{" "}
              </li>
              <li className="nav__item">
                <a href="" className="nav__link"></a>{" "}
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
