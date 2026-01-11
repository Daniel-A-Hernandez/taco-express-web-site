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
  tipoExtra: 'global' | 'costra' |'burritos'|'sopas'|'ninguno';
}

// --- CONFIGURACIONES DE EXTRAS ---

export const EXTRAS_GLOBALES: Opcion[] = [
  { nombre: "Quesillo", precioAdicional: 0.60 },
  { nombre: "Carne extra", precioAdicional: 1.25 },
  { nombre: "Piña", precioAdicional: 0.50 },
  { nombre: "Frijoles", precioAdicional: 0.40 },
  { nombre: "4 Chiles toreados", precioAdicional: 0.60 },
  { nombre: "Tortillas de taco adicionales", precioAdicional: 0.15 }
];

export const EXTRAS_COSTRA: Opcion[] = [
  { nombre: "Costra de queso", precioAdicional: 0.85 },
  { nombre: "Doble capa de costra", precioAdicional: 1.40 }
];
export const EXTRAS_BURRITOS: Opcion [] = [
  { nombre: "Quesillo", precioAdicional: 0.60 },
  { nombre: "Carne extra", precioAdicional: 1.25 },
  { nombre: "Piña", precioAdicional: 0.50 },
  { nombre: "Frijoles", precioAdicional: 0.40 },
  { nombre: "4 Chiles toreados", precioAdicional: 0.60 },
];
export const EXTRAS_SOPAS: Opcion[] = [
  { nombre: "Quesillo", precioAdicional: 0.60 },
  { nombre: "Carne extra", precioAdicional: 1.25 },
  { nombre: "Tiras de tortilla", precioAdicional: 0.60 },
  { nombre: "4 Chiles toreados", precioAdicional: 0.60 },
];



// --- PROTEÍNAS ---

const CARNES_ESTANDAR: Opcion[] = [
  { nombre: "Pollo", precioAdicional: 0 },
  { nombre: "Al Pastor", precioAdicional: 0 },
  { nombre: "Res", precioAdicional: 0.25 },
  { nombre: "Mixto", precioAdicional: 0.25 }
];
const CARNES_TORTAS: Opcion[] = [
  { nombre: "Pollo", precioAdicional: 0 },
  { nombre: "Al Pastor", precioAdicional: 0 },
  { nombre: "Res", precioAdicional: 0.20 },
  { nombre: "Mixto", precioAdicional: 0.20 }
];
const CARNES_HAWAIANA: Opcion[] = [
  { nombre: "Pollo", precioAdicional: 0 },
  { nombre: "Al Pastor", precioAdicional: 0 },
  { nombre: "Res", precioAdicional: 0.25 },
  { nombre: "Mixto", precioAdicional: 0.25 }
];
const CARNES_ALAMBRE: Opcion[] = [
  { nombre: "Pollo", precioAdicional: 0 },
  { nombre: "Al Pastor", precioAdicional: 0 },
  { nombre: "Res", precioAdicional: 0.30 },
  { nombre: "Mixto", precioAdicional: 0.30 }
];

const CARNES_COMBOS: Opcion[] = [
  { nombre: "Pollo", precioAdicional: 0 },
  { nombre: "Al Pastor", precioAdicional: 0 },
  { nombre: "De Res", precioAdicional: 0.40 }
];

// --- EL MENÚ ---

export const menu: Producto[] = [
  // CATEGORÍA: TACOS (Sin extras)
  { id: "t-pollo",imagen: 'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/Tacos_pollo%20(2).jpg',nombre: "Tacos de Pollo" ,descripcion:'Doble tortilla de maíz rellena con pollo sazonado al estilo mexicano, acompañado de cebolla, cilantro y salsas tradicionales.',categoria: "TACOS", precioBase: 3.75, tipoExtra: 'ninguno', variantes: [{ nombre: "Orden de 3", precioAdicional: 0 }, { nombre: "Orden de 4", precioAdicional: 0.75 }, { nombre: "Orden de 5", precioAdicional: 1.70 }] },
  { id: "t-pastor",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/tacos_pastor.jpg' ,nombre: "Tacos al Pastor",descripcion:'Doble tortilla de maíz rellena con pastor sazonado al estilo mexicano, acompañado de cebolla, cilantro y salsas tradicionales.',categoria: "TACOS", precioBase: 3.75, tipoExtra: 'ninguno', variantes: [{ nombre: "Orden de 3", precioAdicional: 0 }, { nombre: "Orden de 4", precioAdicional: 0.75 }, { nombre: "Orden de 5", precioAdicional: 1.70 }] },
  { id: "t-res",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/tacos-res.jpg', nombre: "Tacos de Res",descripcion:'Doble tortilla de maíz rellena con carne de res sazonado al estilo mexicano, acompañado de cebolla, cilantro y salsas tradicionales.', categoria: "TACOS", precioBase: 3.95, tipoExtra: 'ninguno', variantes: [{ nombre: "Orden de 3", precioAdicional: 0 }, { nombre: "Orden de 4", precioAdicional: 1.00 }, { nombre: "Orden de 5", precioAdicional: 2.00 }] },
  { id: "t-mixto",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/tacos_mixtos.jpg', nombre: "Tacos Mixtos",descripcion:'Doble tortilla de maíz rellena con combinación de carnes (pollo, pastor y res), cebolla, cilantro y salsa.', categoria: "TACOS", precioBase: 3.95, tipoExtra: 'ninguno', variantes: [{ nombre: "Orden de 3", precioAdicional: 0 }, { nombre: "Orden de 4", precioAdicional: 1.00 }, { nombre: "Orden de 5", precioAdicional: 2.00 }] },

  // CATEGORÍA: TORTAS (Extras de Costra)
  { id: "tr-mex",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/Torta_mexicana.png' ,nombre: "Torta Mexicana",descripcion:'Pan relleno con carne de tu eleccion a la plancha, frijol molido, quesillo especial, pasta de aguacate, lechuga y chirmol.', categoria: "TORTAS", precioBase: 3.75, proteinas: CARNES_TORTAS, tipoExtra: 'costra'}, 
  { id: "tr-haw",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/torta-hawaiana.jpg', nombre: "Torta Hawaiana",descripcion:'Carne a elección con piña, frijol molido, quesillo especial, pasta de aguacate y chirmol dentro de pan dorado.', categoria: "TORTAS", precioBase: 4.15, proteinas: CARNES_HAWAIANA, tipoExtra: 'costra' },
  { id: "tr-veg",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/torta-vegetariana.png', nombre: "Torta Vegetariana",descripcion:'Frijol molido, pasta de aguacate, lechuga, tomate, chirmol, piña, chiles verdes y rojos, cebolla salteada y quesillo especial dentro de pan artesanal.', categoria: "TORTAS", precioBase: 3.50, tipoExtra: 'ninguno' },

  // CATEGORÍA: BURRITOS (Extras Globales)
  { id: "b-norm",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/Burrito.png', nombre: "Burrito Normal (20cm)",descripcion:'Relleno generoso de carne y acompañamientos, enrollado en tortilla de harina.', categoria: "BURRITOS", precioBase: 3.95, proteinas: CARNES_ESTANDAR, tipoExtra:'burritos' },
  { id: "b-xl",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/Burrito_grande.png' ,nombre: "Burrito XL (25cm)",descripcion:'Versión grande, con más carne y relleno para mayor satisfacción.', categoria: "BURRITOS", precioBase: 4.95, proteinas: CARNES_ESTANDAR, tipoExtra: 'burritos' },
  { id: "b-mega",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/mega_burrito.png', nombre: "Mega Burrito (30cm)",descripcion:'Burrito extra grande, ideal para los más hambrientos.', categoria: "BURRITOS", precioBase: 6.50, proteinas: CARNES_ESTANDAR, tipoExtra: 'burritos' },

  // CATEGORÍA: ESPECIALIDADES (Extras Globales donde aplique)
  { id: "g-ord",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/Gringas.png', nombre: "Gringas (Orden de 3)",descripcion:'Tortilla de trigo rellena con carne a elección y quesillo especial fundido. Servidas con chirmol, pasta de aguacate y cebolla curtida.', categoria: "GRINGAS", precioBase: 3.75, proteinas: CARNES_TORTAS, tipoExtra: 'burritos' },
  { id: "a-mex",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/alambre-mexicano.jpg', nombre: "Alambre Mexicano",descripcion:'5 tortillas de taco con carne a elección, quesillo especial fundido, chiles verdes y marrones, y cebolla en juliana. Servido con chirmol, pasta de aguacate y cebolla curtida.', categoria: "ALAMBRES", precioBase: 3.95, proteinas: CARNES_ALAMBRE, tipoExtra: 'global' },
  { id: "q-ord",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/quesadillas.png', nombre: "Quesadillas (Orden de 3)",descripcion:'Tortilla de trigo rellena de quesillo especial y frijoles molidos. Acompañadas de chirmol, pasta de aguacate y cebolla curtida.', categoria: "QUESADILLAS", precioBase: 2.95, tipoExtra: 'ninguno' },
  { id: "s-tort",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/sopa%20de%20tortilla.png',  nombre: "Sopa de Tortilla",descripcion:'Caldo tradicional mexicano con trozos de pollo, tiras de tortilla frita, crema, aguacate, quesillo especial, cilantro y cebolla.', categoria: "SOPAS", precioBase: 4.50, tipoExtra: 'sopas' },

  // CATEGORÍA: TAQUIZAS
  { id: "taq-10",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/taquiza-10.png',  nombre: "Taquiza 10 Tacos",descripcion:'Selección de tacos en doble tortilla con combinación de pollo, al pastor y res.', categoria: "TAQUIZAS", precioBase: 11.50, tipoExtra: 'ninguno', variantes: [{ nombre: "3 Pastor, 4 Pollo, 3 Res", precioAdicional: 0 }, { nombre: "Mixtos", precioAdicional: 0.30 }] },
  { id: "taq-15",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/Taquiza-15.jpeg', nombre: "Taquiza 15 Tacos",descripcion:'Combo ideal para compartir, con tacos de pollo, al pastor y res en doble tortilla.', categoria: "TAQUIZAS", precioBase: 15.95, tipoExtra: 'ninguno', variantes: [{ nombre: "5 Pastor, 5 Pollo, 5 Res", precioAdicional: 0 }, { nombre: "Mixtos", precioAdicional: 1.55 }] },
  { id: "taq-20",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/taquiza-20.jpeg', nombre: "Taquiza 20 Tacos",descripcion:'Gran bandeja de tacos de pollo, al pastor y res, servidos en doble tortilla para mayor consistencia y sabor.', categoria: "TAQUIZAS", precioBase: 21.95, tipoExtra: 'ninguno', variantes: [{ nombre: "4 Pastor, 8 Pollo, 8 Res", precioAdicional: 0 }, { nombre: "Mixtos", precioAdicional: 1.55 }] },

  // CATEGORÍA: COMBOS (Extras Globales)
  { id: "c-art",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/combo-arturito.png', nombre: "Combo Arturito",descripcion:'Torta o burrito + 1 taco doble tortilla. El combo perfecto para matar el antojo.', categoria: "COMBOS", precioBase: 4.95, tipoExtra: 'global', proteinas: CARNES_COMBOS, variantes: [{ nombre: "Con Torta Mexicana", precioAdicional: 0 }, { nombre: "Con Burrito", precioAdicional: 0 }] },
  { id: "c-sup",imagen:'https://pub-24b9526bf2534974a8f6ec5a149e405c.r2.dev/combo_2.png', nombre: "Super Combo",descripcion:'Torta o burrito + 2 tacos doble tortilla. Cuando uno no es suficiente.', categoria: "COMBOS", precioBase: 5.95, tipoExtra: 'global', proteinas: CARNES_COMBOS, variantes: [{ nombre: "Con Torta Mexicana", precioAdicional: 0 }, { nombre: "Con Burrito", precioAdicional: 0 }] }
];