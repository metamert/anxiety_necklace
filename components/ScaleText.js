import React from 'react'
let opacity=0
    let a=1
export default function ScaleText({scroll}) {
    
    if(scroll>2400&&a<160){
a=a+scroll/30-90

if(a>10){
a=a+scroll/10-290

}
if(a>20){
    a=a+scroll/5-600
    
    }
    if(a>100){
        a=a+scroll/5-600
        opacity=1
        }
        
if(a<1){
    a=1
}
console.log("a",a)
    }
    return (
        <div className="scaleContainer">
            <div className="scaleText fullw">

       
          
            <h3  style={{transform:`scale(${a}) `}} >ürünler</h3>
            </div>
        </div>
    )
}
