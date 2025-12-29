import Infos from "./Info";
import { useState } from "react";
import MenuItem from "./MenuItem";
import Button from "./Button";

interface MenuItem {
    id: number;
    name: string;
    price: string;
    imageSource: string;
    imageAlt: string;
    isVegan?: boolean;
    isVegetarien?: boolean;
}

interface MenuProps {
    title: string;
    items: MenuItem[];
    className?: string;
}


function Menu({title, items, className} : MenuProps) {
    const [showAll, setShowAll] = useState(false);
    const displayedItems = showAll ? items : items.slice(0, 3);

    return (
        <div>
            <div>
                <h3>{title}</h3>
                <div className={className}>
                    <Infos
                    iconName="iconoir:vegan"
                    iconColor="#000"
                    textInfo="Végan"
                    />
                    <Infos
                    iconName="mingcute:leaf-line"
                    iconColor="#000"
                    textInfo="Végétarine"
                    />
                </div>
            </div>
            <div>
                {displayedItems.map((item) => (
                    <MenuItem key={item.id} {...item}/>
                ))}
            </div>
            {items.length > 3 && (
                <Button
                    title={showAll ? 'VOIR MOINS' : 'VOIR PLUS'}
                    onClick={() => setShowAll(!showAll)}
                ></Button>
            )}
        </div>
    )
}

export default Menu;