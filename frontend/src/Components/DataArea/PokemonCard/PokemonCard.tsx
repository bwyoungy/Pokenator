import PokemonModel from "../../../Models/PokemonModel";
import "./PokemonCard.css";
import { NavLink } from "react-router-dom";

interface PokemonCardProps {
    pokemon: PokemonModel;
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
        </div>
    );
}

export default PokemonCard;