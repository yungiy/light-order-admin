import { twMerge } from 'tailwind-merge';

export default function Input({
  value,
  onChange,
  placeholder = '',
  size = 'md',
  color = 'primary', 
  rounded = false,
  disabled = false,
  customColor = '',
  outline = false,
  className = '',
  type = 'text',
}) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-2.5 text-lg',
  };

  const colorClasses = {
    primary: outline
      ? 'border border-blue-500 text-blue-700 focus:ring-blue-500'
      : 'bg-blue-50 border border-blue-500 text-blue-700 focus:ring-blue-500',
    secondary: outline
      ? 'border border-gray-400 text-gray-700 focus:ring-gray-400'
      : 'bg-gray-50 border border-gray-400 text-gray-700 focus:ring-gray-400',
    danger: outline
      ? 'border border-red-500 text-red-600 focus:ring-red-500'
      : 'bg-red-50 border border-red-500 text-red-600 focus:ring-red-500',
    custom: outline
      ? `border ${customColor} focus:ring-${customColor.replace('bg-', '')}`
      : `${customColor} border ${customColor} focus:ring-${customColor.replace('bg-', '')}`,
  };

  const base =
    'transition-all duration-150 focus:outline-none focus:ring-2';

  // disabled 상태에서 오버라이드
  const disabledClasses =
    'disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-gray-200';

  // 최종 클래스 이름 합성
  const finalClassName = twMerge(
    base,
    sizeClasses[size],
    colorClasses[color],
    rounded && 'rounded-full',
    disabledClasses,
    className
  );

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={finalClassName}
    />
  );
}
