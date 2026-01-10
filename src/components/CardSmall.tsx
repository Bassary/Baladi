import styleCardSmall from '../styles/cardSmall.module.scss'
import classNames from 'classnames';
interface cardSmallProps {
    text: string;
    price?: string;
    imageSource: string;
    imageAlt: string;
    classNameImage?: string;

}

function CardSmall({text, price, imageSource, imageAlt, classNameImage} : cardSmallProps) {
    return (
        <div className={classNames(styleCardSmall.containerCardSmall)}>
            <img src={imageSource} alt={imageAlt} className={classNameImage}/>
            <div className={classNames(styleCardSmall.containerText)}>
                <div className={classNames(styleCardSmall.backgroundText)}>
                    <h3>{text}</h3>
                        {price && (
                    <p>{price}</p>
                    )}
                </div>
                
            </div>
        </div>

    )
}

export default CardSmall;