import Head from "next/head";
import { useSession, getSession } from "next-auth/react";
import { NextPageContext } from "next";
import { Box } from "@chakra-ui/react";

import Chat from "../components/Chat/Chat";
import Auth from "../components/auth/Auth";

export default function Home() {
  const { data: session } = useSession();

  const reloadedSession = () => {};

  return (
    <>
      <Head>
        <title>iMessage Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://drive.google.com/uc?id=1AjomAgj4yxhOd1R0otMEo65f7lPzr2rh"
        />
      </Head>
      <Box>
        {session?.user?.username ? (
          <Chat />
        ) : (
          <Auth session={session} reloadedSession={reloadedSession} />
        )}
      </Box>
    </>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  return {
    props: {
      session: session,
    },
  };
}
