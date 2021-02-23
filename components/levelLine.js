import React from "react";

import config from "react-reveal/globals";
import Sol from "./solFayda"
import Sag from "./sagfayda"

config({ ssrFadeout: true });
import { Fade } from "react-reveal";
const Line = () => {




  return (
    <div className=" fullw stickyContainer ">
   
      <div  className="levelContainerS stickLine ">
        

      <Sol ></Sol>
       <Sag ></Sag>
       
      </div>
    
  
    </div>
  );
};

export default Line;
