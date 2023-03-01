import { IPokemon } from "../../models/IPokemon";
import "./PokemonBox.css";
/*
    Will display pokemon information in Box UI

    It is not a good idea to make this component have hardcoded values because then it will give only pikachu
    Not really reusable

    Instead why not make our data dynamic?
*/

function PokemonBox(props:IPokemon) {
    return <div className="box">
        <img src={props.img}/>
        <h4>{props.name}</h4>
        <p>Level: {props.level}</p>
        <p>Health: {props.health}</p>
        <p>Damage: {props.damage}</p>
    </div>
}

export default PokemonBox;