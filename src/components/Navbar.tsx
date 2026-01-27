import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Button from "./Button"
import buttonStyle from '../styles/button.module.scss'
import navbarStyle from '../styles/navbar.module.scss'
import classNames from "classnames"
import { Icon } from "@iconify/react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
   
    const navigate = useNavigate()

    // Détection de la taille de l'écrran
 useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };
        handleResize(); // Appelle une première fois
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    //  Ferme le Meun une après la navigation

    const handleChange = (destination: string) => {
        navigate(destination);
        setIsMenuOpen(false)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    return (
            <>
                <nav className={classNames(navbarStyle.background, navbarStyle.navbarContainerFlex)}>
                    <div className={classNames(navbarStyle.baladiFlex)}>
                    <h1>BALADI</h1>
                    <p className={classNames(navbarStyle.baladiFlexText)}>Restaurant Libanais</p>
                </div>
                

                {isMobile && (
                    <button
                        className={classNames(navbarStyle.hamburgerButton)}
                        onClick={toggleMenu}
                    >
                        <Icon icon="mingcute:menu-fill" color="#fff" height={30} width={30}/>
                    </button>
                )}

                <ul className={classNames(navbarStyle.navbarLinkFlex, {[navbarStyle.open] : isMenuOpen && isMobile,})}>
                    
                        <li>
                        <NavLink
                            to={'.'}
                            end
                           className={({isActive}) => classNames({
                                [navbarStyle.active] : isActive,
                                [navbarStyle.a] : true,
                            })}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            MENU
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/traiteur'}
                            end
                            className={({isActive}) => classNames({
                                [navbarStyle.active] : isActive,
                                [navbarStyle.a] : true,
                            })}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            TRAITEUR
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/privatisation'}
                            end
                            className={({isActive}) => classNames({
                                [navbarStyle.active] : isActive,
                                [navbarStyle.a] : true,
                            })}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            PRIVATISATION
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/notre-histoire'}
                            end
                            className={({isActive}) => classNames({
                                [navbarStyle.active] : isActive,
                                [navbarStyle.a] : true,
                            })}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            NOTRE HISTOIRE
                        </NavLink>
                    </li>

                    
                    
                    { isMobile && (
                        <Button
                            title="CONTACT"
                            className={buttonStyle.mainButton}
                            onClick={() => handleChange('/contact')}
                        />

                        )
                    }
                    </ul>
                

                { !isMobile && (
                      <Button
                    title="CONTACT"
                    className={buttonStyle.mainButton}
                    onClick={() => handleChange('/contact')}
                    />

                    )
                }
            </nav>
            <div className={ isMenuOpen ? (classNames(navbarStyle.backgroundShadowNav)) : classNames(navbarStyle.backgroundNone)}></div>
            </>
    )
}

export default Navbar;