import * as React from 'react';
import {HeadFC, PageProps} from 'gatsby';
import {Topbar} from 'src/components/Topbar/Topbar';
import {Footer} from 'src/components/Footer/Footer';
import {PageHeaderNavbar} from 'src/components/Navbar/PageHeaderNavbar/PageHeaderNavbar';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <>
      <Topbar />
      <main className="page">
        <PageHeaderNavbar />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About us</title>;
