import { Helmet } from 'react-helmet';
import styles from 'styles/App.module.scss';

import { createTweetAction, openTweet } from 'lib/social';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';
import Button from 'components/Button';

export default function Success() {
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
        <title>Success</title>
      </Helmet>

      <Section>
        <Container>
          <h1 className={styles.homeTitle}>
            Thanks for signing up!
          </h1>

          <p className={styles.homeTagline}>
            I'm excited to start <a href="https://journeyto.dev/">this journey</a> with you.
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
          <h2>Make sure you get each issue of this newsletter</h2>
          <p>
            Be sure to drag the emails out of the Promotions tab and
            add hello@colbyfayock.com to your contacts.
          </p>
        </Container>
      </Section>

    </Layout>
  )
}
