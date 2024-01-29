import classNames from 'classnames';
import styles from './styles.module.scss';

const SassShowcase = () => {
  return (
    <div className={styles['root']}>
      <div className={styles['buttons']}>
        <button className={styles['btn']}>Default button</button>
        <button className={classNames(styles['btn'], styles['btn-primary'])}>
          Primary
        </button>
        <button className={classNames(styles['btn'], styles['btn-secondary'])}>
          Secondary
        </button>
      </div>
    </div>
  );
};

export default SassShowcase;
