/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LinguaAI",
  description:
    "AI Voice translator app to any language | Developed by Confidence Emonena",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "/logo.png",
            socialButtonsVariant: "iconButton",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0e78f9",
            colorBackground: "#171717",
            colorInputBackground: "#252a41",
            colorInputText: "#fff",
          },
        }}
      >
        <script src="./node_modules/preline/dist/preline.js"></script>
        <body className={inter.className}>{children}</body>
      </ClerkProvider>
    </html>
  );
}
