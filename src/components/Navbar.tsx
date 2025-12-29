import { Link, NavLink } from "react-router-dom"
import Button from "./Button"
import style from '../styles/button.module.scss'

function Navbar() {
    return (
            <nav>
                <Link to={'/'}>
                <h1>BALADI</h1>
                <p>Restaurant Libanais</p>
            </Link>
                <ul>
                    <li>
                        <NavLink
                            to={'/'}
                            className={({isActive}) => isActive ? `` : ''}
                        >
                            MENU
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={''}
                            className={({isActive}) => isActive ? `` : ''}
                        >
                            TRAITEUR
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={''}
                            className={({isActive}) => isActive ? `` : ''}
                        >
                            PRIVATISATION
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={''}
                            className={({isActive}) => isActive ? `` : ''}
                        >
                            NOTRE HISTOIRE
                        </NavLink>
                    </li>
                </ul>
                <Button
                    title="CONTACT"
                    className={style.mainButton}
                />
            </nav>
    )
}

export default Navbar;