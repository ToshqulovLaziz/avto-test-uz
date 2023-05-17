import React from "react";
import PropTypes from "prop-types";
import { Provider as LangProvider } from "./Language";

const Context = React.createContext(null);

const Provider = ({children}) => {
    return (
      <Context.Provider value={{}}>
        <LangProvider>{children}</LangProvider>
      </Context.Provider>
    );
}

Provider.propTypes = {
    children: PropTypes.object,
};

export {Context, Provider};