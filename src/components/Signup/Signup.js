import { useState } from 'react';

import { event } from 'lib/gtag';
import ClassName from 'models/classname';

import Form from 'components/Form';
import FormRow from 'components/FormRow';
import Input from 'components/Input';
import Button from 'components/Button';

import styles from './Signup.module.scss';

const Signup = ({ children, className, ...rest }) => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const signupClassName = new ClassName(styles.signup);

  signupClassName.addIf(className, className);

  function handleOnSubmit(e) {
    e.preventDefault();
    e.persist();

    setHasSubmitted(true);

    const { currentTarget } = e;

    const test = event({
      category: 'form',
      action: 'signup',
      label: 'Start Your Dev Journey'
    });

    setTimeout(() => {
      currentTarget.submit();
      setHasSubmitted(false);
    }, 1000);
  }

  return (
    <Form className={styles.signup} action="https://app.convertkit.com/forms/1840044/subscriptions" method="post" onSubmit={handleOnSubmit}>
      <FormRow>
        <p>
          Enter your email and get this <strong>FREE</strong> newsletter right to your inbox!
        </p>
      </FormRow>
      <FormRow>
        <Input type="email" name="email_address" aria-label="Enter your email address" placeholder="Email Address" required />
      </FormRow>
      <FormRow>
        <Button disabled={hasSubmitted}>Start Your Dev Journey</Button>
      </FormRow>
    </Form>
  )
}

export default Signup;