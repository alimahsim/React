import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
    return(
        <ThemeContext.Provider value="Hey">{children}</ThemeContext.Provider>
    );
};