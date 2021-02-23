import React from 'react'
import config from "react-reveal/globals";
config({ ssrFadeout: true });
import { Fade } from "react-reveal";
export default function solFayda() {
    return (
        <div className="left flex flex-col center p30 stick h800">
        <img
          src="magnet.png"
          alt="magnetic sand"
          className="mb-4"
          style={{ width: 60, height: 60 }}
        ></img>

        <h3
          className="text-center text-2xl md:text-xl lg:text-2xl text-white  font-normal mt-4"
          style={{ color: "#bdbdbd" }}
        >
          If you use this magnetic sand on the thymus gland, you trigger the
          gland, ıt is very important for human health.
        </h3>

        <Fade bottom delay={300}>
          <h3 className="text-center text-1xl md:text-sm lg:text-2xl text-white  font-bold mt-8 flex flex-row">
            <img
              src="quote.png"
              alt="magnetic sand"
              className="mb-16 ters  w-8 h-8 md:h-12 md:w-12 "
            ></img>{" "}
            The findings from these studies... identify new potential
            strategies to preserve thymus function for longer, raising the
            prospect of a healthier old age.{" "}
            <img
              src="quote.png"
              alt="magnetic sand"
              className="mb-16 w-8 h-8 md:h-12 md:w-12"
            ></img>
          </h3>
        </Fade>
        <Fade bottom delay={500}>
          <h3 className="text-center text-1.5xl text-white  font-normal mt-8 flex flex-row">
            Professor Georg Hollander, Department of Paediatrics Oxford
          </h3>
        </Fade>
      </div>

    )
}
