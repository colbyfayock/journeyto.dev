import { Helmet } from 'react-helmet';
import styles from 'styles/App.module.scss';

import { createTweetAction, openTweet } from 'lib/social';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';
import Button from 'components/Button';

export default function GettingStarted() {
  const twitterAction = createTweetAction({
    message: [
      '🚀 I just started my Journey to Dev with @colbyfayock\n',
      '⚡️ It\'s a FREE 7-week newsletter course to get you started on the right path\n',
      '💯 Each issue focuses on non-tech skills that typically require time & money from a mentor\n',
      '💪 Start your #journeytodev!\n',
      'https://journeyto.dev',
    ]
  });


  function handleOnTwitterClick(e) {
    e.preventDefault();
    openTweet({
        message: twitterAction
    })
  }

  return (
    <Layout displayNav={false}>

      <Helmet>
        <title>Getting Started</title>
      </Helmet>

      <Section>
        <Container>
          <h1 className={styles.homeTitle}>
            One more step to get started!
          </h1>

          <p className={styles.homeTagline}>
            <strong>Ready to start your journey?</strong>
          </p>

          <p className={styles.homeTagline}>
            Check your inbox and <strong>click the confirm button</strong> in
            your <a href="https://journeyto.dev/">Journey to Dev</a> welcome email.
          </p>
        </Container>
      </Section>

      <Section className={styles.homeCopy}>
        <Container>
          <h2>Share your journey with others</h2>
          <p>
            Let everyone know you're starting your journey and find others to jump
            in with you!
          </p>
          <p>
            <Button onClick={handleOnTwitterClick}>Share on Twitter</Button>
          </p>
        </Container>
      </Section>

      <Section className={styles.homeCopy}>
        <Container>
          <h2>Not seeing an email?</h2>
          <p>
            Try checking your spam or Promotions tab of your email service. The email
            should have come from Colby @ Journey to Dev (hello@colbyfayock.com).
          </p>
          <p>
            To make sure you're getting the rest of the emails correctly, be sure to
            add hello@colbyfayock.com to your contacts!
          </p>
        </Container>
      </Section>

    </Layout>
  )
}
