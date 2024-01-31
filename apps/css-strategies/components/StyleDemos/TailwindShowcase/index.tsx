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

/**
 * Tailwind
 * @link https://tailwindcss.com
 * @pros highly scalable, style definitions written once are easy to use across the project
 * @pros works like a framework for all styles in project, providing features like responsive design, dark mode, etc out of box (same as MUI does for components)
 * @cons hard to customize individual bits, if they are not covered with TW functionality
 */
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
