import React, { Component } from "react";
import desktopIllustration from "../assets/desktopIllustration.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //LinkRoute,
  //Redirect,
  Link,
} from "react-router-dom";
import {
  ButtonThick,
  ButtonThin,
  ButtonThickTransparent,
  ButtonThinTransparent,
} from "../components/common/buttons.js";
import { Input } from "../components/common/input";
import { Accordion } from "../components/common/accordion";
import { PricingCard } from "../components/common/cards";
import { ModalA, ModalB, ModalC, ModalD } from "../components/modal/modals";
import { NavBar6 } from "../components/navBar/navBars";
import sailingCity from "../assets/sailingCity.jpeg";
import {
  Cover1,
  Cover2,
  Cover3,
  Cover4,
  Cover5,
  Cover6,
  Cover7,
  Cover8,
  Cover9,
  Cover10,
  Cover11,
  Cover12,
  Cover13,
  Cover14,
  Cover15,
  Cover16,
  Cover17,
  Cover18,
  Cover19,
  Cover20,
  Cover21,
  Cover22,
  Cover23,
  Cover24,
  Cover25,
  Cover26,
  Cover27,
  Cover28,
  Cover29,
  Cover30,
  Cover31,
  Cover32,
  Cover33,
  Cover34,
  Cover35,
  Cover36,
} from "../components/cover/covers";
import {
  Center1,
  Center2,
  Center3,
  Center4,
  Center5,
  Center6,
  Center7,
  Center8,
  Center9,
  Center10,
  Center11,
  Center12,
  Center13,
  Center14,
  Center15,
  Center16,
  Center17,
  Center18,
  Center19,
} from "../components/center/centers";
import {
  Grid1,
  Grid2,
  Grid3,
  Grid4,
  Grid5,
  Grid6,
  Grid7,
  Grid8,
  Grid9,
  Grid10,
  Grid11,
  Grid12,
  Grid13,
  Grid14,
  Grid15,
  Grid16,
  Grid17,
  Grid18,
  Grid19,
  Grid20,
  Grid21,
} from "../components/grid/grids";
import {
  Text1,
  Text2,
  Text3,
  Text4,
  Text5,
  Text6,
  Text7,
  Text8,
} from "../components/text/texts";
import smallBlueArrowFw from "../assets/smallbluearrowfw.svg";
import {
  Footer1,
  Footer2,
  Footer3,
  Footer4,
  Footer5,
  Footer6,
  Footer7,
  Footer8,
} from "../components/footer/footers";

import { Gallery1, Gallery2, Gallery3 } from "../components/gallery/gallery";

class Sail extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <NavBar6 navList={["Home", "Events", "About", "Forum"]} />
        <div className="container">
          <h1 className="large-margin-top span7 display">
            Welcome to Greenwich Yatch Club
          </h1>
        </div>
        <Center19
          headline="All Are Welcome"
          linkText="Find out more"
          visualContentImage={sailingCity}
          visualContentVideo
          text="We really welcome visitors to our beautiful clubhouse on the river. Do come along on a Tuesday night if you have ever fancied sailing, or might be interested in becoming a member.Since our foundation over 100 years ago, we have always aimed to offer affordable sailing for all. Our club is located halfway between the O2 and the Thames Barrier, and is home to cruiser sailors, dinghy sailors, motor-boaters and rowers. But you don't have to own a boat to come boating."
        />
        <Cover6
          tagline="Sail with us"
          headline="Thinking about joining?"
          placeholder="Email Address"
          button="Submit"
          disclaimer="
            By clicking the Button you confirming that you’re agree with our
            following Terms and Conditions"
          image={desktopIllustration}
          imageAlt=""
          formAction="/action.php"
        />
        <Text1 />
      </div>
    );
  }
}
export default Sail;
