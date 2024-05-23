import "@/env";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
// import { Client, Provider, cacheExchange, fetchExchange } from 'urql';
import TanstackProvider from "@/Providers/TanstackProvider";
import { Footer } from "@/components/custom/Footer";
import { ThemeProvider } from "../Providers/ThemeProvider";
import Header from "../components/custom/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: 'swap', variable: "--font-inter" });
const fira_code = Fira_Code({ subsets: ["latin"], display: 'swap', variable: "--font-fira_code" });

export const metadata: Metadata = {
  title: "i-code.xyz",
  description: "Mon portfolio",
};
// const client = new Client({
//   url: 'http://localhost:8055/graphql',
//   exchanges: [cacheExchange, fetchExchange],
//   // fetchOptions: () => {
//   //    const token = getToken();
//   //    return {
//   //      headers: { authorization: token ? `Bearer ${token}` : '' },
//   //    };
//   //  },
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(
      "min-h-screen bg-background",
      inter.className,
      fira_code.className
    )}>
      <body className="font-inter relative antialiased">
        <TanstackProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div>
              <Header />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
