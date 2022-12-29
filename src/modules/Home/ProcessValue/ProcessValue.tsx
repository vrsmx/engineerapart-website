import {Link} from 'gatsby';
import * as React from 'react';
import {SectionHeader} from 'src/components/SectionHeader/SectionHeader';
import {TwoColumnLayout} from 'src/components/TwoColumnLayout/TwoColumnLayout';
import {PersonalizedSearchIcon} from 'src/assets/icons/PersonalizedSearchIcon';
import * as styles from './ProcessValue.module.scss';
import {HireToFitIcon} from 'src/assets/icons/HireToFitIcon';
import {ProcessAnimation} from './ProcessAnimaiton';

export const ProcessValue: React.FC = () => {
  return (
    <section
      className="page-container flex column mrg-top-xl mrg-btm-m"
      id="process-proposition"
    >
      <SectionHeader
        title={<>Effortless remote talent hiring</>}
        underlineSize="l"
        underline={
          <>
            By hiring our engineering force in Mexico and Latin America, we
            manage to deliver competitive pricing and solution oriented
            engineers in a convenient time zone.
          </>
        }
      />
      <TwoColumnLayout
        leftColumn={
          <div className={`${styles.text_container} flex column`}>
            <div className="column-grid-element">
              <div className="column-grid-element-title">
                <div className="icon-container gradient-blue">
                  <PersonalizedSearchIcon
                    className="icon-blue"
                    styles={{width: 45}}
                  />
                </div>
                <h4>Personalized search</h4>
              </div>
              <p>
                We find high value engineers through fine-tuned search methods
                and position oriented filtering to assure only the most adequate
                prospects join your ranks.
              </p>
            </div>
            <div className="column-grid-element">
              <div className="column-grid-element-title">
                <div className="icon-container gradient-blue">
                  <HireToFitIcon className="icon-blue" styles={{width: 45}} />
                </div>
                <h4>Hire to fit your needs</h4>
              </div>
              <p>
                New teams with niche expertise or missing skills to expand your
                resources, increase your horsepower with individuals that best
                match the skill set required by your projects.
              </p>
            </div>
            <Link to="/services" className="paragraph-link txt-blue">
              Learn more about our process →
            </Link>
          </div>
        }
        rightColumn={
          <div
            className="image-body flex column gradient-blue-turquioise"
            style={{
              minWidth: '300px',
              padding: '35px 65px',
            }}
          >
            <ProcessAnimation />
          </div>
        }
      />
    </section>
  );
};
