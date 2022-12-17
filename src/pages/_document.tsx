import Container from "@mui/material/Container";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <Container maxWidth="md">
        <body>
          <Main />
          <NextScript />
        </body>
      </Container>
    </Html>
  );
}
