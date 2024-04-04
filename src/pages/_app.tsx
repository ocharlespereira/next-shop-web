/* eslint-disable @next/next/no-img-element */
import { globalStyles } from "@/styles/global";
import { AppProps } from "next/app";

import logoImage from "@/assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";

globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImage.src} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}

export default App;
