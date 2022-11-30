import {Link} from 'gatsby';
import * as React from 'react';
import {SectionHeader} from 'src/components/SectionHeader/SectionHeader';
import * as styles from './ProcessValue.module.scss';

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
      <div className="two-column-grid mrg-top-l mrg-btm-l">
        <div className="text-body flex column" style={{gap: '100px', order: 2}}>
          <div className="column-grid-element">
            <div className="column-grid-element-title">
              <div className="icon-container gradient-blue"></div>
              <h4>Personalized search</h4>
            </div>
            <p>
              We find high value engineers through fine-tuned search methods and
              position oriented filtering to assure only the most adequate
              prospects join your ranks.
            </p>
          </div>
          <div className="column-grid-element">
            <div className="column-grid-element-title">
              <div className="icon-container gradient-blue"></div>
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
        <div
          className="image-body flex column gradient-blue-turquioise"
          style={{
            gap: '100px',
            minWidth: '300px',
            minHeight: '300px',
            order: 1,
          }}
        ></div>
      </div>
    </section>
  );
};
