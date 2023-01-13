import * as React from 'react';
import {HeadFC, PageProps} from 'gatsby';
import {motion} from 'framer-motion';
import {Topbar} from 'src/components/Topbar/Topbar';
import {PageHeaderNavbar} from 'src/components/Navbar/PageHeaderNavbar/PageHeaderNavbar';
import {Footer} from 'src/components/Footer/Footer';
import {viewPortAnimation} from 'src/assets/animations';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <main className="page">
        <Topbar color="blue" />
        <PageHeaderNavbar />
        <motion.section
          className="page-container mrg-top-xl mrg-btm-xl"
          id="expertice"
          {...viewPortAnimation}
        >
          <h1 className="mrg-btm-s">Wrong path</h1>
          <h2 className="page-header-underline">
            We could not find the page you were looking for. If you cant find
            what you are looking for feel free to reach us.
          </h2>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
