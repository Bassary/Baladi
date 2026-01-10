import styleMenuItem from '../styles/menuItem.module.scss'
import classNames from 'classnames';

import { Icon } from "@iconify/react";

interface MenuItemProps {
    name: string;
    subtitle?: string;
    price: string;
    imageSource: string;
    imageAlt: string;
    isVegan?: boolean;
    isVegetarien?: boolean;
}

function MenuItem({name, price, imageSource, imageAlt, isVegan, isVegetarien, subtitle} : MenuItemProps) {
    return (
        <div className={classNames(styleMenuItem.containerMenuItem)}>
            <img src={imageSource} alt={imageAlt} className={classNames(styleMenuItem.menuImage)}/>
            {isVegan && <Icon icon="iconoir:vegan" color="#000" className={classNames(styleMenuItem.iconMenu)}/>}
            {isVegetarien && <Icon icon="mingcute:leaf-line" color="#000" className={classNames(styleMenuItem.iconMenu)}/>}
            <div className={classNames(styleMenuItem.itemText)}>
                <span>{name}</span>
                <span>{subtitle}</span>
                <p>{price}</p>
            </div>
        </div>

    )
}

export default MenuItem;