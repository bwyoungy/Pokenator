import { useParams } from "react-router-dom";
import "./PokemonDetails.css";
import { useEffect, useState } from "react";
import PokemonModel from "../../../Models/PokemonModel";
import pokemonService from "../../../Services/PokemonService";
import notify from "../../../Services/NotifyService";

function PokemonDetails(): JSX.Element {
    // Save parameters to use in component
    const params = useParams();

    // State with the current pokemon
    const [pokemon, setPokemon] = useState<PokemonModel>(new PokemonModel("",0,"","",[""],[""],[""]));

    // State to toggle visibility of moves
    const [isMovesVisible, setIsMovesVisible] = useState<boolean>(false);

    // Setting the pokemon data
    useEffect(()=>{
        pokemonService.getPokemonByNameID(params.pokemonID)
        .then(pokemon => setPokemon(pokemon))
        .catch(err => notify.errorMsg(err));
    },[params.pokemonID]);

    // Function toggling visibility of moves
    const toggleMovesVisibility = () => setIsMovesVisible(prevState => !prevState);

    return (
        <div className="PokemonDetails">
			<h2>#{pokemon.id}: {pokemon.getDisplayName()}</h2>
            <div className="PokemonTypes">
                {pokemon.types.map(t => (<span key={t} className={`type-badge ${t}`}>{t}</span>))}
            </div>
            <img src={pokemon.imageUrl} alt={"Picture of " + pokemon.name} title={"Picture of " + pokemon.name}/>
            <div className="PokemonAbilities">
                <h3>Abilities:</h3>
                <p>
                    {pokemon.getDisplayAbilities().join(", ")}
                </p>
            </div>
            <div className="PokemonMoves">
                {/* Clickable header to expand/collapse moves section */}
                <h3 onClick={toggleMovesVisibility} style={{ cursor: "pointer", color: "gold" }}>
                    Moves {isMovesVisible ? "▲" : "▼"}
                </h3>
                {/* Display moves according to state of visibility */}
                {isMovesVisible &&
                (<p>
                    {pokemon.getDisplayMoves().join(", ")}
                </p>)}
            </div>
        </div>
    );
}

export default PokemonDetails;
