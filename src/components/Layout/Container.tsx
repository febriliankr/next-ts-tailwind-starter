import React, { ReactElement } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';
import Seo from '../SEO';

interface Props {
  title?: string;
  children: ReactElement | string;
}

function Container({ title, children }: Props): ReactElement {
  return (
    <div className=''>
      <Seo title={title} />
      <Navbar />

      <div className='mt-44 sm:mt-40'>{children}</div>
      <Footer />
    </div>
  );
}

export default Container;
