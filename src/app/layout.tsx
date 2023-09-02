import "../shared/static/styles/global.scss";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";

import Loading from "@/app/loading";
import { ReactQueryProvider } from "@/shared/api/react-query-provider";
import { Container } from "@/shared/ui/container";
import { Loader } from "@/shared/ui/loader";
import { HeaderBar } from "@/widgets/header-bar/ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "online-store",
  description: "online-store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <HeaderBar />
          <Suspense fallback={<p>...loading</p>}>
            <Container>{children}</Container>
          </Suspense>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
