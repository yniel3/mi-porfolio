import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import "./cards.css";

const MOVIL_BREAKPOINT = 768;

const Cards = () => {

    const [viewport, setViewport] = useState(false);

    const checkScreenSize = () => {
        if (window.innerWidth > MOVIL_BREAKPOINT) {
            setViewport(true)
        } else {
            setViewport(false)
        }
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
    }, [])

    const { t } = useTranslation();

    const project = t("projects", { returnObjects: true });

    if (!Array.isArray(project)) {
        return null;
    }

    return (
        <div id="proyectos" className="cards">
            <section className="container-projects" >
                <div className="gridContainer">
                    <article className="card-project">
                        <a rel="noopener noreferrer" className="redirect-project" href={project[0].link} target="_blank">
                            <img className="link-redirect" src="/external-link.svg" alt="pokedex proyecto" />
                        </a>
                        <img className="img-project"
                            src={project[0].imagenSrc}
                            alt={project[0].nameProject}
                        />
                        <h3 className="title-project">
                            {project[0].nameProject}
                        </h3>
                        <p className="text-project">
                            {
                                viewport ? project[0].descripcion[0].paragraph + " " + project[0].descripcion[1].paragraph : project[0].descripcion[0].paragraph
                            }
                        </p>
                        <label className="btnLabel" htmlFor="btn">
                            <img src="/arrow-big-right.svg" alt="" />
                        </label>
                        <input id="btn" type="checkbox" />
                    </article>
                    <article className="card-project">
                        <a rel="noopener noreferrer" className="redirect-project" href={project[1].link} target="_blank">
                            <img className="link-redirect" src="/external-link.svg" alt="pokedex proyecto" />
                        </a>
                        <img className="img-project"
                            src={project[1].imagenSrc}
                            alt={project[1].nameProject}
                        />
                        <h3 className="title-project">
                            {project[0].nameProject}
                        </h3>
                        <p className="text-project">
                            {
                                viewport ? project[1].descripcion[0].paragraph + " " + project[1].descripcion[1].paragraph : project[1].descripcion[0].paragraph
                            }
                        </p>
                    </article>
                </div>
                <div className="gridContainer">
                    <article className="card-project">
                        <a rel="noopener noreferrer" className="redirect-project" href={project[2].link} target="_blank">
                            <img className="link-redirect" src="/external-link.svg" alt="pokedex proyecto" />
                        </a>
                        <img className="img-project"
                            src={project[2].imagenSrc}
                            alt={project[2].nameProject}
                        />
                        <h3 className="title-project">
                            {project[2].nameProject}
                        </h3>
                        <p className="text-project">
                            {
                                viewport ? project[2].descripcion[0].paragraph + " " + project[2].descripcion[1].paragraph : project[2].descripcion[0].paragraph
                            }
                        </p>
                    </article>
                    <article className="card-project">
                        <a rel="noopener noreferrer" className="redirect-project" href={project[3].link} target="_blank">
                            <img className="link-redirect" src="/external-link.svg" alt="pokedex proyecto" />
                        </a>
                        <img className="img-project"
                            src={project[3].imagenSrc}
                            alt={project[3].nameProject}
                        />
                        <h3 className="title-project">
                            {project[3].nameProject}
                        </h3>
                        <p className="text-project">
                            {
                                viewport ? project[3].descripcion[0].paragraph + " " + project[3].descripcion[1].paragraph : project[3].descripcion[0].paragraph
                            }
                        </p>
                        <label className="btnLabel" htmlFor="btn2">
                            <img src="/arrow-big-right.svg" alt="" />
                        </label>
                        <input id="btn2" type="checkbox" />
                    </article>
                </div>
            </section>
        </div>
    )
}





export default Cards;