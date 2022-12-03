import * as React from 'react';
import {HeadFC, Link, PageProps} from 'gatsby';
import {PageHeaderNavbar} from 'src/components/Navbar/PageHeaderNavbar/PageHeaderNavbar';
import {PageHeader} from 'src/components/PageHeader/PageHeader';
import {Topbar} from 'src/components/Topbar/Topbar';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <>
      <main className="page">
        <Topbar color="black" />
        <PageHeaderNavbar light={true} />
        <section className="bg-black full-width">
          <PageHeader
            title="Building teams that deliver solutions"
            underline="Building high quality and scalable solutions from its foundations is key for the success of any company."
            cta={
              <Link className="button primary big" to="/contact">
                Build your team
              </Link>
            }
          />
        </section>
      </main>
    </>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About us</title>;
