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
   TU MENÚ — organizado por hits y precio.
   Categorías: Hits · Desechables · $150-$250 · $260-$350 · $360+
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
  // ── 1. HITS ─────────────────────────────────────────────────
  // Los más pedidos del catálogo
  {
    categoria: "🔥 Hits",
    items: [
      { nombre: "Elf Bar BC5000",      desc: "5,000 cal · Recargable",                         precio: "$250" },
      { nombre: "Lost Mary 5,000",     desc: "5,000 cal · Recargable",                         precio: "$250" },
      { nombre: "Bang USA 15,000",     desc: "15,000 cal · Recargable",                        precio: "$250" },
      { nombre: "Nicky Jam 10,000",    desc: "10,000 cal · Recargable",                        precio: "$300" },
      { nombre: "Waka SoPro 10,000",   desc: "10,000 cal · Regulador de vapor · Recargable",   precio: "$330" },
      { nombre: "TYSON 15k",           desc: "15,000 cal · Recargable",                        precio: "$350" },
      { nombre: "Geek Bar 15,000",     desc: "15,000 cal · Pantalla Led · Dual Mesh · Recargable", precio: "$350" },
      { nombre: "Waka SoPro 28",       desc: "28,000 cal · Regulador de vapor · Recargable",   precio: "$410" },
    ],
  },

  // ── 2. DESECHABLES ──────────────────────────────────────────
  // No recargables, de menor a mayor precio
  {
    categoria: "Desechables",
    items: [
      { nombre: "Maskking Pro",          desc: "1,000 cal · No recargable",              precio: "$150" },
      { nombre: "Maskking Pro Zero",     desc: "1,000 cal · Sin nicotina · No recargable", precio: "$150" },
      { nombre: "Aroma King Vape",       desc: "3,000 cal · No recargable",              precio: "$150" },
      { nombre: "Maskking Pro Max",      desc: "1,500 cal · Luz Led · No recargable",    precio: "$180" },
      { nombre: "Maskking GTS",          desc: "2,500 cal · No recargable",              precio: "$200" },
      { nombre: "V-Hill",                desc: "3,000 cal · No recargable",              precio: "$220" },
      { nombre: "Maskking ULTRA",        desc: "4,000 cal · No recargable",              precio: "$220" },
      { nombre: "Funky Republic fi3000", desc: "3,000 cal · No recargable",              precio: "$230" },
    ],
  },

  // ── 3. RECARGABLES $150–$250 ─────────────────────────────────
  // Económicos, de menor a mayor precio
  {
    categoria: "$150–$250",
    items: [
      { nombre: "Elf Bar Lux 600",        desc: "600 cal · Recargable",                       precio: "$150" },
      { nombre: "Lost Mary 600",          desc: "600 cal · Recargable",                       precio: "$150" },
      { nombre: "High Ligh Office 4",     desc: "4,000 cal · Recargable",                     precio: "$150" },
      { nombre: "Max Air 5,000",          desc: "5,000 cal · Recargable",                     precio: "$200" },
      { nombre: "High Ligh Office 6",     desc: "6,000 cal · Recargable",                     precio: "$200" },
      { nombre: "Boss Bar 7,000",         desc: "7,000 cal · Recargable",                     precio: "$200" },
      { nombre: "Air 6,000",              desc: "6,000 cal · Recargable",                     precio: "$200" },
      { nombre: "Insta Bar 5,000",        desc: "5,000 cal · Recargable",                     precio: "$200" },
      { nombre: "Waka MB Cartucho",       desc: "6,000 cal · Solo cartucho",                  precio: "$200" },
      { nombre: "Waka Somatch Cartucho",  desc: "6,000 cal · Solo cartucho",                  precio: "$200" },
      { nombre: "Waka Sofit 3,500",       desc: "3,500 cal · Recargable",                     precio: "$210" },
      { nombre: "Bugatti B6",             desc: "6,000 cal · Recargable",                     precio: "$210" },
      { nombre: "Mini Cup 6,800",         desc: "6,800 cal · Recargable",                     precio: "$220" },
      { nombre: "Waka Sofit 4,500",       desc: "4,500 cal · Recargable",                     precio: "$230" },
      { nombre: "Bugatti Spaceship 7",    desc: "7,000 cal · Recargable",                     precio: "$230" },
      { nombre: "Iplay Plus 4,000",       desc: "4,000 cal · Recargable",                     precio: "$240" },
      { nombre: "Elf Bar BC5000",         desc: "5,000 cal · Recargable",                     precio: "$250" },
      { nombre: "Elf Bar TE5000",         desc: "5,000 cal · Recargable",                     precio: "$250" },
      { nombre: "Lost Mary 5,000",        desc: "5,000 cal · Recargable",                     precio: "$250" },
      { nombre: "Maskking Box 3,000",     desc: "3,000 cal · Kit recargable",                 precio: "$250" },
      { nombre: "Waka Smash 6,000",       desc: "6,000 cal · Recargable",                     precio: "$250" },
      { nombre: "Insta Bar 7,500",        desc: "7,500 cal · Recargable",                     precio: "$250" },
      { nombre: "KK Energy 8,000",        desc: "8,000 cal · Recargable",                     precio: "$250" },
      { nombre: "Fly Can (Lata)",         desc: "8,000 cal · Recargable",                     precio: "$250" },
      { nombre: "Biff Bar 6,000",         desc: "6,000 cal · Recargable",                     precio: "$250" },
      { nombre: "Bang USA 15,000",        desc: "15,000 cal · Recargable",                    precio: "$250" },
      { nombre: "PackSpod 5,000",         desc: "5,000 cal · Recargable",                     precio: "$250" },
      { nombre: "Bugatti Elite 9",        desc: "9,000 cal · Recargable",                     precio: "$250" },
      { nombre: "Mini Cup VPro 7,000",    desc: "7,000 cal · Recargable",                     precio: "$250" },
      { nombre: "Ijoy Lio 4,500",         desc: "4,500 cal · Recargable",                     precio: "$250" },
      { nombre: "Ijoy Bar IC 8,000",      desc: "8,000 cal · Indicadores · Recargable",       precio: "$250" },
    ],
  },

  // ── 4. GAMA MEDIA $260–$350 ──────────────────────────────────
  // De menor a mayor precio
  {
    categoria: "$260–$350",
    items: [
      { nombre: "Iplay Box 4,000",        desc: "4,000 cal · Recargable",                         precio: "$260" },
      { nombre: "Waka SoPro 7,000",       desc: "7,000 cal · Regulador de vapor · Recargable",    precio: "$270" },
      { nombre: "Vapsi 6,000",            desc: "6,000 cal · Recargable",                         precio: "$270" },
      { nombre: "Maskking AROMA 6,000",   desc: "6,000 cal · Recargable",                         precio: "$280" },
      { nombre: "Iplay Box 1 6,000",      desc: "6,000 cal · Recargable",                         precio: "$280" },
      { nombre: "Waka SoPro DM8,000",     desc: "8,000 cal · Regulador de vapor · Recargable",    precio: "$290" },
      { nombre: "Wonder G8000",           desc: "8,000 cal · Recargable",                         precio: "$300" },
      { nombre: "Waka MB KIT",            desc: "6,000 cal · Batería + cartucho · Recargable",    precio: "$300" },
      { nombre: "Waka Somatch KIT",       desc: "6,000 cal · Batería + cartucho · Recargable",    precio: "$300" },
      { nombre: "KK Energy 10,000",       desc: "10,000 cal · Recargable",                        precio: "$300" },
      { nombre: "Randm Dazzle Tornado",   desc: "9,000 cal · Recargable",                         precio: "$300" },
      { nombre: "Vape Daniel's 8,000",    desc: "8,000 cal · Recargable",                         precio: "$300" },
      { nombre: "Nicky Jam 10,000",       desc: "10,000 cal · Recargable",                        precio: "$300" },
      { nombre: "TYSON 7K",               desc: "7,000 cal · Recargable",                         precio: "$300" },
      { nombre: "Iplay Ulix 6,000",       desc: "6,000 cal · Recargable",                         precio: "$300" },
      { nombre: "Ignite v50 5,000",       desc: "5,000 cal · Recargable",                         precio: "$300" },
      { nombre: "Hyper Bar Ultra 12,000", desc: "12,000 cal · Indicadores · Recargable",          precio: "$300" },
      { nombre: "Elf World MC85 8,500",   desc: "8,500 cal · Recargable",                         precio: "$300" },
      { nombre: "Waka SoPro 8,000",       desc: "8,000 cal · Pantalla Led · Regulador · Recargable", precio: "$310" },
      { nombre: "Iplay Box Vibar 6,500",  desc: "6,500 cal · Pantalla Led · Recargable",          precio: "$320" },
      { nombre: "Elf Bar BC10,000",       desc: "10,000 cal · Indicadores · Recargable",          precio: "$320" },
      { nombre: "Burst 15,000",           desc: "15,000 cal · Dual Mesh · Recargable",            precio: "$320" },
      { nombre: "Waka SoPro 10,000",      desc: "10,000 cal · Regulador de vapor · Recargable",   precio: "$330" },
      { nombre: "VAPOPEYE 12,000",        desc: "12,000 cal · Recargable",                        precio: "$340" },
      { nombre: "Iplay Ecco 7,000",       desc: "7,000 cal · Recargable",                         precio: "$340" },
      { nombre: "Tesla Cybertruck 18,000",desc: "18,000 cal · Dual Mesh · Display · Vibración",   precio: "$340" },
      { nombre: "Wonder Neo 9,000",       desc: "9,000 cal · Indicadores · Recargable",           precio: "$350" },
      { nombre: "KK Energy 12,000",       desc: "12,000 cal · Recargable",                        precio: "$350" },
      { nombre: "Geek Bar 15,000",        desc: "15,000 cal · Pantalla Led · Dual Mesh · Recargable", precio: "$350" },
      { nombre: "Fly Evo 8,000",          desc: "8,000 cal · Pantalla Led · Recargable",          precio: "$350" },
      { nombre: "Nasty Bar 8,500",        desc: "8,500 cal · Pantalla Led · Recargable",          precio: "$350" },
      { nombre: "Teddy 8,888",            desc: "8,888 cal · Recargable",                         precio: "$350" },
      { nombre: "BONK 8k",               desc: "8,000 cal · Recargable",                         precio: "$350" },
      { nombre: "TYSON 15k",             desc: "15,000 cal · Recargable",                        precio: "$350" },
      { nombre: "Floyd Mayweather Jr",    desc: "15,000 cal · Pantalla Led c/indicadores · Recargable", precio: "$350" },
      { nombre: "Insta Bar 15",          desc: "15,000 cal · Indicadores · Recargable",          precio: "$350" },
      { nombre: "VPro Tetra 20,000",     desc: "20,000 cal · Recargable",                        precio: "$350" },
      { nombre: "Elf World PE10 10,000", desc: "10,000 cal · Recargable",                        precio: "$350" },
      { nombre: "Waka SoPro 15,000",     desc: "15,000 cal · Regulador de vapor · Recargable",   precio: "$350" },
    ],
  },

  // ── 5. PREMIUM $360+ ─────────────────────────────────────────
  // Alta gama, de menor a mayor precio
  {
    categoria: "$360+",
    items: [
      { nombre: "Iplay Ghost 9,000",       desc: "9,000 cal · Recargable",                            precio: "$360" },
      { nombre: "Waka Nova 16,000",        desc: "16,000 cal · Regulador de vapor · Recargable",      precio: "$370" },
      { nombre: "Iplay ÉLITE 12,000",      desc: "12,000 cal · Recargable",                           precio: "$380" },
      { nombre: "Waka SoPro 18,000",       desc: "18,000 cal · Regulador de vapor · Recargable",      precio: "$390" },
      { nombre: "Iplay X-box 12",          desc: "12,000 cal · Recargable",                           precio: "$400" },
      { nombre: "Wonder Race 15,000",      desc: "15,000 cal · Dual Mesh · Indicadores · Recargable", precio: "$400" },
      { nombre: "Ice Wave 8,500",          desc: "8,500 cal · Indicadores · Recargable",              precio: "$400" },
      { nombre: "RabBeats Touch 10k",      desc: "10,000 cal · Pantalla touch · Recargable",          precio: "$400" },
      { nombre: "V-FELL 20k",             desc: "20,000 cal · 3 modos · Recargable",                 precio: "$400" },
      { nombre: "V-PLAY 20k",             desc: "20,000 cal · 3 juegos 🎮 · Recargable",             precio: "$400" },
      { nombre: "Nexa 20,000",            desc: "20,000 cal · Recargable",                           precio: "$400" },
      { nombre: "Elf World Pro 15",       desc: "12,000 cal · Indicadores · Recargable",             precio: "$400" },
      { nombre: "Waka SoPro 28",          desc: "28,000 cal · Regulador de vapor · Recargable",      precio: "$410" },
      { nombre: "Airmes Matrix Casino",   desc: "25,000 cal · 3 juegos de casino · Recargable",      precio: "$450" },
      { nombre: "Air Fuze 30,000",        desc: "30,000 cal · Smartwatch + Bocina integrada",        precio: "$520" },
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
