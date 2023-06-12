import { useState } from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Global, ThemeProvider } from "@emotion/react";

import globalStyles from "shared/styles/globalStyles";
import { theme } from "shared/styles/globalTheme";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: { queries: { retry: 0 } } }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
