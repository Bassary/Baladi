import Header from "../components/Header";
import Info from "../components/Info";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import CardSmall from "../components/CardSmall";
import CardFlex from "../components/CardFlex";
import Animations from "../components/animation/Animations";

// STYLE
import classNames from "classnames";
import styleHeader from "../styles/header.module.scss";
import styleButton from "../styles/button.module.scss";
import styleCardLarge from "../styles/cardLarge.module.scss";
import styleTitle from "../styles/title.module.scss";
import stylePage from "../styles/page.module.scss";
import styleCardSmall from "../styles/cardSmall.module.scss";


function Privatisation() {
    const {FadeInScroll} = Animations;
    const navigate = useNavigate();

    const handleChange = (destination: string) => {
        navigate(destination)
    }


    return (
        <>
            <Header
                title="RÉUNISSEZ LES GENS QUE VOUS AIMEZ"
                subTitle="Contactez nous par email ou par téléphone"
                imageURL="/public/background-header-privatisation.png"
                children={
                    <div className={classNames(styleHeader.containerInfo)}>
                        <Info
                        iconColor="#FFF"
                        iconName="eva:pin-outline"
                        textInfo="Livraison possible dans Paris et sa Banlieux"
                        />
                        <div className={classNames(styleHeader.containerInfoBottom)}>
                            <Info
                            iconColor="#FFF"
                            iconName="tabler:at"
                            textInfo="baladi.rim@gmail.com"
                            />
                            <Info
                            iconColor="#FFF"
                            iconName="solar:phone-linear"
                            textInfo="06 13 54 33 57"
                            />
                        </div>
                    </div>
                }
                button= {
                    <div className={classNames(styleButton.flexButtonRow)}>
                        <Button
                            title="DEMENDER UN DEVIS"
                            className={styleButton.mainButton}
                            onClick={()=>handleChange('/contact/#devis')}
                        />
                        <Button
                            title="NOTRE HISTOIRE"
                            className={styleButton.headerSecondButton}
                            onClick={()=>handleChange('/notre-histoire')}
                        />
                    </div>  
                }
            >
        </Header>
        <section className={stylePage.sectionContentPage}>
            <FadeInScroll delay={0.2}>
                <div className={classNames(styleTitle.containerTitleIcon)}>
                    <img src="/jasmine.svg" alt="logo jasmin" height="80" width="80"/>
                    <h2 className={classNames(styleTitle.titleH2, styleTitle.titleCenter)}>Privatisez le restaurant<br></br> pour un événement</h2>
                    <p>Réservez la salle pour vos événements privés ou professionnels</p>
                </div>
            </FadeInScroll>

            <FadeInScroll delay={0.3}>
                <div className={classNames(styleCardLarge.containerOptionTraiteur)}>
                <CardFlex
                    title="Infos Pratique"
                    children={
                        <>
                        <ul>
                            <li>TOUT TYPE D'ÉVÉNEMENT</li>
                            <li>SERVICE À TABLE OU AVEC BUFFET</li>
                            <li>MEZZÉ FROIDS ET CHAUDS</li>
                            <li>GRILLADES ET PLATS</li>
                            <li>JUSQU'À 40 PERSONNES</li>
                            <li>DEMANDE SUR DEVIS</li>
                         </ul>
                         <div className={styleButton.flexButtonRow}>
                            <Button
                                title="VOIR LA CARTE"
                                className={classNames(styleButton.mainButton)}
                                onClick={()=>handleChange('/#mezze-froids')}
                            />
                            <Button
                                title="DEMANDEZ UN DEVIS"
                                className={classNames(styleButton.secondButton)}
                                onClick={()=>handleChange('/contact/#devis')}
                            />
                         </div>
                         
                        </>
                    }
                />
            </div>
            </FadeInScroll> 
        </section>

        <FadeInScroll delay={0.2}>
            <section className={classNames(styleCardSmall.flexTitleHome, styleCardSmall.marginTopContainerWine)}>
            <h2>ACCOMPAGNEZ VOS PLATS DE VINS LIBANAIS</h2>
            <p>À savourer en verre ou en bouteille</p>
            <div className={classNames(styleCardSmall.flexHomeCard, styleCardSmall.marginTopWine)}>
                <CardSmall
                    text="RÉSERVE DU COUVENT"
                    imageSource="/wines/reserve-du-couvent.png"
                    imageAlt="bouteille de vin Réserve du couvant"
                    classNameImage={classNames(styleCardSmall.Image)}
                />
                <CardSmall
                    text="CHATEAU NAKAD"
                    imageSource="/wines/chateau-nakad.png"
                    imageAlt="bouteille de vin Chateau Nakad"
                    classNameImage={classNames(styleCardSmall.Image)}
                />
                <CardSmall
                    text="KEFFRAYA ROUGE"
                    imageSource="/wines/keffraya-rouge.png"
                    imageAlt="bouteille de vin Feffraya Rouge"
                    classNameImage={classNames(styleCardSmall.Image)}
                />
                <CardSmall
                    text="KSARA SUNSET"
                    imageSource="/wines/ksara-sunset.png"
                    imageAlt="bouteille de vin Ksara Sunset"
                    classNameImage={classNames(styleCardSmall.Image)}
                />
                <CardSmall
                    text="KSARA BLANC DE BLANCS"
                    imageSource="/wines/ksara-blanc.png"
                    imageAlt="bouteille de vin Ksara Blanc de Blanc"
                    classNameImage={classNames(styleCardSmall.Image)}
                />
            </div>
        </section>
        </FadeInScroll>
        
        <FadeInScroll delay={0.2}>
             <section className={stylePage.sectionContentPage}>
                <div className={classNames(styleTitle.containerTitleIcon)}>
                    <img src="/jasmine.svg" alt="logo jasmin" height="80" width="80"/>
                    <h2 className={classNames(styleTitle.titleH2)}>BON APPÉTIT</h2>
                </div>
                <div className={classNames(styleButton.flexButtonRow)}>
                    <Button
                        title="RÉSERVER UNE TABLE"
                        className={classNames(styleButton.mainButton)}
                        onClick={()=>handleChange('/contact')}
                    />
                    <Button
                        title="TÉLÉCHARGER LE MENU"
                        className={classNames(styleButton.secondButton)}
                        onClick={()=>''}
                    />
                </div>
            </section>
        </FadeInScroll>
        </>
    )
}

export default Privatisation