import styles from './FeatureList.module.scss';

import Container from 'components/Container';
import Section from 'components/Section';

const FeatureList = ({ title = 'Features', backgroundColor = 'primary', features = [] }) => {

  if ( !Array.isArray(features) ) {
    throw new Error(`Failed to render FeatureList: Invalid features type ${typeof features}`);
  }

  return (
    <Section className={styles.featureList} backgroundColor={backgroundColor}>
      <Container>
        <h2>{ title }</h2>
        <ul>
          { features.map((feature, index) =>{
            return (
              <li key={index}>
                { feature }
              </li>
            )
          }) }
        </ul>
      </Container>
    </Section>
  )
}

export default FeatureList;