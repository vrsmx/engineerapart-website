import * as React from 'react';
import type {HeadFC, PageProps} from 'gatsby';
import {PageHeaderNavbar} from 'src/components/Navbar/PageHeaderNavbar/PageHeaderNavbar';
import {GlobalHead} from 'src/components/GlobalHeader/GlobalHead';
import {Topbar} from 'src/components/Topbar/Topbar';
import {HomeHeader} from 'src/modules/HomeHeader/HomeHeader';
import {ClientsSection} from 'src/modules/Clients/Clients';
import {ValueProposition} from 'src/modules/ValueProposition/ValueProposition';
import {ProcessValue} from 'src/modules/ProcessValue/ProcessValue';
import {ClientSocialProof} from 'src/modules/ClientSocialProof/ClientSocialProof';
import {Footer} from 'src/components/Footer/Footer';
import {ContactFormWizard} from 'src/modules/ContactFormWizard/ContactFormWizard';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Topbar />
      <main className="page">
        <PageHeaderNavbar />
        <HomeHeader />
        <ClientsSection />
        <ValueProposition />
        <ProcessValue />
        <ClientSocialProof
          review="”Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi convallis
          facilisis id in vivamus turpis. Faucibus suspendisse molestie congue
          imperdiet lorem pretium.”"
          name="Someone from Client"
          position="Position inside client"
        />
        <ContactFormWizard />
        <Footer />
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
