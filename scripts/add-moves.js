const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Elenco delle mosse con i loro dettagli
const moves = [
    {
        name: 'Abbagliante',
        description: 'Chi la usa scatena un\'esplosione abbagliante che può anche ridurre la Difesa Speciale del Pokémon colpito.',
        power: 70,
        accuracy: 100,
        pp: 5,
        types: ['Psico', 'Speciale'],
    },
    {
        name: 'Abbattimento',
        description: 'Chi la usa lancia una pietra o un proiettile. Può colpire anche un bersaglio in volo e farlo cadere.',
        power: 50,
        accuracy: 100,
        pp: 15,
        types: ['Roccia', 'Fisico'],
    },
    {
        name: 'Abbraccio Spettrale',
        description: 'Grazie al Potere Z, chi la usa intrappola il bersaglio in una morsa generata dal proprio rancore. La potenza varia a seconda della mossa su cui si basa.',
        power: 0,
        accuracy: 0,
        pp: 1,
        types: ['Spettro', 'Fisico'],
    },
    {
        name: 'Abisso',
        description: 'Chi la usa crea una spaccatura nel terreno e cerca di gettarvici dentro il bersaglio. Se va a segno, il Pokémon colpito va KO.',
        power: 0,
        accuracy: 30,
        pp: 5,
        types: ['Terra', 'Fisico'],
    },
    {
        name: 'Accumulo',
        description: 'Chi la usa accumula energia aumentando la Difesa e la Difesa Speciale. Si può utilizzare tre volte.',
        power: 0,
        accuracy: 0,
        pp: 20,
        types: ['Normale', 'Stato'],
    },
    {
        name: 'Acidiluvio Corrosivo',
        description: 'Chi la usa sfrutta il Potere Z per creare una palude velenosa che sommerge il bersaglio. La potenza varia a seconda della mossa su cui si basa.',
        power: 0,
        accuracy: 0,
        pp: 1,
        types: ['Veleno', 'Fisico'],
    },
    {
        name: 'Acido',
        description: 'Colpisce i nemici intorno spruzzando un acido corrosivo. Può anche ridurne la Difesa Speciale.',
        power: 40,
        accuracy: 100,
        pp: 30,
        types: ['Veleno', 'Speciale'],
    },
    {
        name: 'Acido Malico',
        description: 'Chi la usa attacca il bersaglio con un liquido acido ricavato da mele aspre riducendone la Difesa Speciale.',
        power: 80,
        accuracy: 100,
        pp: 10,
        types: ['Erba', 'Speciale'],
    },
    {
        name: 'Acidobomba',
        description: 'Chi la usa attacca il bersaglio con un acido altamente corrosivo. Il fluido riduce di molto la Difesa Speciale del bersaglio.',
        power: 40,
        accuracy: 100,
        pp: 20,
        types: ['Veleno', 'Speciale'],
    },
    {
        name: 'Acquadisale',
        description: 'Se i PS del bersaglio sono scesi a metà o meno, questa mossa colpirà con il doppio della potenza.',
        power: 65,
        accuracy: 100,
        pp: 10,
        types: ['Acqua', 'Speciale'],
    },
    {
        name: 'Acquagetto',
        description: 'Chi la usa colpisce sempre per primo e a una tale velocità da rendersi quasi invisibile.',
        power: 40,
        accuracy: 100,
        pp: 20,
        types: ['Acqua', 'Fisico'],
    },
    {
        name: 'Acqualame',
        description: 'Chi la usa attacca sempre per primo, colpendo il bersaglio con uno shuriken di muco da due a cinque volte di fila.',
        power: 15,
        accuracy: 100,
        pp: 20,
        types: ['Acqua', 'Speciale'],
    },
    {
        name: 'Acquanello',
        description: 'Chi la usa si avvolge in un velo d\'acqua. Recupera alcuni PS a ogni turno.',
        power: 0,
        accuracy: 0,
        pp: 20,
        types: ['Acqua', 'Stato'],
    },
    {
        name: 'Acquapatto',
        description: 'Attacca il bersaglio con una colonna d\'acqua. Se usata con Fiammapatto, gli effetti aumentano e appare un arcobaleno.',
        power: 80,
        accuracy: 100,
        pp: 10,
        types: ['Acqua', 'Speciale'],
    },
    {
        name: 'Acrobazia',
        description: 'Attacca rapidamente il bersaglio. Se chi la usa non ha uno strumento, infligge al nemico grossi danni.',
        power: 55,
        accuracy: 100,
        pp: 15,
        types: ['Volante', 'Fisico'],
    },
    {
        name: 'Acupressione',
        description: 'Chi la usa esercita pressione su alcuni punti nevralgici e aumenta di molto una statistica a caso.',
        power: 0,
        accuracy: 0,
        pp: 30,
        types: ['Normale', 'Stato'],
    },
    {
        name: 'Adesso Faccio sul Serio',
        description: 'Grazie al Potere Z, Snorlax tira fuori la grinta e, muovendo energicamente il suo enorme corpo, attacca il bersaglio con tutta la sua forza.',
        power: 210,
        accuracy: 0,
        pp: 1,
        types: ['Normale', 'Fisico'],
    },
    {
        name: 'Adulazione',
        description: 'Adula il bersaglio e lo confonde, ma ne aumenta l\'Attacco Speciale.',
        power: 0,
        accuracy: 100,
        pp: 15,
        types: ['Buio', 'Stato'],
    },
    {
        name: 'Aerasoio',
        description: 'Chi la usa provoca un vento tagliente che sferza i nemici intorno. Probabile brutto colpo.',
        power: 60,
        accuracy: 95,
        pp: 25,
        types: ['Volante', 'Speciale'],
    },
    {
        name: 'Aeroassalto',
        description: 'Chi la usa attacca il bersaglio a grande velocità. Questa mossa è infallibile.',
        power: 60,
        accuracy: 0,
        pp: 20,
        types: ['Volante', 'Fisico'],
    },
    {
        name: 'Aeroattacco',
        description: 'Attacco in due turni e probabile brutto colpo. Può anche far tentennare il bersaglio.',
        power: 140,
        accuracy: 90,
        pp: 5,
        types: ['Volante', 'Fisico'],
    },
    {
        name: 'Aerocolpo',
        description: 'Colpisce il bersaglio con un vortice d\'aria per danneggiarlo. Probabile brutto colpo.',
        power: 100,
        accuracy: 95,
        pp: 5,
        types: [''],
    },
    {
        name: 'Affannoseme',
        description: 'Un seme che causa ansia viene piantato sul bersaglio. Ne muta l\'abilità in Insonnia e ne previene o rimuove il sonno.',
        power: 0,
        accuracy: 100,
        pp: 10,
        types: ['Erba', 'Stato'],
    },
    {
        name: "Attacco Rapido",
        description: "Colpisce velocemente il nemico.",
        power: 40,
        accuracy: 100,
        pp: 30,
        types: ["Normale"],
    },
    {
        name: 'Azione',
        description: 'Attacco fisico che colpisce il bersaglio investendolo con tutto il corpo.',
        power: 40,
        accuracy: 100,
        pp: 35,
        types: ['Normale', 'Fisico'],
    },
    {
        name: 'Bottintesta',
        description: 'Chi la usa si lancia diritto di testa contro il bersaglio. Può anche farlo tentennare.',
        power: 70,
        accuracy: 100,
        pp: 15,
        types: ['Normale', 'Fisico'],
    },
    {
        name: 'Corposcontro',
        description: 'Chi la usa carica il bersaglio con tutto il corpo. Può causarne anche la paralisi.',
        power: 85,
        accuracy: 100,
        pp: 15,
        types: ['Normale', 'Fisico'],
    },
    {
        name: 'Crescita',
        description: 'Provoca la crescita immediata del corpo e l\'aumento dell\'Attacco e dell\'Attacco Speciale di chi la usa.',
        power: 0,
        accuracy: 0,
        pp: 20,
        types: ['Normale', 'Stato'],
    },
    {
        name: 'Cuordileone',
        description: 'Chi la usa si tira su di morale, aumentando il proprio Attacco e l’Attacco Speciale.',
        power: 0,
        accuracy: 0,
        pp: 30,
        types: ['Normale', 'Stato'],
    },
    {
        name: 'Danzaspada',
        description: 'Danza frenetica che incrementa lo spirito combattivo. Chi la usa aumenta di molto il suo Attacco.',
        power: 0,
        accuracy: 0,
        pp: 20,
        types: ['Normale', 'Stato'],
    },
    {
        name: 'Energipalla',
        description: 'Chi la usa attinge energia dalla natura e la scaglia contro il bersaglio. Può anche ridurne la Difesa Speciale.',
        power: 90,
        accuracy: 100,
        pp: 10,
        types: ['Erba', 'Speciale'],
    },
    {
        name: 'Fangobomba',
        description: 'Lancio di fango malsano che arreca danno al bersaglio. Può anche avvelenarlo.',
        power: 90,
        accuracy: 100,
        pp: 10,
        types: ['Veleno', 'Speciale'],
    },
    {
        name: 'Flash',
        description: 'Investe il bersaglio con una luce abbagliante che ne riduce la precisione.',
        power: 0,
        accuracy: 100,
        pp: 20,
        types: ['Normale', 'Stato'],
    },
    {
        name: 'Foglielama',
        description: 'Foglie taglienti sferzano i nemici intorno. Probabile brutto colpo.',
        power: 55,
        accuracy: 95,
        pp: 25,
        types: ['Erba', 'Fisico'],
    },
    {
        name: 'Forza',
        description: 'Colpisce il bersaglio con un\'enorme energia. Fuori dalla lotta si usa per spostare i massi.',
        power: 80,
        accuracy: 100,
        pp: 15,
        types: ['Normale', 'Fisico'],
    },
    {
        name: 'Frustata',
        description: 'Infligge danni al bersaglio con liane sottili simili a fruste.',
        power: 0,
        accuracy: 100,
        pp: 40,
        types: ['Normale', 'Stato'],
    },
    {
        name: 'Laccioerboso',
        description: 'Chi la usa intrappola il bersaglio con l\'erba e lo fa cadere. Danneggia maggiormente i Pokémon più pesanti.',
        power: 0,
        accuracy: 100,
        pp: 20,
        types: ['Erba', 'Speciale'],
    },
    {
        name: "Lanciafiamme",
        description: "Una potente fiammata che può bruciare il nemico.",
        power: 90,
        accuracy: 100,
        pp: 15,
        types: ["Fuoco"],
    },
    {
        name: "Idropompa",
        description: "Un getto d'acqua ad alta pressione.",
        power: 110,
        accuracy: 80,
        pp: 5,
        types: ["Acqua"],
    },
    {
        name: 'Oltraggio',
        description: 'Chi la usa sfoga la sua ira e attacca il nemico per due o tre turni prima di essere lasciato in preda alla confusione.',
        power: 120,
        accuracy: 100,
        pp: 10,
        types: ['Drago', 'Fisico'],
    },
    {
        name: 'Parassiseme',
        description: 'Vengono piantati semi sul bersaglio. Questi sottraggono PS a ogni turno permettendo a chi la usa di curarsi.',
        power: 0,
        accuracy: 90,
        pp: 10,
        types: ['Erba', 'Stato'],
    },
    {
        name: 'Profumino',
        description: 'Un dolce profumo che riduce di molto l\'elusione dei nemici intorno a chi la usa. Fuori dalla lotta attira i Pokémon selvatici.',
        power: 0,
        accuracy: 10,
        pp: 20,
        types: ['Normale', 'Stato'],
    },
    {
        name: 'Resistenza',
        description: 'Chi la usa resta con un PS anche se subisce un colpo da KO in quel turno. Usata in successione può fallire.',
        power: 0,
        accuracy: 0,
        pp: 10,
        types: ['Normale', 'Stato'],
    },
    {
        name: 'Ruggito',
        description: 'Distrae i nemici intorno con un ruggito potente e ne ridue l\'Attacco.',
        power: 0,
        accuracy: 100,
        pp: 40,
        types: ['Normale', 'Stato',],
    },
    {
        name: 'Semebomba',
        description: 'Chi la usa emette una raffica di semi dal guscio duro che colpiscono il bersaglio dall\'alto.',
        power: 80,
        accuracy: 100,
        pp: 15,
        types: ['Erba', 'Fisico'],
    },
    {
        name: 'Sintesi',
        description: 'Chi la usa recupera PS. Il numero di PS recuperati dipende dalle condizioni atmosferiche.',
        power: 0,
        accuracy: 0,
        pp: 5,
        types: ['Erba', 'Stato'],
    },
    {
        name: 'Solarraggio',
        description: 'Chi la usa assorbe luce al primo turno per proiettare un raggio intenso al turno successivo.',
        power: 120,
        accuracy: 100,
        pp: 10,
        types: ['Erba', 'Speciale'],
    },
    {
        name: 'Sonnifero',
        description: 'Investe il bersaglio con una grande nuvola di polvere soporifera che lo fa addormentare.',
        power: 0,
        accuracy: 75,
        pp: 15,
        types: ['Erba', 'Stato'],
    },
    {
        name: 'Sonnolalia',
        description: 'Chi la usa sfodera a caso una delle proprie mosse mentre sta dormendo.',
        power: 0,
        accuracy: 0,
        pp: 10,
        types: ['Normale', 'Stato'],
    },
    {
        name: 'Sostituto',
        description: 'Chi la usa crea una copia di se stesso usando alcuni PS. La copia serve come esca per il nemico.',
        power: 0,
        accuracy: 0,
        pp: 10,
        types: ['Normale', 'Stato'],
    },
    {
        name: 'Spaccaroccia',
        description: 'Chi la usa colpisce il bersaglio con un pugno in grado di frantumare anche la roccia. Può anche ridurne la Difesa.',
        power: 40,
        accuracy: 100,
        pp: 15,
        types: ['Lotta', 'Fisico'],
    },
    {
        name: 'Taglio',
        description: 'Attacca il bersaglio con artigli o falci affilate. Fuori dalla lotta si usa per tagliare piccoli alberi.',
        power: 50,
        accuracy: 95,
        pp: 30,
        types: ['Normale', 'Fisico'],
    },
    {
        name: 'Velenpolvere',
        description: 'Investe il bersaglio con una nuvola di polvere tossica che avvelena.',
        power: 0,
        accuracy: 75,
        pp: 35,
        types: ['Veleno', 'Stato'],
    }
    // Aggiungi qui altre mosse...
];