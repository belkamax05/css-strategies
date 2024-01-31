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

/**
 * StyleX
 * @link https://stylexjs.com/
 * @pros great performance
 * @cons confusing syntax, not easy to use,
 * specially part of "{...stylex.props()}" makes impossible to identify or override classes easy way, need to wrap code all the time to blend classNames together.
 * @cons sometimes not being loaded on SSR, might be structural issue, but most of the time it disappears after several "save" / "refresh"
 * @cons child elements might not be styled, if they are not covered with stylex, see "does not work" at styles.ts
 * @cons even styling is done in typescript, importing other typescript with constants shows an error.
 * What's the point of TS then, if cannot be used import constants? Maybe it have official workaround I didn't found yet.
 */
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
