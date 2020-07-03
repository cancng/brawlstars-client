import React from 'react';
import { Footer } from 'react-materialize';

const AppFooter = () => {
  return (
    <Footer
      className='footer-test'
      copyrights={`© ${new Date().getFullYear()}`}
      moreLinks={
        <a
          className='grey-text text-lighten-4 right'
          href='https://cancingi.com.tr'
          target='_blank'
        >
          Cancng
        </a>
      }
    >
      <p className='white-text'>Brawl Stars Statistics</p>
    </Footer>
  );
};

export default AppFooter;
