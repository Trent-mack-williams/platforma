import React from "react";
import sendIcon from "../../assets/sendIcon.svg";

export const ButtonThick = (props) => {
  const { value, InputMethodHere, inactive } = props;
  return (
    <button
      className={
        inactive ? "inactive bgprimary button-thick" : "bgprimary button-thick"
      }
      onClick={() => InputMethodHere()}
    >
      {value}
    </button>
  );
};

export const ButtonThin = (props) => {
  const { value, InputMethodHere, inactive } = props;
  return (
    <button
      className={
        inactive ? "bgprimary button-thin inactive" : "bgprimary button-thin"
      }
      onClick={() => InputMethodHere()}
    >
      {value}
    </button>
  );
};

export const ButtonFill = (props) => {
  const { value, InputMethodHere, inactive } = props;
  return (
    <button
      className={
        inactive
          ? "inactive bgprimary button-thick fill"
          : "bgprimary button-thick fill"
      }
      onClick={() => InputMethodHere()}
    >
      {value}
    </button>
  );
};

export const ButtonThickTransparent = (props) => {
  const { value, InputMethodHere, inactive } = props;
  return (
    <button
      className={
        inactive
          ? "inactive primary1 button-thick bgsecondary"
          : "primary1 button-thick bgsecondary"
      }
      onClick={() => InputMethodHere()}
    >
      {value}
    </button>
  );
};

export const ButtonThinTransparent = (props) => {
  const { value, InputMethodHere, inactive } = props;
  return (
    <button
      className={
        inactive
          ? "inactive primary1 button-thin bgsecondary"
          : "primary1 button-thin bgsecondary"
      }
      onClick={() => InputMethodHere()}
    >
      {value}
    </button>
  );
};

export const ButtonArrow = (props) => {
  const { InputMethodHere, inactive } = props;
  return (
    <button
      className={
        inactive
          ? "button-arrow button-thin inactive"
          : "button-arrow button-thin"
      }
      onClick={() => InputMethodHere()}
    >
      <img className="tiny-icon" src={sendIcon} alt="Send" />
    </button>
  );
};
