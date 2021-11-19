import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppContext } from "../context/AppContext";
import { useInitialState } from "../hook/useInitialState";
function MyApp({ Component, pageProps }: AppProps) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      {" "}
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
