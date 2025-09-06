import { twMerge } from 'tailwind-merge';

export default function CardItem({  title, children, className }) {
  const baseStyles =
    'rounded-xl shadow-sm bg-white border border-gray-100 transition-all duration-200 p-2';

  const classes = twMerge(baseStyles, className);

  return (
    <div className={classes}>
      {title && <h3 className="font-semibold mb-2 text-gray-800">{title}</h3>}
      <div className="text-gray-600">{children}</div>
    </div>
  );
}
