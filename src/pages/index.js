import { Helmet } from 'react-helmet';
import styles from 'styles/App.module.scss';

import useSite from 'hooks/use-site';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';
import Form from 'components/Form';
import FormRow from 'components/FormRow';
import Input from 'components/Input';
import Button from 'components/Button';
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

          <p>
            Get started by editing{' '}
            <code>pages/index.js</code>
          </p>

          <Form className={styles.homeSignup} action="https://app.convertkit.com/forms/1840044/subscriptions" method="post">
            <FormRow>
              <p>
                Sign up for <strong>FREE</strong> and start your journey right in your inbox!
              </p>
            </FormRow>
            <FormRow>
              <Input type="email" name="email_address" aria-label="Email Address" placeholder="Email Address" required />
            </FormRow>
            <FormRow>
              <Button>Start Your Dev Journey</Button>
            </FormRow>
          </Form>
        </Container>
      </Section>

      <FeatureList title="What's Inside" features={[
        '🤔 What is it?',
        '💪 What makes it so awesome?',
        '😢 What isn\'t it great at?'
      ]} backgroundColor="none" />

    </Layout>
  )
}
