import WorkClient from './work-client';

export const metadata = {
  title: 'Selected Works | Chetan Web Studio',
  description: 'Explore our portfolio of award-winning, high-performance WebGL websites and digital experiences crafted for elite brands.',
  openGraph: {
    title: 'Selected Works | Chetan Web Studio',
    description: 'Explore our portfolio of award-winning, high-performance WebGL websites and digital experiences crafted for elite brands.',
    url: 'https://chetanwebstudio.com/work',
    type: 'website',
  }
};

export default function WorkPage() {
  return <WorkClient />;
}
