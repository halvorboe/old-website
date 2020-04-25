import React from 'react'

const button = (props) => {
    if (!props.active) {
    return (
        <div style={{padding: 10}}>
            <button style={{
                color: "#FF8939",
                padding: '5px 30px',
                textTransform: 'uppercase',
                fontFamily: "Avenir Next",
                fontWeight: "500",
                borderRadius: "20px",
                fontSize: '14px',
                border: '2px solid #FF8939'
            }}>{props.children}</button>
        </div>
    )
    } else {
        return (<div style={{padding: 10}}>
        <button style={{
            color: "#fff",
            backgroundColor: "#FF8939",
            padding: '5px 30px',
            textTransform: 'uppercase',
            fontFamily: "Avenir Next",
            fontWeight: "500",
            borderRadius: "20px",
            border: '2px solid #FF8939'
        }}>{props.children}</button>
    </div>)
    }
}

export default button
