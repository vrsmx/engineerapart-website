import * as React from 'react';

interface Props {
  children: React.ReactNode;
}
export const GlobalHead: React.FC<Props> = ({children}) => (
  <>
    <link rel="stylesheet" href="https://use.typekit.net/hwv6fwi.css" />
    {children}
  </>
);
