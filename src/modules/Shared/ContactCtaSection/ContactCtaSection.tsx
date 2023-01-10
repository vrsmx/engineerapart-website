import * as React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'gatsby';
import {TwoColumnLayout} from 'src/components/TwoColumnLayout/TwoColumnLayout';
import {viewPortAnimation} from 'src/assets/animations';

export const ContactCtaSection: React.FC = () => {
  return (
    <motion.section
      className="page-container mrg-btm-xxl"
      {...viewPortAnimation}
    >
      <TwoColumnLayout
        leftSize={2}
        rightSize={3}
        leftColumn={<h3 className="section-header">Level-up your team</h3>}
        rightColumn={
          <div className="flex column round-corner-primary">
            <h4 className="section-header-underline mrg-btm-xxs">
              Increase your product or service reach with EngineerApart’s
              experienced and skilled members.
            </h4>
            <div className="flex wrap" style={{gap: '24px'}}>
              <button className="button primary">Schedule a call</button>
              <Link className="button secondary" to="/contact/#form">
                Leave a message
              </Link>
            </div>
          </div>
        }
      />
    </motion.section>
  );
};
