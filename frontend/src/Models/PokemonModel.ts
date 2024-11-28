class PokemonModel {
    public constructor(public name:string,
                        public id:number,
                        public imageUrl:string, //sprites.other["official-artwork"].front_default
                        public spriteUrl:string, //sprites.front_default
                        public types:string[],
                        public moves:string[],
                        public abilities:string[]) {}
}

export default PokemonModel;