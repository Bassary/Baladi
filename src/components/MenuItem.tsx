import style from '../styles/infos.module.scss'

import { Icon } from "@iconify/react";

interface MenuItemProps {
    name: string;
    price: string;
    imageSource: string;
    imageAlt: string;
    isVegan?: boolean;
    isVegetarien?: boolean;
}

function MenuItem({name, price, imageSource, imageAlt, isVegan, isVegetarien} : MenuItemProps) {
    return (
        <div>
            <img src={imageSource} alt={imageAlt}/>
            {isVegan && <Icon icon="iconoir:vegan" color="#000" className={style.iconMenu}/>}
            {isVegetarien && <Icon icon="mingcute:leaf-line" color="#000" className={style.iconMenu}/>}
            <div>
                <span>{name}</span>
                <p>{price}</p>
            </div>
        </div>

    )
}

export default MenuItem;