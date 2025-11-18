import { useTranslation } from "react-i18next";
import "./banner.css"

const Banner = () => {
    const { t } = useTranslation();

    return (
        <div className="tech-container">
            <h3 className="tech-title">{t("slider.title")}</h3>
            <div className="carrusel">
                <div className="grupo">
                    <article className="element">
                        <img src="html-5.png" alt="tech-1" />
                        <p>HTLT5</p>
                    </article>
                    <article className="element">
                        <img src="css-3.png" alt="tech-2" />
                        <p>CSS3</p>
                    </article>
                    <article className="element">
                        <img src="js.png" alt="tech-3" />
                        <p>JavaScript</p>
                    </article>
                    <article className="element">
                        <img src="figma.png" alt="tech-4" />
                        <p>Figma</p>
                    </article>
                    <article className="element">
                        <img src="node-js.png" alt="tech-5" />
                        <p>Node</p>
                    </article>
                    <article className="element">
                        <img src="database-file.png" alt="tech-6" />
                        <p>ORM</p>
                    </article>
                    <article className="element">
                        <img src="terminal.png" alt="tech-7" />
                        <p>Terminal</p>
                    </article>
                    <article className="element">
                        <img src="docker.png" alt="tech-8" />
                        <p>Docker</p>
                    </article>
                </div>
                <div aria-hidden className="grupo">
                    <article className="element">
                        <img src="html-5.png" alt="tech-1" />
                        <p>HTLT5</p>
                    </article>
                    <article className="element">
                        <img src="css-3.png" alt="tech-2" />
                        <p>CSS3</p>
                    </article>
                    <article className="element">
                        <img src="js.png" alt="tech-3" />
                        <p>JavaScript</p>
                    </article>
                    <article className="element">
                        <img src="figma.png" alt="tech-4" />
                        <p>Figma</p>
                    </article>
                    <article className="element">
                        <img src="node-js.png" alt="tech-5" />
                        <p>Node</p>
                    </article>
                    <article className="element">
                        <img src="database-file.png" alt="tech-6" />
                        <p>ORM</p>
                    </article>
                    <article className="element">
                        <img src="terminal.png" alt="tech-7" />
                        <p>Terminal</p>
                    </article>
                    <article className="element">
                        <img src="docker.png" alt="tech-8" />
                        <p>Docker</p>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Banner;