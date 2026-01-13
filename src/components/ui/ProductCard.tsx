import { addToCart, type CartItem } from '@/store/cartStore';
import type { Producto } from '@/data/menu';
import { Plus } from 'lucide-preact';

interface Props {
  producto: Producto;
}

export default function ProductCard({ producto }: Props) {
  
  const handleAddClick = () => {
    // Verificamos si requiere personalización
    const tieneProteinas = producto.proteinas && producto.proteinas.length > 0;
    const tieneVariantes = producto.variantes && producto.variantes.length > 0;
    const tieneExtras = producto.tipoExtra !== 'ninguno';

    if (tieneProteinas || tieneVariantes || tieneExtras) {
      // Disparamos evento para abrir el modal (lo crearemos después)
      window.dispatchEvent(new CustomEvent('open-modal', { detail: producto }));
    } else {
      // Si es un producto simple (ej. Quesadillas), directo al carrito
      const item: CartItem = {
        ...producto,
        extrasSeleccionados: [],
        cantidad: 1,
        precioTotalUnitario: producto.precioBase
      };
      addToCart(item);
    }
  };

  return (
    <div class="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-xl transition-all flex flex-col h-full transform hover:-translate-y-1">
      
      <div class="h-56 overflow-hidden relative group">
        <img
          src={producto.imagen || 'https://via.placeholder.com/400x300?text=Comida'} 
          alt={producto.nombre}
          class="w-full h-full object-cover transition duration-500 group-hover:scale-110 tracking-tighter"
        />

        <div class="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full font-bold text-xs text-[#f29829] shadow-sm ring-1 ring-orange-100 italic uppercase">
          {producto.categoria}
        </div>
      </div>

      <div class="p-6 flex flex-col grow">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-xl font-bold text-stone-800 leading-tight">
            {producto.nombre}
          </h3>
          <span class="text-lg font-black text-shadow-stone-900">
            ${producto.precioBase.toFixed(2)}
          </span>
        </div>

        <p class="text-stone-500 text-sm mb-6 grow leading-relaxed">
          {producto.descripcion || "¡Prueba nuestro delicioso platillo preparado al momento!"}
        </p>

        <button 
          onClick={handleAddClick}
          class="w-full hover:cursor-pointer bg-stone-900 hover:bg-[#f29829] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 group"
        >
          <Plus class="w-4 h-4 group-hover:rotate-90 transition-transform" />
          Agregar
        </button>
      </div>
    </div>
  );
}