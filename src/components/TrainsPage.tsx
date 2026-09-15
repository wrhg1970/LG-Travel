import React, { useState } from 'react';
import { TRAIN_JOURNEYS, OFFICE_LOCATION } from '../data/travelData';
import { TrainJourney } from '../types';
import { 
  Sparkles, 
  MapPin, 
  Clock, 
  Compass, 
  Wine, 
  Coffee, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Calendar
} from 'lucide-react';

interface TrainsPageProps {
  onOpenInquiry: (type: string, experienceTitle?: string) => void;
  onSelectTrain: (train: TrainJourney) => void;
}

export const TrainsPage: React.FC<TrainsPageProps> = ({ onOpenInquiry, onSelectTrain }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % TRAIN_JOURNEYS.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + TRAIN_JOURNEYS.length) % TRAIN_JOURNEYS.length);
  };

  return (
    <div className="w-full bg-[#080E1E] text-slate-100">
      {/* =========================================================================
          1. HERO HEADER (Cabecera de la página)
          Visual: Fotografía en alta definición: Una copa de cristal vibrando suavemente
          sobre una mesa impecablemente puesta, con un paisaje montañoso espectacular
          deslizándose por la ventana (Alpes Suizos o Tierras Altas de Escocia).
          Titular: EL ARTE DE VIAJAR SIN PRISA.
          Subtítulo: Recupera el romance de la travesía. Itinerarios en los trenes
          más legendarios del mundo, donde el trayecto es el verdadero destino.
         ========================================================================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2200&auto=format&fit=crop"
            alt="Copa de cristal en mesa elegante sobre rieles frente a paisaje alpino"
            className="w-full h-full object-cover object-center transform scale-105 animate-pulse duration-[14000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080E1E] via-[#080E1E]/60 to-[#080E1E]/75" />
          <div className="absolute inset-0 bg-[#C5A880]/10 mix-blend-overlay" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B132B]/85 border border-[#C5A880]/40 text-[#C5A880] text-xs font-semibold uppercase tracking-[0.25em] mb-8 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            Classic Journeys · Trenes de Leyenda
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-[0.04em] uppercase leading-[1.08] max-w-4xl">
            EL ARTE DE <br />
            <span className="text-[#C5A880] font-normal italic">VIAJAR SIN PRISA.</span>
          </h1>

          <p className="mt-8 text-lg sm:text-2xl font-light text-slate-200 max-w-3xl leading-relaxed">
            Recupera el romance de la travesía. Itinerarios en los trenes más legendarios del mundo, donde el trayecto es el verdadero destino.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => onOpenInquiry('trains', 'Colección de Trenes de Lujo')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#080E1E] bg-[#C5A880] hover:bg-[#D4BC99] transition-all shadow-[0_0_35px_rgba(197,168,128,0.35)] flex items-center justify-center gap-2.5 cursor-pointer"
            >
              Consultar Disponibilidad y Rutas
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. EL DIFERENCIADOR (La Experiencia a Bordo)
          Fondo: Champán Mate suave (#C5A880 con opacidad reducida).
          Texto Central: "Un hotel boutique en movimiento. Olvídate de los aeropuertos y el estrés de empacar cada día. Despierta en un país diferente, en una cabina revestida de maderas nobles, mientras tu mayordomo privado te sirve el desayuno con vistas al horizonte cambiante."
         ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-[#C5A880]/15 border-y border-[#C5A880]/30 backdrop-blur-sm overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 bg-[#080E1E]/50 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880] mb-6">
            <Wine className="w-4 h-4" />
            La Experiencia a Bordo
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white leading-relaxed font-medium">
            "Un hotel boutique en movimiento."
          </h2>

          <p className="mt-8 text-lg sm:text-2xl text-slate-200 font-light leading-relaxed max-w-3xl mx-auto">
            "Olvídate de los aeropuertos y el estrés de empacar cada día. Despierta en un país diferente, en una cabina revestida de maderas nobles, mientras tu mayordomo privado te sirve el desayuno con vistas al horizonte cambiante."
          </p>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="bg-[#0B132B]/80 border border-[#C5A880]/30 p-5 rounded-xl">
              <div className="text-[#C5A880] text-xs font-mono mb-1">01 / MAYORDOMO</div>
              <div className="text-sm font-serif font-semibold text-white">Servicio Privado 24h</div>
              <div className="text-[11px] text-slate-300 mt-1">Atención dedicada en tu suite</div>
            </div>

            <div className="bg-[#0B132B]/80 border border-[#C5A880]/30 p-5 rounded-xl">
              <div className="text-[#C5A880] text-xs font-mono mb-1">02 / GASTRONOMÍA</div>
              <div className="text-sm font-serif font-semibold text-white">Chefs de Alta Escuela</div>
              <div className="text-[11px] text-slate-300 mt-1">Cena formal de etiqueta</div>
            </div>

            <div className="bg-[#0B132B]/80 border border-[#C5A880]/30 p-5 rounded-xl">
              <div className="text-[#C5A880] text-xs font-mono mb-1">03 / PAISAJE</div>
              <div className="text-sm font-serif font-semibold text-white">Vagón Observatorio</div>
              <div className="text-[11px] text-slate-300 mt-1">Vistas panorámicas 360°</div>
            </div>

            <div className="bg-[#0B132B]/80 border border-[#C5A880]/30 p-5 rounded-xl">
              <div className="text-[#C5A880] text-xs font-mono mb-1">04 / PRIVACIDAD</div>
              <div className="text-sm font-serif font-semibold text-white">Cupos Restringidos</div>
              <div className="text-[11px] text-slate-300 mt-1">Exclusividad garantizada</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. TRENES INSIGNIA (Carrusel / Tarjetas Elegantes)
          Tarjeta 1: Belmond Andean Explorer (Perú)
          Tarjeta 2: Venice Simplon-Orient-Express (Europa)
          Tarjeta 3: The Golden Eagle (Asia Central / Europa del Este)
          Tarjeta 4: Seven Stars in Kyushu (Japón)
         ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#050914] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880] block mb-2">
                Nuestra Selección Mundial
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-white font-bold">
                TRENES INSIGNIA
              </h2>
            </div>
            
            {/* Carousel navigation controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-11 h-11 rounded-full border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] hover:bg-[#C5A880] hover:text-[#080E1E] transition-all cursor-pointer"
                aria-label="Anterior tren"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-full border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] hover:bg-[#C5A880] hover:text-[#080E1E] transition-all cursor-pointer"
                aria-label="Siguiente tren"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Grid of elegant train cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRAIN_JOURNEYS.map((train, idx) => (
              <div
                key={train.id}
                className="bg-[#0B132B] rounded-2xl overflow-hidden border border-[#C5A880]/25 hover:border-[#C5A880] transition-all duration-300 flex flex-col group shadow-xl"
              >
                {/* Photo container */}
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <img
                    src={train.image}
                    alt={train.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-black/50" />

                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-[#080E1E]/90 border border-[#C5A880]/40 text-[#C5A880] backdrop-blur-md">
                      {train.region}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] tracking-wider bg-black/60 text-slate-300 backdrop-blur-md border border-slate-700">
                      {train.duration}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs text-[#C5A880] font-mono tracking-wider mb-1 flex items-center gap-1">
                      <Compass className="w-3.5 h-3.5" />
                      {train.route}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      {train.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* User Exact Description */}
                    <p className="text-sm sm:text-base leading-relaxed text-slate-200 font-light border-l-2 border-[#C5A880] pl-4 mb-6">
                      {train.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] uppercase tracking-wider text-[#C5A880] font-semibold">
                        Experiencias Clave a Bordo:
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {train.highlights.slice(0, 3).map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 mb-6">
                      <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                        Categorías de Suite:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {train.cabinStyles.map((cabin, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-[11px] px-2.5 py-1 rounded bg-[#131F3D] text-slate-300 border border-slate-700/60"
                          >
                            {cabin}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#C5A880]/15 flex items-center gap-3">
                    <button
                      onClick={() => onSelectTrain(train)}
                      className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase bg-[#131F3D] hover:bg-[#1A2A54] text-white border border-[#C5A880]/30 transition-all text-center cursor-pointer"
                    >
                      Detalles del Vagón
                    </button>

                    <button
                      onClick={() => onOpenInquiry('trains', train.title)}
                      className="py-2.5 px-5 rounded-xl text-xs font-semibold tracking-wider uppercase bg-[#C5A880] hover:bg-[#D4BC99] text-[#080E1E] transition-all text-center cursor-pointer"
                    >
                      Consultar Cabina
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CIERRE / CTA (Call to Action)
          Texto: ¿En qué vagón deseas despertar mañana?
          Botón: Consultar Disponibilidad y Rutas (Conecta directo con el equipo de LG Travel para revisar calendarios de salida).
         ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#080E1E] via-[#0B132B] to-[#050914] border-t border-[#C5A880]/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880] block mb-4">
            Salidas Exclusivas de Temporada
          </span>

          {/* Exact User Text */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-wide">
            ¿En qué vagón deseas despertar mañana?
          </h2>

          <p className="mt-6 text-base sm:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Las cabinas Grand Suite de Venice Simplon y Seven Stars en Kyushu se agotan con hasta 12 meses de anticipación. Te asistimos en San Pedro Garza García para reservar tu salida.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry('trains', 'Classic Journeys - Disponibilidad y Rutas')}
              className="w-full sm:w-auto px-9 py-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#080E1E] bg-[#C5A880] hover:bg-[#D4BC99] transition-all shadow-[0_0_30px_rgba(197,168,128,0.35)] hover:scale-105 cursor-pointer"
            >
              Consultar Disponibilidad y Rutas
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
