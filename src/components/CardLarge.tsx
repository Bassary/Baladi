 import classNames from "classnames";
 import styleCardLarg from "../styles/cardLarge.module.scss";

interface cardLargProps {
    title: string;
    subTitle1?: string;
    subTitle2?: string;
    imageSource?: string;
    imageAlt?: string;
    backgroundColor: string;
    textColor: string;
    option?: string;
    children?: React.ReactNode;
    classNameOption?: string;
    ancreId?: string;
}

function CardLarge({title, subTitle1, subTitle2, imageSource, children, imageAlt, backgroundColor, textColor, option, classNameOption, ancreId} : cardLargProps) {
    return (
        <div id={ancreId} className={classNames(styleCardLarg.containerCard)}>
            <div className={classNames(styleCardLarg.containerBackground, backgroundColor, textColor)}>
                <div className={classNames(styleCardLarg.containerBackgroundText)}>
                    <div className={classNameOption}>
                        <h3>{option}</h3>
                    </div>
                    <h2 className={classNames(styleCardLarg.textH2)}>{title}</h2>
                    <p className={classNames(styleCardLarg.containerSubtitle1)}>{subTitle1}</p>
                    {subTitle2 && (
                    <p>{subTitle2}</p>
                 )}
                 </div>
                {children}
            </div>
            <img
                className={classNames(styleCardLarg.Image)}
                src={imageSource}
                alt={imageAlt}
            />
        </div>
    )
}

export default CardLarge;