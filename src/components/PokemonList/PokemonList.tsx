import { useState } from "react";
import { Pokemon } from "../../models/Pokemon";
import PokemonBox from "../PokemonBox/PokemonBox";
import axios from "axios";
import { PokemonAPI } from "../../models/PokemonAPI";
export default function PokemonList() {
	const newPokemon: Pokemon = {
		damage: 0,
		health: 0,
		img: "",
		level: 0,
		name: "",
	};

	const [listOfPokemons, setListPoke] = useState<Pokemon[]>([
		{
			damage: 20,
			health: 100,
			img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
			level: 2,
			name: "Pika",
		},
		{
			damage: 10,
			health: 400,
			img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
			level: 5,
			name: "random",
		},
	]);

	function onSubmitP(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		console.log(listOfPokemons);

		//When you click on the button to submit
		//Send request using Axios
		//Axios is going to grab the information from the pokeAPI and store it

		axios
			.get<PokemonAPI>(`https://pokeapi.co/api/v2/pokemon/${newPokemon.name}`)
			.then((response) => {
				console.log(response.data);
				let poke: Pokemon = {
					health: response.data.stats[0].base_stat,
					damage: response.data.stats[1].base_stat,
					img: response.data.sprites.front_default,
					level: 10,
					name: response.data.name,
				};

				setListPoke([poke, ...listOfPokemons]);
			});
	}

	function setNameP(event: React.ChangeEvent<HTMLInputElement>) {
		newPokemon.name = event.target.value;
	}

	function handleDelete(name: string) {
		setListPoke(listOfPokemons.filter((poke) => poke.name !== name));
	}

	return (
		<div>
			<h3>Add Pokemon via PokeAPI</h3>
			<form className="grid" onSubmit={onSubmitP}>
				<label>Name</label>
				<input type="text" onChange={setNameP}></input>
				<br />
				<input type="submit"></input>
			</form>

			<h2>Pokemon List</h2>
			<div className="grid-pokemon">
				{listOfPokemons.map((poke) => {
					return (
						<PokemonBox
							key={poke.name}
							{...poke}
							onDelete={() => handleDelete(poke.name)}
						/>
					);
				})}
			</div>
		</div>
	);
}
