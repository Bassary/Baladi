import Header from "../components/Header";
import Button from "../components/Button";
import Info from "../components/Info";
import CardSmall from "../components/CardSmall";
import { useNavigate } from "react-router-dom";

// STYLE
import classNames from "classnames";
import styleHeader from '../styles/header.module.scss';
import styleButton from '../styles/button.module.scss';
import styleTitle from '../styles/title.module.scss';
import stylePage from '../styles/page.module.scss';
import styleCardSmall from '../styles/cardSmall.module.scss';


function About() {
    const navigate = useNavigate();

    const handleChange=(destination : string) => {
        navigate(destination)
    }

    return (
        <>
            <Header
                title="CRÉATEUR DE PLAISIR CULINAIRE DEPUIS 2003"
                subTitle="CUSINE TRADITIONNELE ET FAMILIAL LIBANAISE"
                imageURL="/public/background-header-about.jpg"
                children={
                    <div className={classNames(styleHeader.containerInfo)}>
                        <Info
                        iconColor="#FFF"
                        iconName="tabler:clock"
                        textInfo="Ouvert 7/7 de 12h00-14h30 / 18h30-22h30 "
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
                            textInfo="Laumière / Jaurès"
                            />
                        </div>
                    </div>
                }
                button= {
                    <div className={classNames(styleButton.flexButtonRow)}>
                        <Button
                            title="VOIR LA CARTE"
                            className={styleButton.mainButton}
                            onClick={()=>handleChange('/')}
                        />
                        <Button
                            title="TRAITEUR"
                            className={styleButton.headerSecondButton}
                            onClick={()=>handleChange('/traiteur')}
                        />
                    </div> 
                }
                >
            </Header>
            <section className={classNames(stylePage.sectionContentPage)}>
                <div className={classNames(styleTitle.containerTitleIcon)}>
                    <img src="/jasmine.svg" alt="logo jasmin" height="80" width="80"/>
                    <h2 className={classNames(styleTitle.titleH2)}>Notre Histoire</h2>
                </div>
                <section className={classNames(styleTitle.containerTradition)}>
                    <h2>
                        UN PEU DE TRADITION BEAUCOUP DE SOUVENIR
                    </h2>
                    <div>
                        <p className={classNames(styleTitle.titleH2, styleTitle.braquettes)}>"</p>
                        <div className={classNames(styleTitle.containerTraditionText)}>
                            <p>
                                Si notre cuisine est tant appréciée et régale de nombreux gourmets depuis plus de 20 ans,
                                c’est grâce à toute l’attention que nous mettons dans nos plats.
                            </p>
                            <p>
                                Nos recettes et assaisonnements viennent de nos souvenirs d’enfance et de famille,
                                quand nous partagions un bon repas tous ensemble.
                            </p>
                            <p>
                                Retrouver cette ambiance chaleureuse et accueillante autour de plats qui font la renommée de la gastronomie Libanaise,
                                c’est ce qui nous a menés aujourd’hui à se lancer dans l’aventure Baladi.
                            </p>
                        </div>
                        <p className={classNames(styleTitle.titleH2, styleTitle.braquettes, styleTitle.braquetteRight)}>"</p>
                    </div>
                </section>
                <section className={classNames(styleCardSmall.flexTitleHome)}>
                    <h2>AU COEUR D'UN QUARTIER VIVANT</h2>
                    <p className={classNames(styleTitle.textQuartier)}>
                        Situé entre le canal Saint-Martin et le parc des Buttes Chaumont,
                        votre restaurant <strong>Baladi</strong> est l’endroit idéal pour se régaler dans le 19ème arrondissement de Paris 
                    </p>
                    <div className={classNames(styleCardSmall.flexHome)}>
                        <CardSmall
                            text="Restaurant Baladi"
                            imageSource="/public/restaurant-baladi.jpg"
                            imageAlt="deventure du restaurant Baladi"
                            classNameImage={classNames(styleCardSmall.ImageCover, styleCardSmall.Image)}
                        />
                        <CardSmall
                            text="Chalêt Alpin"
                            imageSource="/public/chalet-alpin.jpeg"
                            imageAlt="deventure du chalêt aplin du 19ème arrondissement de Paris"
                            classNameImage={classNames(styleCardSmall.ImageCover, styleCardSmall.Image)}
                        />
                        <CardSmall
                            text="La Villette"
                            imageSource="/public/villette.jpg"
                            imageAlt="Parc de la Villette dans le 19ème arrondissement de Paris"
                            classNameImage={classNames(styleCardSmall.ImageCover, styleCardSmall.Image)}
                        />
                        <CardSmall
                            text="Buttes Chaumont"
                            imageSource="/public/buttes-chaumont.jpeg"
                            imageAlt="Parc des Buttes Chaumont dans le 19ème arrondissement de Paris"
                            classNameImage={classNames(styleCardSmall.ImageCover, styleCardSmall.Image)}
                        />
                        <CardSmall
                            text="Canal Saint-Martin"
                            imageSource="/public/canal.jpg"
                            imageAlt="Canal Saint-Martin dans le 19ème arrondissement de Paris"
                            classNameImage={classNames(styleCardSmall.ImageCover, styleCardSmall.Image)}
                        />
                    </div>

                </section>
                <div className={classNames(styleTitle.containerPoem)}>
                    <div>
                        <h2 className={classNames(styleTitle.titleH2)}>بلدي</h2>
                        <h2 className={classNames(styleTitle.titleH2)}>Baladi</h2>
                    </div>
                    <p className={classNames(styleTitle.poemFont)}>
                        Baladi, mon pays, votre pays<br></br>
                        Le nôtre, le vôtre<br></br>
                        Peu importe !<br></br>
                        Sommes-nous étranger ?<br></br>
                        Peut-être oui, peut-être non<br></br>
                        peu importe !<br></br>
                        -Chez nous, chez vous, chez eux -<br></br>
                        Choisir... qui a choisi ?<br></br>
                        Peu m’importe<br></br>
                        Tu as choisi de venir chez moi<br></br>
                        C’est maintenant chez toi<br></br>
                        La terre c’est Baladi<br></br>
                        Un brin de soleil<br></br>
                        Couleurs et saveurs de mon pays<br></br>
                        Sous le cial de Paris<br></br>
                        La vie est Belle<br></br>
                        Bon appétit !<br></br>
                    </p>
                    
                </div>
            </section>
            <section className={stylePage.sectionContentPage}>
                <div className={classNames(styleTitle.containerTitleIcon)}>
                    <img src="/jasmine.svg" alt="logo jasmin" height="80" width="80"/>
                    <h2 className={classNames(styleTitle.titleH2)}>À BIENTÔT CHEZ BALADI</h2>
                </div>
                <div className={classNames(styleButton.flexButtonRow)}>
                    <Button
                        title="NOUS CONTACTER"
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
        </>
    )
}

export default About;