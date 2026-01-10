export interface MenuItem {
    id: number;
    name: string;
    subtitle?: string;
    price: string;
    imageSource: string;
    imageAlt: string;
    isVegan?: boolean;
    isVegetarien?: boolean;
}

export const platGrilladeItems: MenuItem[] = [
    {
        id: 1,
        name: 'Kafta Grillé',
        price: '14,90€',
        imageSource: '/dishes/kafta-grille.png',
        imageAlt: `photo d'un kafta grillé, brochette de viande de boeuf haché aux oigons et persille`,
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 2,
        name: 'Chiche Taouk',
        price: '14,90€',
        imageSource: '/dishes/chiche-taouk.png',
        imageAlt: `photo d'un chiche taouck, brochette de viande de poulet mariné`,
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 3,
        name: 'Brochette de Boeuf',
        subtitle: 'ou Agneau',
        price: '17,90€',
        imageSource: '/dishes/brochette.png',
        imageAlt: `photo d'une brochette de viande d'agneaude ou de boeuf`,
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 4,
        name: 'Griallade Royale Mixte',
        subtitle: '',
        price: '19,90€',
        imageSource: '/dishes/grillade-royale-mixte.png',
        imageAlt: `photo d'une brochette de viande d'agneau, de boeuf et de poulet`,
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 5,
        name: `Tartare de Boeuf`,
        subtitle: '(avec Fattouche)',
        price: '18,90€',
        imageSource: '/dishes/tartar-de-boeuf.png',
        imageAlt: `photo d'un tartar de boeuf`,
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 6,
        name: 'Farrouj Méchoui',
        price: '18,00€',
        imageSource: '/dishes/farrouj-mechoui.png',
        imageAlt: `photo d'un farrouj-mechoui`,
        isVegan: false,
        isVegetarien: false,
    },
]