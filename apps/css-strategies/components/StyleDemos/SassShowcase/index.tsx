import { ButtonProps } from '@app/types/ButtonProps';
import classNames from 'classnames';
import styles from './styles.module.scss';

const Button = ({ className, variant, ...props }: ButtonProps) => (
  <button
    {...props}
    className={classNames(
      styles['btn'],
      styles[`btn-${variant || 'default'}`],
      className,
    )}
  />
);

const SassShowcase = () => {
  return (
    <div className={styles['root']}>
      <div className={styles['buttons']}>
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </div>
  );
};

export default SassShowcase;
