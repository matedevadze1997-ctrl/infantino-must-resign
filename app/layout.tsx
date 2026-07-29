import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://infantinomustresign.com"
  ),
  title: {
    default: "Infantino Must Resign",
    template: "%s | Infantino Must Resign",
  },
  description:
    "A public petition calling on FIFA's member associations and FIFA Council to demand the resignation of Gianni Infantino.",
  openGraph: {
    title: "Infantino Must Resign",
    description:
      "Add your name to a global call for accountable leadership in world football.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
