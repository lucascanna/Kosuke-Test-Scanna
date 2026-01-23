import Script from 'next/script';

import { Home } from '@/components/home';

export default function RootPage() {
  return (
    <>
      <HomepageStructuredData />
      <Home />
    </>
  );
}

const HomepageStructuredData = () => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://pippo.ai';

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PIPPO',
    description:
      'The complete platform for building, scaling, and monetizing web applications. Enterprise-ready tools for modern teams.',
    url: baseUrl,
    sameAs: ['https://github.com/pippo-ai'],
  };

  const softwareData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'PIPPO',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web Browser',
    description:
      'The complete platform with authentication, billing, database, and deployment features built-in for modern web applications.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'PIPPO',
    },
    programmingLanguage: ['TypeScript', 'JavaScript', 'React'],
    runtimePlatform: 'Node.js',
    codeRepository: 'https://github.com/pippo-ai',
  };

  return (
    <>
      <Script
        id="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      <Script
        id="software-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareData),
        }}
      />
    </>
  );
};
