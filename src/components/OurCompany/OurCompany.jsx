import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./OurCompany.css";
import data from '../../utils/accordion'

const OurCompany = () => {
  return (
    <section className="oc-wrapper">
      <div id="company" className="paddings innerWidth flexCenter oc-container">
        {/* left side */}
        <div className="oc-left">
          <div className="image-container">
            <img src="./stadium.jpg" alt="" />
          </div>
        </div>

        {/* right side */}
        <div className="flexColStart oc-right">
          <span className="pinkText">Our Company</span>
          <span className="primaryText">Why We Are the #1 Value Retailer for Soccer Supplies</span>
          <span className="secondaryText">
            We buy all of our products in bulk, straight from the manufacturers. Then we sell to you, our loyal customers for an affordable price.
          </span>
          

          <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
            {/* uuid is for preExpanded ids */}
            {
              data.map((item, i) => {
                // for useState hook below, if an accordion item is expanded, the className will be set to "expanded" which will go into AccordionItem className. This creates a shadow for the expanded item only.
                const [className, setClassName] = useState(null)
                return (
                  <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}> 
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordionButton">

                        <AccordionItemState>
                          {({expanded}) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                        </AccordionItemState>

                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">{item.heading}</span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20}/>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="secondaryText">
                        {item.detail}
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                )
              })
            }
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default OurCompany;
