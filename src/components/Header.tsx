
import React from "react";
import styleHeader from '../styles/header.module.scss';
import classNames from "classnames";
import Animations from "../components/animation/Animations"

const {SlideDown, SlideUp} = Animations


type headerProps = {
    title: string;
    subTitle?: string;
    button?: React.ReactNode;
    children?: React.ReactNode;
    imageURL: string;
}

function Header({title, subTitle, button, children, imageURL} : headerProps) {
    return (

             <header
                className={classNames(styleHeader.backgroundImage)}
                style={{backgroundImage : `url(${imageURL})`}}
                >
                <SlideDown>
                    <div className={classNames(styleHeader.containerHeader)}>
                        <div className={classNames(styleHeader.containerHeaderText)}>
                            <h2>{title}</h2>
                            <h2>{subTitle}</h2>
                        </div>
                        {children}
                    </div>
                </SlideDown>
                <SlideUp>
                    <div>
                        {button}
                    </div>
                </SlideUp>
            </header>
       
    )
}

export default Header;