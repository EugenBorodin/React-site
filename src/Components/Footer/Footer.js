/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="waves">
        <div className="wave" id="wave1"></div>
      </div>
      <ul className="social">
        <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><ion-icon name="logo-facebook"></ion-icon></a></li>
        <li><a href="https://twitter.com/home" target="_blank" rel="noreferrer"><ion-icon name="logo-twitter"></ion-icon></a></li>
        {/* <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li> */}
        <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><ion-icon name="logo-instagram"></ion-icon></a></li>
      </ul>
      <ul className="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      {/* <p>©2023 | All Rights Reserved</p> */}
    </footer>
  );
}

export default Footer;
