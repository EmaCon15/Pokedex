const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const types = [
    'Normale',
    'Lotta',
    'Volante',
    'Veleno',
    'Terra',
    'Roccia',
    'Coleottero',
    'Spettro',
    'Acciaio',
    'Fuoco',
    'Acqua',
    'Erba',
    'Elettro',
    'Psico',
    'Ghiaccio',
    'Drago',
    'Buio',
    'Folletto',
    'Speciale',
    'Stato'
];

async function main() {
    console.log("Inizio popolamento tipi Pokémon...");

    for (const typeName of types) {
        // crea i tipi, solo se non esistono già in db
        await prisma.type.upsert({
            where: { name: typeName },
            update: {},
            create: {
                name: typeName,
            },
        });
        console.log(`Tipo "${typeName}" creato.`);
    }

    console.log("Popolamento completato!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });