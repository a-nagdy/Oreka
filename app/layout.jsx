import QueryProvider from "@/util/provider";
import { Suspense } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import "./globals.css";
import Loading from "./loading";
import { Providers } from "./providers";

export const metadata = {
  title: "Oreka",
  description: "Oreka The Best Online Shopping Store",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-800 dark:border-gray-700 dark:text-orange-400">
        <Suspense fallback={<Loading />}>
          <Providers>
            <QueryProvider>
              <Navbar />
              {children}
              <Footer />
            </QueryProvider>
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
