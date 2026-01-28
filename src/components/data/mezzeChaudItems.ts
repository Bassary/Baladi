export interface MenuItem {
    id: number;
    name: string;
    price: string;
    // imageSource: string;
    // imageAlt: string;
    subtitle?: string;
    isVegan?: boolean;
    isVegetarien?: boolean;
}

export const mezzeChaudItems: MenuItem[] = [
    {
        id: 1,
        name: 'Soupe « Baladi »',
        subtitle: 'Faite selon la saison',
        price: '6,90€',
        // imageSource: '/dishes/hommos-bel-lahme.png',
        // imageAlt: 'photo hommos bel lahmé',
        isVegan: false,
        isVegetarien: false, 

    },

    {
        id: 2,
        name: 'Hommos bel lahmé',
        subtitle: 'Purée de pois chiches garnie d’une poignée de viande d’agneau',
        price: '7,50€',
        // imageSource: '/dishes/balila.png',
        // imageAlt: 'photo balila, salde de pois chiche',
        isVegan: false,
        isVegetarien: false, 

    },
    {
        id: 3,
        name: 'Balila (salade de pois chiches)',
        price: '7,50€',
        subtitle: 'Pois chiches cuits, ail, citron, huile d’olive',
        // imageSource: '/dishes/falafel.png',
        // imageAlt: 'photo falafel, crocuqette de pois chiche frit',
        isVegan: true,
        isVegetarien: false, 

    },
    {
        id: 4,
        name: 'Falafels',
        subtitle: 'Croquettes de fèves et pois chiches, sauce Tarator',
        price: '6,90€',
        // imageSource: '/dishes/foul-moudamas.png',
        // imageAlt: 'photo foul moudamas, salade de fèves',
        isVegan: true,
        isVegetarien: false, 

    },
    {
        id: 5,
        name: 'Foul moudamas (salade de fèves)',
        subtitle: 'Fèves cuites, ail, citron et huile d’olive',
        price: '7,50€',
        // imageSource: '/dishes/kebbe-boulette.png',
        // imageAlt: 'photo kebbé, boullette de viande de boeuf et blé concassé',
        isVegan: true,
        isVegetarien: false, 

    },
    {
        id: 6,
        name: 'Kébé Boulettes',
        subtitle: 'Boulettes de blé concassé, farcies à la viande hachée et pignons de pin',
        price: '7,50€',
        // imageSource: '/dishes/samboussek.png',
        // imageAlt: 'photo samboussek à la viande de boeuf, chausson fouré à la viande',
        isVegan: false,
        isVegetarien: false, 

    },
    {
        id: 7,
        name: 'Samboussek à la viande',
        subtitle: 'Feuilletés à la viande et pignons de pin',
        price: '6,90€',
        isVegan: false,
        isVegetarien: false, 

    },
    {
        id: 8,
        name: 'Samboussek au fromage salé',
        subtitle: 'Feuilletés au fromage salé',
        price: '6,90€',
        isVegan: false,
        isVegetarien: true, 

    },
    {
        id: 9,
        name: 'Fatayer aux épinards',
        subtitle: 'Feuilletés aux épinards citronnés',
        price: '6,90€',
        isVegan: true,
        isVegetarien: false, 

    },
    {
        id: 10,
        name: 'Rikakat',
        subtitle: 'Feuilles de brick fourrées au fromage',
        price: '6,90€',
        isVegan: false,
        isVegetarien: true, 

    },
    {
        id: 11,
        name: 'Foie de Volaille',
        subtitle: 'Foie de volaille poêlé à la mélasse de grenade, tomates, menthe',
        price: '7,90€',
        isVegan: false,
        isVegetarien: false, 

    },
    {
        id: 12,
        name: 'Jawaneh',
        subtitle: 'Ailerons de poulet grillés, marinés à l’ail, coriandre, citron',
        price: '6,90€',
        isVegan: false,
        isVegetarien: false, 

    },
    {
        id: 13,
        name: 'Arayess',
        subtitle: 'Galette de pain grillé garnie de viande hachée, persil, oignons',
        price: '8,90€',
        isVegan: false,
        isVegetarien: false, 

    },
    {
        id: 14,
        name: 'Kalleje',
        subtitle: 'Galette de pain grillé garnie de fromage, tomates, menthe',
        price: '8,90€',
        isVegan: false,
        isVegetarien: true, 

    },
]