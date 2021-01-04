import { Helmet } from 'react-helmet';
import styles from 'styles/App.module.scss';

import useSite from 'hooks/use-site';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';
import Signup from 'components/Signup';
import FeatureList from 'components/FeatureList';

export default function Home() {
  const { metadata } = useSite();
  const { siteName } = metadata;

  return (
    <Layout displayNav={false}>

      <Helmet>
        <title>{ siteName }</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Section>
        <Container>
          <h1 className={styles.homeTitle}>
            { siteName }
          </h1>

          <p className={styles.homeTagline}>
            Build soft skills and achieve your goals without the
            time, energy, and money needed to find a mentor.
          </p>

          <Signup />
        </Container>
      </Section>

      <Section className={styles.homeCopy}>
        <Container>
          <h2>What is Journey to Dev?</h2>
          <p>
            Journey to Dev is a 7-week email course that focuses on building
            the soft skills that the everyday tutorial misses.
          </p>
          <p>
            While there are thousands, if not millions, of high-quality resources
            available to learn the nuances of code, often the human interactions
            and relationships you build will help open up doors and advance
            your career.
          </p>
        </Container>
      </Section>

      <FeatureList title="What can you expect?" features={[
        'Where to start your development career',
        'How to ask the right questions',
        'What you can do to help find a job',
        'When attention to detail helps you level up',
        'How to become a good communicator',
        'Why it\'s important to focus on you',
        'A starting guide to your developer journey',
      ]} backgroundColor="none" />

      <Section className={styles.homeCopy}>
        <Container>
          <h2>Ready to get started?</h2>
          <Signup />
        </Container>
      </Section>

    </Layout>
  )
}
