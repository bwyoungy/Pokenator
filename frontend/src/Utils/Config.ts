class Config {
    public pokemonUrl = "https://pokeapi.co/api/v2/pokemon/";
    
    // List stats for pokemon generations -
    // each one saving the offset (when it starts)
    // and limit (how many pokemon are in the generation)
    // To allow building of url to pull pokemon by generation
    private genStats: {[key:number]:{offset:number,limit:number}} = {
                        1: {offset:0, limit:151},
                        2: {offset:151, limit:100},
                        3: {offset:251, limit:135},
                        4: {offset:386, limit:107},
                        5: {offset:493, limit:156},
                        6: {offset:649, limit:72},
                        7: {offset:721, limit:88},
                        8: {offset:809, limit:96},
                        9: {offset:905, limit:120}};

    // Function to pull pokemon by generation using genStats data
    public pokemonUrlByGen(genNumber:number) {
        return `https://pokeapi.co/api/v2/pokemon/?limit=${this.genStats[genNumber].limit}&offset=${this.genStats[genNumber].offset}`;
    }
}

const appConfig = new Config();

export default appConfig;