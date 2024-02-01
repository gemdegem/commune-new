import type { Metadata } from "next";
import "./globals.css";
import Banner from "./components/banner";
import Footer from "./components/footer";
import NavigationBar from "./components/navigation-bar";
import ThemeProvider from "./toggle-theme-provider";

export const metadata: Metadata = {
  title: "Commune AI",
  description: "Commune AI is a cutting-edge platform leveraging artificial intelligence to foster community engagement and streamline communication. It offers intuitive tools for real-time interaction, analytics, and automated responses, making it easier for communities to connect, share, and grow together.",
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
