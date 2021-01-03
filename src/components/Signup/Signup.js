import ClassName from 'models/classname';

import Form from 'components/Form';
import FormRow from 'components/FormRow';
import Input from 'components/Input';
import Button from 'components/Button';

import styles from './Signup.module.scss';

const Signup = ({ children, className, ...rest }) => {
  const signupClassName = new ClassName(styles.signup);

  signupClassName.addIf(className, className);

  return (
    <Form className={styles.signup} action="https://app.convertkit.com/forms/1840044/subscriptions" method="post">
      <FormRow>
        <Input type="email" name="email_address" aria-label="Enter your email address" placeholder="Email Address" required />
      </FormRow>
      <FormRow>
        <Button>Start Your Dev Journey</Button>
      </FormRow>
    </Form>
  )
}

export default Signup;