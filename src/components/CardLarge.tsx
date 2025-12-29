 

interface cardLargProps {
    title: string;
    subTitle1: string;
    subTitle2?: string;
    imageSource: string;
    imageAlt: string;
    children?: React.ReactNode;

}

function CardLarge({title, subTitle1, subTitle2, imageSource, children, imageAlt} : cardLargProps) {
    return (
        <div>
            <div>
                <div>
                    <h2>{title}</h2>
                    <p>{subTitle1}</p>
                 </div>
                 {subTitle2 && (
                    <p>{subTitle2}</p>
                 )}
                {children}
            </div>
            <img src={imageSource} alt={imageAlt}/>
        </div>
    )
}

export default CardLarge;