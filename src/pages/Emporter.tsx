import { sanswichItems } from "../components/data/sandwichItems"
import { platGrilladeEmporterItems } from "../components/data/platGrilladeEmporterItems";
import Menu from "../components/Menu"
import Header from "../components/Header";
import Info from "../components/Info";
import Button from "../components/Button";
import classNames from "classnames";
import Animations from "../components/animation/Animations";
import MenuEmporterPDF from '../../public/Menu-Baladi-A-Emporter.pdf';
import CardSmall from "../components/CardSmall";
import CardFlex from "../components/CardFlex";

// STYLE
import style from "../styles/menu.module.scss";
import styleHeader from "../styles/header.module.scss";
import styleButton from '../styles/button.module.scss';
import stylePage from '../styles/page.module.scss';
import styleCardSmall from '../styles/cardSmall.module.scss';
import styleInfo from "../styles/info.module.scss";
import styleTitle from '../styles/title.module.scss';
import styleCardFlex from '../styles/CardFlex.module.scss';
import styleCardLarge from '../styles/cardLarge.module.scss';

function Emporter() {
    const {FadeInScroll} = Animations

    return(
        <>
        <Header
                title="APPELEZ-NOUS ET RECUPÉREZ VOTRE COMMANDE"
                imageURL="/background-header-a-emporter.png"
                children={
                    <div className={classNames(styleHeader.containerInfo)}>
                        <Info
                        iconColor="#FFF"
                        iconName="tabler:clock"
                        textInfo="Ouvert 7/7 de 12h00-14h30 / 18h30-22h30"
                        />
                        <div className={classNames(styleHeader.containerInfoBottom)}>
                            <Info
                            iconColor="#FFF"
                            iconName="eva:pin-outline"
                            textInfo="105 rue de Meaux, Paris 19ème"
                            />
                            <Info
                            iconColor="#FFF"
                            iconName="simple-icons:metrodeparis"
                            textInfo="Laumière / Jaurès"
                            />
                        </div>
                    </div>
                }
                button= {
                    <div className={classNames(styleButton.flexButtonRow)}>
                        <Button
                            title="01 42 42 84 32"
                            className={styleButton.mainButton}
                            tel="01 42 42 84 32"
                        />
                        <Button
                            title="TÉLÉCHARGER LE MENU À EMPORTER"
                            className={styleButton.headerSecondButton}
                            pdfUrl={MenuEmporterPDF}
                        />
                    </div>
                }
            >
            </Header>
        <section className={stylePage.sectionContentPage}>
         <FadeInScroll delay={0.2} className={classNames(styleCardLarge.containerOptionTraiteur)}>
            <CardFlex
                        title="MENU SANDWICH À 12€"
                        children={
                        <>
                            <div className={classNames(styleCardFlex.containerContentMenuEmporter)}>
                                <span>SANDWICH</span>
                                <p>+</p>
                                <div className={classNames(styleCardFlex.containerContentMenuEmporterAccompagnement)}>
                                    <span>2 ACCOMPAGNEMENT AU CHOIX</span>
                                    <p>(falafel, fatayer, samboussek fromage)</p>
                                </div>
                                <p>+</p>
                                <span>1 BOISSON</span>
                                <p>+</p>
                                <span>1 BAKLAWA</span>
                            </div>
                            {/* <Button
                                title="VOIR LA CARTE"
                                className={classNames(styleButton.mainButton)}
                                onClick={()=> handleChange('/#grillades')}
                            /> */}
                        </>
                        }
                    />
                </FadeInScroll>
        
        <FadeInScroll delay={0.2} className={classNames(stylePage.containerMotionCenter)}>
        <Menu
            title="NOS SANDWICH À EMPORTER"
            items={sanswichItems}
            imageSource="/nos-sandwich.png"
            imageAlt="Sandwich libanasis, chich taouk et falafel"
            classNameItems={style.containerMenuTitleInfo}
        />
        </FadeInScroll>
        <FadeInScroll delay={0.2}>
                    <div className={classNames(styleCardSmall.flexHomeCard)}>
                    <CardSmall
                        text="ASSIETTE BALADI"
                        price="13,90€"
                        imageSource="/assiette-baladi.png"
                        imageAlt="assiette baladi"
                        classNameImage={classNames(styleCardSmall.Image)}
                    />
                    <CardSmall
                        text="ASSIETTE VEGAN"
                        price="13,90€"
                        imageSource="/assiette-vegan.png"
                        imageAlt="assiette vegan"
                        classNameImage={classNames(styleCardSmall.Image)}
                    />
                    <CardSmall
                        text="ASSIETTE VÉGÉTARIENNE"
                        price="13,90€"
                        imageSource="/assiette-végé.png"
                        imageAlt="assiette végétarienne"
                        classNameImage={classNames(styleCardSmall.Image)}
                    />
                </div>
        </FadeInScroll>
        <FadeInScroll delay={0.2} className={classNames(stylePage.containerMotionCenter)} >
            <Menu
                ancreId="grillades"
                title="NOS PLATS ET GRILLADES À EMPORTER"
                items={platGrilladeEmporterItems}
                imageSource="/plat-grillade.png"
                imageAlt="Assortiment de grillade : chiche taouk, kefta accompagné d'une salde fraiche et riz blanc"
                classNameItems={style.hiddenItems}
                classNameSubtitle={style.visibleSubtitle}/>
        </FadeInScroll>
        <FadeInScroll delay={0.2} className={classNames(stylePage.containerMotion)}>
                    <div className={classNames(styleTitle.containerTitleIcon)}>
                        <img src="/jasmine.svg" alt="logo jasmin" height="80" width="80"/>
                        <h2 className={classNames(styleTitle.titleH2)}>BON APPÉTIT</h2>
                    </div>
                    <div className={classNames(styleButton.flexButtonRow)}>
                         <Button
                            title="COMMANDEZ"
                            className={styleButton.mainButton}
                            tel="01 42 42 84 32"
                        />
                        <Button
                            title="TÉLÉCHARGER LE MENU À EMPORTER"
                            className={styleButton.secondButton}
                            pdfUrl={MenuEmporterPDF}
                        />
                    </div>
                    <div className={classNames(styleInfo.sectionHome)}>
                    <Info
                        iconColor="#153114"
                        iconName="game-icons:france"
                        textInfo="Produits locaux"
                        classNameDiv={classNames(styleInfo.infoMenuHome)}
                    />
                    <Info
                        iconColor="#153114"
                        iconName="temaki:meat"
                        textInfo="Origine viande : France, Europe"
                        classNameDiv={classNames(styleInfo.infoMenuHome)}
                    />
                    <Info
                        iconColor="#153114"
                        iconName="lineicons:leaf-1"
                        textInfo="Produits frais"
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

export default Emporter;