import { ButtonProps } from '@app/types/ButtonProps';
import * as stylex from '@stylexjs/stylex';
import styles from './styles';

const Button = ({ variant, ...props }: ButtonProps) => {
  return (
    <button
      {...stylex.props(styles.btn, styles[`btn-${variant || 'default'}`])}
      {...props}
    />
  );
};

const StyleXShowcase = () => {
  return (
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.buttons)}>
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </div>
  );
};

export default StyleXShowcase;
