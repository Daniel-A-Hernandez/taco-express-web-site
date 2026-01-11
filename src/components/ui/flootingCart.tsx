import { useStore } from '@nanostores/preact';
import { $cart, toggleCart } from '@/store/cartStore';
import { ShoppingBag } from 'lucide-preact';

export default function FloatingCart() {
  const cart = useStore($cart);
  
  // Usamos tu lógica que ya funciona
  const totalItems = cart?.reduce((acc, item) => acc + item.cantidad, 0) || 0;
  const totalPrecio = cart?.reduce((acc, item) => acc + (item.precioTotalUnitario * item.cantidad), 0) || 0;

  // Condición de visibilidad: solo si hay items
  if (totalItems === 0) return null;

  return (
    <button 
      onClick={toggleCart}
      // Mantenemos las clases que te funcionaron: fixed, bottom-28, z-[100], md:hidden
      className="fixed bottom-28 right-6 z-[90] md:hidden flex items-center gap-3 bg-stone-900 text-white p-4 rounded-2xl shadow-2xl border border-white/10 active:scale-95 cursor-pointer"
    >
      <div className="relative">
        <ShoppingBag size={24} className="" strokeWidth={2.5} />
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-stone-900">
          {totalItems}
        </span>
      </div>
      
      <div className="flex flex-col items-start border-l border-white/20 pl-3 leading-tight">
        <span className="text-[10px] font-bold uppercase opacity-60 tracking-tighter">Tu Orden</span>
        <span className="text-sm font-black italic">${totalPrecio.toFixed(2)}</span>
      </div>
    </button>
  );
}