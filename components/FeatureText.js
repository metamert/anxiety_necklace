import React from 'react'

export default function FeatureText({title,text,styles,renderText}) {
    return (
        <div style={styles} className="featureText">
            <h2>{title}</h2>
            <p style={{color:"white",marginTop:20}}>{text}</p>
        </div>
    )
}
