import { ButtonProps } from '@app/types/ButtonProps';
import { twMerge } from 'tailwind-merge';

const Button = ({ className, variant, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        'bg-default border border-gray-300 rounded text-gray-700 cursor-pointer inline-block text-sm font-normal line-height-20px mb-0 px-3 py-1.5 mr-2.5 text-center align-middle whitespace-nowrap',
        variant === 'primary' && 'bg-primary text-white',
        variant === 'secondary' && 'bg-secondary text-white',
        className,
      )}
    />
  );
};

export default function TailwindShowcase() {
  return (
    <div className={'p-1'}>
      <div>
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </div>
  );
}
