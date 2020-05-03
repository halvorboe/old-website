import React, {Fragment} from "react"

const Box = props => {
  const style = props.light
    ? {
        color: "black",
        backgroundColor: "#eee",
      }
    : {
        color: "white",
        backgroundColor: "orange",
      }
  return <Fragment>
    {props.header ? <h2 style={{color: 'red'}}>{props.header}</h2> : null}
    <div style={style}>{props.children}</div>
    </Fragment>
}
export default Box
