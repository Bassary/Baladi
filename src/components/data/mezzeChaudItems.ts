export interface MenuItem {
    id: number;
    name: string;
    price: string;
    imageSource: string;
    imageAlt: string;
    isVegan?: boolean;
    isVegetarien?: boolean;
}

export const mezzeChaudItems: MenuItem[] = [
    {
        id: 1,
        name: 'Hommos bel Lahmé',
        price: '10,90€',
        imageSource: '/dishes/hommos-bel-lahme.png',
        imageAlt: 'photo hommos bel lahmé',
        isVegan: false,
        isVegetarien: false, 

    },

    {
        id: 2,
        name: 'Balila (salade de pois chiche)',
        price: '7,50€',
        imageSource: '/dishes/balila.png',
        imageAlt: 'photo balila, salde de pois chiche',
        isVegan: true,
        isVegetarien: false, 

    },
    {
        id: 3,
        name: 'Falafel',
        price: '6,90€',
        imageSource: '/dishes/falafel.png',
        imageAlt: 'photo falafel, crocuqette de pois chiche frit',
        isVegan: true,
        isVegetarien: false, 

    },
    {
        id: 4,
        name: 'Foul Moudamas (Salade de fèves)',
        price: '7,50€',
        imageSource: '/dishes/foul-moudamas.png',
        imageAlt: 'photo foul moudamas, salade de fèves',
        isVegan: true,
        isVegetarien: false, 

    },
    {
        id: 5,
        name: 'Kebbé Boulettes',
        price: '6,90€',
        imageSource: '/dishes/kebbe-boulette.png',
        imageAlt: 'photo kebbé, boullette de viande de boeuf et blé concassé',
        isVegan: false,
        isVegetarien: false, 

    },
    {
        id: 6,
        name: 'Samboussek viande',
        price: '6,90€',
        imageSource: '/dishes/samboussek.png',
        imageAlt: 'photo samboussek à la viande de boeuf, chausson fouré à la viande',
        isVegan: false,
        isVegetarien: false, 

    },
]