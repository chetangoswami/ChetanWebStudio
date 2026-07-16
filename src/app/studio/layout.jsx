export const metadata = {
  title: 'Studio | Chetan Web Studio',
  description: 'Inside our brutalist digital agency and elite engineering practices.',
  openGraph: {
    title: 'Studio | Chetan Web Studio',
    description: 'Inside our brutalist digital agency and elite engineering practices.',
    url: 'https://chetanwebstudio.com/studio',
  },
};

export default function StudioLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Studio - Chetan Web Studio",
            "description": "Inside our brutalist digital agency and elite engineering practices.",
            "url": "https://chetanwebstudio.com/studio"
          })
        }}
      />
      {children}
    </>
  );
}
