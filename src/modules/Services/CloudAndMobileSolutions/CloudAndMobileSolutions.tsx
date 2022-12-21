import {Link} from 'gatsby';
import * as React from 'react';
import {AppIcon} from 'src/assets/icons/AppIcon';
import {CloudServicesIcon} from 'src/assets/icons/CloudServicesIcon';
import {SectionHeader} from 'src/components/SectionHeader/SectionHeader';
import {TwoColumnLayout} from 'src/components/TwoColumnLayout/TwoColumnLayout';
import * as styles from './CloudAndMobileSolutions.module.scss';

export const CloudAndMobileSolutions: React.FC = () => {
  return (
    <section
      className="page-container mrg-top-xl mrg-btm-xl"
      id="hiring-process"
    >
      <SectionHeader
        title={<>Cloud and mobile solutions</>}
        underlineAlign={'justify-start'}
        underlineSize={'xl'}
        underline={
          <>
            Propel your business forward with software tailored to your specific
            needs. From inventory management software to online booking systems.
          </>
        }
      />
      <TwoColumnLayout
        leftSize={4}
        rightSize={3}
        leftColumn={
          <div
            className="image-body flex column gradient-blue-turquioise"
            style={{
              minWidth: '300px',
              minHeight: '600px',
            }}
          ></div>
        }
        rightColumn={
          <div className={`${styles.descriptions_container} flex column`}>
            <div className="column-grid-element">
              <div className="column-grid-element-title">
                <div className="icon-container medium gradient-blue">
                  <CloudServicesIcon
                    className="icon-blue"
                    styles={{width: 80, height: 65}}
                  />
                </div>
                <h4>Performant cloud services</h4>
              </div>
              <p>
                Fast and reliable cloud services are key to a performant
                infrastructure. Our engineers can assist with designing or
                scaling performant cloud architectures to power products or
                services on multiple cloud platforms, including AWS, Google
                Cloud, and Azure.
              </p>
            </div>
            <div className="column-grid-element">
              <div className="column-grid-element-title">
                <div className="icon-container gradient-blue">
                  <AppIcon
                    className="icon-blue"
                    styles={{width: 80, height: 65}}
                  />
                </div>
                <h4>User-first apps</h4>
              </div>
              <p>
                We realize that mobile apps are vital for keeping your customers
                engaged and we know how to get your app stand above the rest to
                increase your customer base and experience.
              </p>
            </div>
            <Link to="/services" className={`paragraph-link txt-blue txt-left`}>
              You name it, we build it →
            </Link>
          </div>
        }
      />
    </section>
  );
};
