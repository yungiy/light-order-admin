import { twMerge } from 'tailwind-merge';

export default function Input({
  size = 'md',
  color = 'gray',
  disabled = false,
  error = false,
  className,
  ...rest
}) {
  const baseStyles =
    'border-2 border-gray-400 rounded-md w-full focus:outline-none duration-300';

  const sizeStyles = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg',
  };

  const disabledStyles =
    'disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed';

  const classes = twMerge(
    baseStyles,
    sizeStyles[size],
    disabledStyles,
    className
  );

  return (
    <input
      className={classes}
      disabled={disabled}
      aria-invalid={error}
      {...rest}
    />
  );
}
