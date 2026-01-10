
import React from "react";
import styleHeader from '../styles/header.module.scss';
import classNames from "classnames";

type headerProps = {
    title: string;
    subTitle: string;
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
            <div className={classNames(styleHeader.containerHeader)}>
                <div className={classNames(styleHeader.containerHeaderText)}>
                    <h2>{title}</h2>
                    <h3>{subTitle}</h3>
                </div>
                {children}
            </div>

            <div>
                {button}
            </div>
        </header>
    )
}

export default Header;