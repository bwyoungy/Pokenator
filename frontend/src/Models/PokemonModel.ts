class PokemonModel {
    public constructor(public name:string,
                        public id:number,
                        public imageUrl:string, //sprites.other["official-artwork"].front_default
                        public spriteUrl:string, //sprites.front_default
                        public types:string[],
                        public moves:string[],
                        public abilities:string[]) {}

    // Helper function to format attributes
    // Replacing hyphens with spaces and capitalising first letter of words
    private formatAttribute(word:string):string {
        return word
                .split("-")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
    }

    // Function to get display name of Pokemon
    public getDisplayName():string {
        return this.formatAttribute(this.name) // Format name to replace hyphens with space and captialise words
                    .replace(/Mr (\w+)/g, (_, match) => `Mr. ${match}`) // Handle Mr. pokemon formatting
                    .replace(/\bJr\b/, 'Jr.') // Handle Jr. pokemon formatting
                    .replace(/ (M|F)$/, (_, sex) => sex === 'M' ? '♂' : '♀') // Handle sex symbols formatting
                    .replace(/fetchd$/, "fetch'd") // Handle -fetch'd evolution line formatting
    }

    // Function to get display of moves
    public getDisplayMoves():string[] {
        return this.moves.map(move => this.formatAttribute(move));
    }

    // Function to get display of abilities
    public getDisplayAbilities():string[] {
        return this.abilities.map(ability => this.formatAttribute(ability));
    }
}

export default PokemonModel;