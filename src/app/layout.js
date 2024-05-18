import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AdoNimeList",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation bar layout */}
        <div>JANGAN BOSEN SAMA GUE :P</div> 
        {children}
      </body>
    </html>
  );
}
