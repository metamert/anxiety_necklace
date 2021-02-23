import React,{useState} from "react";
import config from "react-reveal/globals";
config({ ssrFadeout: true });
import { Fade } from "react-reveal";
export default function sagfayda() {
const [scroll,setScroll]=  React.useState(false)

  return (
    <div onScroll={()=>{
console.log("scroll oldu")
setScroll(true)

    }} className={`right flex flex-col center stick h800 relative imgR ${scroll&&"imgS"}`}>
     
   
    </div>
  );
}
