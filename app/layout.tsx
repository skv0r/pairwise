import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./ui/Header/Header";
import ScrollToTop from "./ui/ScrollToTop/ScrollToTop";
import DemoAuthProvider from "./providers/DemoProvider";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PairWise",
  description: "Найди себе место с компаньоном",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
      <html
          lang="ru"
          className={manrope.variable}
      >
          <body className={manrope.className}>
              <DemoAuthProvider>
                  <ScrollToTop />
                  <Header />
                  {children}
              </DemoAuthProvider>
          </body>
      </html>
  );
}
