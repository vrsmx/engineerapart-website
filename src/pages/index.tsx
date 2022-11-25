import * as React from 'react';
import type {HeadFC, PageProps} from 'gatsby';
import {GlobalHead} from 'src/components/GlobalHeader/GlobalHead';
import {Navbar} from 'src/components/Navbar/Navbar';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="page-container">
      <Navbar />
      <h1>
        Start
        <br />
        Scale
        <br />
        Accelerate
      </h1>
      <h2>
        Build or grow your software development teams with cost-effective expert
        engineers specialized in product driven development
      </h2>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <GlobalHead>
    <title>Home Page</title>
  </GlobalHead>
);
