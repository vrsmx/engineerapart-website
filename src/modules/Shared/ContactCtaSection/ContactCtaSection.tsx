import * as React from 'react';
import {TwoColumnLayout} from 'src/components/TwoColumnLayout/TwoColumnLayout';

export const ContactCtaSection: React.FC = () => {
  return (
    <section className="page-container mrg-btm-xxl">
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
              <button className="button secondary">Leave a message</button>
            </div>
          </div>
        }
      />
    </section>
  );
};
