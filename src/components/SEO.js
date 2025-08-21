import Head from "next/head";
import SEO_CONFIG from "@/data/seo.config";

export default function SEO({ page }) {
  const meta = SEO_CONFIG[page] || SEO_CONFIG.default;

  return (
    <Head>
      <title>{meta.title} | Good Luck Digital Photo Studio</title>
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />

      {/* Favicons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/images/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#ed6079" />
      <meta name="msapplication-TileColor" content="#ed6079" />
      <meta name="theme-color" content="#ed6079" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={meta.url} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Head>
  );
}
