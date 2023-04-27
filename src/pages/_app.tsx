import Head from "next/head";
import { AppProps, AppType } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { theme, createEmotionCache } from "../theme";
import "@/styles/globals.css";
import { Box, Container } from "@mui/material";
import Header from "@/frontend/components/_common/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import "moment/locale/ko";
import moment from "moment";

const queryClient = new QueryClient();
const clientSideEmotionCache = createEmotionCache();

moment.locale("ko");

interface JbPageAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const JbPageApp: AppType<JbPageAppProps> = (props: JbPageAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: "relative" }}>
            <Header />
            <Container>
              <Component {...pageProps} />
            </Container>
          </Box>
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
};

export default JbPageApp;
