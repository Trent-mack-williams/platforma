import React from "react";
import { ButtonThick } from "./buttons";
//Besure price cards space between so please contain in accordance
export const PricingCard = (props) => {
  const { value, packageOption, InputMethodHere, inactive } = props;
  return (
    <div className="pricing-card bgwhitewithshadow">
      <h3 className="plan">{packageOption}</h3>
      <div>
        <h1 className="display">{value}</h1>
        <h3 className="per"> / Month</h3>
      </div>
      <hr />
      <p className="p2">
        By creating an Account on our service, you agree to subscribe
      </p>
      <ul>
        <li>Showcase your work on multiple platforms</li>
        <li>Publish and curate work as you please</li>
        <li>Sell you work in the creative market place</li>
      </ul>
      <ButtonThick value="Action" />
    </div>
  );
};
