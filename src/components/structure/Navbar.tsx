import { useStore } from '@nanostores/preact';
import { $cart } from '@/store/cartStore';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  // Intentamos leer el store, pero manejamos el caso de que no exista aún
  const cart = useStore($cart) || [];
  
  const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <nav className="flex items-center justify-between p-4 bg-white border-b border-stone-100 sticky top-0 z-[90] w-full">
      <div className="font-black italic text-xl tracking-tighter text-stone-900">
        TACO<span className="text-[#f29829]">EXPRESS</span>
      </div>

      <button 
        id="open-cart-btn"
        className="relative p-2 hover:bg-orange-50 rounded-full transition-colors cursor-pointer group"
      >
        <div className="text-stone-700 w-6 h-6 group-hover:text-[#f29829] transition-colors">
          {/* Usamos el componente de icono directamente */}
          <ShoppingCart size={24} />
        </div>
        
        {totalItems > 0 && (
          <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
            {totalItems}
          </span>
        )}
      </button>
    </nav>
  );
}