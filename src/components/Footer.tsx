import { NavLink } from "react-router-dom"
import Infos from "./Info";



function Footer() {
    return (
        <footer>
            <div>
                <h2>BALADI</h2>
                <p>Restaurant Libanais</p>
            </div>
            <div>
                <ul>
                    <li>
                        <NavLink
                            to={'/'}
                        >MENU</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/'}
                        >TRAITEUR</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/'}
                        >PRIVATISATION</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/'}
                        >NOTRE HISTOIRE</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
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
                            to={'/'}
                        >RÉSERVER UNE TABLE</NavLink>
                    </li>
                </ul>
                <div>
                    <h2>CONTACT :</h2>
                    <div>
                        <Infos
                            iconColor="#FFF"
                            iconName="line-md:phone"
                            textInfo="01 42 42 84 32"
                        />
                        <Infos
                            iconColor="#FFF"
                            iconName="meteor-icons:at"
                            textInfo="email@mail.com"
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
            </div>
            


        </footer>
    )
}

export default Footer;