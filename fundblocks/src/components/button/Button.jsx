import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-base ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 bg-primary',
  {
    variants: {
      variant: {
        default: 'bg-gradient-button',
        outline: 'bg-transparent border border-primary',
      },
      size: {
        default: 'px-6 py-3 text-sm sm:text-base sm:px-7 sm:py-3.5 ',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = ({ children, className, variant, size, type, onClick }) => {
  const handleClick = () => {
    console.log('I am clicked');
    onClick();
  };
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      // style={{
      //   background: 'linear-gradient(94deg, #FFA500 0%, #228B22 100%)',
      // }}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
