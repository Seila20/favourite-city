import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "e-City",
  description: "A nextjs app to search for cities around the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/city-title.png" />
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
