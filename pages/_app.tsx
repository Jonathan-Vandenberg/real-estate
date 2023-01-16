import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { useClient } from "../lib/client";
import { Session } from "next-auth";

function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session;
}>) {
  const client = useClient();
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <Nav />
        <div className="pt-[6.1rem]">
          <Component {...pageProps} />
        </div>
        <Footer />
      </ApolloProvider>
    </SessionProvider>
  );
}

export default App;
