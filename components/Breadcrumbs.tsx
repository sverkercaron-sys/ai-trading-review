import Link from 'next/link';

export type BreadcrumbItem = {
  name: string;
  href: string;
};

const siteUrl = 'https://ai-trading-review.vercel.app';

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.href}`,
    })),
  };

  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        {items.map((item, index) => (
          <span key={item.href}>
            {index > 0 && <span className="breadcrumb-separator">/</span>}
            {index === items.length - 1 ? (
              <span aria-current="page">{item.name}</span>
            ) : (
              <Link href={item.href}>{item.name}</Link>
            )}
          </span>
        ))}
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
