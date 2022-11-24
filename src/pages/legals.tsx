import * as React from 'react';
import {HeadFC, Link, PageProps} from 'gatsby';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const LegalsPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <Link to="/">home</Link>
    </main>
  );
};

export default LegalsPage;

export const Head: HeadFC = () => <title>Legals Page</title>;
