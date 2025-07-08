import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "کاوش جوش تهران | خانه",
  description: "شرکت پیشگام در صنعت جوشکاری و مهندسی با بیش از ۱۰ سال تجربه در ارائه خدمات تخصصی",
  keywords: "جوشکاری, مهندسی, مشاوره, بازرسی, کنترل کیفیت, تهران",
  authors: [{ name: "کاوش جوش تهران" }],
  creator: "کاوش جوش تهران",
  publisher: "کاوش جوش تهران",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kjt-co.ir"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "کاوش جوش تهران | خانه",
    description: "شرکت پیشگام در صنعت جوشکاری و مهندسی با بیش از ۱۰ سال تجربه در ارائه خدمات تخصصی",
    url: "https://kjt-co.ir",
    siteName: "کاوش جوش تهران",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "کاوش جوش تهران | خانه",
    description: "شرکت پیشگام در صنعت جوشکاری و مهندسی با بیش از ۱۰ سال تجربه در ارائه خدمات تخصصی",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-sans antialiased">
        <CustomCursor />
        <Header />
        <main className="min-h-screen">
        {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
