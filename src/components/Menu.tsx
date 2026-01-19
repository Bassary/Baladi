import { Icon } from "@iconify/react";
import { useState} from "react";
import MenuItem from "./MenuItem";
import Button from "./Button";
import styleMenu from "../styles/menu.module.scss";
import styleMenuItem from '../styles/menuItem.module.scss'
import classNames from "classnames";
import styleButton from '../styles/button.module.scss';

interface MenuItem {
    id: number;
    name: string;
    price: string;
    imageSource?: string;
    imageAlt?: string;
    isVegan?: boolean;
    isVegetarien?: boolean;
}

interface MenuProps {
    title: string;
    items: MenuItem[];
    classNameItems?: string;
    classNameSubtitle?: string;
    ancreId?: string;
    imageSource?: string;
    imageAlt?: string;
}

function Menu({title, items, classNameItems, ancreId, classNameSubtitle, imageSource, imageAlt} : MenuProps) {
    const [showAll, setShowAll] = useState(false);

    const displayedItems = showAll ? items : items.slice(0, 5);

    return (
        <div id={ancreId} className={classNames(styleMenu.containerMenu)}>
            <div className={classNames(styleMenu.containerMenuTitle)}>
                <h3>{title}</h3>
                <p className={`${styleMenu.hiddenSubtitle} ${classNameSubtitle}`}>Servie avec riz et salade sauce citron et huile d'olive</p>
                <div className={`${styleMenu.containerMenuTitleInfo} ${classNameItems}`}>
                    <div className={classNames(styleMenu.containerMenuTitleInfoFlex)}>
                        <Icon
                            icon="iconoir:vegan"
                            color="#000"
                            className={classNames(styleMenuItem.iconMenuInfo)}
                        />
                        <span>Végan</span>
                    </div>
                    <div className={classNames(styleMenu.containerMenuTitleInfoFlex)}>
                        <Icon
                            icon="mingcute:leaf-line"
                            color="#000"
                            className={classNames(styleMenuItem.iconMenuInfo)}
                        />
                        <span>Végétarien</span>
                    </div>
                </div>
            </div>
            <img src={imageSource} alt={imageAlt} className={classNames(styleMenu.containerMenuImage)}></img>
            <div 
                className={classNames(styleMenu.containerMenuItems)}
            >
                {displayedItems.map((item) => (
                    <MenuItem key={item.id} {...item}/>
                ))}
            </div>
            {items.length > 5 && (
                <Button
                    title={showAll ? 'VOIR MOINS' : 'VOIR PLUS'}
                    className={classNames(styleButton.secondButton)}
                    onClick={() => setShowAll(!showAll)}
                ></Button>
            )}
        </div>
    )
}

export default Menu

