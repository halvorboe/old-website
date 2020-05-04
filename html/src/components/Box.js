import React, { Fragment, Children } from "react"

const Box = props => {
  const style = props.light
    ? {
        color: "black",
        backgroundColor: "#F7F7F7",
        border: "3px solid #888",
        boxShadow: "5px 10px #ddd",
      }
    : {
        color: "white",
        backgroundColor: "#FF8939",
        border: "3px solid #fff",
        boxShadow: "5px 10px #ddd",
      }
  return (
    <Fragment>
      {props.header ? <h4>{props.header}</h4> : null}
      <div className="box" style={style}>
        <div
          className={props.row ? "row" : "column"}
          style={{ display: "grid" }}
        >
          {props.children}
        </div>
      </div>
    </Fragment>
  )
}
export default Box
