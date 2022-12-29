import {Link} from 'gatsby';
import * as React from 'react';
import {TwoColumnLayout} from 'src/components/TwoColumnLayout/TwoColumnLayout';
import {ResultsAnimation} from 'src/modules/Services/Results/ResultsAnimation';

export const ServicesResults: React.FC = () => {
  return (
    <TwoColumnLayout
      leftSize={1}
      rightSize={1}
      leftColumn={
        <div className="flex column" style={{gap: 50}}>
          <h3 className="section-header">
            Discover how we achieve our results
          </h3>
          <p>
            We understand shipping quality software is about problem solving and
            not code writing, a quality we look for in every member of our team
            in addition to technical and soft skills required to expand your
            existing teams or build new ones from zero.
          </p>
          <Link to="/services" className={`paragraph-link txt-blue txt-left`}>
            Learn more on how we build teams →
          </Link>
        </div>
      }
      rightColumn={
        <div className="image-body flex gradient-blue-turquioise">
          <ResultsAnimation />
        </div>
      }
    />
  );
};
