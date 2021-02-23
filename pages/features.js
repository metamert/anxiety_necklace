import React from "react";

export default function features() {
  return (
    <div className="featureContainer">
      <div className="featureBackground">
        <div className="feautureText"></div>
        <div className="featureContent">
          <div className="relative lg:pt-4 w50 center   lg:mt-4">
            <video autoPlay loop muted className="circleR">
              <source src="/magneticVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
