import { useStore } from '@nanostores/preact';
import { $cart, removeItem, updateQuantity } from '@/store/cartStore';

export default function Cart() {
  const cart = useStore($cart);

  // Calculamos el gran total de la orden
  const totalOrden = cart.reduce((acc, item) => acc + (item.precioTotalUnitario * item.cantidad), 0);

  const enviarWhatsApp = () => {
    const numeroTelefono = "50375138755"; // <--- REEMPLAZA CON TU NÚMERO (incluye código de país)
    
    let mensaje = "¡Hola! Quisiera realizar el siguiente pedido:\n\n";
    
    cart.forEach((item) => {
      mensaje += `*${item.cantidad}x ${item.nombre}*\n`;
      if (item.varianteSeleccionada) mensaje += `  • Opción: ${item.varianteSeleccionada.nombre}\n`;
      if (item.proteinaSeleccionada) mensaje += `  • Carne: ${item.proteinaSeleccionada.nombre}\n`;
      if (item.extrasSeleccionados.length > 0) {
        const extrasStr = item.extrasSeleccionados.map(e => e.nombre).join(', ');
        mensaje += `  • Extras: ${extrasStr}\n`;
      }
      mensaje += `  Subtotal: $${(item.precioTotalUnitario * item.cantidad).toFixed(2)}\n\n`;
    });

    mensaje += `*TOTAL A PAGAR: $${totalOrden.toFixed(2)}*\n\n`;
    mensaje += "¿Me confirman el tiempo de espera? Gracias.";
    
    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  // Si no hay nada en el carrito, no mostramos el componente
  if (cart.length === 0) return null;

  return (
    <div class="fixed bottom-6 right-6 z-40 w-full max-w-sm px-4 sm:px-0">
      <div class="bg-white rounded-[2rem] shadow-2xl border border-stone-100 overflow-hidden flex flex-col max-h-[75vh]">
        
        {/* Header del Carrito */}
        <div class="p-5 bg-stone-900 text-white flex justify-between items-center">
          <div class="flex items-center gap-2">
            <span class="font-black italic uppercase tracking-tighter text-lg">Tu Orden</span>
          </div>
          <span class="bg-[#f29829] text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
            {cart.length} {cart.length === 1 ? 'Platillo' : 'Platillos'}
          </span>
        </div>

        {/* Lista de Productos */}
        <div class="p-4 overflow-y-auto space-y-4 grow bg-stone-50">
          {cart.map((item, index) => (
            <div key={index} class="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 space-y-2">
              <div class="flex justify-between items-start">
                <h4 class="font-bold text-stone-800 text-sm leading-tight uppercase italic">{item.nombre}</h4>
                <button 
                  onClick={() => removeItem(index)}
                  class="text-stone-300 hover:text-red-500 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                </button>
              </div>
              
              <div class="text-[11px] text-stone-500 space-y-1">
                {item.proteinaSeleccionada && (
                  <p>🍖 Carne: <span class="text-stone-700 font-semibold">{item.proteinaSeleccionada.nombre}</span></p>
                )}
                {item.varianteSeleccionada && (
                  <p>📦 Opción: <span class="text-stone-700 font-semibold">{item.varianteSeleccionada.nombre}</span></p>
                )}
                {item.extrasSeleccionados.length > 0 && (
                  <p>➕ Extras: <span class="text-stone-700 font-semibold">{item.extrasSeleccionados.map(e => e.nombre).join(', ')}</span></p>
                )}
              </div>

              <div class="flex justify-between items-center pt-2 border-t border-stone-50">
                <div class="flex items-center gap-4 bg-stone-100 rounded-xl px-3 py-1">
                  <button onClick={() => updateQuantity(index, -1)} class="font-black text-stone-600 hover:text-[#f29829]">-</button>
                  <span class="text-xs font-black text-stone-800">{item.cantidad}</span>
                  <button onClick={() => updateQuantity(index, 1)} class="font-black text-stone-600 hover:text-[#f29829]">+</button>
                </div>
                <span class="font-black text-stone-900 text-sm">${(item.precioTotalUnitario * item.cantidad).toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Finalizar */}
        <div class="p-6 bg-white border-t border-stone-100 space-y-4">
          <div class="flex justify-between items-center">
            <span class="text-stone-400 uppercase text-[10px] font-black tracking-[0.2em]">Total Pedido</span>
            <span class="text-2xl font-black text-[#f29829] italic">${totalOrden.toFixed(2)}</span>
          </div>
          <button 
            onClick={enviarWhatsApp}
            class="w-full bg-[#f29829] hover:bg-[#db7f0d] text-white font-black py-4 rounded-[1.5rem] uppercase italic tracking-widest text-sm shadow-xl shadow-orange-200 transition-all active:scale-95 flex items-center justify-center gap-3"
          >
            Confirmar por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}