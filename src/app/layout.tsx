import type { Metadata } from 'next';
import './globals.css';
import Banner from './components/banner';
import Footer from './components/footer';
import NavigationBar from './components/navigation-bar';
import ThemeProvider from './toggle-theme-provider';


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
  )
}
