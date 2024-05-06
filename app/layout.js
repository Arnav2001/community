import { Inter } from "next/font/google";
import "./globals.css";
import { MantineProvider } from "@mantine/core";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Kreatr",
  description: "Kreatr Website description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><MantineProvider>{children}</MantineProvider></body>
    </html>
  );
}
