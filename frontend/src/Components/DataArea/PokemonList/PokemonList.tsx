import { useEffect, useState } from "react";
import "./PokemonList.css";
import pokemonService from "../../../Services/PokemonService";
import notify from "../../../Services/NotifyService";
import PokemonModel from "../../../Models/PokemonModel";
import PokemonCard from "../PokemonCard/PokemonCard";

function PokemonList(): JSX.Element {

    const [pokemon, setPokemon] = useState<PokemonModel[]>([]);

    useEffect(()=>{
        pokemonService.getPokemonByGen(1)
        .then(pokemon => setPokemon(pokemon))
        .catch(err => notify.errorMsg(err));
    },[]);
    return (
        <div className="PokemonList">
			<h1>Generation 1 Pokemon</h1>

            {/* For each pokemon show the pokemon in a PokemonCard component */}
            {pokemon.map(p => <PokemonCard key={p.id} pokemon={p}/>)}
        </div>
    );
}

export default PokemonList;
