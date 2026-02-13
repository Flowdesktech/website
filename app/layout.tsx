import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flowdesk — AI-Powered Software Development | Full Stack Engineer for Hire",
  description:
    "Flowdesk delivers production-ready web apps, mobile apps, and AI solutions faster. Hire a senior full stack engineer who has shipped dozens of real-world business applications for clients worldwide.",
  keywords: [
    "full stack developer",
    "software engineer for hire",
    "AI development",
    "web application development",
    "React developer",
    "Node.js developer",
    "mobile app developer",
    "custom software",
    "freelance developer",
    "Flowdesk",
  ],
  authors: [{ name: "Flowdesk" }],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: { canonical: "https://flowdesk.tech/" },
  openGraph: {
    type: "website",
    url: "https://flowdesk.tech/",
    title: "Flowdesk — AI-Powered Software Development | Full Stack Engineer for Hire",
    description:
      "Production-ready web apps, mobile apps, and AI solutions — delivered faster. Hire a senior full stack engineer who has shipped dozens of business apps worldwide.",
    siteName: "Flowdesk",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowdesk — AI-Powered Software Development",
    description:
      "Production-ready web apps, mobile apps, and AI solutions — delivered faster by a senior full stack engineer.",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='18' fill='%232563eb'/><text x='50' y='68' font-size='55' font-weight='bold' fill='white' text-anchor='middle' font-family='system-ui'>F</text></svg>",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Flowdesk",
    url: "https://flowdesk.tech",
    description:
      "AI-driven development studio delivering production-ready web apps, mobile apps, and AI solutions for businesses worldwide.",
    email: "contact@flowdesk.tech",
    address: { "@type": "PostalAddress", addressCountry: "US" },
    sameAs: ["https://github.com/flowdesktech"],
    knowsAbout: [
      "Web Development", "Mobile App Development", "AI Integration", "React",
      "Node.js", "TypeScript", "Next.js", "Firebase", "Swift", "Kotlin",
      "React Native", "Flutter", "Python", "Machine Learning", "OpenAI",
      "LangChain", "AWS", "Google Cloud", "Docker", "Kubernetes",
      "Blockchain", "Solidity", "Web3",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Stack Web Development", description: "End-to-end web application development using React, Node.js, Next.js and modern frameworks." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development", description: "Native iOS, Android, and cross-platform mobile applications." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & Machine Learning Integration", description: "Custom AI solutions, LLM integration, automation, and intelligent features." } },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Flowdesk Developer",
    jobTitle: "Senior Full Stack Software Engineer",
    url: "https://flowdesk.tech",
    email: "contact@flowdesk.tech",
    description: "Senior full stack software engineer focused on delivering faster, better results with AI.",
    knowsAbout: [
      "React", "Node.js", "TypeScript", "Next.js", "JavaScript", "Swift",
      "iOS", "Android", "Kotlin", "Java", "React Native", "Flutter",
      "MongoDB", "PostgreSQL", "Firebase", "Redis", "MySQL", "AWS",
      "Google Cloud", "Azure", "Docker", "Kubernetes", "Solidity",
      "Ethereum", "Web3", "Python", "TensorFlow", "OpenAI",
      "Machine Learning", "LangChain", "REST APIs", "GraphQL",
    ],
    worksFor: { "@type": "Organization", name: "Flowdesk", url: "https://flowdesk.tech" },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Flowdesk",
    url: "https://flowdesk.tech",
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {jsonLd.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </head>
      <body className="text-white bg-gray-950 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
