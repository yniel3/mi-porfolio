
import "./header.css";
import SelectorIdioma from "./selectIdioma/SelectorIdioma";

const Header = () => {
    
    return (
        <header className="header">
            <figure className="logo-wrapper">
                <img className="logo-img" src="logo-a.svg" alt="logo" />
            </figure>
            <SelectorIdioma />
        </header>
    );
}

export default Header;

