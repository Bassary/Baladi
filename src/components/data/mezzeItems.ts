export interface MenuItem {
    id: number;
    name: string;
    price: string;
    subtitle?: string;
    isVegan?: boolean;
    isVegetarien?: boolean;
}

export const mezzeItems: MenuItem[] = [
    {
        id: 1,
        name: 'Mezzé / personne',
        subtitle: "Assortiment d'entrées froides et chaudes sélectionnées par le Chef",
        price: '21,00€',
        isVegan: false,
        isVegetarien: false, 

    },
    // {
    //     id: 2,
    //     name: 'Mezzé pour 2 personne',
    //     price: '39,60€',
    //     isVegan: false,
    //     isVegetarien: false, 

    // },
    // {
    //     id: 3,
    //     name: 'Mezzé pour 3 personne',
    //     price: '59,40€',
    //     isVegan: false,
    //     isVegetarien: false,  

    // },
    // {
    //     id: 4,
    //     name: 'Mezzé pour 4 personne',
    //     price: '79,20€',
    //     isVegan: false,
    //     isVegetarien: false,  

    // },
]