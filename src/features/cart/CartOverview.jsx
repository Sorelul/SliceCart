import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartItemsCount, getTotalCartPrice } from './cartSlice';

function CartOverview() {
  const cartItemsCount = useSelector(getCartItemsCount);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!cartItemsCount) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{cartItemsCount} pizzas</span>
        <span>${totalCartPrice.toFixed(2)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
