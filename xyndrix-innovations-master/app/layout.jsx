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
      <body
        className="antialiased flex flex-col min-h-screen"
        style={{
          fontFamily: 'var(--bxp-charlie-text-font-family)',
          '--atlassian-recommended-system-fonts': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
          '--bxp-charlie-display-font-family': '"Charlie Display", var(--atlassian-recommended-system-fonts)',
          '--bxp-charlie-text-font-family': '"Charlie Text", var(--atlassian-recommended-system-fonts)'
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
