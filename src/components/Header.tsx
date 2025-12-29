import Button from "./Button";
import React from "react";


type headerProps = {
    title: string;
    subTitle: string;
    button: React.ReactElement<typeof Button>;
    children?: React.ReactNode;
}

function Header({title, subTitle, button, children} : headerProps) {
    return (
        <header>
            <div>
                <div>
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