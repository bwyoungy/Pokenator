class PokemonModel {
    public constructor(public name:string,
                        public id:number,
                        public imageUrl:string, //sprites.other["official-artwork"].front_default
                        public spriteUrl:string, //sprites.front_default
                        public types:string[],
                        public moves:string[],
                        public abilities:string[]) {}

    // Function to get display name of Pokemon formatted to replace hyphens with spaces and capitalise first letter of words
    public getDisplayName():string {
        return this.name.replace(/mr-(\w+)/g, (_, match) => `mr. ${match}`) // Handle Mr. pokemon formatting
                        .replace(/\bjr\b/, 'jr.') // Handle Jr. pokemon formatting
                        .replace(/-(m|f)$/, (_, sex) => sex === 'm' ? '♂' : '♀') // Handle sex symbols formatting
                        .replace(/fetchd$/, "fetch'd") // Handle -fetch'd evolution line formatting
                        .replace(/-/g, ' ') // Replace hypen with space
                        .split(' ') // Split string into words
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalise first letter of each word
                        .join(' '); // Re-join into one string
    }
}

export default PokemonModel;