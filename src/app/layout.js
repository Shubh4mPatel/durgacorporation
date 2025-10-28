import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ContactUs from "./components/contact-us/ContactUs";
import Head from "next/head";
export const metadata = {
  title: 'Durga Corporation',
  icons: {
    icon: '/images/DC_logo.svg',
    shortcut: '/images/DC_logo.svg',
    apple: '/images/DC_logo.svg',
  },
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <>
     <Head>
        <link
          rel="preload"
          as="image"
          href="/images/footer.gif"
          fetchpriority="high"
        />
      </Head>
    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <div className="app-container">
          <Header />
          <main className="main-content">
            {children}
          </main>
          <ContactUs />
          <Footer />
        </div>
      </body>
    </html>
    </>
  );
}
