import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerBannerText">
        <p className="banner white">
          Tired of <span className="yellow">working in the jungle?</span> Enjoy
          our fast wifi!
        </p>
      </div>
      <div className="footerInfo">
        <section>
          <h2 className="radjhani white">SOCIALS</h2>
          <ul>
            <li className="white">After work</li>
            <li className="white">Gatherings</li>
            <li className="white">Lounge/bar</li>
            <li className="white">Filmnights</li>
          </ul>
        </section>
        <section>
          <h2 className="radjhani white">EXTRAS</h2>
          <ul>
            <li className="white">Free cancelation</li>
            <li className="white">Flexible booking</li>
          </ul>
        </section>
        <section>
          <h2 className="radjhani white">CONTACT</h2>
          <ul>
            <li className="white">contact@cwb.com</li>
          </ul>
        </section>
      </div>
      <div className="footerBottom">
        <div className="footerIcons">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-pinterest"></i>
        </div>
        <p className="xs">© CO-WORKING Bangkok 2023</p>
      </div>
    </div>
  );
};

export default Footer;
