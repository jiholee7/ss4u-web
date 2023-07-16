import React from "react";
import "./Hero.css";
import { BiSearchAlt } from "react-icons/bi";
import CountUp from "react-countup";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div id="hero" className="flexCenter paddings innerWidth hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="green-circle" />
            <motion.h1 
            initial={{y: "2rem", opacity:0}} 
            animate={{y: 0, opacity: 1}}
            transition={{
              duration: 2,
              type: "spring"
            }}
            >
              Soccer <br />
              Supplies 4 U
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find the perfect jersey, cleats, and much, much more!
            </span>
            <span className="secondaryText">All for an affordable price, so anyone can be the next world star!</span>
          </div>
          <div className="flexCenter search-bar">
            <BiSearchAlt color="var(--primary)" size={25} />
            <input type="text" placeholder="Seach for Products" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={300} end={400} duration={4}/>
                <span>+</span>
              </span>
              <span className="secondaryText">
                Premium Products
              </span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={50} end={100} duration={4}/>
                <span>+</span>
              </span>
              <span className="secondaryText">
                Positive Reviews
              </span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={30} />
                <span>+</span>
              </span>
              <span className="secondaryText">
                Countries Delivered
              </span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div 
          initial={{x: "7rem", opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{
            duration: 2,
            type: "spring"
          }}
          className="image-container"
          >
            <img src="./hero-image.png" alt="hero image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
