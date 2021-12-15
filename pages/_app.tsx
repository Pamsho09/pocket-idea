import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppContext } from "../context/AppContext";
import { useInitialState } from "../hook/useInitialState";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
padding: 0;
margin: 0;
font-family: 'Roboto', sans-serif;
body{
    max-width: 450px;
margin: auto;
overflow: hidden;
position: relative;
}
`
function MyApp({ Component, pageProps }: AppProps) {
  const initialState = useInitialState();
 
  return (
    <AppContext.Provider value={initialState}>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
