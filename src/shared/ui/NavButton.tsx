interface Props {
    text?: string;
}

const NavButton: React.FC<Props> = ({ text = "Button" }) => {
    return (
        <a className="nav-button">{text}</a>
    );
};

export default NavButton;
