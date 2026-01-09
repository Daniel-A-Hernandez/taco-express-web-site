import { useState } from 'preact/hooks';
import { useStore } from '@nanostores/preact';
import { $cart, removeItem, updateQuantity, $isCartOpen, toggleCart } from '@/store/cartStore';
import {Minus, Plus, X, ShoppingBasket, Trash, Send} from 'lucide-preact'
export default function Cart() {
  const cart = useStore($cart);
  const isOpen = useStore($isCartOpen);
  
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [notas, setNotas] = useState('');

  const totalOrden = cart.reduce((acc, item) => acc + (item.precioTotalUnitario * item.cantidad), 0);

  const enviarWhatsApp = () => {
    if (!nombre.trim() || !direccion.trim()) {
      alert("⚠️ Por favor, ingresa tu nombre y dirección.");
      return;
    }

    const numeroTelefono = "50375138755";
    let mensaje = `*🔥 NUEVO PEDIDO - TACO EXPRESS 🔥*\n\n`;
    mensaje += `👤 *CLIENTE:* ${nombre}\n`;
    mensaje += `📍 *ENTREGA:* ${direccion}\n`;
    if (notas) mensaje += `📝 *NOTAS:* ${notas}\n\n`;
    mensaje += `------------------------------------------\n`;
    
    cart.forEach((item, index) => {
      mensaje += `*${index + 1}. ${item.nombre.toUpperCase()}* (x${item.cantidad})\n`;
      if (item.varianteSeleccionada) mensaje += `   🔸 ${item.varianteSeleccionada.nombre}\n`;
      if (item.proteinaSeleccionada) mensaje += `   🥩 ${item.proteinaSeleccionada.nombre}\n`;
      if (item.extrasSeleccionados.length > 0) {
        mensaje += `   ➕ ${item.extrasSeleccionados.map(e => e.nombre).join(', ')}\n`;
      }
      mensaje += `   💰 $${(item.precioTotalUnitario * item.cantidad).toFixed(2)}\n\n`;
    });

    mensaje += `------------------------------------------\n`;
    mensaje += `💵 *TOTAL: $${totalOrden.toFixed(2)}*`;

    window.open(`https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm" onClick={toggleCart}></div>

      <div className="relative w-full max-w-full sm:max-w-[400px] bg-white h-screen shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="bg-stone-900 p-6 border-b border-stone-100 flex justify-between items-center shrink-0">
            <h2 className="w-full font-black italic uppercase text-xl tracking-tighter text-white">Tu Orden</h2>
          <button onClick={toggleCart} className="text-stone-400 hover:text-[#f29829] transition-colors text-xl cursor-pointer"><X/></button>
        </div>

        {/* Lista de Productos (Scrollable) */}
        <div className="flex-grow overflow-y-auto p-6 bg-white space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-stone-300">
              <span className="text-5xl mb-4">🌮</span>
              <p className="font-bold uppercase italic text-xs tracking-widest">Carrito Vacío</p>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="flex gap-4 group">
                <img src={item.imagen} className="w-20 h-20 object-cover rounded-2xl bg-stone-100 shrink-0" />
                <div className="flex flex-col justify-between py-1 flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-stone-900 text-[13px] uppercase leading-tight italic">{item.nombre}</h4>
                    <button onClick={() => removeItem(index)} className="cursor-pointer text-stone-300 hover:text-red-500 transition-colors"><Trash color='red' size={20}/></button>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-3 bg-stone-50 rounded-full px-3 py-1 border border-stone-100">
                      <button onClick={() => updateQuantity(index, -1)} className="text-stone-400 hover:text-orange-500 font-bold cursor-pointer"><Minus size={20}/></button>
                      <span className="text-xs font-bold text-stone-900">{item.cantidad}</span>
                      <button onClick={() => updateQuantity(index, 1)} className="text-stone-400 hover:text-orange-500 font-bold cursor-pointer"><Plus size={20}/></button>
                    </div>
                    <span className="font-black text-stone-900 text-sm">${(item.precioTotalUnitario * item.cantidad).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Sección de Datos y Footer (Fijo abajo) */}
        <div className="shrink-0 border-t border-stone-400 bg-white p-6 pb-8 space-y-6">
          
          {/* Formulario Limpio */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-700">Datos de Entrega</h3>
            <div className="space-y-1">
              <input 
                type="text" 
                placeholder="Nombre completo"
                value={nombre}
                onInput={(e) => setNombre(e.currentTarget.value)}
                className="w-full border-b border-stone-500 py-2 text-sm focus:border-orange-500 outline-none transition-colors placeholder:text-stone-300"
              />
              <input 
                type="text" 
                placeholder="Dirección de entrega"
                value={direccion}
                onInput={(e) => setDireccion(e.currentTarget.value)}
                className="w-full border-b border-stone-500 py-2 text-sm focus:border-orange-500 outline-none transition-colors placeholder:text-stone-300"
              />
              <input 
                type="text" 
                placeholder="Notas (ej. sin cebolla, apto. 4...)"
                value={notas}
                onInput={(e) => setNotas(e.currentTarget.value)}
                className="w-full border-b border-stone-500 py-2 text-sm focus:border-orange-500 outline-none transition-colors placeholder:text-stone-300"
              />
            </div>
          </div>

          {/* Total y Botón */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <span className="text-stone-700 uppercase text-[16px] font-black tracking-widest leading-none">Total: </span>
              <span className="text-3xl font-black text-[#f29829] italic leading-none">${totalOrden.toFixed(2)}</span>
            </div>
            <button 
              onClick={enviarWhatsApp}
              disabled={cart.length === 0}
              className="w-full cursor-pointer bg-[#25D366] hover:bg-[#21BD5B]  text-white font-black py-4 rounded-full uppercase italic tracking-widest text-sm transition-all duration-300 shadow-xl active:scale-95"
            >
              Pedir por WhatsApp 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}