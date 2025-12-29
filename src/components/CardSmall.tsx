
interface cardSmallProps {
    text: string;
    price?: string;
    imageSource: string;
    imageAlt: string;

}

function CardSmall({text, price, imageSource, imageAlt} : cardSmallProps) {
    return (
        <div>
            <div>
                <h3>{text}</h3>
                {price && (
                    <p>{price}</p>
                )}
            </div>
            <img src={imageSource} alt={imageAlt}/>
        </div>

    )
}

export default CardSmall;