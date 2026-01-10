import Header from "../components/Header";
import Info from "../components/Info";
import Button from "../components/Button";
import CardSmall from "../components/CardSmall";
import { useNavigate } from "react-router-dom";

// STYLE
import classNames from "classnames";
import styleButton from '../styles/button.module.scss';
import styleHeader from '../styles/header.module.scss';
import styleTitle from '../styles/title.module.scss';
import stylePage from '../styles/page.module.scss';
import styleCardLarge from '../styles/cardLarge.module.scss';
import styleCardSmall from '../styles/cardSmall.module.scss';
import styleInfo from '../styles/info.module.scss';
import CardFlex from "../components/CardFlex";



function Traiteur() {
    const navigate = useNavigate();

    const handleChange= (destination: string) => {
        navigate(destination)
    }

    return (
        <>
        <Header
                title="DÉCOUVREZ NOS OFFRES TRAITEUR"
                subTitle="Commendez par email ou par téléphone"
                imageURL="/public/background-header-traiteur.png"
                children={
                    <div className={classNames(styleHeader.containerInfoBottom)}>
                        <Info
                        iconColor="#FFF"
                        iconName="tabler:at"
                        textInfo="email@email.com"
                        />
                        <Info
                        iconColor="#FFF"
                        iconName="solar:phone-linear"
                        textInfo="01 42 41 84 32"
                        />
                    </div>
                }
                button= {
                    <div className={classNames(styleButton.flexButtonRow)}>
                        <Button
                            title="DEMENDER UN DEVIS"
                            className={styleButton.mainButton}
                            onClick={()=>handleChange('/contact')}
                         />
                        <Button
                            title="PRIVATISEZ LE RESTAURANT"
                            className={styleButton.headerSecondButton}
                            onClick={()=>handleChange('/privatisation')}
                         />
                    </div>
                    
                }
            >
        </Header>
        <section className={stylePage.sectionContentPage}>
            <div className={classNames(styleTitle.containerTitleIcon)}>
                    <img src="/jasmine.svg" alt="logo jasmin" height="80" width="80"/>
                    <h2 className={classNames(styleTitle.titleH2)}>Nos Offres</h2>
            </div>
            <div className={classNames(styleCardLarge.containerOptionTraiteur)}>
                <CardFlex
                    title="Option 1"
                    children={
                        <>
                            <h2>MEZZÉ CHAUD ET FROID</h2>
                            <p>Découvrez un assortiment de plats chauds et froids typique de la cuisine libanaise.
                                <br></br>Savourez des mets variés qui feront l'unanimité, le choix idéal pour des moments conviviaux et de partage
                            </p>
                            <Button
                                title="VOIR LA CARTE"
                                className={classNames(styleButton.mainButton)}
                                onClick={()=> handleChange('/#mezze-froids')}
                            />
                        </>
                    }
                />
                <h2>OU</h2>
                 <CardFlex
                    title="Option 2"
                    children={
                        <>
                            <h2>MEZZÉ GRILLADES</h2>
                            <p>Optez pour un assortiment gourmand de grillades, telles que les brochettes de poulet mariné ou de kefta.
                                Le choix idéal pour les moments festifs et chaleureux.
                            </p>
                            <Button
                                title="VOIR LA CARTE"
                                className={classNames(styleButton.mainButton)}
                                onClick={()=> handleChange('/#grillades')}
                            />
                        </>
                    }
                />
            </div>
            <section className={classNames(styleCardSmall.flexTitleHome, styleCardSmall.marginTopContainerWine)}>
                    <h2>ACCOMPAGNEZ VOS PLATS DE VINS LIBANAIS</h2>
                    <p>À savourer en verre ou en bouteille</p>
                    <div className={classNames(styleCardSmall.flexHome, styleCardSmall.marginTopWine)}>
                        <CardSmall
                            text="RÉSERVE DU COUVENT"
                            imageSource="/wines/reserve-du-couvent.png"
                            imageAlt="assiette baladi"
                            classNameImage={classNames(styleCardSmall.Image)}
                        />
                        <CardSmall
                            text="CHATEAU NAKAD"
                            imageSource="/wines/chateau-nakad.png"
                            imageAlt="assiette baladi"
                            classNameImage={classNames(styleCardSmall.Image)}
                        />
                        <CardSmall
                            text="KEFFRAYA ROUGE"
                            imageSource="/wines/keffraya-rouge.png"
                            imageAlt="assiette baladi"
                            classNameImage={classNames(styleCardSmall.Image)}
                        />
                        <CardSmall
                            text="KSARA SUNSET"
                            imageSource="/wines/ksara-sunset.png"
                            imageAlt="assiette baladi"
                            classNameImage={classNames(styleCardSmall.Image)}
                        />
                        <CardSmall
                            text="KSARA BLANC DE BLANCS"
                            imageSource="/wines/ksara-blanc.png"
                            imageAlt="assiette baladi"
                            classNameImage={classNames(styleCardSmall.Image)}
                        />
                    </div>
                </section>
                <section className={classNames(styleInfo.sectionTraiteur)}>
                    <h2 className={classNames(styleTitle.titleH2)}>INFORMATIONS</h2>
                    <div className={classNames(styleInfo.containerInfoTraiteur)}>
                        <Info
                            iconColor="#153114"
                            iconName="ph:users"
                            textInfo="Pour socitée ou Privé"
                            classNameDiv={classNames(styleInfo.infoMenuHome)}
                        />
                        <Info
                            iconColor="#153114"
                            iconName="eva:pin-outline"
                            textInfo="Livraison dans Paris et sa Banlieux"
                            classNameDiv={classNames(styleInfo.infoMenuHome)}
                        />
                        <Info
                            iconColor="#153114"
                            iconName="solar:phone-linear"
                            textInfo="01 42 42 84 32"
                            classNameDiv={classNames(styleInfo.infoMenuHome)}
                        />
                        <Info
                            iconColor="#153114"
                            iconName="tabler:at"
                            textInfo="email@email.com"
                            classNameDiv={classNames(styleInfo.infoMenuHome)}
                        />
                </div>
                <h3>Pour toutes inforamtion ou question n’hésitez pas à nous contacter,<br></br>
                    nous nous ferons un plaisir de vous répondre
                </h3>
                
            </section>
        </section>
        </>
        
    )
}

export default Traiteur;