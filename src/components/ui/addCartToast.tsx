import { useStore } from '@nanostores/preact';
import { $cart } from '@/store/cartStore';
import { useEffect, useState } from 'preact/hooks';
import { ShoppingBag, X } from 'lucide-preact';

export default function AddToCartToast() {
  const cart = useStore($cart);
  const [show, setShow] = useState(false);
  const [lastCount, setLastCount] = useState(cart.length);

  useEffect(() => {
    if (cart.length > lastCount) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), 3000);
      setLastCount(cart.length);
      return () => clearTimeout(timer);
    }
    setLastCount(cart.length);
  }, [cart]);

  return (
    <div 
      className={`
        fixed top-20 right-4 z-[300] transition-all duration-500 transform
        ${show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}
    >
      <div className="bg-white border-l-4 border-[#f29829] shadow-[0_10px_30px_rgba(0,0,0,0.15)] rounded-r-xl p-4 flex items-center gap-4 min-w-[280px]">
        {/* Icono con badge naranja */}
        <div className="bg-orange-50 p-2 rounded-lg">
          <ShoppingBag size={20} className="text-[#f29829]" />
        </div>

        {/* Texto del aviso */}
        <div className="flex-1">
          <h4 className="text-stone-900 text-xs font-black uppercase italic tracking-tighter leading-none">
            ¡Producto Añadido!
          </h4>
          <p className="text-stone-500 text-[10px] font-bold uppercase mt-1">
            Tu orden se está armando
          </p>
        </div>

        {/* Botón de cerrar manual */}
        <button 
          onClick={() => setShow(false)}
          className="text-stone-300 hover:text-stone-600 transition-colors cursor-pointer"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}