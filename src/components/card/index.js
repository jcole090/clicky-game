import React from "react";
import "./card.css";

//pass the image into each card so all 12 are rendered
const FriendCard = props => 
(
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
   
     <img alt={props.image.replace(".", "")} src={require(`../../images/${this.props.image}`)} /> 
    </div>
  </div>
);

export default FriendCard;  
