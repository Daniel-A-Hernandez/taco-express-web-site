import tacos from '@/assets/orden-tacos-3.png'
import tacos_pollo from '@/assets/Tacos_pollo_3.jpg'
//IMPORTS IMAGES




export const menu = [
  // ===== TACOS =====
  {
    id: 1,
    name: "Tacos de Res",
    category: ["tacos","todos"],
    price: 4.95,
    desc: "Tacos de pollo con doble tortilla, cebolla, cilantro y salsa.",
    image: tacos,
    tags: ["Pollo", "Tacos", "Mexicano"],
    allowCuantity: [3, 4, 5]
  },
  {
    id: 2,
    name: "Tacos al Pastor",
    category: ["tacos","todos"],
    price: 3.95,
    desc: "Tacos al pastor con piña, cebolla y cilantro.",
    image: tacos,
    tags: ["Pastor", "Piña", "Tacos"]
  },
  {
    id: 3,
    name: "Tacos de Pollo",
    category: ["tacos","todos"],
    price: 3.75,
    desc: "Tacos de res sazonada con doble tortilla.",
    image: tacos_pollo,
    tags: ["Res", "Tacos"]
  },

  // ===== TORTAS =====
  {
    id: 4,
    name: "Torta Mexicana de Pollo",
    category: ["tortas","todos"],
    price: 3.75,
    desc: "Pollo, frijol molido, aguacate, queso especial y chirmol.",
    image: tacos,
    tags: ["Pollo", "Torta"]
  },
  {
    id: 5,
    name: "Torta Mixta",
    category: ["tortas","todos"],
    price: 3.95,
    desc: "Res, pollo y pastor con queso especial y vegetales.",
    image: tacos,
    tags: ["Mixta", "Res", "Pollo", "Pastor"]
  },
  {
    id: 6,
    name: "Torta Vegetariana",
    category: ["tortas","todos"],
    price: 3.50,
    desc: "Frijoles, aguacate, vegetales frescos, piña y queso especial.",
    image: tacos,
    tags: ["Vegetariana", "Sin Carne"]
  },
  {
    id: 7,
    name: "Torta Hawaiana",
    category: ["tortas","todos"],
    price: 4.40,
    desc: "Carne a elección, piña, queso especial y frijoles.",
    image: tacos,
    tags: ["Hawaiana", "Piña"]
  },

  // ===== BURRITOS =====
  {
    id: 8,
    name: "Burrito Mediano",
    category: ["burritos","todos"],
    price: 3.95,
    desc: "Tortilla de trigo, carne a elección, frijoles, queso y aguacate.",
    image: tacos,
    tags: ["Burrito", "Trigo"]
  },
  {
    id: 9,
    name: "Burrito Grande",
    category: ["burritos","todos"],
    price: 5.20,
    desc: "Burrito grande con carne mixta y extras incluidos.",
    image: tacos,
    tags: ["Burrito", "Grande"]
  },
  {
    id: 10,
    name: "Mega Burrito",
    category: ["burritos", "todos"],
    price: 6.30,
    desc: "Mega burrito de 30 cm con abundante carne y queso.",
    image: tacos,
    tags: ["Burrito", "Mega"]
  },

  // ===== QUESADILLAS =====
  {
    id: 11,
    name: "Quesadillas (3)",
    category: ["quesadillas","todos"],
    price: 2.95,
    desc: "Quesadillas de trigo con queso especial y frijoles.",
    image: tacos,
    tags: ["Queso", "Quesadilla"]
  },

  // ===== GUARNICIONES =====
  {
    id: 12,
    name: "Gringa",
    category: ["guarniciones","todos"],
    price: 3.75,
    desc: "Tortilla de trigo con carne y quesillo fundido.",
    image: tacos,
    tags: ["Gringa", "Quesillo"]
  },
  {
    id: 13,
    name: "Guanes",
    category: ["guarniciones","todos"],
    price: 3.95,
    desc: "Carne, quesillo fundido y frijoles en tortilla de trigo.",
    image: tacos, 
    tags: ["Guanes", "Frijoles"]
  },
  {
    id: 14,
    name: "Alambre Mexicano",
    category: ["guarniciones","todos"],
    price: 4.25,
    desc: "Carne salteada con queso, cebolla y chiles.",
    image: tacos,
    tags: ["Alambre", "Salteado"]
  },

  // ===== SOPA =====
  {
    id: 15,
    name: "Sopa de Tortilla",
    category: ["sopas","Todos"],
    price: 4.50,
    desc: "Pollo, tortilla frita, crema, aguacate y queso.",
    image: tacos,
    tags: ["Sopa", "Tradicional"]
  }
];

