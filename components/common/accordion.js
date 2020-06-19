import React, { useState, useRef } from "react";

import greychevron from "../.././assets/greychevron.svg";
//Prop given must be in the following format
//const List = [
//  [{ title: "Design" }, ["Photoshop", "HTML", "CSS"]],
//  [{ title: "Coding" }, ["Javascript", "React"]],
//  [{ title: "Devices" }, ["Desktop", "Tablet", "Phone"]],
//];

export function Accordion(props) {
  /*const { accordionArry } = props;*/
  const { title, contentBody } = props;
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("");
  const content = useRef(null);
  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "" ? `${content.current.scrollHeight}px` : "0px"
    );
    setRotateState(
      setActive === "" ? "accordion-chevron rotate" : "accordion-chevron"
    );
  }
  return (
    <div className="accordion">
      <li>
        <div className={"accordion-bar " + setActive} onClick={toggleAccordion}>
          <p className="accordion-title link2">{title}</p>
          <img
            alt="chevron"
            className={"accordion-chevron" + setRotate}
            src={greychevron}
          />
        </div>
        <ul
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="submenu"
        >
          <div>
            {contentBody.map((element) => {
              return <li className="link1 accordion-item">{element}</li>;
            })}
          </div>
        </ul>
      </li>
    </div>
  );
}
