import { useEffect, useState } from "react";
import "./PokemonList.css";
import pokemonService from "../../../Services/PokemonService";
import notify from "../../../Services/NotifyService";
import PokemonModel from "../../../Models/PokemonModel";
import PokemonCard from "../PokemonCard/PokemonCard";

function PokemonList(): JSX.Element {

    const [pokemon, setPokemon] = useState<PokemonModel[]>([]);
    const [generation, setGeneration] = useState<number>(1); // Default generation on pageload is 1

    // Fetch pokemon by generation, with dependency when generation changes
    useEffect(()=>{
        pokemonService.getPokemonByGen(generation)
        .then(pokemon => setPokemon(pokemon))
        .catch(err => notify.errorMsg(err));
    }, [generation]);

    // Handle change of generation
    const handleGenChange = (event: React.ChangeEvent<HTMLSelectElement>) => {setGeneration(Number(event.target.value));};

    return (
        <div className="PokemonList">
            {/* Dropdown menu for selecting generation */}
            <label htmlFor="genSelect">Choose generation: </label>
            <select id="genSelect" value={generation} onChange={handleGenChange}>
                {/* Options for generations 1-9 */}
                {Array.from({length: 9}, (_, i) => (<option key={i+1} value={i+1}>Generation {i+1}</option>))}
            </select>

			<h1>Generation {generation} Pokemon</h1>

            {/* For each pokemon show the pokemon in a PokemonCard component */}
            {pokemon.map(p => <PokemonCard key={p.id} pokemon={p}/>)}
        </div>
    );
}

export default PokemonList;
