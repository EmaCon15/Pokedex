const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addLearnSetForPokemon = async () => {
    // Creazione dei tipi (se non esistono già)
    const grassType = await prisma.type.upsert({
        where: { name: 'Erba' },
        update: {},
        create: { name: 'Erba' },
    });

    const poisonType = await prisma.type.upsert({
        where: { name: 'Veleno' },
        update: {},
        create: { name: 'Veleno' },
    });

    const normalType = await prisma.type.upsert({
        where: { name: 'Normale' },
        update: {},
        create: { name: 'Normale' },
    });

    const physicalType = await prisma.type.upsert({
        where: { name: 'Fisico' },
        update: {},
        create: { name: 'Fisico' },
    });

    const statusType = await prisma.type.upsert({
        where: { name: 'Stato' },
        update: {},
        create: { name: 'Stato' },
    });

    const specialType = await prisma.type.upsert({
        where: { name: 'Speciale' },
        update: {},
        create: { name: 'Speciale' },
    });

    const dragonType = await prisma.type.upsert({
        where: { name: 'Drago' },
        update: {},
        create: { name: 'Drago' },
    });

    const fightType = await prisma.type.upsert({
        where: { name: 'Lotta' },
        update: {},
        create: { name: 'Lotta' },
    });

    const spectralType = await prisma.type.upsert({
        where: { name: 'Spettro' },
        update: {},
        create: { name: 'Spettro' },
    });

    const flyingType = await prisma.type.upsert({
        where: { name: 'Volante' },
        update: {},
        create: { name: 'Volante' },
    });

    const earthType = await prisma.type.upsert({
        where: { name: 'Terra' },
        update: {},
        create: { name: 'Terra' },
    });

    const rockType = await prisma.type.upsert({
        where: { name: 'Roccia' },
        update: {},
        create: { name: 'Roccia' },
    });

    const bugType = await prisma.type.upsert({
        where: { name: 'Coleottero' },
        update: {},
        create: { name: 'Coleottero' },
    });

    const steelType = await prisma.type.upsert({
        where: { name: 'Acciaio' },
        update: {},
        create: { name: 'Acciaio' },
    });

    const fireType = await prisma.type.upsert({
        where: { name: 'Fuoco' },
        update: {},
        create: { name: 'Fuoco' },
    });

    const waterType = await prisma.type.upsert({
        where: { name: 'Acqua' },
        update: {},
        create: { name: 'Acqua' },
    });

    const electroType = await prisma.type.upsert({
        where: { name: 'Elettro' },
        update: {},
        create: { name: 'Elettro' },
    });

    const psychicType = await prisma.type.upsert({
        where: { name: 'Psico' },
        update: {},
        create: { name: 'Psico' },
    });

    const iceType = await prisma.type.upsert({
        where: { name: 'Ghiaccio' },
        update: {},
        create: { name: 'Ghiaccio' },
    });

    const darkType = await prisma.type.upsert({
        where: { name: 'Buio' },
        update: {},
        create: { name: 'Buio' },
    });

    const fairyType = await prisma.type.upsert({
        where: { name: 'Folletto' },
        update: {},
        create: { name: 'Folletto' },
    });

    // Creazione delle mosse (se non esistono già)
    const azione = await prisma.ability.upsert({
        where: { name: 'Azione' },
        update: {},
        create: {
            name: 'Azione',
            description: 'Attacco fisico che colpisce il bersaglio investendolo con tutto il corpo.',
            power: 40,
            accuracy: 100,
            pp: 35,
            types: {
                connect: [
                    { id: normalType.id },
                    { id: physicalType.id },
                ]
            },
        },
    });

    const ruggito = await prisma.ability.upsert({
        where: { name: 'Ruggito' },
        update: {},
        create: {
            name: 'Ruggito',
            description: 'Distrae i nemici intorno con un ruggito potente e ne ridue l\'Attacco.',
            power: 0,
            accuracy: 100,
            pp: 40,
            types: {
                connect: [
                    { id: normalType.id },
                    { id: statusType.id },
                ]
            },
        },
    });

    const parassiseme = await prisma.ability.upsert({
        where: { name: 'Parassiseme' },
        update: {},
        create: {
            name: 'Parassiseme',
            description: 'Vengono piantati semi sul bersaglio. Questi sottraggono PS a ogni turno permettendo a chi la usa di curarsi.',
            power: 0,
            accuracy: 90,
            pp: 10,
            types: {
                connect: [
                    { id: grassType.id },
                    { id: statusType.id },
                ]
            },
        },
    });

    const frustata = await prisma.ability.upsert({
        where: { name: 'Frustata' },
        update: {},
        create: {
            name: 'Frustata',
            description: 'Infligge danni al bersaglio con liane sottili simili a fruste.',
            power: 0,
            accuracy: 100,
            pp: 40,
            types: {
                connect: [
                    { id: normalType.id },
                    { id: statusType.id },
                ]
            },
        },
    });

    const velenpolvere = await prisma.ability.upsert({
        where: { name: 'Velenpolvere' },
        update: {},
        create: {
            name: 'Velenpolvere',
            description: 'Investe il bersaglio con una nuvola di polvere tossica che avvelena.',
            power: 0,
            accuracy: 75,
            pp: 35,
            types: {
                connect: [
                    { id: poisonType.id },
                    { id: statusType.id },
                ]
            },
        },
    });

    const profumino = await prisma.ability.upsert({
        where: { name: 'Profumino' },
        update: {},
        create: {
            name: 'Profumino',
            description: 'Un dolce profumo che riduce di molto l\'elusione dei nemici intorno a chi la usa. Fuori dalla lotta attira i Pokémon selvatici.',
            power: 0,
            accuracy: 10,
            pp: 20,
            types: {
                connect: [
                    { id: normalType.id },
                    { id: statusType.id },
                ]
            },
        },
    });

    const foglielama = await prisma.ability.upsert({
        where: { name: 'Foglielama' },
        update: {},
        create: {
            name: 'Foglielama',
            description: 'Foglie taglienti sferzano i nemici intorno. Probabile brutto colpo.',
            power: 55,
            accuracy: 95,
            pp: 25,
            types: {
                connect: [
                    { id: grassType.id },
                    { id: physicalType.id },
                ]
            },
        },
    });

    const affannoseme = await prisma.ability.upsert({
        where: { name: 'Affannoseme' },
        update: {},
        create: {
            name: 'Affannoseme',
            description: 'Un seme che causa ansia viene piantato sul bersaglio. Ne muta l\'abilità in Insonnia e ne previene o rimuove il sonno.',
            power: 0,
            accuracy: 100,
            pp: 10,
            types: {
                connect: [
                    { id: grassType.id },
                    { id: statusType.id },
                ]
            },
        },
    });

    const creascita = await prisma.ability.upsert({
        where: { name: 'Crescita' },
        update: {},
        create: {
            name: 'Crescita',
            description: 'Provoca la crescita immediata del corpo e l\'aumento dell\'Attacco e dell\'Attacco Speciale di chi la usa.',
            power: 0,
            accuracy: 0,
            pp: 20,
            types: {
                connect: [
                    { id: normalType.id },
                    { id: statusType.id },
                ]
            },
        },
    });

    const semebomba = await prisma.ability.upsert({
        where: { name: 'Semebomba' },
        update: {},
        create: {
            name: 'Semebomba',
            description: 'Chi la usa emette una raffica di semi dal guscio duro che colpiscono il bersaglio dall\'alto.',
            power: 80,
            accuracy: 100,
            pp: 15,
            types: {
                connect: [
                    { id: grassType.id },
                    { id: physicalType.id },
                ]
            },
        },
    });

    const sintesi = await prisma.ability.upsert({
        where: { name: 'Sintesi' },
        update: {},
        create: {
            name: 'Sintesi',
            description: 'Chi la usa recupera PS. Il numero di PS recuperati dipende dalle condizioni atmosferiche.',
            power: 0,
            accuracy: 0,
            pp: 5,
            types: {
                connect: [
                    { id: grassType.id },
                    { id: statusType.id },
                ]
            },
        },
    });

    const sonnifero = await prisma.ability.upsert({
        where: { name: 'Sonnifero' },
        update: {},
        create: {
            name: 'Sonnifero',
            description: 'Investe il bersaglio con una grande nuvola di polvere soporifera che lo fa addormentare.',
            power: 0,
            accuracy: 75,
            pp: 15,
            types: {
                connect: [
                    { id: grassType.id },
                    { id: statusType.id },
                ]
            },
        },
    });

    const solarraggio = await prisma.ability.upsert({
        where: { name: 'Solarraggio' },
        update: {},
        create: {
            name: 'Solarraggio',
            description: 'Chi la usa assorbe luce al primo turno per proiettare un raggio intenso al turno successivo.',
            power: 120,
            accuracy: 100,
            pp: 10,
            types: {
                connect: [
                    { id: grassType.id },
                    { id: specialType.id },
                ]
            },
        },
    });

    const danzaspada = await prisma.ability.upsert({
        where: { name: 'Danzaspada' },
        update: {},
        create: {
            name: 'Danzaspada',
            description: 'Danza frenetica che incrementa lo spirito combattivo. Chi la usa aumenta di molto il suo Attacco.',
            power: 0,
            accuracy: 0,
            pp: 20,
            types: {
                connect: [
                    { id: normalType.id },
                    { id: statusType.id },
                ]
            },
        },
    });

    const corposcontro = await prisma.ability.upsert({
        where: { name: 'Corposcontro' },
        update: {},
        create: {
            name: 'Corposcontro',
            description: 'Chi la usa carica il bersaglio con tutto il corpo. Può causarne anche la paralisi.',
            power: 85,
            accuracy: 100,
            pp: 15,
            types: {
                connect: [
                    { id: normalType.id },
                    { id: physicalType.id },
                ]
            },
        },
    });

    const sostituto = await prisma.ability.upsert({
        where: { name: 'Sostituto' },
        update: {},
        create: {
            name: 'Sostituto',
            description: 'Chi la usa crea una copia di se stesso usando alcuni PS. La copia serve come esca per il nemico.',
            power: 0,
            accuracy: 0,
            pp: 10,
            types: {
                connect: [
                    { id: normalType.id },
                    { id: statusType.id },
                ]
            },
        },
    });

    const fangobomba = await prisma.ability.upsert({
        where: { name: 'Fangobomba' },
        update: {},
        create: {
            name: 'Fangobomba',
            description: 'Lancio di fango malsano che arreca danno al bersaglio. Può anche avvelenarlo.',
            power: 90,
            accuracy: 100,
            pp: 10,
            types: {
                connect: [
                    { id: poisonType.id },
                    { id: specialType.id },
                ]
            },
        },
    });

    const oltraggio = await prisma.ability.upsert({
        where: { name: 'Oltraggio' },
        update: {},
        create: {
            name: 'Oltraggio',
            description: 'Chi la usa sfoga la sua ira e attacca il nemico per due o tre turni prima di essere lasciato in preda alla confusione.',
            power: 120,
            accuracy: 100,
            pp: 10,
            types: {
                connect: [
                    { id: dragonType.id },
                    { id: physicalType.id },
                ]
            },
        },
    });

    const resistenza = await prisma.ability.upsert({
        where: { name: 'Resistenza' },
        update: {},
        create: {
            name: 'Resistenza',
            description: 'Chi la usa resta con un PS anche se subisce un colpo da KO in quel turno. Usata in successione può fallire.',
            power: 0,
            accuracy: 0,
            pp: 10,
            types: {
                connect: [
                    { id: normalType.id },
                    { id: statusType.id },
                ]
            },
        },
    });

    const sonnolalia = await prisma.ability.upsert({
        where: { name: 'Sonnolalia' },
        update: {},
        create: {
            name: 'Sonnolalia',
            description: 'Chi la usa sfodera a caso una delle proprie mosse mentre sta dormendo.',
            power: 0,
            accuracy: 0,
            pp: 10,
            types: {
                connect: [
                    { id: normalType.id },
                    { id: statusType.id },
                ]
            },
        },
    });

    const energipalla = await prisma.ability.upsert({
        where: { name: 'Energipalla' },
        update: {},
        create: {
            name: 'Energipalla',
            description: 'Chi la usa attinge energia dalla natura e la scaglia contro il bersaglio. Può anche ridurne la Difesa Speciale.',
            power: 90,
            accuracy: 100,
            pp: 10,
            types: {
                connect: [
                    { id: grassType.id },
                    { id: specialType.id },
                ]
            },
        },
    });

    const laccioerboso = await prisma.ability.upsert({
        where: { name: 'Laccioerboso' },
        update: {},
        create: {
            name: 'Laccioerboso',
            description: 'Chi la usa intrappola il bersaglio con l\'erba e lo fa cadere. Danneggia maggiormente i Pokémon più pesanti.',
            power: 0,
            accuracy: 100,
            pp: 20,
            types: {
                connect: [
                    { id: grassType.id },
                    { id: specialType.id },
                ]
            },
        },
    });

    const cuordileone = await prisma.ability.upsert({
        where: { name: 'Cuordileone' },
        update: {},
        create: {
            name: 'Cuordileone',
            description: 'Chi la usa si tira su di morale, aumentando il proprio Attacco e l’Attacco Speciale.',
            power: 0,
            accuracy: 0,
            pp: 30,
            types: {
                connect: [
                    { id: normalType.id },
                    { id: statusType.id },
                ]
            },
        },
    });

    const taglio = await prisma.ability.upsert({
        where: { name: 'Taglio' },
        update: {},
        create: {
            name: 'Taglio',
            description: 'Attacca il bersaglio con artigli o falci affilate. Fuori dalla lotta si usa per tagliare piccoli alberi.',
            power: 50,
            accuracy: 95,
            pp: 30,
            types: {
                connect: [
                    { id: normalType.id },
                    { id: physicalType.id },
                ]
            },
        },
    });

    const forza = await prisma.ability.upsert({
        where: { name: 'Forza' },
        update: {},
        create: {
            name: 'Forza',
            description: 'Colpisce il bersaglio con un\'enorme energia. Fuori dalla lotta si usa per spostare i massi.',
            power: 80,
            accuracy: 100,
            pp: 15,
            types: {
                connect: [
                    { id: normalType.id },
                    { id: physicalType.id },
                ]
            },
        },
    });

    const flash = await prisma.ability.upsert({
        where: { name: 'Flash' },
        update: {},
        create: {
            name: 'Flash',
            description: 'Investe il bersaglio con una luce abbagliante che ne riduce la precisione.',
            power: 0,
            accuracy: 100,
            pp: 20,
            types: {
                connect: [
                    { id: normalType.id },
                    { id: statusType.id },
                ]
            },
        },
    });

    const spaccaroccia = await prisma.ability.upsert({
        where: { name: 'Spaccaroccia' },
        update: {},
        create: {
            name: 'Spaccaroccia',
            description: 'Chi la usa colpisce il bersaglio con un pugno in grado di frantumare anche la roccia. Può anche ridurne la Difesa.',
            power: 40,
            accuracy: 100,
            pp: 15,
            types: {
                connect: [
                    { id: fightType.id },
                    { id: physicalType.id },
                ]
            },
        },
    });

    const bottintesta = await prisma.ability.upsert({
        where: { name: 'Bottintesta' },
        update: {},
        create: {
            name: 'Bottintesta',
            description: 'Chi la usa si lancia diritto di testa contro il bersaglio. Può anche farlo tentennare.',
            power: 70,
            accuracy: 100,
            pp: 15,
            types: {
                connect: [
                    { id: normalType.id },
                    { id: physicalType.id },
                ]
            },
        },
    });

    const maledizione = await prisma.ability.upsert({
        where: { name: 'Maledizione' },
        update: {},
        create: {
            name: 'Maledizione',
            description: '',
            power: 0,
            accuracy: 0,
            pp: 0,
            types: {
                connect: [
                    { id:  },
                    { id:  },
                ]
            },
        },
    });

    // Aggiungere il learn set a Bulbasaur
    const bulbasaurLearnSet = [
        { level: 1, tmTr: null, tutor: false, breeding: false, ability: azione },
        { level: 1, tmTr: null, tutor: false, breeding: false, ability: ruggito },
        { level: 7, tmTr: null, tutor: false, breeding: false, ability: parassiseme },
        { level: 13, tmTr: null, tutor: false, breeding: false, ability: frustata },
        { level: 20, tmTr: null, tutor: false, breeding: false, ability: velenpolvere },
        { level: 25, tmTr: null, tutor: false, breeding: false, ability: profumino },
        { level: 27, tmTr: null, tutor: false, breeding: false, ability: foglielama },
        { level: 31, tmTr: null, tutor: false, breeding: false, ability: affannoseme },
        { level: 34, tmTr: null, tutor: false, breeding: false, ability: creascita },
        { level: 37, tmTr: null, tutor: false, breeding: false, ability: semebomba },
        { level: 39, tmTr: null, tutor: false, breeding: false, ability: sintesi },
        { level: 41, tmTr: null, tutor: false, breeding: false, ability: sonnifero },
        { level: 48, tmTr: null, tutor: false, breeding: false, ability: solarraggio },
        { level: null, tmTr: 'DT00', tutor: false, breeding: false, ability: danzaspada },
        { level: null, tmTr: 'DT01', tutor: false, breeding: false, ability: corposcontro },
        { level: null, tmTr: 'DT20', tutor: false, breeding: false, ability: sostituto },
        { level: null, tmTr: 'DT22', tutor: false, breeding: false, ability: fangobomba },
        { level: null, tmTr: 'DT24', tutor: false, breeding: false, ability: oltraggio },
        { level: null, tmTr: 'DT26', tutor: false, breeding: false, ability: resistenza },
        { level: null, tmTr: 'DT27', tutor: false, breeding: false, ability: sonnolalia },
        { level: null, tmTr: 'DT65', tutor: false, breeding: false, ability: energipalla },
        { level: null, tmTr: 'DT77', tutor: false, breeding: false, ability: laccioerboso },
        { level: null, tmTr: 'DT85', tutor: false, breeding: false, ability: cuordileone },
        { level: null, tmTr: 'MN01', tutor: false, breeding: false, ability: taglio },
        { level: null, tmTr: 'MN04', tutor: false, breeding: false, ability: forza },
        { level: null, tmTr: 'MN05', tutor: false, breeding: false, ability: flash },
        { level: null, tmTr: 'MN06', tutor: false, breeding: false, ability: spaccaroccia },
        { level: null, tmTr: 'MT02', tutor: false, breeding: false, ability: bottintesta },
    ];

    await Promise.all(
        bulbasaurLearnSet.map((move) =>
            prisma.learnSet.create({
                data: {
                    level: move.level,
                    tmTr: move.tmTr,
                    tutor: move.tutor,
                    breeding: move.breeding,
                    pokemonId: 1, // ID di Bulbasaur
                    abilityId: move.ability.id,
                },
            })
        )
    );

    console.log('Learn Set per Bulbasaur aggiunto.');

    // Aggiungere il learn set a Ivysaur
    const ivysaurLearnSet = [
        { level: 1, tmTr: null, tutor: false, breeding: false, ability: azione },
        { level: 1, tmTr: null, tutor: false, breeding: false, ability: parassiseme },
        { level: 1, tmTr: null, tutor: false, breeding: false, ability: ruggito },
        { level: 13, tmTr: null, tutor: false, breeding: false, ability: frustata },
        { level: 22, tmTr: null, tutor: false, breeding: false, ability: velenpolvere },
        { level: 29, tmTr: null, tutor: false, breeding: false, ability: profumino },
        { level: 30, tmTr: null, tutor: false, breeding: false, ability: foglielama },
        { level: 36, tmTr: null, tutor: false, breeding: false, ability: affannoseme },
        { level: 38, tmTr: null, tutor: false, breeding: false, ability: creascita },
        { level: 46, tmTr: null, tutor: false, breeding: false, ability: sonnifero },
        { level: 47, tmTr: null, tutor: false, breeding: false, ability: sintesi },
        { level: 54, tmTr: null, tutor: false, breeding: false, ability: solarraggio },
    ];

    await Promise.all(
        ivysaurLearnSet.map((move) =>
            prisma.learnSet.create({
                data: {
                    level: move.level,
                    tmTr: move.tmTr,
                    tutor: move.tutor,
                    breeding: move.breeding,
                    pokemonId: 2, // ID di Ivysaur
                    abilityId: move.ability.id,
                },
            })
        )
    );

    console.log('Learn Set per Ivysaur aggiunto.');
};

addLearnSetForPokemon()
    .catch((error) => {
        console.error("Errore durante l'aggiunta delle mosse apprese:", error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
