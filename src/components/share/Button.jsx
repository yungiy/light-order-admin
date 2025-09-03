import { twMerge } from 'tailwind-merge';

export default function Button({
  children,
  size = 'md',
  color = 'primary',
  variant = 'solid',
  className,
  ...rest
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none';

  const sizeStyles = {
    sm: 'w-24 h-10 text-sm',
    md: 'w-32 h-12 text-base',
    lg: 'w-40 h-16 text-lg',
  };

  const colorStyles = {
    primary: {
      solid: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      outline:
        'border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    },
    secondary: {
      solid: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
      outline:
        'border border-gray-600 text-gray-600 hover:bg-gray-50 focus:ring-gray-500',
    },
    disable: 'bg-gray-100 text-gray-600 border border-gray-600',
  };

  const classes = twMerge(
    baseStyles,
    sizeStyles[size],
    color === 'disable'
    ? colorStyles.disable
    : colorStyles[color][variant],
    className
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
