import { twMerge } from 'tailwind-merge';

export default function Button({
  children,
  size = 'md', // sm md lg
  color = 'primary', // colorClasses 참고
  rounded = false,
  outline = false,
  disabled = false,
  customColor = '',
  onClick,
  className = '',
}) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-5 py-3 text-lg',
  };

  const colorClasses = {
    primary: outline
      ? 'border border-blue-500 text-blue-500 hover:bg-blue-50'
      : 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: outline
      ? 'border border-gray-500 text-gray-700 hover:bg-gray-100'
      : 'bg-gray-500 text-white hover:bg-gray-600',
    danger: outline
      ? 'border border-red-500 text-red-500 hover:bg-red-50'
      : 'bg-red-500 text-white hover:bg-red-600',
    custom: outline
      ? `border ${customColor} text-${customColor.replace('bg-', '')}`
      : `${customColor} text-white`,
  };

  const base =
    'inline-flex items-center justify-center transition-all duration-150 font-medium focus:outline-none';

  const disabledClasses =
    'disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-none';

  const finalClassName = twMerge(
    base,
    sizeClasses[size],
    colorClasses[color],
    rounded && 'rounded-full',
    disabledClasses,
    className
  );

  return (
    <button disabled={disabled} onClick={onClick} className={finalClassName}>
      {children}
    </button>
  );
}
