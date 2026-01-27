import MenuItem from "../MenuItem";

export interface MenuItem {
    id: number;
    name: string;
    subtitle?: string;
    price: string;
    // imageSource?: string;
    // imageAlt?: string;
    isVegan?: boolean;
    isVegetarien?: boolean;
}
export const platGrilladeItems: MenuItem[] = [
    {
        id: 1,
        name: `Kafta Grillé`,
        subtitle: '2 brochettes de viande hachée, persil, oignons',
        price: '14,90€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 2,
        name: `Chiche Taouk`,
        subtitle: '2 brochettes de blanc de poulet mariné au citron et à l’ail',
        price: '14,90€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 3,
        name: `Brochette de Bœuf ou d’Agneau`,
        subtitle: 'Brochette de bœuf ou d’agneau',
        price: '17,90€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 4,
        name: `Grillade Royale Mixte`,
        subtitle: 'Assortiment de trois brochettes : kafta, chiche taouk, bœuf ou agneau',
        price: '19,90€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 5,
        name: `Tartare de Bœuf`,
        subtitle: 'Persil, oignons, épices douces, accompagné d’une salade fattouche',
        price: '18,90€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 6,
        name: `Farrouj Méchoui`,
        subtitle: 'Coquelet désossé poêlé mariné au citron et à l’ail',
        price: '18,00€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 7,
        name: `Fricassée de Poulet`,
        subtitle: 'Émincé de blanc de poulet poêlé, champignons, citron et coriandre',
        price: '16,50€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 8,
        name: `Saumon Poêlé`,
        subtitle: 'Pavé de saumon poêlé, riz, sauce du chef',
        price: '19,50€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 9,
        name: `Émincé de Bœuf`,
        subtitle: 'Poêlée de champignons flambés, au citron, coriandre et tomates',
        price: '17,90€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 10,
        name: `Frites Maison Fraîches`,
        price: '6,00€',
        isVegan: true,
        isVegetarien: false,
    },
];
