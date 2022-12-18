import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { AppProps } from "next/app";
import { AppContextProvider } from "../context";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  // const [user, setUser] = useState({ user: "Craudinho" });

  // return (
  //   <MyContext.Provider value={{ user, setUser }}>
  //     <Component {...pageProps} />
  //   </MyContext.Provider>
  // );
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}
