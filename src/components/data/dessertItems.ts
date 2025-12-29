export interface MenuItem {
    id: number;
    name: string;
    price: string;
    imageSource: string;
    imageAlt: string;
    isVegan?: boolean;
    isVegetarien?: boolean;
}

export const desertItems: MenuItem[] = [

    {
        id: 1,
        name: 'Baklawa',
        price: '4,00€',
        imageSource: '/dishes/baklawa.png',
        imageAlt: `photo d'assortiment de baklawa: pattiseries traditionnelles libanaises`,
        isVegan: false,
        isVegetarien: false, 
    },

    {
        id: 2,
        name: 'Mamoul (datte, pistache ou noix)',
        price: '4,00€',
        imageSource: '/dishes/mamoul.png',
        imageAlt: `photo d'un mamoul: gateaux sablé et fourré traditionnelles libanaises`,
        isVegan: false,
        isVegetarien: false, 
    },

    {
        id: 3,
        name: 'Mouhalabié',
        price: '4,00€',
        imageSource: '/dishes/mouhalabie.png',
        imageAlt: `photo d'un mouhalabié: flan traditionnelles libanaises à l'eau de rose et fleur d'oranger`,
        isVegan: false,
        isVegetarien: false, 
    },

]