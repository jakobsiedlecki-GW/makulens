import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Praxis Dr. Vlachou-Vaterrodt | Augenheilkunde in Grünwald",
  description: "Praxis Dr. Vlachou-Vaterrodt – persönliche Augenheilkunde in Grünwald.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
