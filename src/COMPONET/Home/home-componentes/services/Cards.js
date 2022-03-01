import React from "react";
import './services.css';
import img from "../../../images/img-3.jpg";
import imgb from "../../../images/img-4.jpg";
import imgc from "../../../images/img-5.jpg";
import imgd from "../../../images/img-6.jpg";
import imgf from "../../../images/img-7.jpg";
import CardsItem from "./CardsItem";


function Cards(){
  
  

  return(
    <>
      <div className="cards">
        <h1>check out these epic destinations !</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__item">
              <CardsItem
                src={img}
                text='Explore The Hidden Waterfall Deep Inside The Amazon Jungle'
                label='Adventure'
                path='/'
              />
              <CardsItem
                src={imgf}
                text='Explore The Hidden Waterfall Deep Inside The Amazon Jungle'
                label='Adventure'
                path='/'
              />
              <CardsItem
                src={imgb}
                text='Explore The Hidden Waterfall Deep Inside The Amazon Jungle'
                label='Adventure'
                path='/'
              />
              <CardsItem
                src={imgc}
                text='Explore The Hidden Waterfall Deep Inside The Amazon Jungle'
                label='Adventure'
                path='/'
              />
              <CardsItem
                src={imgd}
                text='Explore The Hidden Waterfall Deep Inside The Amazon Jungle'
                label='Adventure'
                path='/'
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards;