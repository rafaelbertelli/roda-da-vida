import Head from "next/head";
import styles from "../styles/Home.module.css";

import Button from "@mui/material/Button";
import { QUIZ } from "../@config/paths";

export default function Home() {
  return (
    <>
      <Head>
        <title>Roda da vida</title>
        <meta name="description" content="Roda da vida" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.wellcomeMessage}>A Roda da vida</h1>

        <Button variant="contained" href={QUIZ}>
          Começar
        </Button>
      </main>
    </>
  );
}
