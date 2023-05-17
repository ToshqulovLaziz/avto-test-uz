import React from "react";
import {Fragment} from "react";
import { lang } from "../../localization/localization";
import { Link } from "react-router-dom";
// import { Context as LangContext } from "../../context/Language";
import "./home.scss";

const Home = () => {

//  const [language, setLanguage] = React.useContext(LangContext); 
const [language, setLanguage] = React.useState(
  localStorage.getItem("language") || "uz"
);

  const changeLanguage = (value) => {
    localStorage.setItem("language", value);
    setLanguage(value);
  };
    return (
      <Fragment>
        <main className="main">
          <div className="container">
            <div className="main__top">
              <h1 className="main__title">{lang[language].mainTitle.title}</h1>
              <select
                className="form-select main__select"
                name="lang"
                value={language}
                onChange={(evt) => changeLanguage(evt.target.value)}
              >
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
            </div>

            <h2 className="main__subtitle">
              {lang[language].mainTitle.subtitle}
            </h2>
            <div className="main__wrapper">
              <Link className="main__wrapper--link" to="/easy">
                {lang[language].level.easy}: 8 min
              </Link>
              <Link className="main__wrapper--link" to="/medium">
                {lang[language].level.medium}: 5 min
              </Link>
              <Link className="main__wrapper--link" to="/hard">
                {lang[language].level.hard}: 3 min
              </Link>
            </div>
          </div>
        </main>
      </Fragment>
    );
}

export default Home;