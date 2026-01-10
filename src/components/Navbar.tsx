import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Button from "./Button"
import buttonStyle from '../styles/button.module.scss'
import navbarStyle from '../styles/navbar.module.scss'
import classNames from "classnames"

function Navbar() {
    const navigate = useNavigate()

    const handleChange=(destination : string) => {
        navigate(destination)
    }


    return (
            <nav className={classNames(navbarStyle.background, navbarStyle.navbarContainerFlex)}>
                <div className={classNames(navbarStyle.baladiFlex)}>
                    <h1>BALADI</h1>
                    <p className={classNames(navbarStyle.baladiFlexText)}>Restaurant Libanais</p>
                </div>
                <ul className={classNames(navbarStyle.navbarLinkFlex)}>
                    <li>
                        <NavLink
                            to={'.'}
                            end
                           className={({isActive}) => classNames({
                                [navbarStyle.active] : isActive,
                                [navbarStyle.a] : true,
                            })}
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
                        >
                            NOTRE HISTOIRE
                        </NavLink>
                    </li>
                </ul>
                <Button
                    title="CONTACT"
                    className={buttonStyle.mainButton}
                    onClick={() => handleChange('/contact')}
                />
            </nav>
    )
}

export default Navbar;