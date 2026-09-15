import { SportsEvent, TrainJourney, CruiseCollection } from '../types';

export const SPORTS_EVENTS: SportsEvent[] = [
  {
    id: 'f1-paddock-club',
    title: 'Formula 1 Paddock Club™',
    badge: 'Automovilismo Élite',
    subtitle: 'El pináculo del automovilismo y hospitalidad de garaje',
    description: 'El pináculo del automovilismo. Acceso a pit lane walks, hospitalidad de clase mundial, suites exclusivas en Mónaco, Austin, Las Vegas y Ciudad de México.',
    locations: ['Mónaco', 'Las Vegas', 'Ciudad de México (Hermanos Rodríguez)', 'Austin (COTA)'],
    dates: 'Temporada Oficial 2026',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1600&auto=format&fit=crop',
    highlights: [
      'Acceso exclusivo al Pit Lane en horarios privilegiados',
      'Suites climatizadas con vista directa a la recta principal y boxes',
      'Gastronomía gourmet internacional y barra libre de champán continuo',
      'Encuentros y charlas con pilotos y leyendas de la F1',
      'Simuladores de telemetría y presencia en ceremonias del podio'
    ],
    includedPerks: [
      'Traslado en helicóptero directo al circuito (evitando congestión urbana)',
      'Suites garantizadas en resorts 5 estrellas de la ciudad sede',
      'Cenas privadas post-carrera con reservación preferencial en restaurantes Michelin',
      'Concierge privado in-situ durante las 72 horas del Gran Premio'
    ],
    heroQuote: 'Estar a escasos metros de los autos a 300 km/h mientras sostienes una copa de Dom Pérignon no es ver la carrera; es ser parte de ella.'
  },
  {
    id: 'super-bowl-vip',
    title: 'Super Bowl VIP Experience',
    badge: 'Máximo Espectáculo NFL',
    subtitle: 'Hospitalidad de élite y acceso a las festividades oficiales',
    description: 'Paquetes de hospitalidad premium, acceso a fiestas exclusivas pre-juego (Tailgate VIP) y las mejores ubicaciones en el estadio.',
    locations: ['Sede Oficial Super Bowl', 'Club Level & On-Field Privileges'],
    dates: 'Fin de semana de campeonato',
    image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=1600&auto=format&fit=crop',
    highlights: [
      'Asientos de lujo entre yarda 40 y 50 en niveles Club o Suite privada',
      'Acceso exclusivo a fiestas Tailgate oficiales con chefs galardonados',
      'Pases VIP para conciertos y alfombras rojas previas al evento',
      'Apariciones exclusivas de jugadores del Salón de la Fama de la NFL',
      'Acceso al campo post-partido para la ceremonia de entrega del Trofeo Lombardi'
    ],
    includedPerks: [
      'Alojamiento en hoteles sede designados para dignatarios de la NFL',
      'Transporte privado blindado o SUV ejecutivo con escolta logística',
      'Acceso a los after-parties más herméticos de la industria musical y deportiva',
      'Manejo completo de credenciales y accesos de seguridad biométrica'
    ],
    heroQuote: 'La emoción de presenciar el evento televisivo más colosal del mundo desde la comodidad de una suite privada sin fricciones logísticas.'
  },
  {
    id: 'champions-and-grand-slams',
    title: 'UEFA Champions League & Grand Slams',
    badge: 'Realeza Europea & Tenis',
    subtitle: 'Finales de la UEFA y la Catedral del Tenis en Wimbledon',
    description: 'Vive la final europea o siéntate en la cancha central de Wimbledon con pases de hospitalidad y alojamiento en el corazón de la acción.',
    locations: ['Wimbledon (Centre Court)', 'Final Champions League (Europa)', 'Roland Garros (Philippe Chatrier)'],
    dates: 'Primavera / Verano Europeo',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1600&auto=format&fit=crop',
    highlights: [
      'Debenture Tickets o palcos en Centre Court para semifinales y finales',
      'Hospitalidad oficial Champions Club con vista directa al terreno de juego',
      'Tradicional té de la tarde y fresas con crema en terrazas privadas de Wimbledon',
      'Acceso a lounges exclusivos para miembros de la realeza y atletas élite',
      'Servicio de hospitalidad antes, durante y después del cotejo'
    ],
    includedPerks: [
      'Hospedaje en hoteles emblemáticos (The Connaught, Le Bristol o Savoy)',
      'Acceso a clubes privados de miembros en Londres y París',
      'Traslados ejecutivos en Mercedes Clase S o Rolls-Royce',
      'Gestión de itinerarios combinados (p. ej. Wimbledon + Gran Premio de Silverstone)'
    ],
    heroQuote: 'El silencio reverencial de la Cancha Central antes de un match point o el rugido de 80,000 gargantas al sonar el himno de la Champions.'
  }
];

export const TRAIN_JOURNEYS: TrainJourney[] = [
  {
    id: 'belmond-andean-explorer',
    title: 'Belmond Andean Explorer',
    region: 'Perú',
    route: 'Cusco – Lago Titicaca – Arequipa',
    duration: '3 Días / 2 Noches',
    description: 'Atraviesa los Andes peruanos desde Cusco hasta Arequipa. Una experiencia de altura con gastronomía de autor, vagón observatorio al aire libre y paisajes andinos que te robarán el aliento.',
    experienceNotes: 'El primer tren nocturno de lujo de Sudamérica recorre uno de los tramos ferroviarios más altos del mundo. Interiores inspirados en los tejidos tradicionales peruanos y texturas de alpaca.',
    highlights: [
      'Vagón Observatorio al aire libre para contemplar las estrellas andinas',
      'Menús concebidos por el chef Diego Muñoz con ingredientes ancestrales',
      'Vagón Spa Picaflor con tratamientos de aromaterapia y hierbas sagradas',
      'Excursiones privadas a las islas flotantes de los Uros en el Lago Titicaca',
      'Vistas panorámicas del Cañón del Colca y los volcanes de Arequipa'
    ],
    cabinStyles: ['Deluxe Double Bed Cabin', 'Junior Suite en Madera Caoba', 'Twin Bed Cabin Privada'],
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'venice-simplon-orient-express',
    title: 'Venice Simplon-Orient-Express',
    region: 'Europa',
    route: 'París – Venecia / Londres – Estambul',
    duration: '2 a 5 Días de Travesía',
    description: 'El clásico atemporal. Una obra maestra del Art Déco sobre rieles que conecta Londres, París, Venecia y Estambul. Etiqueta rigurosa en la cena, champán a raudales y glamour en cada vagón.',
    experienceNotes: 'Auténticos vagones restaurados de los años 1920 y 1930 con marquetería de René Prou y paneles de cristal Lalique. La personificación de la era dorada de los viajes.',
    highlights: [
      'Gran Suite con baño privado de mármol, mayordomo 24h y champán ilimitado',
      'Cena de gala formal (black tie) al son del piano de cola en el vagón bar "3674"',
      'Cruzar los Alpes franceses e italianos al despertar con desayuno servido en cama',
      'Gastronomía de alta escuela francesa con maridaje de bodegas centenarias',
      'Llegada en lancha privada de caoba directo al Gran Canal de Venecia'
    ],
    cabinStyles: ['Grand Suites (Venezia, Paris, Istanbul)', 'Suites Históricas Art Déco', 'Historic Twin Cabins'],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'the-golden-eagle',
    title: 'The Golden Eagle',
    region: 'Asia Central / Europa del Este',
    route: 'Ruta de la Seda & Desiertos Místicos',
    duration: '12 a 14 Días Épicos',
    description: 'Aventuras épicas en la ruta del Transiberiano o la Ruta de la Seda, con el confort de cabinas en suite, conferencias a bordo y excursiones exclusivas en destinos remotos.',
    experienceNotes: 'El tren privado más distinguido para expediciones terrestres por territorios legendarios como Samarcanda, Bujará y las estepas centrales, combinando la mística del explorador con el confort palaciego.',
    highlights: [
      'Cabinas Imperial Suite con camas king-size, calefacción por suelo y bar privado',
      'Cenas preparadas por chefs rusos y uzbekos con caviar y vinos selectos',
      'Historiadores y conferencistas a bordo especializados en cada región',
      'Apertura privada de mezquitas y fortalezas milenarias exclusivas para pasajeros',
      'Servicio de médico a bordo y atención personalizada en español'
    ],
    cabinStyles: ['Imperial Suite (la máxima categoría)', 'Gold Class En-Suite', 'Silver Class'],
    image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'seven-stars-in-kyushu',
    title: 'Seven Stars in Kyushu',
    region: 'Japón',
    route: 'Vuelta por las siete prefecturas de Kyushu',
    duration: '4 Días / 3 Noches',
    description: 'La exclusividad japonesa llevada al extremo (solo acepta a unos pocos pasajeros por viaje). Una obra de arte de madera kumiko, artesanía local y hospitalidad omotenashi.',
    experienceNotes: 'El tren más exclusivo de Asia con cupo limitado a solo 20 a 28 huéspedes seleccionados por lotería estricta. LG Travel asegura accesos prioritarios a través de alianzas diplomáticas y de hospitalidad en Tokio.',
    highlights: [
      'Trabajo artesanal milenario en madera de ciprés japonés hinoki y papel washi',
      'Ventanales de diseño en la cabina trasera que enmarcan los volcanes de Aso',
      'Cocina kaiseki preparada con mariscos vivos recolectados esa misma mañana',
      'Paradas en ryokans centenarios con aguas termales onsen privadas',
      'Conciertos acústicos de shamisen y violín en el vagón salón "Blue Moon"'
    ],
    cabinStyles: ['Deluxe Suite DX A (Ventanal panorámico posterior)', 'Deluxe Suite DX B', 'Guest Suite Suites'],
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop'
  }
];

export const CRUISE_COLLECTIONS: CruiseCollection[] = [
  {
    id: 'expedition-polos-galapagos',
    category: 'Expedición (Polos y Galápagos)',
    title: 'Lujo en los Confines de la Tierra',
    tagline: 'Antártida, el Ártico y las Islas Encantadas de Galápagos',
    description: 'Lujo en los confines de la Tierra. Acompañado de biólogos y expertos de National Geographic, explora la Antártida, el Ártico o las Islas Galápagos con el máximo confort y submarinos privados a bordo.',
    featuredShips: ['Ponant (Le Commandant Charcot - Rompehielos Híbrido)', 'Silversea Silver Endeavour', 'Seabourn Venture & Pursuit'],
    destinations: ['Península Antártica', 'Paso del Noroeste / Svalbard', 'Archipiélago de Galápagos', 'Groenlandia Oriental'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop',
    exclusiveInclusions: [
      'Submarinos privados U-Boat Worx para descensos a 300m bajo los témpanos',
      'Zodiacs de última generación guiadas por naturalistas y fotógrafos galardonados',
      'Parkas térmicas de expedición y equipo técnico polar a la medida entregado en cabina',
      'Suites con piso radiante, balcón privado calefactado y binoculares Swarovski'
    ]
  },
  {
    id: 'yacht-collection-mediterraneo-caribe',
    category: 'The Yacht Collection (Mediterráneo y Caribe)',
    title: 'El Club Náutico Privado',
    tagline: 'Puertos a los que los mega-barcos jamás podrán acceder',
    description: 'La experiencia de un club náutico privado. Barcos pequeños que atracan en puertos exclusivos como Portofino, St. Barts o Mykonos. Ideal para quienes buscan un ambiente íntimo y sofisticado.',
    featuredShips: ['The Ritz-Carlton Yacht Collection (Evrima & Ilma)', 'Explora Journeys (Explora I & II)', 'SeaDream Yacht Club'],
    destinations: ['Costa Amalfitana & Portofino', 'Saint-Tropez & Islas Baleares', 'St. Barts, Anguila & Granadinas', 'Islas Griegas no comerciales'],
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1600&auto=format&fit=crop',
    exclusiveInclusions: [
      'Marina de popa retráctil con acceso directo al mar, paddleboards y seabobs',
      'Menús con asesoría de chefs tres estrellas Michelin (como Sven Elverfeld)',
      'Ambiente relajado sin código de etiqueta rígido ni turnos obligatorios de cena',
      'Anclaje nocturno en calas silenciosas para nadar al atardecer'
    ]
  },
  {
    id: 'river-cruising-europa-historica',
    category: 'River Cruising (Europa Histórica)',
    title: 'Navegación Fluvial de Clase Maestra',
    tagline: 'Desempacar una sola vez en el corazón de castillos y viñedos',
    description: 'Navega por el Danubio, el Rin o el Sena. Desempaca una sola vez y despierta cada mañana en el corazón de castillos, viñedos y ciudades medievales.',
    featuredShips: ['AmaWaterways & AmaMagna', 'Uniworld Boutique River Cruises', 'Scenic Luxury Cruises & Tours'],
    destinations: ['Rin & Valle de Wachau (Austria/Alemania)', 'Danubio Clásico (Viena, Budapest, Bratislava)', 'Burdeos & Valle del Loira', 'El Sena hasta Normandía'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
    exclusiveInclusions: [
      'Atraco en el centro exacto de las ciudades históricas (a pasos del centro peatonal)',
      'Apertura privada nocturna de palacios imperiales en Viena para conciertos de Mozart',
      'Degustaciones privadas con enólogos propietarios de bodegas históricas en Wachau',
      'Bicicletas eléctricas de cortesía a bordo para paseos entre castillos ribereños'
    ]
  }
];

export const OFFICE_LOCATION = {
  name: 'LG Travel Private Concierge Lounge',
  commercialCenter: 'Plaza Monarka',
  address: 'Av. José Vasconcelos #345, Nivel 2, Local 208',
  neighborhood: 'Col. Santa Engracia / Del Valle',
  city: 'San Pedro Garza García, N.L., México',
  postalCode: '66267',
  coordinates: {
    lat: 25.6575,
    lng: -100.3664
  },
  phone: '+52 (81) 8299 4500',
  whatsapp: '+528112345678',
  whatsappDisplay: '+52 81 1234 5678',
  email: 'concierge@lgtravel.com.mx',
  hours: 'Lunes a Viernes: 09:30 - 19:30 hrs | Sábados: Citas Privadas Exclusivas',
  accessNotes: 'Valet Parking en el acceso principal de Plaza Monarka. Acceso seguro por elevador privado hacia suites corporativas nivel 2.'
};
