/* ============================================================
   CONFIGURACIÓN DE VAPING CHILPO — ¡EDITA TODO AQUÍ!
   ------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas tocar para cambiar:
   - El número de WhatsApp
   - Los mensajes que llegan prellenados al chat
   - Los productos, descripciones y precios del menú
   Guarda el archivo y la página se actualiza sola.
   ============================================================ */

// Tu número de WhatsApp con código de país (52 = México), sin "+" ni espacios
export const WA_NUMBER = "527471000043";

// Mensaje cuando escanean el QR (contexto peda 🍻)
export const WA_MSG =
  "Qué onda Vaping Chilpo 🔥 escaneé su QR en la peda 🍻 mándenme info y los guardo pa'l próximo pedido 💨";

// Mensaje cuando piden un producto del menú
// ({producto} se reemplaza solo por el nombre del producto)
export const WA_MSG_PEDIDO =
  "Qué onda Vaping Chilpo 💨 vi el menú y quiero: {producto} 🔥 ¿cómo le hacemos?";

/* ============================================================
   TU MENÚ — edita esto con tus productos y precios reales.
   - "categoria": el nombre de la pestaña en el menú
   - "nombre":    nombre del producto
   - "desc":      descripción corta (puffs, sabores, etc.)
   - "precio":    escríbelo como quieras ("$350", "GRATIS*", etc.)
   Puedes agregar o borrar productos y categorías completas.
   ============================================================ */

export type MenuItem = {
  nombre: string;
  desc: string;
  precio: string;
};

export type MenuCategory = {
  categoria: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    categoria: "Desechables",
    items: [
      { nombre: "Elf Bar BC5000", desc: "5000 puffs · varios sabores", precio: "$350" },
      { nombre: "Lost Mary OS5000", desc: "5000 puffs · sabores frutales", precio: "$330" },
      { nombre: "Waka SoPro 10000", desc: "10,000 puffs · pantalla", precio: "$420" },
      { nombre: "Fume Extra", desc: "1500 puffs · económico", precio: "$220" },
    ],
  },
  {
    categoria: "Recargables",
    items: [
      { nombre: "Vaporesso XROS 3", desc: "Pod recargable + cartucho", precio: "$550" },
      { nombre: "Caliburn G2", desc: "Pod recargable Uwell", precio: "$520" },
    ],
  },
  {
    categoria: "Sales y Líquidos",
    items: [
      { nombre: "Sales 30ml", desc: "35/50mg · varios sabores", precio: "$250" },
      { nombre: "Líquido freebase 60ml", desc: "3/6mg · varios sabores", precio: "$280" },
    ],
  },
  {
    categoria: "Promos",
    items: [
      { nombre: "2 desechables", desc: "Llévate 2 y ahorra", precio: "$600" },
      { nombre: "Envío en Chilpo", desc: "Entrega el mismo día", precio: "GRATIS*" },
    ],
  },
];

/* ============================================================
   No necesitas editar nada debajo de esta línea.
   ============================================================ */

// Genera el link de WhatsApp con el mensaje ya codificado
export const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

// Link para pedir un producto específico
export const waPedido = (producto: string) =>
  waLink(WA_MSG_PEDIDO.replace("{producto}", producto));
