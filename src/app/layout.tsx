import type { Metadata } from "next";
import "./globals.css";
import Banner from "./components/banner";
import Footer from "./components/footer";
import NavigationBar from "./components/navigation-bar";
import ThemeProvider from "./toggle-theme-provider";

export const metadata: Metadata = {
  title: "Commune AI",
  description: "Renovating the way we build software for developers and communities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Banner />
          <NavigationBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
