import { useState, useEffect } from 'preact/hooks';
import { addToCart, type CartItem } from '@/store/cartStore';
import {X} from 'lucide-preact'
import { EXTRAS_GLOBALES, EXTRAS_COSTRA, EXTRAS_BURRITOS,EXTRAS_SOPAS,  type Producto, type Opcion} from '@/data/menu';

export default function ProductModal() {
  const [producto, setProducto] = useState<Producto | null>(null);
  const [varianteSel, setVarianteSel] = useState<Opcion | null>(null);
  const [proteinaSel, setProteinaSel] = useState<Opcion | null>(null);
  const [extrasSel, setExtrasSel] = useState<Opcion[]>([]);

  useEffect(() => {
    const handleOpen = (e: any) => {
      const p = e.detail as Producto;
      setProducto(p);
      setVarianteSel(p.variantes ? p.variantes[0] : null);
      setProteinaSel(p.proteinas ? p.proteinas[0] : null);
      setExtrasSel([]);
    };
    window.addEventListener('open-modal', handleOpen);
    return () => window.removeEventListener('open-modal', handleOpen);
  }, []);

  if (!producto) return null;

    const extrasAMostrar = 
      producto.tipoExtra === 'global' ? EXTRAS_GLOBALES :
      producto.tipoExtra === 'costra' ? EXTRAS_COSTRA :
      producto.tipoExtra === 'burritos' ? EXTRAS_BURRITOS :
      producto.tipoExtra === 'sopas'? EXTRAS_SOPAS:
      [];



  const precioTotal = producto.precioBase + 
    (varianteSel?.precioAdicional || 0) + 
    (proteinaSel?.precioAdicional || 0) + 
    extrasSel.reduce((acc, curr) => acc + curr.precioAdicional, 0);

  const toggleExtra = (extra: Opcion) => {
    setExtrasSel(prev => 
      prev.find(e => e.nombre === extra.nombre) 
        ? prev.filter(e => e.nombre !== extra.nombre)
        : [...prev, extra]
    );
  };

  const confirmar = () => {
    const item: CartItem = {
      ...producto,
      varianteSeleccionada: varianteSel || undefined,
      proteinaSeleccionada: proteinaSel || undefined,
      extrasSeleccionados: extrasSel,
      cantidad: 1,
      precioTotalUnitario: precioTotal
    };
    addToCart(item);
    setProducto(null);
  };

  return (
    <article class="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setProducto(null)}></div>
      
      <div class="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col">
        
        <div class="p-6 bg-stone-900 text-white flex justify-between items-start">    
          <div>
            <h3 class="text-2xl font-black uppercase italic tracking-tighter">{producto.nombre}</h3>
            <p class="opacity-80 text-xs mt-1">Personaliza tu orden a tu gusto.</p>
          </div>
          <button onClick={() => setProducto(null)} class="p-2 hover:text-[#f29829] hover:bg-white/20 rounded-full transition-colors cursor-pointer">
            <X/>
          </button>
        </div>
        
        <div class="p-6 overflow-y-auto space-y-6 grow">
          {/* SECCIÓN VARIANTES (Si aplica) */}
          {producto.variantes && (
            <div class="space-y-4">
              <p class="font-bold text-stone-800 uppercase text-sm tracking-widest">Opciones de Orden</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {producto.variantes.map(v => (
                  <button onClick={() => setVarianteSel(v)} class={`p-4 rounded-2xl border text-left transition-all ${varianteSel?.nombre === v.nombre ? 'border-[#f29829] bg-orange-50 ring-1 ring-[#f29829]' : 'border-stone-100 bg-stone-50'}`}>
                    <span class="block font-bold text-stone-700">{v.nombre}</span>
                    <span class="text-xs text-stone-500"></span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* SECCIÓN PROTEÍNAS (Si aplica) */}
          {producto.proteinas && (
            <div class="space-y-4">
              <p class="font-bold text-stone-800 uppercase text-sm tracking-widest">Elige tu Proteína</p>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {producto.proteinas.map(p => (
                  <button onClick={() => setProteinaSel(p)} class={`p-3 rounded-2xl border text-center transition-all ${proteinaSel?.nombre === p.nombre ? 'border-[#f29829] bg-orange-50 ring-1 ring-[#f29829]' : 'border-stone-100 bg-stone-50'}`}>
                    <span class="text-sm font-bold text-stone-700">{p.nombre}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* SECCIÓN EXTRAS */}
          {extrasAMostrar.length > 0 && (
            <div class="space-y-4">
              <p class="font-bold text-stone-800 uppercase text-sm tracking-widest">Ingredientes Extra</p>
              <div class="grid grid-cols-1 gap-2">
                {extrasAMostrar.map(extra => (
                  <label class="flex items-center justify-between p-4 bg-stone-50 rounded-2xl border border-stone-100 cursor-pointer hover:bg-stone-100 transition-colors">
                    <span class="text-stone-700 font-medium">{extra.nombre} </span>
                    <input 
                      type="checkbox" 
                      checked={!!extrasSel.find(e => e.nombre === extra.nombre)}
                      onChange={() => toggleExtra(extra)}
                      class="w-5 h-5 accent-[#c]" 
                    />
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        <div class="p-6 border-t bg-stone-50 flex items-center justify-between gap-4">
          <div class="text-2xl font-black text-[#f29829] italic">${precioTotal.toFixed(2)}</div>
          <button 
            onClick={confirmar}
            class="bg-[#f29829] hover:bg-[#db7f0d] text-white font-black px-6 py-3 rounded-2xl uppercase italic tracking-widest text-sm shadow-xl transition-all active:scale-95 cursor-pointer"
          >
            Agregar a la Orden
          </button>
        </div>
      </div>
    </article>
  );
}