import * as React from 'react';
import {HeadFC, PageProps} from 'gatsby';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <>
      <main className="page"></main>
    </>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About us</title>;
