import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet';
import styles from './Layout.module.scss';

import useSite from 'hooks/use-site';

import Nav from 'components/Nav';
import Main from 'components/Main';
import Footer from 'components/Footer';

const Layout = ({ children, displayNav = true }) => {
  const { metadata = {} } = useSite();
  const { siteName, homepage, description } = metadata;

  const { pathname } = useRouter()

  const pageUrl = `${homepage}${pathname}`;
  const pageTitle = siteName;
  const ogImage = `${homepage}/images/journey-to-dev-open-graph-01.jpg`

  const helmetSettings = {
    defaultTitle: pageTitle,
    titleTemplate: `%s - ${pageTitle}`
  }

  return (
    <div className={styles.layoutContainer}>
      <Helmet {...helmetSettings}>
        {pageTitle && <title>{ pageTitle }</title>}
        <meta name="description" content={description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={pageTitle} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="2024" />
        <meta property="og:image:height" content="1012" />
        <meta property="og:image:alt" content={`${siteName} - ${description}`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={ogImage} />
        <meta property="twitter:site" content="@colbyfayock" />
        <meta property="twitter:creator" content="@colbyfayock" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/images/favicon-512x512.png" />
      </Helmet>

      { displayNav && <Nav />}

      <Main>{ children }</Main>

      <Footer />
    </div>
  )
}

export default Layout;