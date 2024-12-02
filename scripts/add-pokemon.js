const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    // Prova a creare un Pokémon (puoi cambiare i valori come preferisci)
    const bulbasaur = await prisma.pokemon.create({
        data: {
            name: "Bulbasaur",
            number: 1,
            types: {
                create: [
                    { name: "Grass" },
                    { name: "Poison" },
                ],
            },
        },
    });
    console.log("Created Pokémon:", bulbasaur);

    // Recupera tutti i Pokémon
    const pokemons = await prisma.pokemon.findMany();
    console.log("All Pokémon:", pokemons);
}

main()
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
