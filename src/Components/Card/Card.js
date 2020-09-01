import React from 'react';
import CardInfo from '../CardInfo/CardInfo';

function Card(props) {

  return(
    <div>
      <img className="" src={props.item.imgSrc} alt={props.item.imgSrc} />
      {props.item.selected && 
      <CardInfo title={props.item.title} subtitle={props.item.subtitle} 
      link={props.item.link} github={props.item.github}/>} 
    </div>
  );
}


export default Card;