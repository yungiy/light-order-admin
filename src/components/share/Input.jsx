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
  label = '',
  id = '',
  required = false,
  helperText = '',
  error = false,
  errorMessage = '',
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
    'w-full transition-all duration-150 focus:outline-none focus:ring-2';

  const disabledClasses =
    'disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-gray-200';

  // 에러 상태일 때 색상 오버라이드
  const errorClasses = error 
    ? 'border-red-500 text-red-600 focus:ring-red-500 bg-red-50' 
    : '';

  const finalClassName = twMerge(
    base,
    sizeClasses[size],
    !error && colorClasses[color], // 에러가 아닐 때만 기본 색상 적용
    error && errorClasses, // 에러일 때 에러 색상 적용
    rounded && 'rounded-full',
    disabledClasses,
    className
  );

  const labelSizeClasses = {
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-base',
  };

  // 고유 ID 생성
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={inputId}
          className={twMerge(
            'block font-medium text-gray-700 mb-1',
            labelSizeClasses[size],
            disabled && 'text-gray-400',
            error && 'text-red-600'
          )}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={finalClassName}
      />

      {(helperText || (error && errorMessage)) && (
        <p className={twMerge(
          'mt-1 text-xs',
          error ? 'text-red-600' : 'text-gray-500'
        )}>
          {error && errorMessage ? errorMessage : helperText}
        </p>
      )}
    </div>
  );
}
