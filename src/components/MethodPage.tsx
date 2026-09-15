import React from 'react';
import { 
  Compass, 
  Sparkles, 
  MessageCircle, 
  FileText, 
  CalendarCheck, 
  Headphones, 
  Coffee, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  Lock,
  Layers,
  Award
} from 'lucide-react';
import { MonarkaLeafletMap } from './MonarkaLeafletMap';
import { VipBadge } from './VipBadge';
import { OFFICE_LOCATION } from '../data/travelData';

interface MethodPageProps {
  onOpenInquiry: (type: string, experienceTitle?: string) => void;
}

export const MethodPage: React.FC<MethodPageProps> = ({ onOpenInquiry }) => {
  const steps = [
    {
      step: '01',
      title: 'Paso 1: La Entrevista (Discovery)',
      tagline: 'Escucha activa sin plantillas prefabricadas',
      icon: MessageCircle,
      description:
        'Todo comienza con una conversación. No te enviamos catálogos; te escuchamos. Entendemos tu ritmo, tus gustos (desde tus alergias hasta tu vino preferido) y la intención detrás de tu viaje.',
      details: [
        'Diagnóstico profundo de expectativas y preferencias personales',
        'Mapeo de requerimientos culinarios, gustos de aviación y hospedaje',
        'Definición de privacidad, seguridad y ritmo de viaje deseado'
      ]
    },
    {
      step: '02',
      title: 'Paso 2: La Curaduría (Design)',
      tagline: 'Conexiones globales privadas en acción',
      icon: Compass,
      description:
        'Nuestros Travel Designers utilizan su red global de contactos para trazar una ruta exclusiva. Te presentamos una propuesta inicial, que refinamos hasta que sea perfecta.',
      details: [
        'Acceso a propiedades privadas inaccesibles en buscadores públicos',
        'Negociación de beneficios preferenciales y upgrades exclusivos',
        'Rutas optimizadas para evitar tiempos muertos y escalas innecesarias'
      ]
    },
    {
      step: '03',
      title: 'Paso 3: La Ejecución (Booking & Prep)',
      tagline: 'Cero fricción, máxima precisión suiza',
      icon: CalendarCheck,
      description:
        'Nos encargamos de lo tedioso. Reservas de vuelos, hoteles, guías privados, mesas en restaurantes Michelin y accesos especiales. Te entregamos un itinerario digital interactivo.',
      details: [
        'Confirmación directa con directores generales de hoteles y navieras',
        'Reservaciones gastronómicas y pases de seguridad VIP gestionados',
        'Itinerario digital offline sincronizado con documentos y vouchers'
      ]
    },
    {
      step: '04',
      title: 'Paso 4: El Acompañamiento (Concierge 24/7)',
      tagline: 'Monitoreo proactivo en tiempo real',
      icon: Headphones,
      description:
        'Desde el momento en que sales de casa hasta tu regreso, monitoreamos tu viaje en tiempo real. ¿Un vuelo retrasado? ¿Un cambio de planes? Nuestro equipo lo resuelve mientras tú disfrutas.',
      details: [
        'Línea directa privada con tu Travel Designer asignado',
        'Resolución proactiva antes de que notes cualquier disrupción',
        'Ajustes espontáneos de agenda durante el viaje con una llamada'
      ]
    }
  ];

  return (
    <div className="w-full bg-[#080E1E] text-slate-100">
      {/* =========================================================================
          1. CABECERA (Sutil y Elegante)
          Visual: Fotografía en Blanco y Negro, o con tonos champán muy suaves,
          de las oficinas en Plaza Monarka o de una reunión de consultoría elegante
          Titular: DISEÑO DE VIAJES A LA MEDIDA. UNA METODOLOGÍA.
          Subtítulo: En LG Travel, combinamos el arte de la curaduría con la precisión de un concierge privado.
         ========================================================================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-28 pb-20">
        {/* Background photo in B&W / muted soft champagne tone */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2200&auto=format&fit=crop"
            alt="Reunión de consultoría privada Plaza Monarka"
            className="w-full h-full object-cover grayscale contrast-125 brightness-40"
          />
          {/* Soft champagne & dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080E1E] via-[#080E1E]/80 to-[#080E1E]/85" />
          <div className="absolute inset-0 bg-[#C5A880]/5 mix-blend-color" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B132B]/90 border border-[#C5A880]/40 text-[#C5A880] text-xs font-semibold uppercase tracking-[0.25em] mb-8 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            Nuestra Filosofía · San Pedro Garza García
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-[0.04em] uppercase leading-[1.1] max-w-4xl">
            DISEÑO DE VIAJES A LA MEDIDA. <br />
            <span className="text-[#C5A880] font-normal italic">UNA METODOLOGÍA.</span>
          </h1>

          <p className="mt-8 text-lg sm:text-2xl font-light text-slate-200 max-w-3xl leading-relaxed">
            En LG Travel, combinamos el arte de la curaduría con la precisión de un concierge privado.
          </p>

          {/* San Pedro Distinction Statement */}
          <div className="mt-10 p-6 rounded-2xl bg-[#0B132B]/80 border border-[#C5A880]/30 backdrop-blur-md max-w-2xl text-left">
            <div className="text-[11px] uppercase tracking-widest text-[#C5A880] font-semibold mb-1">
              ¿Por qué honorarios de consultoría privada?
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              El verdadero lujo no es encontrar un vuelo en una pantalla; es contar con relaciones personales en los destinos más herméticos del mundo. Nuestros clientes no compran tiempo de reserva; aseguran tranquilidad, acceso prioritario y respaldo absoluto.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. LOS 4 PASOS DEL "LG METHOD" (El proceso de trabajo)
          Paso 1: La Entrevista (Discovery)
          Paso 2: La Curaduría (Design)
          Paso 3: La Ejecución (Booking & Prep)
          Paso 4: El Acompañamiento (Concierge 24/7)
         ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#050914] relative border-t border-[#C5A880]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880] block mb-2">
              Proceso de Curaduría
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              CÓMO TRABAJAMOS
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-400 font-light">
              Cuatro etapas calculadas al milímetro para transformar una intención de viaje en una vivencia irrepetible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0B132B] rounded-2xl p-8 sm:p-10 border border-[#C5A880]/25 hover:border-[#C5A880] transition-all duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden group"
                >
                  {/* Step Watermark */}
                  <div className="absolute top-4 right-6 text-6xl font-serif font-bold text-white/5 group-hover:text-[#C5A880]/10 transition-colors select-none">
                    {item.step}
                  </div>

                  <div>
                    {/* Minimalist Icon Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#131F3D] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880]">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-widest text-[#C5A880]">
                          Etapa {item.step}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Exact User Text */}
                    <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed mb-6 border-l-2 border-[#C5A880] pl-4">
                      {item.description}
                    </p>

                    {/* Sub details */}
                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      {item.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-400">
                          <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. PRESENCIA Y CONFIANZA (El ancla física)
          Fondo: Blanco Alabastro.
          Texto: Operando desde el corazón de San Pedro Garza García.
          Mensaje: "Entendemos las exigencias de nuestros clientes. Por eso,
          además de nuestra infraestructura digital, contamos con un espacio físico
          en Plaza Monarka para recibirte, tomar un café y planear tu próxima
          expedición con total privacidad y seguridad."
          Botón: Agendar Cita en Oficina (Lleva al contacto).
          Asegúrate de incluir un mapa integrado que facilite la ubicación exacta en la plaza.
         ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#F8F7F4] text-slate-900 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B132B] text-[#C5A880] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Coffee className="w-3.5 h-3.5" />
              Sede Presencial
            </div>

            {/* Exact User Text */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-950 tracking-tight">
              Operando desde el corazón de San Pedro Garza García.
            </h2>

            {/* Exact User Message */}
            <p className="mt-6 text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
              "Entendemos las exigencias de nuestros clientes. Por eso, además de nuestra infraestructura digital, contamos con un espacio físico en Plaza Monarka para recibirte, tomar un café y planear tu próxima expedición con total privacidad y seguridad."
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <button
                onClick={() => onOpenInquiry('office_visit', 'Cita Presencial en Plaza Monarka')}
                className="px-8 py-3.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#0B132B] text-[#C5A880] hover:bg-[#131F3D] transition-all shadow-xl flex items-center gap-2.5 cursor-pointer"
              >
                <Coffee className="w-4 h-4 text-[#C5A880]" />
                Agendar Cita en Oficina
              </button>

              <VipBadge variant="compact" />
            </div>
          </div>

          {/* Integrated Interactive Leaflet Map for Plaza Monarka */}
          <div className="mt-8">
            <MonarkaLeafletMap />
          </div>

          {/* Discreet Privacy Callout */}
          <div className="mt-10 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F1EADF] text-[#8C6D42] flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  Protocolo de Privacidad y Consulta Confidencial
                </div>
                <div className="text-xs text-slate-600">
                  Todas las sesiones presenciales en Plaza Monarka se realizan en suites privadas reservadas exclusivamente para ti.
                </div>
              </div>
            </div>

            <div className="text-xs font-mono text-slate-500 whitespace-nowrap">
              Plaza Monarka · Nivel 2 · Suite 208
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
