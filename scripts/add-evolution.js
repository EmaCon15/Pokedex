const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Creazione di Ivysaur
    const ivysaur = await prisma.pokemon.upsert({
        where: {
            number: 2,
        },
        update: {},
        create: {
            name: 'Ivysaur',
            number: 2,
        },
    });

    console.log('Ivysaur creato:', ivysaur);

    // Creazione della relazione di evoluzione
    const evolution = await prisma.evolution.create({
        data: {
            pokemonId: 1, // ID di Bulbasaur
            evolvesInto: 2, // ID di Ivysaur
        },
    });

    console.log('Relazione di evoluzione creata:', evolution);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
