import type { Metadata } from "next";
import { Crete_Round, Work_Sans } from "next/font/google";
import { ChildProps } from "@/types";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const creteRound = Crete_Round({
  weight: ["400"],
  subsets: ["latin"],
  variable: '--font-creteRound'
});

const workSans = Work_Sans({
  weight: ['500', '600'],
  subsets: ["latin"],
  variable: '--font-workSans'
});

export const metadata: Metadata = {
  title: "Blog App",
  description: "Dasturlash haqida yangiliklar, maslahatlar va dasturlash sohasidagi eng so'nggi xabarlar. Bizning blogda dasturlashni o'rganish va rivojlantirish uchun qo'llanma topishingiz mumkin.",
};

function RootLayout({ children }: ChildProps ) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${creteRound.variable} ${workSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;