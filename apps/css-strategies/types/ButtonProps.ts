export type ButtonVariant = 'default' | 'primary' | 'secondary';

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { variant?: ButtonVariant };
