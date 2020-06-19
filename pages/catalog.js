import React, { Component } from "react";
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
import {
  NavBar1,
  NavBar2,
  NavBar3,
  NavBar4,
  NavBar5,
  NavBar6,
} from "../components/navBar/navBars";
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
  Grid22,
  Grid23,
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
import { Hero1, Hero2, Hero3 } from "./../components/hero/heros";
import {
  Blog1,
  Blog2,
  Blog3,
  Blog4,
  Blog5,
  Blog6,
} from "../components/blog/blogs";

class Catalog extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="display">Test</h1>
          <h1>Medium</h1>
          <h2>Medium</h2>
          <h3>Medium</h3>
          <h4>Medium</h4>
          <h5>Medium</h5>
          <blockquote>Medium</blockquote>
          <p className="p1">Test</p>
          <p className="p2">Test</p>
          <p className="p3">Test</p>
          <ButtonThick value="Button" />
          <br></br>
          <br></br>
          <ButtonThin value="Button Thin" />
          <br></br>
          <br></br>
          <ButtonThickTransparent value="Button Thin" />
          <br></br>
          <br></br>
          <ButtonThinTransparent value="Button Thin" />
          <br></br>
          <br></br>
          <ButtonThick value="Button Thick" inactive />
          <br></br>
          <br></br>
          <ButtonThickTransparent value="Button Thick" inactive />
          <br></br>
          <br></br>
          <Router>
            <Link className="link link1" to="">
              Action 1
              <img alt="Small arrow" className="arrow" src={smallBlueArrowFw} />
            </Link>
            <br></br>
            <Link className="link link2" to="">
              Action 2
              <img alt="Small arrow" className="arrow" src={smallBlueArrowFw} />
            </Link>
            <br></br>
            <Link className="link link3" to="">
              Action 3
              <img alt="Small arrow" className="arrow" src={smallBlueArrowFw} />
            </Link>
          </Router>
          <br></br>
          <br></br>
          <Router>
            <NavBar1
              navList={["Home", "Events", "About", "Forum", "Book", "Contact"]}
            />
          </Router>
          <br></br>
          <br></br>
          <Router>
            <NavBar2
              navList={["Home", "Events", "About", "Forum", "Book", "Contact"]}
            />
          </Router>
          <br></br>
          <br></br>
          <Router>
            <NavBar3
              navList={["Home", "Events", "About", "Forum", "Book", "Contact"]}
            />
          </Router>
          <br></br>
          <br></br>
          <Router>
            <NavBar4
              navList={["Home", "Events", "About", "Forum", "Book", "Contact"]}
            />
          </Router>
          <Hero3 />
          <br></br>
          <br></br>
          <Router>
            <NavBar5
              navList={["Home", "Events", "About", "Forum", "Book", "Contact"]}
            />
          </Router>
          <Hero2 />
          <br></br>
          <br></br>
          <Router>
            <NavBar6 navList={["Home", "Events", "About", "Forum"]} />
          </Router>
          <Hero1 />
          <br></br>
          <br></br>
          <Text1 />
          <Text2 />
          <Text3 />
          <Text4 />
          <Text5 />
          <Text6 />
          <Text7 />
          <Text8 />
          <br></br>
          <br></br>
          <br></br>
          <Gallery1 />
          <Gallery2 />
          <Gallery3 />
          <div className="container">
            <div className="span4 flex">
              <ButtonThin value="Button 1" />
              <ButtonThin value="Button 2" />
              <ButtonThin value="Button 3" />
            </div>
          </div>
          <br></br>
          <br></br>
          <form className="container">
            <div className="span4 flex small-margin-bottom">
              <Input placeholder="Email" idandname="fname" darkgrey label />
              <ButtonThin value="Button 1" />
            </div>
            <div className="span12 flex">
              <Input placeholder="Placeholder" idandname="fname" darkgrey />
              <ButtonThin value="Button 1" />
            </div>
          </form>
          <br></br>
        </header>
        <br></br>
        <br></br>
        <div className="container">
          <div className="span2" />
          <div className="span8">
            <Accordion
              title="Design"
              contentBody={["Photoshop", "HTML", "CSS"]}
            />
            <Accordion title="Coding" contentBody={["HTML"]} />
            <Accordion
              title="Device"
              contentBody={[
                "By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send.",
              ]}
            />
          </div>
          <div className="span2" />
        </div>
        <br></br>
        <br></br>
        <div className="container">
          <div className="span12 flex-wrap">
            <PricingCard value="$10" packageOption="Begginer" />
            <PricingCard value="$25" packageOption="Junior" />
            <PricingCard value="$65" packageOption="Professional" />
          </div>
        </div>
        <ModalA buttonText="Modal 1" />
        <br></br>
        <br></br>
        <ModalB buttonText="Modal 2" />
        <br></br>
        <br></br>
        <ModalC buttonText="Modal 3" />
        <br></br>
        <br></br>
        <ModalD buttonText="Modal 4" />
        <br></br>
        <br></br>
        <Cover1 />
        <br></br>
        <br></br>
        <Cover2 />
        <br></br>
        <br></br>
        <Cover3 />
        <br></br>
        <br></br>
        <Cover4 />
        <br></br>
        <br></br>
        <Cover5 />
        <br></br>
        <br></br>
        <Cover6
          tagline="Tagline"
          headline="Medium length display headline"
          placeholder="Placeholder"
          button="Button"
          disclaimer="
            By clicking the Button you confirming that you’re agree with our
            following Terms and Conditions"
          image
          imageAlt=""
          formAction=""
        />
        <br></br>
        <br></br>
        <Cover7 />
        <br></br>
        <br></br>
        <Cover8 />
        <br></br>
        <br></br>
        <Cover9 />
        <br></br>
        <br></br>
        <Cover10 />
        <br></br>
        <br></br>
        <Cover11 />
        <br></br>
        <br></br>
        <Cover12 />
        <br></br>
        <br></br>
        <Cover13 />
        <br></br>
        <br></br>
        <Cover14 />
        <br></br>
        <br></br>
        <Cover15 />
        <br></br>
        <br></br>
        <Cover16 />
        <br></br>
        <br></br>
        <Cover17 />
        <br></br>
        <br></br>
        <Cover18 />
        <br></br>
        <br></br>
        <Cover19 />
        <br></br>
        <br></br>
        <Cover20 />
        <br></br>
        <br></br>
        <Cover21 />
        <br></br>
        <br></br>
        <Cover22 />
        <br></br>
        <br></br>
        <Cover23 />
        <br></br>
        <br></br>
        <Cover24 />
        <br></br>
        <br></br>
        <Cover25 />
        <br></br>
        <br></br>
        <Cover26 />
        <br></br>
        <br></br>
        <Cover27 />
        <br></br>
        <br></br>
        <Cover28 />
        <br></br>
        <br></br>
        <Cover29 />
        <br></br>
        <br></br>
        <Cover30 />
        <br></br>
        <br></br>
        <Cover31 />
        <br></br>
        <br></br>
        <Cover32 />
        <br></br>
        <br></br>
        <Cover33 />
        <br></br>
        <br></br>
        <Cover34 />
        <br></br>
        <br></br>
        <Cover35 />
        <br></br>
        <br></br>
        <Cover36 />
        <br></br>
        <br></br>
        <Center1 />
        <Center2 />
        <Center3 />
        <Center4 />
        <Center5 />
        <Center6 />
        <Center7 />
        <Center8 />
        <Center9 />
        <Center10 />
        <Center11 />
        <Center12 />
        <Center13 />
        <Center14 />
        <Center15 />
        <Center16 />
        <Center17 />
        <Center18 />
        <Center19
          headline="Long headline for one line for attention"
          linkText="Link"
          text="With the new AirPlay 2, you can control your home audio system and the speakers throughout your house.4 You can play a song in the living room and your kitchen at the same time."
          visualContentImage
          visualContentVideo
        />
        <Grid1 />
        <Grid2 />
        <Grid3 />
        <Grid4 />
        <Grid5 />
        <Grid6 />
        <Grid7 />
        <Grid8 />
        <Grid9
          slides={[
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg",
          ]}
        />
        <Grid10 />
        <Grid11 />
        <Grid12 />
        <Grid13 />
        <Grid14 />
        <Grid15 />
        <Grid16 />
        <Grid17 />
        <Grid18 />
        <Grid19 />
        <Grid20 />
        <Grid21 />
        <Grid22 />
        <Grid23 />
        <br></br>
        <br></br>
        <Blog1 />
        <Blog2 />
        <Blog3 />
        <Blog4 />
        <Blog5 />
        <Blog6 />
        <Footer1 />
        <br></br>
        <br></br>
        <br></br>
        <Footer2 />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer3 />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer4 />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer5 />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer6 />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer7 />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer8 />
      </div>
    );
  }
}
export default Catalog;
