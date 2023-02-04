import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/global/Footer";
import Nav from "../components/global/Nav";
import { useClient } from "../lib/client";
import { Session } from "next-auth";
import { Provider } from "react-redux";
import store from "../store/store";

function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session;
}>) {
  const client = useClient();
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Nav />
          <div className="pt-navigation-height">
            <Component {...pageProps} />
          </div>
        </ApolloProvider>
        <Footer />
      </Provider>
    </SessionProvider>
  );
}

export default App;
