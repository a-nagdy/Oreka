import { Inter } from "next/font/google";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oreka",
  description: "Oreka The Best Online Shopping Store",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark:bg-gray-800 dark:border-gray-700 dark:text-orange-400`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
