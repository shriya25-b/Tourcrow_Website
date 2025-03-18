import type { Metadata } from "next";
import { Montserrat_Alternates } from 'next/font/google';
import "./globals.css";


const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "TourCrow",
  description: "Bridging the gap with influencers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserratAlternates.className}
      >
        {children}
      </body>
    </html>
  );
}
