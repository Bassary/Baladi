import style from '../styles/button.module.scss'

interface ButtonProps {
    title: string;
    onClick: () => void;
    className?: string;
}

function Button({title, onClick, className=''} : ButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${style.button} ${className}`}
        >
            {title}
        </button>
    )
}

export default Button;