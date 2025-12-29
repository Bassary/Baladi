import { Icon } from "@iconify/react";
import style from '../styles/infos.module.scss'

interface infosProps {
    textInfo: string;
    iconName : string;
    iconColor: string;
    className?: string;
    }

function Info({textInfo, iconName, iconColor, className} : infosProps ) {
    return (
        <div className={`${style.infos} ${className}`}>
            <Icon icon={iconName} color={iconColor}/>
            <span>{textInfo}</span>
        </div>
    )
}

export default Info;