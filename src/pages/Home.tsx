import Button from "../components/Button";
import CardLarge from "../components/CardLarge";
import CardSmall from "../components/CardSmall";
import Header from "../components/Header";
import Info from "../components/Info";
import Menu from "../components/Menu";
import { dessertItems } from "../components/data/dessertItems";
import { mezzeChaudItems } from "../components/data/mezzeChaudItems";
import { mezzeFroidItems } from "../components/data/mezzeFroidItems";
import { platGrilladeItems } from "../components/data/platGrilladeItems";
import { useNavigate } from "react-router-dom";
import Animations from "../components/animation/Animations";
import MenuPDF from '../../public/Menu-Baladi.pdf'

// STYLE
import style from "../styles/menu.module.scss";
import styleButton from '../styles/button.module.scss';
import classNames from "classnames";
import styleHeader from "../styles/header.module.scss";
import styleInfo from "../styles/info.module.scss";
import styleCardSmall from '../styles/cardSmall.module.scss';
import styleTitle from '../styles/title.module.scss';
import stylePage from '../styles/page.module.scss';
import styleCardLarge from '../styles/cardLarge.module.scss'


function Home() {
    const {FadeInScroll} = Animations
    const navigate = useNavigate();

    const handleChange = (destination : string) => {
        navigate(destination)
    }



    return (
        <>
            <Header
                title="AUTHENTIQUE, TRADITIONNEL, FAMILIALE"
                subTitle="DEPUIS PLUS DE 20ANS"
                imageURL="/public/background-header.png"
                children={
                    <div className={classNames(styleHeader.containerInfo)}>
                        <Info
                        iconColor="#FFF"
                        iconName="tabler:clock"
                        textInfo="Ouvert 7/7 de 12h00-14h30/18h30-22h30"
                        />
                        <div className={classNames(styleHeader.containerInfoBottom)}>
                            <Info
                            iconColor="#FFF"
                            iconName="eva:pin-outline"
                            textInfo="105 rue de meaux, Paris 19ème"
                            />
                            <Info
                            iconColor="#FFF"
                            iconName="simple-icons:metrodeparis"
                            textInfo="Laumière/Jaurès"
                            />
                        </div>
                    </div>
                }
                button= {
                    <div className={classNames(styleButton.flexButtonRow)}>
                        <Button
                            title="RÉSERVER UNE TABLE"
                            className={styleButton.mainButton}
                            onClick={()=>handleChange('/contact')}
                        />
                        <Button
                            title="TRAITEUR "
                            className={styleButton.headerSecondButton}
                            onClick={()=>handleChange('/traiteur')}
                        />
                    </div>
                   
                }
            >
            </Header>
            <section className={stylePage.sectionContentPage}>
                <FadeInScroll delay={0.1}>
                <div className={classNames(styleTitle.containerTitleIcon)}>
                    <img src="/jasmine.svg" alt="logo jasmin" height="80" width="80"/>
                    <h2 className={classNames(styleTitle.titleH2)}>Notre Carte</h2>
                </div>
                    <CardLarge
                        ancreId="mezze-froids"
                        title="PLATS DU JOUR"
                        subTitle1="Du lundi midi au vendredi midi pour 14,90€"
                        subTitle2="Appellez nous pour connaitre le plats du jour !"
                        imageSource="/plat-du-jour.png"
                        imageAlt="illustration du plat du jour"
                        backgroundColor={classNames(styleCardLarge.backgroundColorBrown)}
                        textColor={classNames(styleCardLarge.textColorLight)}
                        children= {
                            <Button
                                title="01 42 41 84 32"
                                className={classNames(styleButton.mainButton)}
                                tel="01 42 41 84 32"
                            />
                        }
                    />
                </FadeInScroll>
                
                <FadeInScroll delay={0.2} className={classNames(stylePage.containerMotionCenter)}>
                    <Menu
                        title="NOS MEZZÉS FROIDS"
                        items={mezzeFroidItems}
                        imageSource="/dishes/assiette-baladi.png"
                        classNameItems={style.containerMenuTitleInfo}
                    />
                </FadeInScroll>

                <FadeInScroll delay={0.2} className={classNames(stylePage.containerMotionCenter)}>
                    <Menu title="NOS MEZZÉS CHAUD" items={mezzeChaudItems} classNameItems={style.containerMenuTitleInfo}/>
                </FadeInScroll>
                
                <FadeInScroll delay={0.2}>
                    <div className={classNames(styleCardSmall.flexHome)}>
                    <CardSmall
                        text="ASSIETTE BALADI"
                        price="14,90€"
                        imageSource="/dishes/assiette-baladi.png"
                        imageAlt="assiette baladi"
                        classNameImage={classNames(styleCardSmall.Image)}
                    />
                    <CardSmall
                        text="ASSIETTE VEGAN"
                        price="14,90€"
                        imageSource="/dishes/assiette-baladi.png"
                        imageAlt="assiette vegan"
                        classNameImage={classNames(styleCardSmall.Image)}
                    />
                    <CardSmall
                        text="ASSIETTE VÉGÉTARIENNE"
                        price="14,90€"
                        imageSource="/dishes/assiette-baladi.png"
                        imageAlt="assiette végétarienne"
                        classNameImage={classNames(styleCardSmall.Image)}
                    />
                </div>
                </FadeInScroll>

                <FadeInScroll delay={0.2}>
                    <CardLarge
                        ancreId="grillades"
                        title="MEZZÉS"
                        subTitle1="Assortiments d’entrées froides et chaudes sélectionnés par le Chef"
                        imageSource="/background-header.png"
                        imageAlt="assortiement de mézzes froid et chaud"
                        backgroundColor={classNames(styleCardLarge.backgroundColorBrown)}
                        textColor={classNames(styleCardLarge.textColorLight)}
                        // children= {
                        //     <Button
                        //         title="DÉCOUVRIR"
                        //         className={classNames(styleButton.mainButton)}
                        //         onClick={()=>''}
                        //     />
                        // }
                />
                </FadeInScroll>

                <FadeInScroll delay={0.2} className={classNames(stylePage.containerMotionCenter)}>
                    <Menu title="NOS PLATS ET GRILLADES" items={platGrilladeItems} classNameItems={style.hiddenItems} classNameSubtitle={style.visibleSubtitle}/>
                </FadeInScroll>
                
                <FadeInScroll delay={0.2}>
                    <CardLarge
                        title="NOTRE MENU DÉCOUVERTE À 28€"
                        subTitle1="Assortiments d’entrées chauds et froids ainsi qu’un deux de brochette sélectionnés par le Chef"
                        imageSource="/background-header.png"
                        imageAlt="assortiement de mézzes froid et chaud"
                        backgroundColor={classNames(styleCardLarge.backgroundColorBrown)}
                        textColor={classNames(styleCardLarge.textColorLight)}
                    />
                </FadeInScroll>
                
                <FadeInScroll delay={0.2}>
                    <Menu title="NOS DESSERT" items={dessertItems} classNameItems={style.hiddenItems}/>
                </FadeInScroll>
                
                <FadeInScroll delay={0.2}>
                    <div className={classNames(styleCardSmall.flexTitleHome)}>
                    <h2>NOS VINS LIBANAIS</h2>
                    <p>À savourer en verre ou en bouteille</p>
                    <div className={classNames(styleCardSmall.flexHome, styleCardSmall.marginTopWine)}>
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
                </div>
                </FadeInScroll>

                <FadeInScroll delay={0.2} className={classNames(stylePage.containerMotion)}>
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
                            pdfUrl={MenuPDF}
                        />
                    </div>
                    <div className={classNames(styleInfo.sectionHome)}>
                    <Info
                        iconColor="#153114"
                        iconName="game-icons:france"
                        textInfo="Produit locaux"
                        classNameDiv={classNames(styleInfo.infoMenuHome)}
                    />
                    <Info
                        iconColor="#153114"
                        iconName="temaki:meat"
                        textInfo="Viande origine : France, Europe"
                        classNameDiv={classNames(styleInfo.infoMenuHome)}
                    />
                    <Info
                        iconColor="#153114"
                        iconName="lineicons:leaf-1"
                        textInfo="Produits Frais"
                        classNameDiv={classNames(styleInfo.infoMenuHome)}
                    />
                    <Info
                        iconColor="#153114"
                        iconName="ph:cooking-pot-bold"
                        textInfo="Cuisine fait maison"
                        classNameDiv={classNames(styleInfo.infoMenuHome)}
                    />
                    <Info
                        iconColor="#153114"
                        iconName="hugeicons:halal"
                        textInfo="Halal"
                        classNameDiv={classNames(styleInfo.infoMenuHome)}
                    />
                </div>
            </FadeInScroll>
               
            </section>
            
        </>
    )
}

export default Home;