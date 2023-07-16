import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./ss4u.png" alt="" width={250} />
          <span className="secondaryText">
            *Everything on this page is only for academic intent of showcasing frontend web development.<br/>*This is not a real commercial website
          </span>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Address</span>
          <span className="secondaryText">
            111 West Side Ave, New York City 12345, USA
          </span>
          <div className="flexCenter f-menu">
            <span>Inquiries</span>
            <span>Services</span>
            <span>Careers</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
