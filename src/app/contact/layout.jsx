export const metadata = {
  title: 'Contact | Chetan Web Studio',
  description: 'Initiate a project and scale your brand with Chetan Web Studio.',
  openGraph: {
    title: 'Contact | Chetan Web Studio',
    description: 'Initiate a project and scale your brand with Chetan Web Studio.',
    url: 'https://chetanwebstudio.com/contact',
  },
};

export default function ContactLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact - Chetan Web Studio",
            "description": "Initiate a project with Chetan Web Studio.",
            "url": "https://chetanwebstudio.com/contact"
          })
        }}
      />
      {children}
    </>
  );
}
