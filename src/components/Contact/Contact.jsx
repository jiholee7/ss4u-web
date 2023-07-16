import React from "react";
import "./Contact.css";
import { MdCall, MdEmail } from "react-icons/md";
import { BsFillChatDotsFill, BsMailbox2 } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div id="contact" className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="pinkText">Our Contacts</span>
          <span className="primaryText">Ask Any Questions</span>
          <span className="secondaryText">
            Our customer service team is always ready to help make your shopping experience be as pleasant as possible. <br/> Hours: Mon-Fri 8am-1pm ET.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              {/* first mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">111-111-1111</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">111-111-1111</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>
            {/* second row */}
            <div className="flexStart row">
              {/* third mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdEmail size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Email</span>
                    <span className="secondaryText">customers<br/>@ss4umail.com</span>
                  </div>
                </div>
                <div className="flexCenter button">Email Now</div>
              </div>
              {/* fourth mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsMailbox2 size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Mail</span>
                    <span className="secondaryText">111 West Side Ave, <br/> New York City</span>
                  </div>
                </div>
                <div className="flexCenter button">PO Box 111</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter c-right">
          <div className="image-container">
            <img src="./phone.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
