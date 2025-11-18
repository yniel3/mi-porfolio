
import { useTranslation } from "react-i18next";
import "./footer.css";

const Footer = () => {
    const { t } = useTranslation();
    const links = t("links", { returnObjects: true });
    return (
        <div className="footer">
            <section className="contacto">
                <h3 className="footer-title">
                    {
                        t("footer.title")
                    }
                </h3>
                <a className="footer-link" href={links[0].url}target="_blank" rel="noopener noreferrer">
                    {
                        links[0].name
                    }
                </a>
                <a className="footer-link" href={links[1].url} target="_blank" rel="noopener noreferrer">
                    {
                        links[1].name
                    }
                </a>
                <a className="footer-link" href={links[2].url} target="_blank" rel="noopener noreferrer">
                    {
                        links[2].name
                    }
                </a>
            </section>
            <section className="logo-info">
                <img className="logo-footer" src="logo-a.svg" alt="logo" />
            </section>
            <section className="copyC">
                <p>©2025 Todos los derechos reservados yniel.</p>
            </section>
        </div>
    )
}

export default Footer;