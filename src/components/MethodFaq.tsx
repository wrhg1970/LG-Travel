import React, { useState, useMemo } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  ShieldCheck, 
  CreditCard, 
  Headphones, 
  Sparkles, 
  Search, 
  ArrowRight,
  MessageSquare,
  Lock,
  CalendarCheck,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FaqItem {
  id: string;
  category: 'booking' | 'privacy' | 'concierge';
  categoryLabel: string;
  question: string;
  shortSummary: string;
  answer: string;
  highlights: string[];
}

const FAQ_DATA: FaqItem[] = [
  // 1. BOOKING
  {
    id: 'booking-advance',
    category: 'booking',
    categoryLabel: 'Reservas & Logística',
    question: '¿Con cuánta anticipación se debe iniciar la planeación de un viaje o acceso VIP?',
    shortSummary: 'Recomendamos entre 3 y 6 meses, aunque contamos con accesos prioritarios para solicitudes de último minuto.',
    answer:
      'Para eventos de alta demanda internacional —como el Formula 1 Paddock Club™ en Mónaco, Las Vegas o Ciudad de México, el Super Bowl o salidas específicas del Venice Simplon-Orient-Express— los cupos son estrictamente limitados y se reservan con meses de antelación. Diseñar con anticipación nos permite asegurar las mejores suites, reservas en restaurantes Michelin y franjas horarias de vuelos privados o helicópteros. No obstante, gracias a nuestra red de contactos directos, frecuentemente resolvemos asignaciones exclusivas con solo semanas o días de anticipación.',
    highlights: [
      '3 a 6 meses para Paddock Club™, Super Bowl y cabinas de trenes de lujo',
      'Asignaciones prioritarias y rescate de cupos para solicitudes urgentes',
      'Itinerario digital interactivo entregado antes de la partida'
    ]
  },
  {
    id: 'booking-payment',
    category: 'booking',
    categoryLabel: 'Reservas & Logística',
    question: '¿Qué métodos de pago y divisas acepta LG Travel para clientes particulares y empresas?',
    shortSummary: 'Transferencias bancarias en USD, EUR y MXN (SPEI/SWIFT), tarjetas corporativas y facturación fiscal mexicana.',
    answer:
      'Ofrecemos total flexibilidad fiscal y financiera. Operamos mediante transferencias bancarias internacionales (SWIFT en USD y EUR) y nacionales (SPEI en MXN), así como tarjetas corporativas de alta gama. Para itinerarios integrales de alto valor, establecemos calendarios de pagos escalonados por hitos de confirmación. Emitimos comprobantes fiscales conforme a la normativa mexicana para deducción corporativa cuando sea requerido.',
    highlights: [
      'Cuentas en USD, EUR y MXN para evitar fricción cambiaria',
      'Pagos escalonados por confirmación de hitos para itinerarios complejos',
      'Facturación corporativa mexicana disponible'
    ]
  },
  {
    id: 'booking-changes',
    category: 'booking',
    categoryLabel: 'Reservas & Logística',
    question: '¿Qué sucede si necesito modificar fechas o transferir accesos VIP a otro acompañante?',
    shortSummary: 'Negociamos políticas flexibles directas con navieras y suites para minimizar penalizaciones.',
    answer:
      'Comprendemos que las agendas de nuestros clientes cambian intempestivamente. Desde el diseño inicial priorizamos tarifas y acuerdos comerciales que contemplen flexibilidad. En caso de requerir un cambio de asistente para credenciales de acceso oficial o ajustar la fecha de un crucero boutique o estancia, nuestro equipo de concierge gestiona el cambio de nombres y reexpedición de acreditaciones de seguridad directamente con los directores de hospitalidad de cada evento.',
    highlights: [
      'Gestión de acreditaciones y sustitución de nombres autorizados',
      'Trato directo con directores generales de hoteles y navieras boutique',
      'Protección proactiva contra cláusulas rígidas tradicionales'
    ]
  },

  // 2. PRIVACY & SECURITY
  {
    id: 'privacy-nda',
    category: 'privacy',
    categoryLabel: 'Privacidad & Confidencialidad',
    question: '¿Cómo garantizan la confidencialidad de mi información, acompañantes e itinerarios?',
    shortSummary: 'Protocolo estricto de no divulgación (NDA), encriptación de datos y manejo discreto de listas de pasajeros.',
    answer:
      'La discreción es uno de nuestros pilares inquebrantables. No divulgamos listas de clientes, fotografías de viajeros ni detalles de traslados a redes públicas. Previo a la planeación, si el cliente o su family office lo solicita, formalizamos un Acuerdo de Confidencialidad (NDA). Toda la documentación de viaje e información de pasajeros se maneja bajo protocolos de máxima seguridad informática y acceso restringido.',
    highlights: [
      'Disponibilidad de Acuerdo de Confidencialidad (NDA) vinculante',
      'Canales de comunicación privados y cifrados punto a punto',
      'Cero exposición pública de nuestros clientes en medios o redes'
    ]
  },
  {
    id: 'privacy-office-monarka',
    category: 'privacy',
    categoryLabel: 'Privacidad & Confidencialidad',
    question: '¿Cómo es la dinámica de una cita presencial en su lounge de Plaza Monarka?',
    shortSummary: 'Salas de juntas acústicas cerradas, valet parking en puerta y atención exclusiva uno a uno.',
    answer:
      'Nuestro espacio en Plaza Monarka (San Pedro Garza García) fue concebido para brindar la máxima tranquilidad. Cuentas con servicio de valet parking en el acceso principal de Vasconcelos y elevador directo hacia el segundo nivel corporativo. La sesión de asesoría se realiza a puerta cerrada en una suite privada, con amenidades selectas y sin interacción con otros clientes, permitiéndote discutir agendas y preferencias con absoluta reserva.',
    highlights: [
      'Valet parking directo en Av. José Vasconcelos #345',
      'Salas privadas con aislamiento acústico para total reserva',
      'Citas agendadas con margen suficiente para evitar coincidir con terceros'
    ]
  },
  {
    id: 'privacy-security-transfers',
    category: 'privacy',
    categoryLabel: 'Privacidad & Confidencialidad',
    question: '¿Pueden coordinar esquemas de seguridad ejecutiva y traslados blindados en el destino?',
    shortSummary: 'Coordinación de unidades blindadas, escoltas bilingües certificados y acceso por pista (tarmac).',
    answer:
      'Sí. Si tu itinerario en el extranjero o en México requiere protocolos de seguridad reforzada, coordinamos vehículos blindados (nivel VR7/VR9 con choferes de seguridad certificados), escoltas privados bilingües y accesos prioritarios por pista (tarmac pickup) directo desde la escalerilla del avión privado o comercial hacia la terminal ejecutiva, minimizando tiempos de exposición pública.',
    highlights: [
      'Recogida VIP en pista (Tarmac Access) para aviación comercial y ejecutiva',
      'Vehículos blindados y escoltas certificados en cualquier ciudad sede',
      'Pases prioritarios que evitan filas y áreas comunes conglomeradas'
    ]
  },

  // 3. CONCIERGE SERVICES
  {
    id: 'concierge-247',
    category: 'concierge',
    categoryLabel: 'Concierge 24/7 & Asistencia',
    question: '¿Cómo opera el servicio de monitoreo en tiempo real y asistencia 24/7 durante el viaje?',
    shortSummary: 'Un Travel Designer senior asignado a tu viaje, sin chatbots ni centros de llamadas masivos.',
    answer:
      'Desde el instante en que sales de tu residencia hasta tu retorno, tu viaje está bajo la supervisión activa de nuestro equipo. No delegamos en call centers externos: mantienes un canal directo (WhatsApp de alta prioridad y línea telefónica privada) con el mismo Travel Designer que estructuró tu itinerario. Si una aerolínea reporta una demora o surge un imprevisto meteorológico, ya estamos reprogramando traslados y reservas antes de que te enteres de la demora en la pantalla.',
    highlights: [
      'Atención directa con tu Travel Designer personal asignado',
      'Monitoreo activo de vuelos y enlaces terrestres en tiempo real',
      'Capacidad de respuesta inmediata ante cualquier ajuste de último momento'
    ]
  },
  {
    id: 'concierge-gastronomy',
    category: 'concierge',
    categoryLabel: 'Concierge 24/7 & Asistencia',
    question: '¿Pueden asegurar mesas en restaurantes con estrellas Michelin y clubes privados?',
    shortSummary: 'Gestión directa de reservaciones codiciadas y accesos a clubes de miembros exclusivos.',
    answer:
      'Efectivamente. La gastronomía de autor y la vida social selecta son parte integral de una vivencia de ultra-lujo. A través de nuestras relaciones directas con maîtres d’hôtel, sommeliers y directores de hospitalidad, gestionamos mesas preferenciales en restaurantes con 2 y 3 estrellas Michelin donde las reservas públicas están agotadas con meses de anticipación, así como acceso a clubes de playa y lounges privados en destinos como Portofino, Saint-Tropez, Londres o Nueva York.',
    highlights: [
      'Mesas preferenciales en restaurantes Michelin 1, 2 y 3 estrellas',
      'Acceso a salones privados y catas de vino con enólogos principales',
      'Asignación de mesas VIP en clubes de playa y eventos post-carrera'
    ]
  },
  {
    id: 'concierge-customization',
    category: 'concierge',
    categoryLabel: 'Concierge 24/7 & Asistencia',
    question: '¿Qué nivel de personalización admiten las travesías en trenes de lujo y cruceros de expedición?',
    shortSummary: 'Desde maridajes de etiquetas específicas hasta recorridos privados en tierra fuera de catálogo.',
    answer:
      'La personalización es total. Nos cercioramos de que la naviera o el tren conozcan tus preferencias exactas antes de abordar: marcas preferidas de champagne o licores en tu suite, restricciones dietéticas rigurosas, selección de almohadas y tamaño de cama. Además, en puertos o paradas de tren organizamos excursiones totalmente privadas con historiadores o biólogos locales, evitando las excursiones grupales del barco o del tren.',
    highlights: [
      'Acondicionamiento de suite previa a la llegada con tus etiquetas favoritas',
      'Excursiones terrestres privadas y fuera de itinerarios estándar',
      'Mayordomía informada de tus hábitos y ritmos de descanso'
    ]
  }
];

interface MethodFaqProps {
  onOpenInquiry: (type: string, experienceTitle?: string) => void;
}

export const MethodFaq: React.FC<MethodFaqProps> = ({ onOpenInquiry }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'booking' | 'privacy' | 'concierge'>('all');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'booking-advance': true, // Open the first one by default for immediate context
    'privacy-nda': true
  });
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    FAQ_DATA.forEach((item) => {
      allOpen[item.id] = true;
    });
    setOpenIds(allOpen);
  };

  const collapseAll = () => {
    setOpenIds({});
  };

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCat = activeCategory === 'all' || item.category === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCat;

      const matchesSearch =
        item.question.toLowerCase().includes(query) ||
        item.shortSummary.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.highlights.some((h) => h.toLowerCase().includes(query));

      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="py-24 sm:py-32 bg-[#080E1E] text-slate-100 border-t border-[#C5A880]/20 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B132B] border border-[#C5A880]/40 text-[#C5A880] text-xs font-semibold uppercase tracking-[0.2em] mb-5 backdrop-blur-md">
            <HelpCircle className="w-3.5 h-3.5" />
            Preguntas Frecuentes & Claridad Operativa
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            CADA DETALLE, <br />
            <span className="text-[#C5A880] font-normal italic">CLARO DESDE EL PRIMER DÍA.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Respuestas directas sobre nuestros procesos de reserva, acuerdos estrictos de privacidad y el alcance de nuestro acompañamiento concierge.
          </p>
        </div>

        {/* Filter Tabs & Search Row */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'Todas las Dudas', icon: Sparkles },
              { id: 'booking', label: 'Reservas & Logística', icon: CalendarCheck },
              { id: 'privacy', label: 'Privacidad & NDA', icon: Lock },
              { id: 'concierge', label: 'Concierge 24/7', icon: Headphones },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#C5A880] text-[#080E1E] font-semibold shadow-md shadow-[#C5A880]/20'
                      : 'bg-[#0B132B] text-slate-300 border border-slate-800 hover:border-[#C5A880]/40 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar en preguntas..."
              className="w-full pl-9 pr-4 py-2 bg-[#0B132B] border border-slate-800 focus:border-[#C5A880] rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Global Expand / Collapse state indicators */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-5 px-1">
          <span>
            Mostrando <strong className="text-white">{filteredFaqs.length}</strong> temas de consulta
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={expandAll}
              className="text-[#C5A880] hover:text-[#E2CEB5] transition-colors cursor-pointer"
            >
              Expandir todos
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={collapseAll}
              className="text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            >
              Colapsar todos
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="bg-[#0B132B] border border-slate-800 p-8 rounded-2xl text-center">
              <HelpCircle className="w-10 h-10 text-[#C5A880] mx-auto mb-3 opacity-60" />
              <h4 className="text-base font-serif text-white">No encontramos preguntas con ese término</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Escríbenos directamente o consulta con nuestro concierge para resolver cualquier requerimiento particular.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold text-[#C5A880] bg-[#131F3D] hover:bg-[#1A2A54] transition-colors"
              >
                Ver todas las preguntas
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openIds[faq.id];

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? 'bg-[#0B132B] border-[#C5A880]/60 shadow-xl shadow-black/40'
                      : 'bg-[#080E1E] border-slate-800 hover:border-slate-700 bg-opacity-70'
                  }`}
                >
                  {/* Question Trigger Header */}
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 pr-2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#131F3D] text-[#C5A880] border border-[#C5A880]/30">
                          {faq.categoryLabel}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-white leading-snug">
                        {faq.question}
                      </h3>
                      {!isOpen && (
                        <p className="mt-1.5 text-xs text-slate-400 line-clamp-1 font-light">
                          {faq.shortSummary}
                        </p>
                      )}
                    </div>

                    <div
                      className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center transition-all duration-300 mt-0.5 ${
                        isOpen
                          ? 'bg-[#C5A880] text-[#080E1E] rotate-180 shadow-md shadow-[#C5A880]/30'
                          : 'bg-[#131F3D] text-slate-300 border border-slate-700'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Content Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 border-t border-slate-800/80">
                          {/* Rich Answer */}
                          <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
                            {faq.answer}
                          </p>

                          {/* Key Highlights */}
                          <div className="mt-4 pt-4 border-t border-slate-800/60">
                            <div className="text-[11px] uppercase tracking-wider text-[#C5A880] font-semibold mb-2">
                              Puntos Clave:
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                              {faq.highlights.map((h, hIdx) => (
                                <div
                                  key={hIdx}
                                  className="flex items-start gap-2 bg-[#080E1E] p-2.5 rounded-xl border border-slate-800 text-[11px] text-slate-300"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                                  <span>{h}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Concierge Assistance Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B132B] via-[#0E1830] to-[#080E1E] border border-[#C5A880]/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#131F3D] border border-[#C5A880]/50 text-[#C5A880] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(197,168,128,0.2)]">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#C5A880]">
                Asesoría Privada & Dudas Específicas
              </div>
              <h4 className="text-lg sm:text-xl font-serif text-white font-bold mt-0.5">
                ¿Tienes requerimientos particulares no descritos aquí?
              </h4>
              <p className="text-xs text-slate-300 mt-1 max-w-xl leading-relaxed">
                Cada viaje de alta gama es único. Atendemos peticiones de helicópteros, charters privados, logística familiar y requisitos médicos o de seguridad directamente en nuestra oficina de Plaza Monarka.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={() => onOpenInquiry('method', 'Consulta Personalizada sobre The LG Method')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-widest bg-[#C5A880] hover:bg-[#D4BC99] text-[#080E1E] transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              Consultar con Concierge
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
