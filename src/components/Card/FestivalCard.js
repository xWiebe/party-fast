import React from 'react';
import './FestivalCard.css';


const FestivalCard = (props) => {
  return (
    <div className="festivalcard-container">
      <div className="festivalcard">
        <h2>{props.title}</h2>
        <img src={props.imageUrl} alt={props.title} />
        <h3>{props.description}</h3>
        <p>{props.date}</p>
        <button onClick={props.onClick}>{props.buttonText}</button>
      </div>
    </div>
  );
}

export default FestivalCard;