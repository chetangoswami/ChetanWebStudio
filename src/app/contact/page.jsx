import ContactClient from './contact-client';

export const metadata = {
  title: 'Start a Project | Chetan Web Studio',
  description: 'Partner with Chetan Web Studio. We design and engineer $10k+ ultra-premium digital experiences for industry leaders.',
  openGraph: {
    title: 'Start a Project | Chetan Web Studio',
    description: 'Partner with Chetan Web Studio. We design and engineer $10k+ ultra-premium digital experiences for industry leaders.',
    url: 'https://chetanwebstudio.com/contact',
    type: 'website',
  }
};

export default function ContactPage() {
  return <ContactClient />;
}
