import { useStore } from '@nanostores/preact';
import { $cart, toggleCart } from '@/store/cartStore';
import { ShoppingCart } from 'lucide-preact';

export default function Navbar() {
  const cart = useStore($cart) || [];
  const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <button 
      onClick={toggleCart}
      className="relative p-2 hover:bg-orange-50 rounded-full transition-all cursor-pointer group flex items-center justify-center focus:outline-none"
      aria-label="Carrito de compras"
    >
      <div className="text-stone-700 group-hover:text-[#f29829] transition-colors">
        <ShoppingCart size={24} />
      </div>
      
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-md animate-in zoom-in duration-300">
          {totalItems}
        </span>
      )}
    </button>
  );
}