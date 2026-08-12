
export const catalogoServicios = [
  // ── DOMICILIO ──
  {
    id: 1,
    slug: "apertura-chapas-candados",
    title: "Apertura de Chapas y Candados",
    icon: "🏠",
    description: "¿Te quedaste fuera de tu casa o negocio? Abrimos la chapa o candado en el lugar donde te encuentres, sin dañar la cerradura siempre que sea posible.",
    category: "domicilio",
    isEmergency: true,
    price: "Cotización previa"
  },
  {
    id: 2,
    slug: "llaves-perdidas-domicilio",
    title: "Elaboración de Llaves Perdidas (Chapas y Candados)",
    icon: "🔧",
    description: "¿Perdiste todas tus llaves y no tienes ninguna copia? Fabricamos una llave nueva directamente desde la chapa o candado, sin necesidad de un duplicado previo.",
    category: "domicilio",
    isEmergency: true,
    price: "Cotización previa"
  },
  {
    id: 3,
    slug: "copia-llaves-seguridad",
    title: "Copia de Llaves de Seguridad",
    icon: "🔑",
    description: "¿Quieres un juego extra o de repuesto? Duplicamos llaves de alta seguridad (anti-copia/anti-bumping) a partir de tu llave original.",
    category: "domicilio",
    isEmergency: false,
    price: "Cotización previa"
  },

  // ── AUTOMOTRIZ ──
  {
    id: 4,
    slug: "apertura-automotriz",
    title: "Apertura Automotriz",
    icon: "🚗",
    description: "¿Dejaste las llaves dentro del auto o perdiste el acceso? Abrimos tu vehículo en el lugar donde te encuentres, sin dañar la carrocería ni el seguro.",
    category: "automotriz",
    isEmergency: true,
    price: "Cotización previa"
  },
  {
    id: 5,
    slug: "llaves-perdidas-auto",
    title: "Elaboración de Llaves Perdidas (Auto, incluye chip)",
    icon: "🔧",
    description: "¿Perdiste todas las llaves de tu auto? Fabricamos una llave nueva desde cero, incluyendo el chip si tu modelo lo requiere, según la marca y año de tu vehículo.",
    category: "automotriz",
    isEmergency: true,
    price: "Cotización previa"
  },
  {
    id: 6,
    slug: "copia-llaves-auto-chip",
    title: "Copia de Llaves de Auto con Chip",
    icon: "🔑",
    description: "¿Tienes tu llave original y solo quieres un duplicado de respaldo? Copiamos tu llave con chip a partir del original, sin necesidad de fabricarla desde cero.",
    category: "automotriz",
    isEmergency: false,
    price: "Cotización previa"
  },
  {
    id: 7,
    slug: "programacion-chip-controles",
    title: "Programación de Llaves con Chip y Controles",
    icon: "📡",
    description: "Programamos el chip de tu llave para que el auto la reconozca al encender, y en algunos modelos también el control remoto. Disponibilidad sujeta a marca y modelo — consúltanos.",
    category: "automotriz",
    isEmergency: false,
    price: "Cotización previa"
  },
  {
    id: 8,
    slug: "copia-llaves-moto",
    title: "Copia de Llaves de Motocicleta",
    icon: "🏍️",
    description: "¿Necesitas un duplicado de la llave de tu moto? Elaboramos copias a partir de tu llave original o directamente desde la cerradura si no cuentas con ninguna.",
    category: "automotriz",
    isEmergency: false,
    price: "Cotización previa"
  },
];

export const categorias = [
  { slug: "domicilio", nombre: "Domicilio" },
  { slug: "automotriz", nombre: "Automotriz" },
];