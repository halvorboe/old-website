import React, { Fragment, Children } from "react";

import {FaTrafficLight} from "react-icons/fa";

const Box = (props) => {
  // const shadow = "12px 12px 24px 0 rgba(0, 0, 0, 0.2),  -12px -12px 24px 0 rgba(255, 255, 255, 0.5)";
  // const style = props.light
  //   ? {
  //       color: "black",
  //       background-color: #f13c20
  //       // border: "3px solid #888",
  //       boxShadow: shadow,
  //     }
  //   : {
  //       color: "white",
  //       backgroundColor: "#FF8939",
  //       // border: "3px solid #fff",
  //       // boxShadow: shadow,
  //     };
  return (
    <Fragment>
      {props.header ? <h3 style={{marginBottom: 30}}><spac style={{fontSize: 30, margin: "0px 15px 0px 0", position: "relative", top: 7, color: "var(--contrast"}}>{props.icon}</spac>{props.header}</h3> : null}
      <div className="neumorphic box-padding">
        <div className="box">
          <div
            className={props.row ? "row" : "column"}
            style={{ display: "grid" }}
          >
            {props.children}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Box;
