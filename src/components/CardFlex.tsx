import classNames from "classnames";

import styleCardFlex from "../styles/CardFlex.module.scss";

interface CardFlexProp {
    title: string;
    children: React.ReactNode

}

function CardFlex({title, children} : CardFlexProp) {
    return (
        <>
        <div className={classNames(styleCardFlex.containerCardFlex)}>
            <h3 className={classNames(styleCardFlex.containerCardFlexTitle)}>{title}</h3>
            <div className={classNames(styleCardFlex.containerCardFlexChildren)}>
                {children}
            </div>
        </div>
        </>
    )
}

export default CardFlex