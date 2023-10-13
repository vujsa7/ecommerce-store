import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Provider from "./components/Provider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FullstackWiz Admin",
  description: "Admin For FullStack Wiz Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
