import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ButtonThick, ButtonThin } from "../common/buttons.js";
import { Input } from "../common/input";
import smallBlueArrowFw from "../../assets/smallbluearrowfw.svg";
import glyphsImageShapes from "../../assets/glyphsImageShapes.svg";
import faceBookIcon from "../../assets/faceBookIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import copyIcon from "../../assets/copyIcon.svg";
import applePay from "../../assets/applePay.svg";
import androidPay from "../../assets/androidPay.svg";
import samsungPay from "../../assets/samsungPay.svg";
import payPal from "../../assets/payPal.svg";
import blueCircledArrow from "../../assets/blueCircledArrow.svg";
import video from "../../assets/video.mp4";

export const Center1 = (props) => {
  return (
    <React.Fragment>
      <div className="container textcenter center center-padding">
        <span className="span2"></span>
        <div className="span8">
          <h3 className="small-margin-bottom">Tagline</h3>
          <h1 className="display small-margin-bottom">
            Long headline to turn your visitors into users
          </h1>
          <Router>
            <Link className="link link3 primary1" to="">
              Action Link
              <img alt="Small arrow" className="arrow" src={smallBlueArrowFw} />
            </Link>
          </Router>
        </div>
      </div>
    </React.Fragment>
  );
};

export const Center2 = (props) => {
  return (
    <React.Fragment>
      <div className="container textcenter center center-padding">
        <span className="span2"></span>
        <div className="span8">
          <h1 className="display small-margin-bottom">
            Long headline to turn your visitors into users
          </h1>
        </div>
        <span className="span2"></span>
        <span className="span3"></span>
        <div className="span6">
          <h3 className="med-margin-bottom">
            Separated they live in Bookmarks right at the coast of the famous
            Semantics, large language ocean Separated they live in Bookmarks
            right
          </h3>
        </div>
        <span className="span3"></span>
        <div className="span12 textcenter">
          <ButtonThick value="Action" />
          <Router>
            <Link className="link link3 primary1 by-side-link" to="">
              Action Link
              <img alt="Small arrow" className="arrow" src={smallBlueArrowFw} />
            </Link>
          </Router>
        </div>
      </div>
    </React.Fragment>
  );
};

export const Center3 = (props) => {
  return (
    <React.Fragment>
      <div className="container textcenter center center-padding">
        <span className="span2"></span>
        <div className="span8">
          <h1 className="display small-margin-bottom">
            Long headline to turn your visitors into users
          </h1>
        </div>
        <span className="span2"></span>
        <span className="span3"></span>
        <div className="span6">
          <h3 className="med-margin-bottom">
            Separated they live in Bookmarks right at the coast of the famous
            Semantics, large language ocean Separated they live in Bookmarks
            right
          </h3>
        </div>
        <span className="span3"></span>
        <span className="span2"></span>
        <div className="span8">
          <form className="flex-wrap med-margin-bottom">
            <Input placeholder="Email" idandname="fname" darkgrey inline />
            <Input
              placeholder="Placeholder"
              idandname="fname"
              darkgrey
              inline
            />
            <ButtonThin value="Button 1" />
          </form>
          <p className="p1 learn-more">
            Separated they live in Books, but sometimes.{" "}
            <Router>
              <Link className="link link1" to="">
                Learn more
              </Link>
            </Router>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export const Center4 = (props) => {
  return (
    <React.Fragment>
      <div className="container textcenter center-padding center">
        <span className="span2"></span>
        <div className="span8">
          <h3 className="small-margin-bottom">Tagline</h3>
          <h1 className="display small-margin-bottom">
            Long headline to turn your visitors into users
          </h1>
        </div>
        <span className="span2"></span>
        <span className="span3"></span>
        <div className="span6">
          <h3 className="small-margin-bottom">
            Separated they live in Bookmarks right at the coast of the famous
            Semantics, large language ocean Separated they live in Bookmarks
            right
          </h3>
          <Router>
            <Link className="link link3 primary1" to="">
              Action Link
              <img alt="Small arrow" className="arrow" src={smallBlueArrowFw} />
            </Link>
            <Link className="link link3 primary1 by-side-link-2" to="">
              Action Link
              <img alt="Small arrow" className="arrow" src={smallBlueArrowFw} />
            </Link>
          </Router>
        </div>
      </div>
    </React.Fragment>
  );
};

export const Center5 = (props) => {
  return (
    <React.Fragment>
      <div className="container textcenter center center-padding">
        <span className="span2"></span>
        <div className="span8">
          <h3 className="small-margin-bottom">Tagline</h3>
          <h1 className="display small-margin-bottom">
            Long headline to turn your visitors into users
          </h1>
        </div>
        <span className="span2"></span>
        <span className="span2"></span>
        <div className="span8">
          <form className="textcenter small-margin-bottom">
            <Input
              placeholder="Placeholder"
              idandname="fname"
              darkgrey
              inline
            />
            <ButtonThin value="Button 1" />
          </form>
        </div>
        <span className="span2"></span>
        <span className="span4"></span>
        <p className="p1 learn-more span4">
          By clicking the Button you confirming that you’re agree with our
          following Terms and Conditions.
        </p>
      </div>
    </React.Fragment>
  );
};

export const Center6 = (props) => {
  return (
    <React.Fragment>
      <div className="container textcenter center center-padding">
        <span className="span3"></span>
        <div className="span6">
          <h3 className="small-margin-bottom">Tagline</h3>
          <h1 className="small-margin-bottom">
            Long headline to turn your visitors into users
          </h1>
        </div>
        <span className="span3"></span>
        <span className="span3"></span>
        <div className="span6">
          <h4 className="med-margin-bottom">
            Change the color to match your brand or vision, add your logo,
            choose the perfect thumbnail, remove the playbar, add speed
            controls, and more. Increase engagement with CTAs and custom end
            screens, or keep your video private and password-protected.
          </h4>
        </div>
      </div>
    </React.Fragment>
  );
};

export const Center7 = (props) => {
  return (
    <React.Fragment>
      <div className="container textcenter center center-padding">
        <span className="span3"></span>
        <div className="span6">
          <h3 className="small-margin-bottom">Tagline</h3>
          <h1 className="small-margin-bottom">
            Long headline to turn your visitors into users
          </h1>
          <ButtonThick value="Action" />
        </div>
      </div>
    </React.Fragment>
  );
};

export const Center8 = (props) => {
  return (
    <React.Fragment>
      <div className="container textcenter center center-padding">
        <span className="span3"></span>
        <div className="span6">
          <h1 className="small-margin-bottom">
            Long headline to turn your visitors into users
          </h1>
        </div>
        <span className="span3"></span>
        <span className="span3"></span>
        <div className="span6">
          <p className="p2 med-margin-bottom">
            With the new AirPlay 2, you can control your home audio system and
            the speakers throughout your house. You can play a song in the
            living room and your kitchen at the same time.
          </p>
          <ButtonThick value="Action" />
        </div>
      </div>
    </React.Fragment>
  );
};

export const Center9 = (props) => {
  return (
    <React.Fragment>
      <div className="container textcenter center center-padding">
        <span className="span3"></span>
        <div className="span6">
          <img alt="" className="med-icon" src={glyphsImageShapes} />
          <h1 className="small-margin-bottom">Medium length headline</h1>
        </div>
        <span className="span3"></span>
        <span className="span3"></span>
        <div className="span6">
          <p className="p2 med-margin-bottom">
            Change the color to match your brand or vision, add your logo,
            choose the perfect thumbnail, remove the playbar, add speed
            controls, and more. Increase engagement with CTAs and custom end
            screens, or keep your video private and password-protected.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export const Center10 = (props) => {
  return (
    <React.Fragment>
      <div className="container textcenter center center-padding">
        <span className="span3"></span>
        <div className="span6">
          <h1 className="med-margin-bottom">
            Long headline to turn your visitors into users
          </h1>
        </div>
        <span className="span3"></span>
        <span className="span5"></span>
        <div className="span2 flex">
          <img alt="" className="small-icon" src={faceBookIcon} />
          <img alt="" className="small-icon" src={twitterIcon} />
          <img alt="" className="small-icon" src={copyIcon} />
        </div>
      </div>
    </React.Fragment>
  );
};

export const Center11 = (props) => {
  return (
    <React.Fragment>
      <div className="container textcenter center center-padding">
        <span className="span3"></span>
        <div className="span6">
          <h1 className="med-margin-bottom">
            Long headline for two lines for attention and evolving
          </h1>
          <p className="p2 med-margin-bottom">
            With the new AirPlay 2, you can control your home audio system and
            the speakers throughout your house.4 You can play a song in the
            living room and your kitchen at the same time.
          </p>
        </div>
        <span className="span3"></span>
        <span className="span4"></span>
        <div className="flex-wrap span4">
          <img alt="" className="Image" src={payPal} />
          <img alt="" className="Image" src={applePay} />
          <img alt="" className="Image" src={androidPay} />
          <img alt="" className="Image" src={samsungPay} />
        </div>
      </div>
    </React.Fragment>
  );
};

export const Center12 = (props) => {
  return (
    <React.Fragment>
      <div className="container textcenter center center-padding">
        <span className="span2"></span>
        <div className="span8">
          <h1 className="small-margin-bottom">Short headline</h1>
          <Router>
            <Link className="link link3 primary1" to="">
              Action Link
              <img alt="Small arrow" className="arrow" src={smallBlueArrowFw} />
            </Link>
          </Router>
        </div>
      </div>
    </React.Fragment>
  );
};

export const Center13 = (props) => {
  return (
    <React.Fragment>
      <div className="container textcenter center center-padding">
        <span className="span3"></span>
        <div className="span6">
          <h2 className="small-margin-bottom">
            Long headline on two lines to turn your visitors into users and
            achieve more
          </h2>
          <Router>
            <Link className="link link3 primary1" to="">
              Action Link
              <img alt="Small arrow" className="arrow" src={smallBlueArrowFw} />
            </Link>
          </Router>
        </div>
      </div>
    </React.Fragment>
  );
};

export const Center14 = (props) => {
  return (
    <React.Fragment>
      <div className="container textcenter center center-padding">
        <span className="span3"></span>
        <div className="span6">
          <p className="p3 med-margin-bottom">
            With the new AirPlay 2, you can control your home audio system and
            the speakers throughout your house. You can play a song in the
            living room and your kitchen at the same time.
          </p>
          <Router>
            <Link className="link link2 primary1" to="">
              Link
              <img alt="Small arrow" className="arrow" src={smallBlueArrowFw} />
            </Link>
          </Router>
        </div>
      </div>
    </React.Fragment>
  );
};

export const Center15 = (props) => {
  return (
    <React.Fragment>
      <div className="container textcenter center center-padding">
        <span className="span3"></span>
        <div className="span6">
          <img
            alt=""
            className="small-icon small-margin-bottom"
            src={glyphsImageShapes}
          />
          <p className="p3 small-margin-bottom">Medium Length Title</p>
        </div>
        <span className="span3"></span>
        <span className="span3"></span>
        <div className="span6">
          <p className="p2 med-margin-bottom">
            Change the color to match your brand or vision, add your logo,
            choose the perfect thumbnail, remove the playbar, add speed
            controls, and more. Increase engagement with CTAs and custom end
            screens, or keep your video private and password-protected.
          </p>
          <Router>
            <Link className="link link2 primary1" to="">
              <img
                alt="Circled arrow"
                className="inline"
                src={blueCircledArrow}
              />
              <p className="p2 inline">Long text on link</p>
            </Link>
          </Router>
        </div>
      </div>
    </React.Fragment>
  );
};

export const Center16 = (props) => {
  return (
    <React.Fragment>
      <div className="container textcenter center-padding center">
        <span className="span2"></span>
        <div className="span8">
          <h3 className="small-margin-bottom">Tagline</h3>
          <h1 className="display small-margin-bottom">
            Main headline to turn your visitors into users
          </h1>
        </div>
        <span className="span2"></span>
        <span className="span2"></span>
        <div className="span8 med-margin-bottom">
          <h3 className="small-margin-bottom">
            Separated they live in Bookmarksgrove right at the coast of the
            famous Semantics, large language ocean and many more stuff and more
            more more
          </h3>
          <Router>
            <Link className="link link3 primary1" to="">
              Action Link
              <img alt="Small arrow" className="arrow" src={smallBlueArrowFw} />
            </Link>
          </Router>
        </div>
        <div className="span12 bglightblue cover-image"></div>
      </div>
    </React.Fragment>
  );
};

export const Center17 = (props) => {
  return (
    <React.Fragment>
      <div className="container textcenter center-padding center">
        <span className="span2"></span>
        <div className="span8">
          <span className="span3"></span>
          <div className="span6">
            <h1 className="small-margin-bottom">
              Long headline to turn your visitors into users
            </h1>
          </div>
          <span className="span3"></span>
          <span className="span3"></span>
          <div className="span6 med-margin-bottom">
            <p className="p2 med-margin-bottom">
              With the new AirPlay 2, you can control your home audio system and
              the speakers throughout your house.4 You can play a song in the
              living room and your kitchen at the same time.
            </p>
            <ButtonThick value="Action" />
          </div>
        </div>
        <div className="span12 bglightblue cover-image"></div>
      </div>
    </React.Fragment>
  );
};

export const Center18 = (props) => {
  return (
    <React.Fragment>
      <div className="container textcenter center-padding center">
        <span className="span3"></span>
        <div className="span6">
          <p className="p3 med-margin-bottom">
            With the new AirPlay 2, you can control your home audio system and
            the speakers throughout your house. You can play a song in the
            living room and your kitchen at the same time.
          </p>
          <Router>
            <Link className="link link2 primary1" to="">
              Link
              <img alt="Small arrow" className="arrow" src={smallBlueArrowFw} />
            </Link>
          </Router>
        </div>
        <div className="span12 med-margin-bottom">
          <video
            className="cover-video"
            loop
            src={video}
            type="video/mp4"
            muted
            controls
          />
        </div>
        <span className="span3"></span>
        <p className="p1 med-margin-bottom span6">
          All base UI elements are made using Nested Symbols and shared styles
          that are logically connected with one another.
        </p>
      </div>
    </React.Fragment>
  );
};

export const Center19 = (props) => {
  const { headline, text, linkText } = props;
  return (
    <React.Fragment>
      <div className="container textcenter center-padding center">
        <div className="span12 bglightblue cover-image med-margin-bottom"></div>
        <span className="span3"></span>
        <div className="span6 med-margin-bottom">
          <p className="p3 small-margin-bottom">{headline}</p>
          <p className="p2 small-margin-bottom">{text}</p>
          <Router>
            <Link className="link link2 primary1" to="">
              {linkText}
              <img alt="Small arrow" className="arrow" src={smallBlueArrowFw} />
            </Link>
          </Router>
        </div>
      </div>
    </React.Fragment>
  );
};
