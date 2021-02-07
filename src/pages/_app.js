import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet';

import siteConfig from '../../site.config';

import { pageview } from 'lib/gtag';
import useSite from 'hooks/use-site';
import SiteContext from 'context/site-context';

import 'styles/globals.scss';

const context = {
  metadata: siteConfig
}

function App({ Component, pageProps }) {
  /**
   * handleRouteChange
   */

  function handleRouteChange(url) {
    pageview(url);
  }

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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