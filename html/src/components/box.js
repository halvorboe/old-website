import React from "react"

const Box = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #979797",
        borderRadius: "10px",
        padding: "30px",
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </div>
  )
}

export default Box
