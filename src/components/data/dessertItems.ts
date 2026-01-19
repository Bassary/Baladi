export interface MenuItem {
    id: number;
    name: string;
    price: string;
    subtitle?: string;
    // imageSource?: string;
    // imageAlt?: string;
    isVegan?: boolean;
    isVegetarien?: boolean;
}

export const dessertItems: MenuItem[] = [
    {
        id: 1,
        name: `Baklawa`,
        subtitle: 'Pâtisserie orientale à base de pâte filo, noix et miel',
        price: '4,00€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 2,
        name: `Mouhalabié`,
        subtitle: 'Crème dessert au lait parfumé à l’eau de rose',
        price: '4,00€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 3,
        name: `Mamoul Dattes`,
        subtitle: 'Pâtisserie fourrée aux dattes (1 pièce)',
        price: '2,90€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 4,
        name: `Mamoul Pistache`,
        subtitle: 'Pâtisserie fourrée à la pistache (1 pièce)',
        price: '2,90€',
        isVegan: false,
        isVegetarien: false,
    },
    {
        id: 5,
        name: `Karabij`,
        subtitle: 'Mini sablé pistache avec crème fouettée',
        price: '6,00€',
        isVegan: false,
        isVegetarien: false,
    },

    {
        id: 6,
        name: `Fruits de Saison`,
        subtitle: 'Assortiment de fruits frais selon la saison',
        price: '7,00€',
        isVegan: false,
        isVegetarien: false,
    },
];
