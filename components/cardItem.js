  
import React from "react";
import Link from "next/link";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" href={props.path}>
        <div className="fullw cards__item__link">
            <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="Gezi Imgae"
              className="cards__item__img"
              style={props.style}
            />
          </figure>
          <div className="cards__item__info ">
            <h5 className="cards__item__text">{props.text}</h5>
            <div style={{color:"red"}}>{props.available?"incele":"tükendi"}</div>
          </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;