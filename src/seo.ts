// Per-page <head> tags and structured data, applied at build time by the
// prerender() export in main.tsx. Add an entry here for every new route.
import { APP_STORE_URL } from "@/components/DownloadCTA";
import { faqs } from "@/data/faqs";

export const SITE_URL = "https://www.scriptlyapp.com";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

type PageMeta = {
  title: string;
  description: string;
  jsonLd?: object;
};

const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Scriptly",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/Scriptly_Circle_Logo.png`,
  email: "support@scriptlyapp.com",
  sameAs: [
    "https://instagram.com/scriptlyapp",
    "https://www.tiktok.com/@scriptlyactingapp",
    APP_STORE_URL,
  ],
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    organization,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Scriptly",
      url: `${SITE_URL}/`,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "MobileApplication",
      name: "Scriptly: AI Acting Rehearsal",
      description:
        "Scriptly is an AI acting rehearsal app for iPhone and iPad. Actors upload a script, and Scriptly reads the other characters' lines so they can run lines, memorize scenes, and analyze their character before auditions.",
      operatingSystem: "iOS",
      applicationCategory: "EducationalApplication",
      url: APP_STORE_URL,
      installUrl: APP_STORE_URL,
      image: OG_IMAGE,
      publisher: { "@id": `${SITE_URL}/#organization` },
      offers: {
        "@type": "Offer",
        price: "14.99",
        priceCurrency: "USD",
        description: "Monthly subscription with a 7-day free trial, billed through the App Store.",
      },
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export const PAGES: Record<string, PageMeta> = {
  "/": {
    title: "Scriptly | AI App for Actors to Rehearse, Run Lines, and Prepare for Auditions",
    description:
      "Scriptly helps actors rehearse scripts, run lines, and memorize lines with AI-powered coaching and script reader tools for stronger audition prep. Available on iOS.",
    jsonLd: homeJsonLd,
  },
  "/about": {
    title: "About Scriptly | The AI Acting Rehearsal App Built for Actors",
    description:
      "Scriptly combines AI with time-tested acting technique so actors can rehearse scripts, run lines, and prepare for auditions with clarity. Learn our mission and values.",
  },
  "/support": {
    title: "Scriptly Support Center | App User Guide and Help",
    description:
      "Step-by-step guides for every part of the Scriptly app: uploading scripts, rehearsal mode, AI insights, visuals, notes, and practice tools.",
  },
  "/faq": {
    title: "Scriptly FAQ | Pricing, Devices, and How the AI Acting App Works",
    description:
      "Answers about Scriptly: how the AI rehearsal app works, pricing ($14.99/month after a 7-day free trial), iPhone and iPad support, and memorizing lines.",
    jsonLd: faqJsonLd,
  },
  "/feedback": {
    title: "Send Feedback | Scriptly",
    description:
      "Tell us what you love about Scriptly, what could be better, or ideas for new features. Your feedback shapes the AI acting rehearsal app.",
  },
  "/community": {
    title: "Join the Scriptly Community | Discord Waitlist for Actors",
    description:
      "We're building a Discord for actors to connect, rehearse, and grow together. Join the Scriptly community waitlist to get an invite when it opens.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Scriptly",
    description:
      "How Scriptly collects, uses, and protects your information. Scripts, notes, and audio are stored locally on your device.",
  },
  "/terms-of-service": {
    title: "Terms of Service | Scriptly",
    description:
      "The terms that govern your use of the Scriptly AI acting rehearsal app, including script uploads, AI features, and subscriptions.",
  },
};

const NOT_FOUND: PageMeta = {
  title: "Page Not Found | Scriptly",
  description: "This page doesn't exist. Head back to Scriptly, the AI acting rehearsal app for actors.",
};

type HeadElement = { type: string; props: Record<string, string> };

export function headFor(url: string) {
  const page = PAGES[url];
  const meta = page ?? NOT_FOUND;
  const canonical = `${SITE_URL}${url}`;
  const elements: HeadElement[] = [
    { type: "meta", props: { name: "description", content: meta.description } },
    { type: "meta", props: { property: "og:title", content: meta.title } },
    { type: "meta", props: { property: "og:description", content: meta.description } },
    { type: "meta", props: { name: "twitter:title", content: meta.title } },
    { type: "meta", props: { name: "twitter:description", content: meta.description } },
  ];

  if (page) {
    elements.push(
      { type: "link", props: { rel: "canonical", href: canonical } },
      { type: "meta", props: { property: "og:url", content: canonical } },
      { type: "meta", props: { name: "twitter:url", content: canonical } },
    );
  } else {
    elements.push({ type: "meta", props: { name: "robots", content: "noindex" } });
  }

  if (meta.jsonLd) {
    elements.push({
      type: "script",
      props: {
        type: "application/ld+json",
        // Escape "<" so the JSON can never close the script tag early
        children: JSON.stringify(meta.jsonLd).replace(/</g, "\\u003c"),
      },
    });
  }

  return { lang: "en", title: meta.title, elements: new Set(elements) };
}
