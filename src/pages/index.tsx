import * as React from 'react';
import type {HeadFC, PageProps} from 'gatsby';
import {PageHeaderNavbar} from 'src/components/Navbar/PageHeaderNavbar/PageHeaderNavbar';
import {GlobalHead} from 'src/components/GlobalHeader/GlobalHead';
import {Topbar} from 'src/components/Topbar/Topbar';
import {HomeHeader} from 'src/modules/Home/HomeHeader/HomeHeader';
import {ClientsSection} from 'src/modules/Home/Clients/Clients';
import {ValueProposition} from 'src/modules/Home/ValueProposition/ValueProposition';
import {ProcessValue} from 'src/modules/Home/ProcessValue/ProcessValue';
// import {ClientSocialProof} from 'src/modules/Home/ClientSocialProof/ClientSocialProof';
import {Footer} from 'src/components/Footer/Footer';
import {ContactFormWizard} from 'src/modules/Shared/ContactFormWizard/ContactFormWizard';
import {CookiePopUp} from 'src/components/CookiePopUp/CookiePopUp';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <main className="page">
        <Topbar color="blue" />
        <PageHeaderNavbar />
        <HomeHeader />
        <ClientsSection />
        <ValueProposition />
        <ProcessValue />
        {/* <ClientSocialProof
          review="”Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi convallis
          facilisis id in vivamus turpis. Faucibus suspendisse molestie congue
          imperdiet lorem pretium.”"
          name="Someone from Client"
          position="Position inside client"
        /> */}
        <ContactFormWizard />
      </main>
      <Footer />
      <CookiePopUp />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <GlobalHead>
    <title>Home Page</title>
  </GlobalHead>
);
