import clsx from 'clsx';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
}

const Button = (props: ButtonProps) => {
  return (
    <button className={clsx(styles.button, styles[props.variant])} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
