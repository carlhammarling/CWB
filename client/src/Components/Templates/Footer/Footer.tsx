import React from "react";
import "./Footer.scss";
import ActivityAtomRow from "../../Molecules/ActivityAtomRow/ActivityAtomRow";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerBannerText">
        <p className="banner white">
          Tired of <span className="yellow">working in the jungle?</span> Enjoy
          our fast wifi!
        </p>
      </div>
      <div className="footerInfoMobile">
        <section>
          <h2 className="radjhani white">SOCIALS</h2>
          <ul>
            <li className="white">After work</li>
            <li className="white">Gatherings</li>
            <li className="white">Lounge/bar</li>
            <li className="white">Movie nights</li>
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
      <div className="footerInfoDesktop">
        <div className="footerColumn">
          <section>
            <h2 className="radjhani white">CUSTOMERS CHOICE</h2>
            <p className="white">
              Our customers has spoken, asking us to provide clear information
              about what facilities a co-working have. We listened and created
              logos for you, all for you to receive the information in a smooth
              and fast way with us at CO-Working Bangkok
            </p>
            <ActivityAtomRow />
          </section>
        </div>
        <div className="footerColumn">
          <section>
            <h2 className="radjhani white">SOCIALS</h2>
            <p className="white">
            Our customers generally likes being socials, therefore some of our places arranges:
            </p>
            <ul>
              <li className="white">- After work</li>
              <li className="white">- Gatherings</li>
              <li className="white">- Lounge/bar</li>
              <li className="white">- Movie nights</li>
              <li className="white">- Pool</li>
            </ul>
          </section>
        </div>
        <div className="footerColumn">
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
      </div>
      <div className="footerBottom">
        <div className="footerIcons">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-pinterest"></i>
        </div>
        <p className="white">© CO-WORKING Bangkok 2023</p>
        <div className="paymentIcons footerIcons">
        <i className="fa-brands fa-cc-mastercard"></i>
        <i className="fa-brands fa-cc-visa"></i>
        <i className="fa-brands fa-cc-paypal"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
