// app/layout.tsx
import type { Metadata } from "next";
import { AppRouterCacheProvider } from
  "@mui/material-nextjs/v16-appRouter";
import NavBar from "./components/navbar";

export const metadata: Metadata = {
  title: "My Site",
  description: "My site description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <NavBar />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}