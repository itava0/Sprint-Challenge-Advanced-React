import React from 'react';
import PlayersCards from './PlayersCards';

const Player = props => {
  return ( 
    <>
      {props.player.sort(function(a, b){return b-a}).map(item => (
        <PlayersCards key={item.id} player={item}/>
      ))}
    </>
   );
}
 
export default Player;