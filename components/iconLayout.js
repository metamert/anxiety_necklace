import React from 'react'

export default function iconLayout({icon,style}) {
    return (
        <div className="icon" style={style}>
            <img src={`${icon}`} ></img>
            
        </div>
    )
}
