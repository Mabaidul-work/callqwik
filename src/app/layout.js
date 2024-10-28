import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "CallQwik AI: 3x Your Pipeline with a 24/7 AI Receptionist",
  description:
    "CallQwik AI's 24/7 AI Receptionist triples your pipeline by capturing leads around the clock. Streamline engagement and maximize growth effortlessly",
  keywords: ["AI receptionist"],
  authors: [{ name: "Callqwik AI" }],
  creator: "Callqwik AI",
  publisher: "Callqwik AI",
  alternates: {
    canonical: "https://callqwik.ai/",
  },
  icons: {
    icon: "https://isometrik-website-bucket.s3.ap-south-1.amazonaws.com/website_logo_3_45d1d58b1d.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://callqwik.ai/",
    title: "CallQwik AI: 3x Your Pipeline with a 24/7 AI Receptionist",
    description:
      "CallQwik AI's 24/7 AI Receptionist triples your pipeline by capturing leads around the clock. Streamline engagement and maximize growth effortlessly",
    siteName: "CallQwik AI: 3x Your Pipeline with a 24/7 AI Receptionist",
    images: [
      {
        url: "https://isometrik-website-bucket.s3.ap-south-1.amazonaws.com/website_logo_3_45d1d58b1d.svg",
        width: 1200,
        height: 630,
        alt: "Callqwik AI Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CallQwik AI: 3x Your Pipeline with a 24/7 AI Receptionist",
    description:
      "CallQwik AI's 24/7 AI Receptionist triples your pipeline by capturing leads around the clock. Streamline engagement and maximize growth effortlessly",
    creator: "@Callqwik AI",
    images: [
      "https://isometrik-website-bucket.s3.ap-south-1.amazonaws.com/website_logo_3_45d1d58b1d.svg",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Corporation",
                  "@id": "https://callqwik.ai/#organization",
                  name: "Callqwik AI",
                  alternateName: "Callqwik AI",
                  url: "https://callqwik.ai/",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://isometrik-website-bucket.s3.ap-south-1.amazonaws.com/website_logo_3_45d1d58b1d.svg",
                  },
                  description:
                    "CallQwik AI's 24/7 AI Receptionist triples your pipeline by capturing leads around the clock. Streamline engagement and maximize growth effortlessly",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://callqwik.ai/#website",
                  url: "https://callqwik.ai/",
                  name: "CallQwik AI",
                  publisher: {
                    "@id": "https://callqwik.ai/#organization",
                  },
                  inLanguage: "en-US",
                },
                {
                  "@type": "WebPage",
                  "@id": "https://callqwik.ai/#webpage",
                  url: "https://callqwik.ai/",
                  name: "CallQwik AI: 3x Your Pipeline with a 24/7 AI Receptionist",
                  isPartOf: {
                    "@id": "https://callqwik.ai/#website",
                  },
                  about: {
                    "@id": "https://callqwik.ai/#organization",
                  },
                  description:
                    "CallQwik AI's 24/7 AI Receptionist triples your pipeline by capturing leads around the clock. Streamline engagement and maximize growth effortlessly",
                  inLanguage: "en-US",
                },
              ],
            }),
          }}
          strategy="beforeInteractive"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
