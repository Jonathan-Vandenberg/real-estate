import { useMemo } from "react";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import ApolloLinkTimeout from "apollo-link-timeout";

const protocol = `${
  process.env.NODE_ENV === "development" ? "http" : "https"
}://`;

const host =
  typeof window === "undefined"
    ? process.env.NEXT_PUBLIC_VERCEL_URL || "localhost:3000"
    : // Use host on the client since using VERCEL_URL can lead to CORS errors due to aliases
      window.location.host;

export const origin = `${protocol}${host}`;

const timeoutLink = new ApolloLinkTimeout(60000); // 10 second timeout

const httpLink = new HttpLink({
  uri: `${origin}/api`,
});

const timeoutHttpLink = timeoutLink.concat(httpLink);

export const useClient = () => {
  const client = useMemo(
    () =>
      new ApolloClient({
        link: timeoutHttpLink,
        cache: new InMemoryCache(),
      }),
    []
  );
  return client;
};
