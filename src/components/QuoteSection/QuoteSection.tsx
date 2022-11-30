import * as React from 'react';

interface Props {
  children: React.ReactNode;
}
export const QuoteSection: React.FC<Props> = ({children}) => (
  <div className="quote-section-component bg-black full-width pdg-top-s pdg-btm-s">
    {children}
  </div>
);
