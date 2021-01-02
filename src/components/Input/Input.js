import styles from './Input.module.scss';

const Input = ({ children, className, ...rest }) => {

  let inputClassName = styles.input;

  if (className ) {
    inputClassName = `${inputClassName} ${className}`;
  }

  return (
    <input type="text" {...rest} className={inputClassName} />
  )
}

export default Input;