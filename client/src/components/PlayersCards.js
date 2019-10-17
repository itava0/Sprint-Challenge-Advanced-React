import React from 'react';

const PlayersCards = props => {
  console.log(props.player)
  return ( 
    <div className="card">
      <div className="card-info">
        <h3 className="name">{props.player.name}</h3>
        <p>Country: {props.player.country}</p>
        <p>Rank: {props.player.searches}</p>
      </div>
    </div>
   );
}
 
export default PlayersCards;