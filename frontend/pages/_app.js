import "../styles/global.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps, session }) {
  console.log(`session: ${session}`);
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
