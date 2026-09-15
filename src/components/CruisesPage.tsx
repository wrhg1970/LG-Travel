import React from 'react';
import { CRUISE_COLLECTIONS, OFFICE_LOCATION } from '../data/travelData';
import { CruiseCollection } from '../types';
import { 
  Sparkles, 
  Anchor, 
  Compass, 
  Award, 
  ShieldCheck, 
  Ship, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Gift,
  DollarSign,
  Utensils
} from 'lucide-react';

interface CruisesPageProps {
  onOpenInquiry: (type: string, experienceTitle?: string) => void;
  onSelectCruise: (cruise: CruiseCollection) => void;
}

export const CruisesPage: React.FC<CruisesPageProps> = ({ onOpenInquiry, onSelectCruise }) => {
  return (
    <div className="w-full bg-[#080E1E] text-slate-100">
      {/* =========================================================================
          1. HERO HEADER (Cabecera de la página)
          Visual: Un yate de expedición rompiendo el hielo en la Antártida,
          o un pequeño barco de lujo anclado en una cala desierta del Mediterráneo.
          Titular: EL OCÉANO, EN TUS TÉRMINOS.
          Subtítulo: Desde yates íntimos en el Mediterráneo hasta buques rompehielos en la Antártida.
          Navegación de ultra-lujo a puertos donde las multitudes no llegan.
         ========================================================================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2200&auto=format&fit=crop"
            alt="Yate de expedición de lujo rompiendo témpanos de hielo en la Antártida"
            className="w-full h-full object-cover object-center transform scale-105 animate-pulse duration-[14000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080E1E] via-[#080E1E]/65 to-[#080E1E]/80" />
          <div className="absolute inset-0 bg-[#0B132B]/30" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B132B]/85 border border-[#C5A880]/40 text-[#C5A880] text-xs font-semibold uppercase tracking-[0.25em] mb-8 backdrop-blur-md">
            <Anchor className="w-3.5 h-3.5" />
            Expedition & Ultra-Luxury Cruises
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-[0.04em] uppercase leading-[1.08] max-w-4xl">
            EL OCÉANO, <br />
            <span className="text-[#C5A880] font-normal italic">EN TUS TÉRMINOS.</span>
          </h1>

          <p className="mt-8 text-lg sm:text-2xl font-light text-slate-200 max-w-3xl leading-relaxed">
            Desde yates íntimos en el Mediterráneo hasta buques rompehielos en la Antártida. Navegación de ultra-lujo a puertos donde las multitudes no llegan.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => onOpenInquiry('cruises', 'Expedición & Ultra-Luxury Cruises')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#080E1E] bg-[#C5A880] hover:bg-[#D4BC99] transition-all shadow-[0_0_35px_rgba(197,168,128,0.35)] flex items-center justify-center gap-2.5 cursor-pointer"
            >
              Diseñar mi Travesía Marítima
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. EL DIFERENCIADOR (Por qué un crucero con LG Travel)
          Fondo: Azul Noche Profundo.
          Texto: "No hacemos reservas en barcos masivos. Nos especializamos en navieras All-Inclusive de alto nivel (como Silversea, Seabourn, Explora Journeys, Ritz-Carlton Yacht Collection y Ponant). Proporción de tripulación casi 1:1, suites con terrazas privadas y gastronomía Michelin en alta mar."
         ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-[#080E1E] border-y border-[#C5A880]/20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880] mb-6">
            <Ship className="w-4 h-4" />
            Navegación Selecta · Menos de 500 Pasajeros
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white leading-relaxed font-medium">
            "No hacemos reservas en barcos masivos."
          </h2>

          <p className="mt-8 text-lg sm:text-2xl text-slate-300 font-light max-w-4xl mx-auto leading-relaxed">
            "Nos especializamos en navieras All-Inclusive de alto nivel (como Silversea, Seabourn, Explora Journeys, Ritz-Carlton Yacht Collection y Ponant). Proporción de tripulación casi 1:1, suites con terrazas privadas y gastronomía Michelin en alta mar."
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="bg-[#0B132B]/80 border border-[#C5A880]/30 p-7 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-[#131F3D] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] mb-4">
                <Ship className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif text-white font-medium mb-1">Ratio 1:1 Tripulación</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Atención intuitiva donde cada mayordomo recuerda tus gustos personales desde la primera noche.
              </p>
            </div>

            <div className="bg-[#0B132B]/80 border border-[#C5A880]/30 p-7 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-[#131F3D] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] mb-4">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif text-white font-medium mb-1">Gastronomía Michelin</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Restaurantes de autor y maridajes sin restricciones ni turnos rígidos de mesa.
              </p>
            </div>

            <div className="bg-[#0B132B]/80 border border-[#C5A880]/30 p-7 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-[#131F3D] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] mb-4">
                <Anchor className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif text-white font-medium mb-1">Calas Inaccesibles</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Atracamos directo en marinas íntimas como Portofino, Gustavia o los fiordos árticos más remotos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. COLECCIONES DE NAVEGACIÓN (Grid Fotográfico)
          Categoría 1: Expedición (Polos y Galápagos)
          Categoría 2: The Yacht Collection (Mediterráneo y Caribe)
          Categoría 3: River Cruising (Europa Histórica)
         ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#050914] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880] block mb-2">
              Flota y Rutas Curadas
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white font-bold">
              COLECCIONES DE NAVEGACIÓN
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CRUISE_COLLECTIONS.map((collection) => (
              <div
                key={collection.id}
                className="bg-[#0B132B] rounded-2xl overflow-hidden border border-[#C5A880]/25 hover:border-[#C5A880] transition-all duration-300 flex flex-col group shadow-2xl"
              >
                {/* Photo container */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-black/40" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-[#080E1E]/90 border border-[#C5A880]/40 text-[#C5A880] backdrop-blur-md">
                      {collection.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-serif font-bold text-white">
                      {collection.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* User Exact Description */}
                    <p className="text-sm leading-relaxed text-slate-200 font-light border-l-2 border-[#C5A880] pl-3.5 mb-6">
                      {collection.description}
                    </p>

                    <div className="space-y-2 mb-5">
                      <div className="text-[11px] uppercase tracking-wider text-[#C5A880] font-semibold">
                        Navieras & Barcos Seleccionados:
                      </div>
                      <div className="space-y-1">
                        {collection.featuredShips.map((ship, sIdx) => (
                          <div key={sIdx} className="text-xs text-slate-300 flex items-center gap-1.5">
                            <Ship className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                            <span>{ship}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                        Inclusiones de Ultralujo:
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {collection.exclusiveInclusions.slice(0, 2).map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#C5A880]/15 flex items-center gap-3">
                    <button
                      onClick={() => onSelectCruise(collection)}
                      className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold tracking-wider uppercase bg-[#131F3D] hover:bg-[#1A2A54] text-white border border-[#C5A880]/30 transition-all text-center cursor-pointer"
                    >
                      Ver Itinerario
                    </button>

                    <button
                      onClick={() => onOpenInquiry('cruises', collection.category)}
                      className="py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase bg-[#C5A880] hover:bg-[#D4BC99] text-[#080E1E] transition-all text-center cursor-pointer"
                    >
                      Reservar Suite
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. EL TOQUE LG TRAVEL (Valor Agregado)
          Texto sutil: "A través de nuestra red global de contactos y alianzas
          exclusivas de hospitalidad, al reservar tu navegación con LG Travel, a menudo
          aseguramos beneficios exclusivos: upgrades de suite (sujetos a disponibilidad),
          créditos a bordo y experiencias en tierra privadas que no están en el folleto."
         ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#080E1E] border-t border-[#C5A880]/20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/30 text-[#C5A880] text-xs font-semibold uppercase tracking-widest mb-6">
            <Award className="w-4 h-4" />
            El Toque LG Travel · Red de Hospitalidad Élite
          </div>

          <blockquote className="text-base sm:text-xl md:text-2xl font-serif text-slate-200 font-light italic leading-relaxed border-y border-[#C5A880]/30 py-8">
            "A través de nuestra red global de contactos y alianzas exclusivas de hospitalidad, al reservar tu navegación con LG Travel, a menudo aseguramos beneficios exclusivos: upgrades de suite (sujetos a disponibilidad), créditos a bordo y experiencias en tierra privadas que no están en el folleto."
          </blockquote>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-[#0B132B]/60 border border-slate-800">
              <Sparkles className="w-4 h-4 text-[#C5A880]" />
              <span>Upgrades de Suite preferenciales</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-[#0B132B]/60 border border-slate-800">
              <Gift className="w-4 h-4 text-[#C5A880]" />
              <span>Créditos para spa & catas privadas</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-[#0B132B]/60 border border-slate-800">
              <Compass className="w-4 h-4 text-[#C5A880]" />
              <span>Excursiones privadas fuera de catálogo</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. CIERRE / CTA (Call to Action)
          Texto: Zarpa hacia lo extraordinario.
          Botón: Diseñar mi Travesía Marítima (Conecta con un experto).
         ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#080E1E] via-[#0B132B] to-[#050914] border-t border-[#C5A880]/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880] block mb-4">
            Embarcaciones Íntimas & Yates de Expedición
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-wide">
            Zarpa hacia lo extraordinario.
          </h2>

          <p className="mt-6 text-base sm:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Permítenos coordinar tu suite con balcón privado y verificar disponibilidad en los barcos boutique más solicitados de Silversea, Seabourn, Explora y Ponant.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry('cruises', 'Diseño de Travesía Marítima')}
              className="w-full sm:w-auto px-9 py-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#080E1E] bg-[#C5A880] hover:bg-[#D4BC99] transition-all shadow-[0_0_30px_rgba(197,168,128,0.35)] hover:scale-105 cursor-pointer"
            >
              Diseñar mi Travesía Marítima
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
