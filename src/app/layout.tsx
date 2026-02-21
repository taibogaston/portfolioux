import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "Maitena - UX/UI Designer Portfolio",
  description: "Professional UX/UI Designer specializing in modern, tech-focused design solutions",
  keywords: ["UX Design", "UI Design", "Portfolio", "Designer", "Tech"],
  authors: [{ name: "Maitena" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <body
        className={`${satoshi.variable} ${satoshi.className} antialiased bg-background text-foreground overflow-x-hidden`}
        style={{ backgroundColor: '#0d0d0d' }}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
