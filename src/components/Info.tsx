import { Icon } from "@iconify/react";
import styleInfo from '../styles/info.module.scss'

interface infosProps {
    textInfo: string;
    iconName : string;
    iconColor: string;
    classNameIcon?: string;
    classNameDiv?: string;
    }

function Info({textInfo, iconName, iconColor, classNameIcon, classNameDiv} : infosProps ) {
    return (
        <div className={`${styleInfo.infos} ${classNameDiv}`}>
            <Icon icon={iconName} color={iconColor} className={classNameIcon}/>
            <span>{textInfo}</span>
        </div>
    )
}

export default Info;