import Head from 'next/head';

export default function SEO({
  title,
  description,
  canonicalPath = '/',
  ogImage = '/TvConsole.jpg',
  jsonLd,
}) {
  const canonicalUrl = `https://sharmawoodworks.com${canonicalPath === '/' ? '' : canonicalPath}`;
  const ogImageUrl = `https://sharmawoodworks.com${ogImage}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#231610" />
      <meta name="format-detection" content="telephone=yes" />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
      <link rel="apple-touch-icon" href="/logo.png" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Sharma Woodworks" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
}
