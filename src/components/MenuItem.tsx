// import styleMenuItem from '../styles/menuItem.module.scss'
// import classNames from 'classnames';

// import { Icon } from "@iconify/react";

// interface MenuItemProps {
//     name: string;
//     subtitle?: string;
//     price: string;
//     imageSource: string;
//     imageAlt: string;
//     isVegan?: boolean;
//     isVegetarien?: boolean;
//     style?: React.ReactNode
// }

// function MenuItem({name, price, imageSource, imageAlt, isVegan, isVegetarien, subtitle} : MenuItemProps) {
//     return (
//         <div className={classNames(styleMenuItem.containerMenuItem)}>
//             <img src={imageSource} alt={imageAlt} className={classNames(styleMenuItem.menuImage)}/>
//             {isVegan && <Icon icon="iconoir:vegan" color="#000" className={classNames(styleMenuItem.iconMenu)}/>}
//             {isVegetarien && <Icon icon="mingcute:leaf-line" color="#000" className={classNames(styleMenuItem.iconMenu)}/>}
//             <div className={classNames(styleMenuItem.itemText)}>
//                 <span>{name}</span>
//                 <span>{subtitle}</span>
//                 <p>{price}</p>
//             </div>
//         </div>

//     )
// }

// export default MenuItem;

// VERSION SANS IMAGE

import styleMenuItem from '../styles/menuItem.module.scss'
import classNames from 'classnames';

import { Icon } from "@iconify/react";

interface MenuItemProps {
    name: string;
    subtitle?: string;
    price: string;
    isVegan?: boolean;
    isVegetarien?: boolean;
    style?: React.ReactNode
}

function MenuItem({name, price, isVegan, isVegetarien, subtitle} : MenuItemProps) {
    return (
            <div className={classNames(styleMenuItem.itemText)}>
                <div className={classNames(styleMenuItem.itemInfoSubtitle)}>
                    <div className={classNames(styleMenuItem.itemInfo)}>
                        <span className={classNames(styleMenuItem.itemName)}>{name}</span>
                        {isVegan && <Icon icon="iconoir:vegan" color="#000" className={classNames(styleMenuItem.iconMenu)}/>}
                        {isVegetarien && <Icon icon="mingcute:leaf-line" color="#000" className={classNames(styleMenuItem.iconMenu)}/>}
                    </div>
                    <span className={classNames(styleMenuItem.itemSubtitle)}>{subtitle}</span>
                </div>
                <p className={classNames(styleMenuItem.itemPrice)}>{price}</p>
            </div>
    )
}

export default MenuItem;