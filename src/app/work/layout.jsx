export const metadata = {
  title: 'Our Work | Chetan Web Studio',
  description: 'Explore our portfolio of premium web experiences and digital monopolies.',
  openGraph: {
    title: 'Our Work | Chetan Web Studio',
    description: 'Explore our portfolio of premium web experiences and digital monopolies.',
    url: 'https://chetanwebstudio.com/work',
  },
};

export default function WorkLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Our Work - Chetan Web Studio",
            "description": "Portfolio of premium digital experiences.",
            "url": "https://chetanwebstudio.com/work"
          })
        }}
      />
      {children}
    </>
  );
}
