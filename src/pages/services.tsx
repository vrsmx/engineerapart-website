import * as React from 'react';
import {HeadFC, Link, PageProps} from 'gatsby';
import {ThreeColumnLayout} from 'src/components/ThreeColumnLayout/ThreeColumnLayout';

const layoutitems = [
  {
    title: 'Accurate search',
    content:
      'We perform an extensive search and selection process to hand-pick each candidate matching its experience and skills with your needs.',
    icon: <></>,
  },
  {
    title: 'Personalized filtering',
    content:
      'We follow a planned interview process to validate the candidate skills and experience to find the best fit.',
    icon: <></>,
  },
  {
    title: 'Permanent follow-up',
    content:
      'Weekly follow-ups and internal management with our hirees to provide constant feedback to both sides.',
    icon: <></>,
  },
];

const ServicesPage: React.FC<PageProps> = () => {
  return (
    <main className="page">
      <Link to="/">home</Link>
      <section className="page-container">
        <ThreeColumnLayout items={layoutitems} />
      </section>
    </main>
  );
};

export default ServicesPage;

export const Head: HeadFC = () => <title>Services Page</title>;
