"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";

type ReactQueryProviderProps = {
  children: React.ReactNode;
};
const queryClient = new QueryClient();
export const ReactQueryProvider: FC<ReactQueryProviderProps> = (props) => {
  const { children } = props;
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
