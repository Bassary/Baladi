import MenuItem from "../MenuItem";

export interface MenuItem {
    id: number;
    name: string;
    subtitle?: string;
    price: string;
    isVegan?: boolean;
    isVegetarien?: boolean;
}
export const platGrilladeEmporterItems: MenuItem[] = [
    {
        id: 1,
        name: `Kafta Grillé`,
        subtitle: '2 brochettes de viande hachée, persil, oignons',
        price: '13,90€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 2,
        name: `Chiche Taouk`,
        subtitle: '2 brochettes de blanc de poulet mariné au citron et à l’ail',
        price: '13,90€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 3,
        name: `Brochettes de Bœuf`,
        subtitle: 'Bavette flanchet',
        price: '16,90€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 4,
        name: `Brochettes d’Agneau`,
        subtitle: 'Coeur de gigot',
        price: '17,90€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 5,
        name: `Grillade Royale Mixte`,
        subtitle: 'Assortiment de trois brochettes : kafta, chiche taouk, bœuf ou agneau',
        price: '18,00€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 7,
        name: `Farrouj Méchoui`,
        subtitle: 'Coquelet désossé, poêlé et mariné au citron et à l’ail',
        price: '17,00€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 8,
        name: `Fricassée de Poulet`,
        subtitle: 'Émincé de blanc de poulet poêlé, champignons, citron et coriandre',
        price: '15,50€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 10,
        name: `Émincé de Bœuf ou Agneau`,
        subtitle: 'Poêlée, avec champignons flambés, au citron, coriandre et tomates',
        price: '16,90€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 11,
        name: `Frites Maison Fraîches`,
        price: '6,00€',
        isVegan: false,
        isVegetarien: false,
    },
];
