interface Props {
    text?: string;
}

const Button: React.FC<Props> = ({ text = "Button" }) => {
    return (
        <button className="blue-button">{text}</button>
    );
};

export default Button;
