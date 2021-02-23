import React from "react";
import { useRouter } from 'next/router'

import config from "react-reveal/globals";
import { Fade } from "react-reveal";
import Image from "next/image"
config({ ssrFadeout: true });

const Line = ({ children, href }) => {
    const router = useRouter()

    const handleClick = (e,href) => {
        e.preventDefault()
        router.push(href)
      }
  return (
  
      <div className=" flex flex-row items-center justify-center fullw mt30">
        <Fade bottom>
            <div onClick={(e)=>handleClick(e,"/iletisim")}  className="card flex-column center justify-center">
          <Image className="hidden" src="/lala.png" alt="magnetic sand" width="200px" height="200px"></Image>
          <h2 className="ml20">İletişim</h2>

          </div>
        </Fade>
        <Fade bottom>
        <div onClick={(e)=>handleClick(e,"https://www.ox.ac.uk/news/2016-08-22-study-suggests-routes-improved-immunity-older-people")} className="card card flex-column-reverse center justify-center">
        <div>
        <h2>Oxford </h2>
        <p className="text-center">Timus bezinin faydalarıyla alakalı araştırmalar</p>
        </div>
          <Image className="hidden" src="/oxford.png" alt="magnetic sand"  width="220px" height="220px"></Image>
          
          </div>
        </Fade>
      </div>)

};

export default Line;
