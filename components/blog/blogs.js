import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import twitterIcon from "../../assets/twitterIcon.svg";
import twitterIcon2 from "../../assets/twitterIcon2.svg";
import facebookIcon from "../../assets/faceBookIcon.svg";
import instagramIcon from "../../assets/instagramIcon.svg";
import pinterestIcon from "../../assets/pinterestIcon.svg";
import tumblrIcon from "../../assets/tumblrIcon.svg";

export const Blog1 = (props) => {
  return (
    <React.Fragment>
      <div className="container center center-padding">
        <span className="span1"></span>
        <div className="span6">
          <p className="p1 grey med-margin-bottom">
            Apr 12, 2018 -{" "}
            <Link className="hover-underline primary2">Lifestyle</Link>,{" "}
            <Link className="hover-underline primary2">Travel</Link>
          </p>
          <h1 className="med-margin-bottom">World’s Largest Boneyard</h1>
          <p className="p3">
            Decommissioned planes are brought to the Davis-Monthan Air Force
            boneyard in Tucson, AZ to take advantage of the dry climate and hard
            desert soil.
          </p>
        </div>
        <span className="span5" />
        <span className="span1"></span>
        <div className="textcenter span10 slideUp">
          <div className="bglightblue cover-image"></div>
          <p className="p1 grey">Boeing B-17 "Flying Fortress", Tucson, AZ</p>
        </div>
        <span className="span1"></span>
      </div>
    </React.Fragment>
  );
};

export const Blog2 = (props) => {
  return (
    <React.Fragment>
      <div className="container center center-padding">
        <span className="span2"></span>
        <div className="span8">
          <p className="p3">
            It’s easier to preserve the machines in dry air, and their wheels
            easily roll on the desert soil. Some of the planes come here to be
            modernized and get back into the air. Some become spare part donors.
            And some are recycled to get aluminum.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export const Blog3 = (props) => {
  return (
    <React.Fragment>
      <div className="container center center-padding">
        <span className="span2"></span>
        <div className="span8 blog-block">
          <h1 className="slideInFrom">
            The metal in the can of soda you recently had could have been flying
            30’000 feet (10 km) high in the sky a few years ago.
          </h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export const Blog4 = (props) => {
  return (
    <React.Fragment>
      <div className="container center center-padding">
        <span className="span2"></span>
        <div className="span2">
          <p className="p3">Share this:</p>
          <Link>
            <img
              alt="Instagram Icon"
              className="tiny-icon by-side-img"
              src={instagramIcon}
            />
          </Link>
          <Link>
            <img
              alt="Facebook Icon"
              className="tiny-icon by-side-img"
              src={facebookIcon}
            />
          </Link>
          <Link>
            <img
              alt="Twitter Icon"
              className="tiny-icon by-side-img"
              src={twitterIcon2}
            />
          </Link>
          <Link>
            <img
              alt="Pinterest Icon"
              className="tiny-icon by-side-img"
              src={pinterestIcon}
            />
          </Link>
          <Link>
            <img
              alt="Tumblr Icon"
              className="tiny-icon by-side-img"
              src={tumblrIcon}
            />
          </Link>
        </div>
        <span className="span4"></span>
        <div className="span2">
          <p className="p3 textright">Tags:</p>
          <p className="p1 textright grey med-margin-bottom">
            <Link className="hover-underline primary2">Lifestyle</Link>,{" "}
            <Link className="hover-underline primary2">Travel</Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export const Blog5 = (props) => {
  return (
    <React.Fragment>
      <div className="container center center-padding">
        <div className="span12 blog-block">
          <h1 className="slideInFrom">
            The metal in the can of soda you recently had could have been flying
            30’000 feet (10 km) high in the sky a few years ago.
          </h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export const Blog6 = (props) => {
  return (
    <React.Fragment>
      <div className="container center center-padding">
        <div className="span12 bgwhitewithshadow">
          <Link>
            <div className="bglightblue verttop cover-image w60 inline"></div>
            <div className="w40 inline verttop box-padding slideIn">
              <h1 className="small-margin-bottom">
                The metal can you have been flying.
              </h1>
              <p className="p2 med-margin-bottom">
                It’s easier to preserve the machines in dry air, and their
                wheels easily roll on the desert soil. Some of the planes come
                here to be modernized and get back into the air. Some become
                spare part donors. And some are recycled to get aluminum.
              </p>
              <p className="p1 grey">
                <Link className="hover-underline primary2">Lifestyle</Link>,{" "}
                <Link className="hover-underline primary2">Travel</Link>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};
