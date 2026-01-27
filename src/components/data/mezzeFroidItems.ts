export interface MenuItem {
    id: number;
    name: string;
    subtitle?: string;
    // imageSource?: string;
    // imageAlt?: string;
    price: string;
    isVegan?: boolean;
    isVegetarien?: boolean;
}

export const mezzeFroidItems: MenuItem[] = [
    {
        id: 1,
        name: 'Salade Fattouche “Baladi”',
        subtitle: 'Salade de crudités au gré du marché, pain grillé et sumac, mélasse de grenade',
        price: '7,90€',
        isVegan: true,
        isVegetarien: false,
    },
    {
        id: 2,
        name: 'Salade Méditerranéenne',
        subtitle: "Salade verte, tomates, concombre, dés de fromage salé, olives noires",
        price: '7,90€',
        isVegan: false,
        isVegetarien: true,
    },
    {
        id: 3,
        name: 'Salade des Moines',
        subtitle: "Aubergines grillées, tomates fraîches, persil, oignons frais",
        price: '7,60€',
        isVegan: true,
        isVegetarien: false,
    },
    {
        id: 4,
        name: 'Taboulé Libanais',
        subtitle: "Persil ciselé, tomates fraîches, oignons frais, blé concassé, citron, huile d’olive",
        price: '7,00€',
        isVegan: true,
        isVegetarien: false,
    },
    {
        id: 5,
        name: 'Hommos',
        subtitle: "Purée de pois chiches, crème de sésame citronnée",
        price: '7,00€',
        isVegan: true,
        isVegetarien: false,
    },
    {
        id: 6,
        name: `Moutabal (caviar d'aubergine)`,
        subtitle: "Aubergines grillées, crème de sésame citronnée, huile d’olive",
        price: '7,00€',
        isVegan: true,
        isVegetarien: false,
    },
    {
        id: 7,
        name: `WarakEnab`,
        subtitle: "Feuilles de vignes farcis au riz, tomates, persil, huile d’olive",
        price: '7,00€',
        isVegan: true,
        isVegetarien: false,
    },
    {
        id: 8,
        name: `Chankliche`,
        subtitle: "Tranches fines de viande de bœuf séchées et épicées",
        price: '7,00€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 9,
        name: `Labné`,
        subtitle: "Fromage blanc fait maison, huile d’olive, menthe sèche",
        price: '6,50€',
        isVegan: false,
        isVegetarien: true,
    },
    {
        id: 10,
        name: `Moussa’ka`,
        subtitle: "Aubergines grillées, tomates fraîches, pois chiches",
        price: '7,60€',
        isVegan: true,
        isVegetarien: false,
    },
    {
        id: 11,
        name: `Bastorma`,
        subtitle: "Viande de bœuf séchée et épicée",
        price: '8,90€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 12,
        name: `Moujadara`,
        subtitle: "Purée de lentilles, riz, oignons caramélisés au cumin",
        price: '7,00€',
        isVegan: true,
        isVegetarien: false,
    },
    {
        id: 12,
        name: `Kafta nayé ou Habra nayé ou Kébé nayé`,
        subtitle: "Viande hachée crue, persil, oignons",
        price: '12,50€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 13,
        name: `Piment farcis à la feta`,
        price: '7,00€',
        isVegan: false,
        isVegetarien: true,
    },
    {
        id: 14,
        name: `Makdouce`,
        price: '6,00€',
        isVegan: true,
        isVegetarien: false,
    },
]