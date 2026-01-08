import { atom } from 'nanostores';
import type { Producto, Opcion } from '@/data/menu';

// 1. Definimos la estructura de un producto dentro del carrito
export interface CartItem extends Producto {
  varianteSeleccionada?: Opcion;
  proteinaSeleccionada?: Opcion;
  extrasSeleccionados: Opcion[];
  cantidad: number;
  precioTotalUnitario: number;
}

// 2. Creamos el átomo (el estado global)
export const $cart = atom<CartItem[]>([]);

// --- ACCIONES (Lógica de control) ---

// Añadir producto al carrito
export function addToCart(item: CartItem) {
  const currentCart = $cart.get();
  $cart.set([...currentCart, item]);
}

// Eliminar un producto por su índice
export function removeItem(index: number) {
  const currentCart = $cart.get();
  const newCart = currentCart.filter((_, i) => i !== index);
  $cart.set(newCart);
}

// Cambiar la cantidad (+1 o -1)
export function updateQuantity(index: number, delta: number) {
  const currentCart = [...$cart.get()];
  const item = currentCart[index];
  
  if (item) {
    const nuevaCantidad = item.cantidad + delta;
    if (nuevaCantidad >= 1) {
      item.cantidad = nuevaCantidad;
      $cart.set(currentCart);
    }
  }
}

// Vaciar carrito (útil después de enviar el pedido)
export function clearCart() {
  $cart.set([]);
}