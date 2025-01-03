import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";
import ThemeComponent from "./components/ThemeComponent";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeModeScript } from "flowbite-react";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Juniors' Thoughts",
  description:
    "Blog created to share thoughts and ideas that might not be too deep naturally",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <ThemeModeScript />
        </Head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider>
            <ThemeComponent>
              <Header />
              {children}
              <Footer />
            </ThemeComponent>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
