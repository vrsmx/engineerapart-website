import * as React from 'react';
import {HeadFC, Link, PageProps} from 'gatsby';
import {PageHeaderNavbar} from 'src/components/Navbar/PageHeaderNavbar/PageHeaderNavbar';
import {PageHeader} from 'src/components/PageHeader/PageHeader';
import {Topbar} from 'src/components/Topbar/Topbar';

const ContactPage: React.FC<PageProps> = () => {
  return (
    <main className="page">
      <Topbar color="black" />
      <PageHeaderNavbar light={true} />
      <section className="bg-black full-width">
        <PageHeader
          title="Our team of experts are ready to help"
          underline="Doesn’t matter the problem, If it’s software we can help you."
          cta={
            <Link className="button primary big" to="/contact">
              Call the experts
            </Link>
          }
        />
      </section>
    </main>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <title>Contact Page</title>;
