import React from 'react';
import CardInfo from '../CardInfo/CardInfo';

function Card(props) {

  return(
    <div className='d-inline-block d-card' onClick={(e) => props.onClick(props.item)}>
      <img className="d-card-img" src={props.item.imgSrc} alt={props.item.imgSrc} />
      {props.item.selected && 
      <CardInfo title={props.item.title} subtitle={props.item.subtitle} 
      link={props.item.link} github={props.item.github}/>} 
    </div>
  );
}


export default Card;