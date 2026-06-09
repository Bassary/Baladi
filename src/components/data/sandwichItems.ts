import MenuItem from "../MenuItem";

export interface MenuItem {
    id: number,
    name: string,
    subtitle?: string,
    price: string,
    isVegan: boolean,
    isVegetarien: boolean,
}

export const sanswichItems: MenuItem[] = [
    {
        id: 1,
        name: 'Falafel',
        subtitle: 'Croquette de fève et pois chiches, sauce Tarator',
        price: '6,90€',
        isVegan: true,
        isVegetarien: false,
    },
    {
        id: 2,
        name: 'Chiche Taouk',
        subtitle: 'Poulet mariné au citron et à l’ail',
        price: '6,90€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 3,
        name: 'Kafta',
        subtitle: 'Viande hachée, persil, oignons',
        price: '6,90€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 4,
        name: 'Halloumi',
        subtitle: 'Fromage salé grillé',
        price: '7,50€',
        isVegan: false,
        isVegetarien: true,
    },
    {
        id: 5,
        name: 'Kébbé Boulettes',
        subtitle: 'Boulettes de blé concassé, farcies à la viande hachée et pignons de pin',
        price: '6,90€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 6,
        name: 'Brochette Agneau ou Boeuf',
        price: '8,50€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 7,
        name: 'Foie de Volaille',
        subtitle: 'Foie de volaille poêlé à la mélasse de grenade, tomates, menthe',
        price: '6,90€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 8,
        name: 'Bastorma',
        subtitle: 'Viande de boeuf séché',
        price: '7,00€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 9,
        name: 'Labné',
        subtitle: 'Fromage blanc fait maison, huile d’olive, menthe sèche',
        price: '6,00€',
        isVegan: false,
        isVegetarien: true,
    },
]