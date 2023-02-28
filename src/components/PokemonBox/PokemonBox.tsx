import React from "react";
import { Pokemon } from "../../models/Pokemon";


interface Props extends Pokemon {
  onDelete?: () => void;
}

export default function PokemonBox(props: Props) {
  const { name, img, level, health, damage, onDelete } = props;

  return (
    <div className="pokemon-box">
      <img src={img} alt={name} />
      <div className="pokemon-details">
        <h4>{name}</h4>
        <p>Level: {level}</p>
        <p>Health: {health}</p>
        <p>Damage: {damage}</p>
        {onDelete && <button onClick={onDelete}>Delete</button>}
      </div>
    </div>
  );
}
