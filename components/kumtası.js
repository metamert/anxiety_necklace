import React, { useEffect } from "react"

import config from 'react-reveal/globals';
import foto from "../public/new-tr.webp";

config({ ssrFadeout: true });
import {Fade} from "react-reveal"
export default function Home() {
   
      
  
  return (
  
    
 


<div className="kolyeContainer items-center relative">


<div  className="yazı ">


<h2 className="üst text-5xl md:text-4xl lg:text-6xl">Magnetite</h2>

<h6 className="alt text-4xl md:text-3xl lg:text-4xl">jewelry.</h6>



</div>






<div  className="yazı2 ">



<h2 className="üst text-5xl md:text-4xl lg:text-6xl">Sea sand </h2>

<Fade bottom  duration={1000} delay={1000}>
<h6 className="alt text-4xl md:text-1xl lg:text-4xl">into stone <br></br>  as a result of<br></br> long processes.</h6>
</Fade>


</div>









<img className="kolye" src={foto} alt="magnetic jewelry" >




</img>







     

    
    </div>
  )
}
