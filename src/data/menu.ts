export interface Opcion {
  nombre: string;
  precioAdicional: number;
}

export interface Producto {
  id: string;
  nombre: string;
  categoria: string;
  precioBase: number;
  imagen: string;
  descripcion?: string;
  proteinas?: Opcion[];
  variantes?: Opcion[];
  tipoExtra: 'global' | 'costra' | 'ninguno';
}

// --- CONFIGURACIONES DE EXTRAS ---

export const EXTRAS_GLOBALES: Opcion[] = [
  { nombre: "Quesillo", precioAdicional: 0.60 },
  { nombre: "Carne extra", precioAdicional: 1.25 },
  { nombre: "Piña", precioAdicional: 0.50 },
  { nombre: "Frijoles", precioAdicional: 0.40 },
  { nombre: "Tiras de tortilla", precioAdicional: 0.60 },
  { nombre: "4 Chiles toreados", precioAdicional: 0.60 },
  { nombre: "Tortillas de taco adicionales", precioAdicional: 0.15 }
];

export const EXTRAS_COSTRA: Opcion[] = [
  { nombre: "Costra de queso", precioAdicional: 0.85 },
  { nombre: "Doble capa de costra", precioAdicional: 1.40 }
];

// --- PROTEÍNAS ---

const CARNES_ESTANDAR: Opcion[] = [
  { nombre: "Pollo", precioAdicional: 0 },
  { nombre: "Al Pastor", precioAdicional: 0 },
  { nombre: "Res", precioAdicional: 0.25 },
  { nombre: "Mixto", precioAdicional: 0.25 }
];

const CARNES_COMBOS: Opcion[] = [
  { nombre: "Pollo", precioAdicional: 0 },
  { nombre: "Al Pastor", precioAdicional: 0 },
  { nombre: "De Res", precioAdicional: 0.40 }
];

// --- EL MENÚ ---

export const menu: Producto[] = [
  // CATEGORÍA: TACOS (Sin extras)
  { id: "t-pollo",imagen: 'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/Tacos_pollo%20(2).jpg',nombre: "Tacos de Pollo" ,descripcion:'Sabor mexicano!',categoria: "TACOS", precioBase: 3.75, tipoExtra: 'ninguno', variantes: [{ nombre: "Orden de 3", precioAdicional: 0 }, { nombre: "Orden de 4", precioAdicional: 0.75 }, { nombre: "Orden de 5", precioAdicional: 1.70 }] },
  { id: "t-pastor",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/tacos_pastor.jpg' ,nombre: "Tacos al Pastor",descripcion:'Sabor mexicano!',categoria: "TACOS", precioBase: 3.75, tipoExtra: 'ninguno', variantes: [{ nombre: "Orden de 3", precioAdicional: 0 }, { nombre: "Orden de 4", precioAdicional: 0.75 }, { nombre: "Orden de 5", precioAdicional: 1.70 }] },
  { id: "t-res",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/tacos-res.jpg', nombre: "Tacos de Res", categoria: "TACOS", precioBase: 3.95, tipoExtra: 'ninguno', variantes: [{ nombre: "Orden de 3", precioAdicional: 0 }, { nombre: "Orden de 4", precioAdicional: 1.00 }, { nombre: "Orden de 5", precioAdicional: 2.00 }] },
  { id: "t-mixto",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/tacos_mixtos.jpg', nombre: "Tacos Mixtos", categoria: "TACOS", precioBase: 3.95, tipoExtra: 'ninguno', variantes: [{ nombre: "Orden de 3", precioAdicional: 0 }, { nombre: "Orden de 4", precioAdicional: 1.00 }, { nombre: "Orden de 5", precioAdicional: 2.00 }] },

  // CATEGORÍA: TORTAS (Extras de Costra)
  { id: "tr-mex",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/Torta_mexicana.png' ,nombre: "Torta Mexicana", categoria: "TORTAS", precioBase: 3.75, proteinas: CARNES_ESTANDAR, tipoExtra: 'costra' },
  { id: "tr-haw",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/torta-hawaiana.jpg', nombre: "Torta Hawaiana", categoria: "TORTAS", precioBase: 4.15, proteinas: CARNES_ESTANDAR, tipoExtra: 'costra' },
  { id: "tr-veg",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/torta-vegetariana.png', nombre: "Torta Vegetariana", categoria: "TORTAS", precioBase: 3.50, tipoExtra: 'ninguno' },

  // CATEGORÍA: BURRITOS (Extras Globales)
  { id: "b-norm",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/Burrito.png', nombre: "Burrito Normal (20cm)", categoria: "BURRITOS", precioBase: 3.95, proteinas: CARNES_ESTANDAR, tipoExtra: 'global' },
  { id: "b-xl",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/Burrito_grande.png' ,nombre: "Burrito XL (25cm)", categoria: "BURRITOS", precioBase: 4.95, proteinas: CARNES_ESTANDAR, tipoExtra: 'global' },
  { id: "b-mega",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/mega_burrito.png', nombre: "Mega Burrito (30cm)", categoria: "BURRITOS", precioBase: 6.50, proteinas: CARNES_ESTANDAR, tipoExtra: 'global' },

  // CATEGORÍA: ESPECIALIDADES (Extras Globales donde aplique)
  { id: "g-ord",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/Gringas.png', nombre: "Gringas (Orden de 3)", categoria: "GRINGAS", precioBase: 3.75, proteinas: CARNES_ESTANDAR, tipoExtra: 'global' },
  { id: "a-mex",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/alambre-mexicano.jpg', nombre: "Alambre Mexicano", categoria: "ALAMBRES", precioBase: 5.50, proteinas: CARNES_ESTANDAR, tipoExtra: 'global' },
  { id: "q-ord",imagen:'', nombre: "Quesadillas (Orden de 3)", categoria: "QUESADILLAS", precioBase: 2.95, tipoExtra: 'ninguno' },
  { id: "s-tort",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/sopa%20de%20tortilla.png',  nombre: "Sopa de Tortilla", categoria: "SOPAS", precioBase: 4.50, tipoExtra: 'ninguno' },

  // CATEGORÍA: TAQUIZAS
  { id: "taq-10",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/taquiza-10.png', nombre: "Taquiza 10 Tacos", categoria: "TAQUIZAS", precioBase: 11.50, tipoExtra: 'ninguno', variantes: [{ nombre: "Sugerida (3P, 4Pa, 3R)", precioAdicional: 0 }, { nombre: "Mixtos", precioAdicional: 0.30 }] },
  { id: "taq-15",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/Taquiza-15.jpeg', nombre: "Taquiza 15 Tacos", categoria: "TAQUIZAS", precioBase: 15.95, tipoExtra: 'ninguno', variantes: [{ nombre: "Sugerida (5P, 5Pa, 5R)", precioAdicional: 0 }, { nombre: "Mixtos", precioAdicional: 1.55 }] },
  { id: "taq-20",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/taquiza-20.jpeg', nombre: "Taquiza 20 Tacos", categoria: "TAQUIZAS", precioBase: 21.95, tipoExtra: 'ninguno', variantes: [{ nombre: "Sugerida (4P, 8Pa, 8R)", precioAdicional: 0 }, { nombre: "Mixtos", precioAdicional: 1.55 }] },

  // CATEGORÍA: COMBOS (Extras Globales)
  { id: "c-art",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/combo-arturito.png', nombre: "Combo Arturito", categoria: "COMBOS", precioBase: 4.95, tipoExtra: 'global', proteinas: CARNES_COMBOS, variantes: [{ nombre: "Con Torta Mexicana", precioAdicional: 0 }, { nombre: "Con Burrito", precioAdicional: 0 }] },
  { id: "c-sup",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/combo_2.png', nombre: "Super Combo", categoria: "COMBOS", precioBase: 5.95, tipoExtra: 'global', proteinas: CARNES_COMBOS, variantes: [{ nombre: "Con Torta Mexicana", precioAdicional: 0 }, { nombre: "Con Burrito", precioAdicional: 0 }] }
];