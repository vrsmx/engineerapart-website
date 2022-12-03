import * as React from 'react';

interface Props {
  title: string;
  underline: string;
  cta?: React.ReactNode;
}
export const PageHeader: React.FC<Props> = ({title, underline, cta}) => {
  return (
    <div className="page-container flex column pdg-top-l pdg-btm-l txt-light">
      <h1 className="txt-left txt-max-width-xl mrg-btm-xxs">{title}</h1>
      <h2 className="page-header-underline txt-left txt-max-width-xs mrg-btm-xxs">
        {underline}
      </h2>
      <div className="flex">{cta}</div>
    </div>
  );
};
