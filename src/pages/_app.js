import { Helmet } from 'react-helmet';

import siteConfig from '../../site.config';

import useSite from 'hooks/use-site';
import SiteContext from 'context/site-context';

import 'styles/globals.scss';

const context = {
  metadata: siteConfig
}

function App({ Component, pageProps }) {
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }} />
      <SiteContext.Provider value={context}>
        <Component {...pageProps} />
      </SiteContext.Provider>
    </>
  );
}

export default App;