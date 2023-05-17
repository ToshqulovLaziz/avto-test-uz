import React from "react";
import PropTypes from "prop-types";

const Context = React.createContext();

const Provider = ({children}) => {
    const [language, setLanguage] = React.useState(
      localStorage.getItem("language") || "uz"
    );

    return (
        <Context.Provider value={{
            language,
            setLanguage
        }}>
            {children}
        </Context.Provider>
    )
}

Provider.propTypes = {
  children: PropTypes.object,
};

export {Context, Provider};