import { useEffect, useState } from "react";
import "./PokemonList.css";
import pokemonService from "../../../Services/PokemonService";
import notify from "../../../Services/NotifyService";
import PokemonModel from "../../../Models/PokemonModel";
import PokemonCard from "../PokemonCard/PokemonCard";

function PokemonList(): JSX.Element {

    const [pokemon, setPokemon] = useState<PokemonModel[]>([]);
    const [generation, setGeneration] = useState<number>(1); // Default generation on pageload is 1
    const [loading, setLoading] = useState<boolean>(false); // Loading state - default not loading

    // Fetch pokemon by generation, with dependency when generation changes
    useEffect(()=>{
        // Display loading animation while fetching data
        setLoading(true);
        pokemonService.getPokemonByGen(generation)
        .then(pokemon => {
            setPokemon(pokemon);
            // Stop loading animation when data fetched
            setLoading(false);
        })
        .catch(err => {
            notify.errorMsg(err);
            // Stop loading animation if error with data
            setLoading(false);
        });
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

            {/* Show loading animation while data being fetched */}
            {loading ? (
                <div className="loader"></div>
            ) : (
                // For each pokemon show the pokemon in a PokemonCard component
                pokemon.map(p => <PokemonCard key={p.id} pokemon={p}/>)
            )}
        </div>
    );
}

export default PokemonList;
