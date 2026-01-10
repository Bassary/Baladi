import style from '../styles/button.module.scss'

interface ButtonProps {
    title: string;
    onClick?: () => void;
    className?: string;
    mailto?: string;
    tel?: string;
}

function Button({title, onClick, className='', mailto, tel} : ButtonProps) {
    const handleClick = () => {
        if (mailto) {
            window.location.href = `mailto:${mailto}`;

        } else if (tel) {
            window.location.href = `tel:${tel}`;
        } else if (onClick) {
            onClick()
        }
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`${style.button} ${className}`}
        >
            {title}
        </button>
    )
}

export default Button;