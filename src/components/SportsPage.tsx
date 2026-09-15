import React from 'react';
import { SPORTS_EVENTS, OFFICE_LOCATION } from '../data/travelData';
import { SportsEvent } from '../types';
import { VipBadge } from './VipBadge';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Quote, 
  Clock, 
  Plane, 
  Utensils, 
  Compass, 
  Star, 
  MessageSquare,
  ChevronRight
} from 'lucide-react';

interface SportsPageProps {
  onOpenInquiry: (type: string, experienceTitle?: string) => void;
  onSelectEvent: (event: SportsEvent) => void;
  onNavigateToMethod: () => void;
}

export const SportsPage: React.FC<SportsPageProps> = ({
  onOpenInquiry,
  onSelectEvent,
  onNavigateToMethod,
}) => {
  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      'Hola Concierge LG Travel, deseo planear mi experiencia deportiva VIP para asegurar accesos exclusivos.'
    );
    window.open(`https://wa.me/${OFFICE_LOCATION.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <div className="w-full bg-[#080E1E] text-slate-100">
      {/* =========================================================================
          1. HERO HEADER (Cabecera de la página)
          Visual: Fotografía/video de alta resolución ocupando toda la pantalla
          Titular: EL ASIENTO QUE EL MUNDO DESEA.
          Subtítulo: Acceso garantizado a los eventos deportivos más exclusivos del planeta.
          Tú vives la adrenalina; nosotros orquestamos la logística perfecta.
         ========================================================================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fullscreen High-Resolution Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2200&auto=format&fit=crop"
            alt="Formula 1 Paddock Club finish line race"
            className="w-full h-full object-cover object-center transform scale-105 animate-pulse duration-[12000ms]"
          />
          {/* Subtle dark luxury vignette and gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080E1E] via-[#080E1E]/65 to-[#080E1E]/75" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#080E1E_90%)]" />
        </div>

        {/* Ambient floating badge */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B132B]/85 border border-[#C5A880]/40 text-[#C5A880] text-xs font-semibold uppercase tracking-[0.25em] mb-8 backdrop-blur-md shadow-2xl">
            <Sparkles className="w-3.5 h-3.5" />
            Grandes Eventos & Acceso VIP Global
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-[0.04em] uppercase leading-[1.06] max-w-4xl drop-shadow-2xl">
            EL ASIENTO QUE <br className="hidden sm:inline" />
            <span className="text-[#C5A880] font-normal italic">EL MUNDO</span> DESEA.
          </h1>

          <p className="mt-7 text-base sm:text-xl md:text-2xl font-light text-slate-200 max-w-3xl leading-relaxed tracking-wide">
            Acceso garantizado a los eventos deportivos más exclusivos del planeta. Tú vives la adrenalina; nosotros orquestamos la logística perfecta.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => onOpenInquiry('sports', 'Formula 1 & Deportes VIP')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#080E1E] bg-[#C5A880] hover:bg-[#D4BC99] transition-all shadow-[0_0_35px_rgba(197,168,128,0.35)] hover:scale-[1.02] flex items-center justify-center gap-3 cursor-pointer"
            >
              Planear mi Experiencia Deportiva
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={openWhatsApp}
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-xs sm:text-sm font-medium tracking-wider text-slate-200 bg-[#0B132B]/85 hover:bg-[#121F45] border border-[#C5A880]/30 hover:border-[#C5A880] backdrop-blur-md transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              WhatsApp Concierge
            </button>
          </div>

          {/* Key Accents */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl border-t border-[#C5A880]/20 pt-8 text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0B132B] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shrink-0">
                <Plane className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#C5A880] font-semibold">Helipuerto</div>
                <div className="text-xs text-slate-300">Traslado al circuito</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0B132B] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#C5A880] font-semibold">Paddock Club™</div>
                <div className="text-xs text-slate-300">Acceso oficial garantizado</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0B132B] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shrink-0">
                <Utensils className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#C5A880] font-semibold">Michelin Dining</div>
                <div className="text-xs text-slate-300">Cenas privadas post-carrera</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0B132B] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shrink-0">
                <Star className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#C5A880] font-semibold">San Pedro Garza García</div>
                <div className="text-xs text-slate-300">Concierge presencial</div>
              </div>
            </div>
          </div>
        </div>

        {/* Down Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#C5A880]">Explorar</span>
          <div className="w-0.5 h-6 bg-gradient-to-b from-[#C5A880] to-transparent animate-bounce" />
        </div>
      </section>

      {/* =========================================================================
          2. EL DIFERENCIADOR (Por qué ir con LG Travel)
          Fondo: Azul Noche Profundo.
          Texto (Breve y contundente): "No vendemos boletos. Creamos el fin de semana perfecto.
          Desde traslados en helicóptero al circuito, hasta cenas privadas post-carrera y
          suites en los hoteles más codiciados de la ciudad sede."
         ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-[#080E1E] border-y border-[#C5A880]/20 overflow-hidden">
        {/* Subtle geometric luxury pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(#C5A880 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            El Diferenciador LG Travel
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white leading-tight max-w-4xl mx-auto font-medium">
            "No vendemos boletos. <br />
            <span className="text-[#C5A880] italic">Creamos el fin de semana perfecto.</span>"
          </h2>

          <p className="mt-8 text-lg sm:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            Desde traslados en helicóptero al circuito, hasta cenas privadas post-carrera y suites en los hoteles más codiciados de la ciudad sede.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-[#0B132B]/70 border border-[#C5A880]/25 rounded-2xl p-7 backdrop-blur-sm hover:border-[#C5A880] transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#131F3D] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] mb-5">
                <Plane className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif text-white font-medium mb-2">
                Movilidad Aérea Sin Fricción
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                Evita hasta 4 horas de congestión vehicular. Te transportamos directo de la suite o helipuerto urbano al helipad interno del autódromo.
              </p>
            </div>

            <div className="bg-[#0B132B]/70 border border-[#C5A880]/25 rounded-2xl p-7 backdrop-blur-sm hover:border-[#C5A880] transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#131F3D] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] mb-5">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif text-white font-medium mb-2">
                Mesas Reservadas & Cenas Privadas
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                Garantizamos reservaciones en restaurantes de estrellas Michelin y fiestas privadas herméticas donde celebran pilotos, directores y atletas.
              </p>
            </div>

            <div className="bg-[#0B132B]/70 border border-[#C5A880]/25 rounded-2xl p-7 backdrop-blur-sm hover:border-[#C5A880] transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#131F3D] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif text-white font-medium mb-2">
                Hospitalidad Blindada
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                Credenciales oficiales verificadas, escolta personalizada y un Travel Concierge asignado a tu grupo con asistencia 24 horas ininterrumpida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. EVENTOS INSIGNIA (Carrusel o Grid de Tarjetas Elegantes)
          Tarjeta 1: Formula 1 Paddock Club™
          Tarjeta 2: Super Bowl VIP Experience
          Tarjeta 3: UEFA Champions League & Grand Slams
         ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#050914] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880] block mb-2">
                Curaduría Insignia
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-white font-bold">
                LOS EVENTOS MÁS CODICIADOS
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              No listamos todos los deportes; curamos únicamente los escenarios donde el prestigio, el drama y la exclusividad alcanzan su máxima cumbre.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SPORTS_EVENTS.map((event, index) => (
              <div
                key={event.id}
                className="group bg-[#0B132B] rounded-2xl overflow-hidden border border-[#C5A880]/25 hover:border-[#C5A880] transition-all duration-300 flex flex-col shadow-2xl hover:shadow-[0_15px_40px_rgba(197,168,128,0.18)]"
              >
                {/* Image Card Header */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-black/40" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-[#080E1E]/90 border border-[#C5A880]/40 text-[#C5A880] backdrop-blur-md">
                      {event.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs text-slate-300 font-mono tracking-wider">
                      {event.dates}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white mt-0.5">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* User Specified Exact Description */}
                    <p className="text-sm leading-relaxed text-slate-200 font-light border-l-2 border-[#C5A880] pl-3.5 mb-6">
                      {event.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] uppercase tracking-wider text-[#C5A880] font-semibold">
                        Sedes Destacadas:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {event.locations.map((loc, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded bg-[#131F3D] text-slate-300 border border-slate-700/60"
                          >
                            <MapPin className="w-2.5 h-2.5 text-[#C5A880]" />
                            {loc}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                        Incluido en la experiencia:
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {event.highlights.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#C5A880]/15 flex items-center gap-3">
                    <button
                      onClick={() => onSelectEvent(event)}
                      className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase bg-[#131F3D] hover:bg-[#1A2A54] text-white border border-[#C5A880]/30 transition-all text-center cursor-pointer"
                    >
                      Ver Inclusiones
                    </button>

                    <button
                      onClick={() => onOpenInquiry('sports', event.title)}
                      className="py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase bg-[#C5A880] hover:bg-[#D4BC99] text-[#080E1E] transition-all text-center cursor-pointer"
                    >
                      Solicitar Acceso
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. TESTIMONIO O DATO DE CONFIANZA
          “Ir a la F1 en Las Vegas es un caos logístico para cualquiera. Con LG Travel,
          solo tuvimos que preocuparnos por llegar al helipuerto. Todo lo demás fluyó
          con una precisión suiza.” – Cliente LG Travel.
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#080E1E] border-t border-[#C5A880]/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-16 h-16 rounded-full bg-[#0B132B] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] mx-auto mb-8 shadow-[0_0_30px_rgba(197,168,128,0.2)]">
            <Quote className="w-8 h-8" />
          </div>

          <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif text-slate-100 font-light italic leading-relaxed">
            “Ir a la F1 en Las Vegas es un caos logístico para cualquiera. Con LG Travel, solo tuvimos que preocuparnos por llegar al helipuerto. Todo lo demás fluyó con una precisión suiza.”
          </blockquote>

          <div className="mt-8 flex flex-col items-center">
            <div className="h-0.5 w-12 bg-[#C5A880] mb-3" />
            <div className="text-sm font-semibold tracking-widest uppercase text-white font-sans">
              Cliente LG Travel
            </div>
            <div className="text-xs text-[#C5A880] tracking-wider mt-0.5">
              San Pedro Garza García · Asistente a Las Vegas Grand Prix
            </div>

            <div className="mt-6">
              <VipBadge variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. CIERRE / CTA (Call to Action)
          Texto: ¿Listo para asegurar tu lugar en la historia del deporte?
          Botón: Planear mi Experiencia Deportiva (Lleva al formulario "Design Your Journey" o al WhatsApp del Concierge).
         ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#080E1E] via-[#0B132B] to-[#050914] border-t border-[#C5A880]/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880] block mb-4">
            Atención Personalizada en Plaza Monarka
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-wide">
            ¿Listo para asegurar tu lugar en la historia del deporte?
          </h2>

          <p className="mt-6 text-base sm:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Nuestros cupos para Paddock Club™ y suites VIP en Grand Slams y Super Bowl son estrictamente limitados. Inicia tu proceso con anticipación.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry('sports', 'Formula 1 Paddock Club™ & VIP Sports')}
              className="w-full sm:w-auto px-9 py-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#080E1E] bg-[#C5A880] hover:bg-[#D4BC99] transition-all shadow-[0_0_30px_rgba(197,168,128,0.35)] hover:scale-105 cursor-pointer"
            >
              Planear mi Experiencia Deportiva
            </button>

            <button
              onClick={openWhatsApp}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-medium tracking-wider text-white bg-[#0F1D3C] hover:bg-[#182C5A] border border-[#C5A880]/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              Conectar al WhatsApp del Concierge
            </button>
          </div>

          <div className="mt-12 text-xs text-slate-400">
            ¿Deseas conocer cómo trabajamos antes de reservar?{' '}
            <button
              onClick={onNavigateToMethod}
              className="text-[#C5A880] hover:underline font-medium ml-1 inline-flex items-center gap-1"
            >
              Descubre The LG Method &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
