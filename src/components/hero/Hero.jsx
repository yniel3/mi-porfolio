import { useTranslation } from "react-i18next";
import "./hero.css";



const Hero = () => {
    const { t } = useTranslation();

    const textsDescrip = t("hero.description", { returnObjects: true });
    const links = t("links", { returnObjects: true })
    //Verificamos que sea un array para evitar errores antes de que cargue el idioma
    if (!Array.isArray(textsDescrip) && !Array.isArray(links)) {
        return null;
    }
    return (
        <div className="hero" id="inicio">
            <div className="texto">
                <h1 className="texto-h1">
                    {
                        t("hero.title")
                    }
                </h1>
                {
                    textsDescrip.map((item, index) => {
                        if (item.paragraph) {
                            return (
                                <p key={index}>
                                    {
                                        item.paragraph
                                    }
                                </p>
                            )
                        }
                    })
                }
            </div>
            <div className="enlace">
                <h3 className="enlace-h3">
                    {
                        textsDescrip[0].enlace
                    }
                </h3>
                <div className="divLinks">
                    {

                        links.map((link, index) => {
                            return (
                                <a
                                    className="link-social"
                                    href={link.url} rel="noopener noreferrer"
                                    key={index}
                                    target={link.name === 'Gmail' ? '_self' : '_blank'}
                                >
                                    <img
                                        className="img-link"
                                        src={link.iconSrc}
                                        alt={link.name}
                                    />
                                </a>
                            )
                        })

                    }
                </div>
            </div>
        </div>
    )
}

export default Hero;