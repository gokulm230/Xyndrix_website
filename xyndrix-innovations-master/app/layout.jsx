import Header from "./Components/header";
import Footer from "./Components/footer";
import FloatingWhatsApp from "./Components/ui/floating-whatsapp";
import FloatingRobot from "./Components/ui/floating-robot";
import MobileFloatingRobot from "./Components/ui/mobile-floating-robot";
import "./globals.css";

export const metadata = {
  title: "Xyndrix | Innovating the Future of Software Technology",
  description: "At Xyndrix, we empower businesses with cutting-edge technology solutions to thrive in the digital era.",
  icons: [
    { rel: 'icon', url: '/xyndrix.png' },
    { rel: 'apple-touch-icon', url: '/xyndrix.png' },
    { rel: 'shortcut icon', url: '/xyndrix.png' }
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body
        className="antialiased flex flex-col min-h-screen"
        style={{
          fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp phoneNumber="9488345831" />
        <FloatingRobot />
        <MobileFloatingRobot />
      </body>
    </html>
  );
}
