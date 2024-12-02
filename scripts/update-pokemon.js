const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updatePokemon = async () => {
    // Creazione dei tipi se non esistono
    const type1 = await prisma.type.upsert({
        where: { name: 'Grass' },
        update: {},
        create: { name: 'Grass' },
    });

    const type2 = await prisma.type.upsert({
        where: { name: 'Poison' },
        update: {},
        create: { name: 'Poison' },
    });

    console.log('Tipi creati o trovati:', type1, type2);

    // Creazione delle abilità se non esistono
    const firstAbility = await prisma.ability.upsert({
        where: { name: 'Erbaiuto' },
        update: {},
        create: { name: 'Erbaiuto' },
    });

    const hiddenAbility = await prisma.ability.upsert({
        where: { name: 'Clorofilla' },
        update: {},
        create: { name: 'Clorofilla' },
    });

    console.log('Abilità create o trovate:', firstAbility, hiddenAbility);

    // Aggiornamento di Bulbasaur
    const bulbasaur = await prisma.pokemon.update({
        where: { number: 1 }, // Usando il numero per trovare Bulbasaur
        data: {
            subtype: "Pokémon Seme", // Sottotipo
            height: 0.7, // Altezza in metri
            weight: 6.9, // Peso in kg
            description: "Un seme raro gli è stato piantato sulla schiena alla nascita. La pianta sboccia e cresce con lui.", // Descrizione
            hp: 45,
            atk: 49,
            def: 49,
            spAtk: 65,
            spDef: 65,
            speed: 45,
            firstAbility: { connect: { id: firstAbility.id } }, // Prima abilità (collegata)
            hiddenAbility: { connect: { id: hiddenAbility.id } }, // Abilità nascosta (collegata)
            types: {
                set: [ // Utilizziamo `set` per sovrascrivere i tipi esistenti
                    { id: type1.id },
                    { id: type2.id },
                ],
            },
        },
    });

    // Aggiornamento di Ivysaur
    const ivysaur = await prisma.pokemon.update({
        where: { number: 2 }, // Usando il numero per trovare Ivysaur
        data: {
            subtype: "Pokémon Seme", // Sottotipo
            height: 1.0, // Altezza in metri
            weight: 13.0, // Peso in kg
            description: "Quando gli cresce il bulbo sulla schiena, sembra non riuscire più a stare in posizione eretta.", // Descrizione
            hp: 60,
            atk: 62,
            def: 63,
            spAtk: 80,
            spDef: 80,
            speed: 60,
            firstAbility: { connect: { id: firstAbility.id } }, // Prima abilità (collegata)
            hiddenAbility: { connect: { id: hiddenAbility.id } }, // Abilità nascosta (collegata)
            types: {
                set: [
                    { id: type1.id },
                    { id: type2.id },
                ], // Aggiungiamo i tipi per Ivysaur
            },
        },
    });

    console.log('Bulbasaur aggiornato:', bulbasaur);
    console.log('Ivysaur aggiornato:', ivysaur);
};

updatePokemon()
    .catch((error) => {
        console.error("Errore durante l'aggiornamento dei Pokémon:", error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
