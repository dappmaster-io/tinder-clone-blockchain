import { MoralisProvider } from "react-moralis";
import { TinderProvider } from "../context/TinderContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://dlkioqh9ouzk.usemoralis.com:2053/server"
      appId="s0w2pljvtZVc2Mg8AJMUFWYg0SQgaAJGirK7Z1uY"
    >
      <TinderProvider>
        <Component {...pageProps} />
      </TinderProvider>
    </MoralisProvider>
  );
}

export default MyApp;
