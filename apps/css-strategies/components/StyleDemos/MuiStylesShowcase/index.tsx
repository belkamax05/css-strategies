import { ButtonProps } from '@app/types/ButtonProps';
import classNames from 'classnames';
import useStyles from './styles';

const Button = ({ variant, className, ...props }: ButtonProps) => {
  const classes = useStyles();
  return (
    <button
      {...props}
      className={classNames(
        classes.btn,
        classes[`btn-${variant || 'default'}`],
        className,
      )}
    />
  );
};

/**
 * Matirial UI styles
 * @link https://mui.com/system/styles/basics/
 * @pros straightforward, easy to use, CSS like syntax in TypeScript
 * @cons legacy approach
 * @cons by default does not perform SSR, can be obtained with configuring CSS SSR cache
 */
const MuiStylesShowcase = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.buttons}>
        <Button>Default</Button>
        <Button variant={'primary'}>Primary</Button>
        <Button variant={'secondary'}>Secondary</Button>
      </div>
    </div>
  );
};

export default MuiStylesShowcase;
