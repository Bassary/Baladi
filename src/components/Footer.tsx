import { NavLink } from "react-router-dom"
import Infos from "./Info";

import styleFooter from "../styles/footer.module.scss";
import classNames from "classnames";



function Footer() {
    return (
        <footer className={classNames(styleFooter.containerFooter)}>
            <div className={classNames(styleFooter.baladiFlex)}>
                <h1>BALADI</h1>
                <p className={classNames(styleFooter.baladiFlexText)}>Restaurant Libanais</p>
            </div>
            <ul className={classNames(styleFooter.containerFooterLink)}>
                <li>
                    <NavLink
                        to={'/'}
                    >MENU</NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/traiteur'}
                    >TRAITEUR</NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/privatisation'}
                    >PRIVATISATION</NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/notre-histoire'}
                    >NOTRE HISTOIRE</NavLink>
                </li>
            </ul>
            <ul className={classNames(styleFooter.containerFooterLink)}>
                <li>
                    <NavLink
                        to={'/'}
                    >NOTRE MENU MIDI</NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/'}
                    >TÉLÉCHARGER LE MENU</NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/contact'}
                    >RÉSERVER UNE TABLE</NavLink>
                </li>
            </ul>
            <div>
                <h2>CONTACT :</h2>
                    <div>
                        <Infos
                            iconColor="#FFF"
                            iconName="line-md:phone"
                            textInfo="01 42 41 84 32"
                        />
                        <Infos
                            iconColor="#FFF"
                            iconName="meteor-icons:at"
                            textInfo="baladi.rim@gmail.com"
                        />
                        <Infos
                            iconColor="#FFF"
                            iconName="akar-icons:clock"
                            textInfo="Ouvert 7/7 de 12h00-14h30 / 18h30-22h30 "
                        />
                        <Infos
                            iconColor="#FFF"
                            iconName="si:pin-line"
                            textInfo="105 rue de meaux, Paris 19ème"
                        />
                        <Infos
                            iconColor="#FFF"
                            iconName="simple-icons:metrodeparis"
                            textInfo="Laumière / Jaurès"
                        />
                    </div>
                </div>
        </footer>
    )
}

export default Footer;