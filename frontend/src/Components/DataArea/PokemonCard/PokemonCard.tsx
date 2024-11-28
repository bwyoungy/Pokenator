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
            <h3>#{props.pokemon.id}: {props.pokemon.getDisplayName()}</h3>
			<NavLink to={"/pokemon/details/" + props.pokemon.name}>
                <img src={props.pokemon.spriteUrl} alt={"Picture of " + props.pokemon.name} title={"Picture of " + props.pokemon.name}/>
            </NavLink>
            <div className="PokemonTypes">
                {props.pokemon.types.map(t => (<span key={t} className={`type-badge ${t}`}>{t}</span>))}
            </div>
            {/* <p>{props.pokemon.types.join(" ")}</p> */}
        </div>
    );
}

export default PokemonCard;