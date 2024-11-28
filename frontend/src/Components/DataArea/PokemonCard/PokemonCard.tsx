import PokemonModel from "../../../Models/PokemonModel";
import "./PokemonCard.css";
import { NavLink } from "react-router-dom";

interface PokemonCardProps {
    pokemon: PokemonModel;
}

// Helper function to capitalise first letter of word
function capitaliseWord(name: string) : string {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function PokemonCard(props: PokemonCardProps): JSX.Element {
    return (
        <div className="PokemonCard Card">
            <h4>#{props.pokemon.id}: {capitaliseWord(props.pokemon.name)}</h4>
			<NavLink to={"/pokemon/details/" + props.pokemon.name}>
                <img src={props.pokemon.spriteUrl} alt={"Picture of " + props.pokemon.name} title={"Picture of " + props.pokemon.name}/>
            </NavLink>
            <p>{props.pokemon.types.join(" ")}</p>
        </div>
    );
}

export default PokemonCard;
