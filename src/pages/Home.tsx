import Button from "../components/Button";
import CardLarge from "../components/CardLarge";
import CardSmall from "../components/CardSmall";
import Header from "../components/Header";
import Info from "../components/Info";
import Menu from "../components/Menu";
import { desertItems } from "../components/data/dessertItems";
import { mezzeChaudItems } from "../components/data/mezzeChaudItems";
import { mezzeFroidItems } from "../components/data/mezzeFroidItems";
import { platGrilladeItems } from "../components/data/platGrilladeItems";

// STYLE
import style from "../styles/menu.module.scss";


function Home() {
    return (
        <>
            <Header
                title="AUTHENTIQUE, TRADITIONNEL, FAMILIALE"
                subTitle="DEPUIS PLUS DE 20ANS"
                button={''}
                children={
                    <div>
                        <Info
                        iconColor="#FFF"
                        iconName="akar-icons:clock"
                        textInfo="Ouvert 7/7 de 12h00-14h30 / 18h30-22h30 "
                    />
                        <div>
                            <Info
                            iconColor="#FFF"
                            iconName="si:pin-line"
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
            >
            </Header>
            <section>
                <CardLarge
                    title="PLATS DU JOUR"
                    subTitle1="Du lundi midi au vendredi midi pour 14,90€"
                    subTitle2="Appellez nous pour connaitre le plats du jour : 01 42 41 84 32"
                    imageSource="/plat-du-jour.png"
                    imageAlt="illustration du plat du jour"
                    children= {
                        <Button
                            title="EN SAVOIR PLUS"
                            className="main-button"
                            onClick={'#'}
                        />
                    }
                />
                <Menu title="NOS MEZZÉS FROIDS" items={mezzeFroidItems}/>
                <Menu title="NOS MEZZÉS CHAUD" items={mezzeChaudItems}/>
                <Menu title="NOS MEZZÉS CHAUD" items={platGrilladeItems}/>
                <Menu title="NOS DESSERT" items={desertItems} className={style.hiddenItems}/>

                <CardSmall
                    text="ASSIETTE BALADI"
                    price="14,90€"
                    imageSource="/dishes/assiette-baladi.png"
                    imageAlt="assiette baladi"
                />
            </section>
            <section>
                <Info
                    iconColor="#153114"
                    iconName="game-icons:france"
                    textInfo="Produit locaux"
                />
                <Info
                    iconColor="#153114"
                    iconName="temaki:meat"
                    textInfo="Viande origine : France, Europe"
                />
                <Info
                    iconColor="#153114"
                    iconName="lineicons:leaf-1"
                    textInfo="Produits Frais"
                />
                <Info
                    iconColor="#153114"
                    iconName="ph:cooking-pot-bold"
                    textInfo="Cuisine fait maison"
                />
                <Info
                    iconColor="#153114"
                    iconName="hugeicons:halal"
                    textInfo="Halal"
                />
            </section>
        </>
    )
}

export default Home;