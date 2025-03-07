import { Link } from 'react-router-dom';

function Button({ children, disabled = false, to = null, type = 'primary' }) {
  const styles = {
    base: 'inline-block font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full focus-outline-none text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed',
    primary: 'px-4 py-3 sm:px-6 sm:py-4',
    small: 'px-4 py-2 text-xs sm:px-5 sm:py-2.5 text-xs',
  };

  const className = `${styles.base} ${styles[type] || ''}`.trim();

  if (to) {
    return (
      <Link disabled={disabled} to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
