import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Layout from "./Layout/Layout.js"
import { GlobalStyle } from "./Styles/globalStyles.js"
import { darkTheme, lightTheme } from "./Styles/theme.js"
import Routing from "./Routing.js";

export const ThemeContext = React.createContext(null);

const ParentHomepage = () => {
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === "light" ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyle />
                <Helmet>
                    <title>Sidebar - Code Focus</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                </Helmet>
                <>
                    <Layout>
                        <Routing />
                    </Layout>
                </>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ParentHomepage;