import * as React from 'react';
import {QuoteSection} from 'src/components/QuoteSection/QuoteSection';

interface Props {
  review: string;
  name: string;
  position: string;
}
export const ClientSocialProof: React.FC<Props> = ({
  review,
  name,
  position,
}) => (
  <QuoteSection>
    <div className="page-container flex column align-end">
      <p className="quote-l txt-light mrg-btm-xs">{review}</p>
      <div className="client-container flex align-center" style={{gap: '20px'}}>
        <div className="flex column">
          <span className="section-header-underline txt-light">{name}</span>
          <p className="p txt-light txt-right">{position}</p>
        </div>
        <div className="icon-container large gradient-white"></div>
      </div>
    </div>
  </QuoteSection>
);
