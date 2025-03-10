import { Link } from 'react-router-dom';

function Button({
  children,
  disabled = false,
  to = null,
  type = 'primary',
  onClick,
}) {
  const base =
    'inline-block text-sm font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full focus-outline-none text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-3 sm:px-6 sm:py-4',
    small: base + 'px-4 py-2 sm:px-5 sm:py-2.5 text-xs',
    round: base + 'px-2.5 py-1 md:px-3.5 md:py-2 text-sm rounded-full',
    secondary:
      'inline-block text-sm font-semibold border-2 border-stone-300 tracking-wide uppercase transition-colors duration-300 rounded-full focus-outline-none text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 sm:px-6 sm:py-3.5',
  };

  const className = `${styles[type] || ''}`.trim();

  if (to) {
    return (
      <Link disabled={disabled} to={to} className={className}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        to={to}
        className={className}
      >
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
