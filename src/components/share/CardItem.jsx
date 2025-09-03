import { twMerge } from 'tailwind-merge';

export default function CardItem({ size = 'md', title, children, className }) {
  const baseStyles =
    'rounded-3xl shadow-sm bg-white border border-gray-100 transition-all duration-200 hover:shadow-lg';

  const sizeStyles = {
    sm: 'p-4 h-24 text-sm max-w-xs',
    md: 'p-4 h-36 text-base max-w-sm',
    lg: 'p-4 h-48 max-w-md',
    xl: 'p-4 h-60 text-xl max-w-lg',
  };

  const classes = twMerge(baseStyles, sizeStyles[size], className);

  return (
    <div className={classes}>
      {title && <h3 className="font-semibold mb-2 text-gray-800">{title}</h3>}
      <div className="text-gray-600">{children}</div>
    </div>
  );
}
