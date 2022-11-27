import * as React from 'react';
import type {HeadFC, PageProps} from 'gatsby';
import {PageHeaderNavbar} from 'src/components/Navbar/PageHeaderNavbar/PageHeaderNavbar';
import {GlobalHead} from 'src/components/GlobalHeader/GlobalHead';
import {Topbar} from 'src/components/Topbar/Topbar';
import {HomeHeader} from 'src/modules/HomeHeader/HomeHeader';
import {ClientsSection} from 'src/modules/Clients/Clients';
import {ValueProposition} from 'src/modules/ValueProposition/ValueProposition';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Topbar />
      <main className="page">
        <PageHeaderNavbar />
        <HomeHeader />
        <ClientsSection />
        <ValueProposition />
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
