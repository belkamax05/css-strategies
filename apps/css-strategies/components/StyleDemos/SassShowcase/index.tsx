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

/**
 * sass (sass modules)
 * @link 
 * @pros css superset, 100% support of all CSS features
 * @pros can be used same as CSS modules, but also expand with all SASS features, such as mixins, variables, etc
 * @cons does not produce intellisense in IDE, easy to get class out of sync between component and style file
 */
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
