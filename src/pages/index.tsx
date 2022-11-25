import * as React from 'react';
import type {HeadFC, PageProps} from 'gatsby';
import {Navbar} from 'src/components/Navbar/Navbar';
import {GlobalHead} from 'src/components/GlobalHeader/GlobalHead';
import {Topbar} from 'src/components/Topbar/Topbar';
import {Hero} from 'src/modules/Hero/Hero';
import {ClientsSection} from 'src/modules/Clients/Clients';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Topbar />
      <main className="page">
        <Navbar />
        <Hero />
        <ClientsSection />
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <GlobalHead>
    <title>Home Page</title>
  </GlobalHead>
);
