import { atom } from 'nanostores';
import type { Producto, Opcion } from '@/data/menu';

// 1. Estructura de un producto dentro del carrito
export interface CartItem extends Producto {
  varianteSeleccionada?: Opcion;
  proteinaSeleccionada?: Opcion;
  extrasSeleccionados: Opcion[];
  cantidad: number;
  precioTotalUnitario: number;
}

// 2. ESTADOS GLOBALES
export const $cart = atom<CartItem[]>([]);
export const $isCartOpen = atom(false); // <--- NUEVO: Controla si el carrito se ve

// --- ACCIONES ---

// Abrir o cerrar el carrito
export function toggleCart() {
  $isCartOpen.set(!$isCartOpen.get());
}

// Añadir producto al carrito
export function addToCart(item: CartItem) {
  const currentCart = $cart.get();
  $cart.set([...currentCart, item]);
  
  // OPCIONAL: Abrir el carrito automáticamente al añadir algo
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

// Vaciar carrito
export function clearCart() {
  $cart.set([]);
  $isCartOpen.set(false);
}