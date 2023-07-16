import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="n-wrapper">
      <div id="newsletter" className="paddings innerWidth n-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Subcribe to Our Newsletter</span>
          <span className="secondaryText">
            Stay up to date with our team <br/> Get notified first for any new deals
          </span>
          <button className="button">
            <a href="mailto:jiholee1@outlook.com">Subscribe</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
