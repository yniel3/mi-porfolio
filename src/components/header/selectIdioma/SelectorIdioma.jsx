import '../../../i18n'; // inicialización de i18next
import "./selectorIdioma.css";
import { useTranslation } from "react-i18next"



function SelectorIdioma() {
    const LANGS = [
        { code: "es", name: "ES", flag: "es" },
        { code: "en", name: "EN", flag: "en" },
        { code: "pt", name: "PT", flag: "pt" },
        { code: "fr", name: "FR", flag: "fr" }
    ];
    const { i18n } = useTranslation();
    const handleLangChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    console.log(i18n)
    return (
        <select
            className="select-idioma" id="idioma" onChange={handleLangChange}
            value={i18n.resolvedLanguage }
            style={{ backgroundImage: `url(/assets/${i18n.resolvedLanguage }-flag.png)` }}
        >
            {
                LANGS.map(lang => (
                    <option
                        key={lang.code}
                        value={lang.code}
                        className="option-idioma"
                    >
                        {lang.name}
                        <img 
                            src={`/assets/${lang.flag}-flag.png`} alt={lang.name}
                            className="img-option"
                        />
                    </option>
                ))
            }
        </select>
    );
}

export default SelectorIdioma;
