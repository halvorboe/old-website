import React from "react"

const Box = ({ children }) => {
  return (
    <div
      style={{
        border: "3px solid #EEE",
        borderRadius: "5px",
        padding: "0px",
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </div>
  )
}

export default Box
