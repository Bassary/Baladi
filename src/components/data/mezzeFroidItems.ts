export interface MenuItem {
    id: number;
    name: string;
    price: string;
    imageSource: string;
    imageAlt: string;
    isVegan?: boolean;
    isVegetarien?: boolean;
}

export const mezzeFroidItems: MenuItem[] = [
    {
        id: 1,
        name: 'Salade Fattouche “Baladi”',
        price: '7,90€',
        imageSource: '/dishes/salade-fattouche.png',
        imageAlt: 'photo de salade Fattouche “Baladi”',
        isVegan: true,
        isVegetarien: false,
    },
    {
        id: 2,
        name: 'Salade Méditerranéenne',
        price: '7,90€',
        imageSource: '/dishes/salade-mediterraneene.png',
        imageAlt: 'photo de salade Méditerranéenne',
        isVegan: false,
        isVegetarien: true,
    },
    {
        id: 3,
        name: 'Salade des Moines',
        price: '7,60€',
        imageSource: '/dishes/salade-des-moines.png',
        imageAlt: 'photo de salade des Moines',
        isVegan: true,
        isVegetarien: false,
    },
    {
        id: 4,
        name: 'Taboulé Libanais',
        price: '7,00€',
        imageSource: '/dishes/taboule-libanais.png',
        imageAlt: 'photo du taboulé Libanais',
        isVegan: true,
        isVegetarien: false,
    },
    {
        id: 5,
        name: 'Hommos',
        price: '7,00€',
        imageSource: '/dishes/hommos.png',
        imageAlt: 'image du hommos',
        isVegan: true,
        isVegetarien: false,
    },
    {
        id: 6,
        name: 'Moutabal',
        price: '7,00€',
        imageSource: '/dishes/moutabal.png',
        imageAlt: 'image du moutabal',
        isVegan: true,
        isVegetarien: false,
    },
]