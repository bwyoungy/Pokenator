import axios from "axios";
import appConfig from "../Utils/Config";
import PokemonModel from "../Models/PokemonModel";

class PokemonService {
    // Function to get pokemon data by name
    public async getPokemonByNameID(input:string):Promise<PokemonModel> {
        const response = await axios.get<any>(appConfig.pokemonUrl + input);
        return new PokemonModel(response.data.name,
                                response.data.id,
                                response.data.sprites.other["official-artwork"].front_default,
                                response.data.sprites.front_default,
                                response.data.types.map((item: { type: { name: any; }; }) => item.type.name),
                                response.data.moves.map((item: { move: { name: any; }; }) => item.move.name),
                                response.data.abilities.map((item: { ability: { name: any; }; }) => item.ability.name));
    }

    // Function to get data about pokemons by Generation
    public async getPokemonByGen(genNumber:number):Promise<PokemonModel[]> {
        const response = await axios.get<any>(appConfig.pokemonUrlByGen(genNumber));
        
        const pokemonData: PokemonModel[] = [];
        let currPokemon:PokemonModel;

        for (const p of response.data.results) {
            currPokemon = await this.getPokemonByNameID(p.name);
            pokemonData.push(currPokemon);
        }

        return pokemonData;
    }
}

const pokemonService = new PokemonService();

export default pokemonService;