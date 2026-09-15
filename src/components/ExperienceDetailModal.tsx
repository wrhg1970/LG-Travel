import React from 'react';
import { X, CheckCircle2, MapPin, Sparkles, Clock, ShieldCheck, ArrowRight, Plane, Wine, Anchor } from 'lucide-react';
import { SportsEvent, TrainJourney, CruiseCollection } from '../types';

type DetailItem =
  | { type: 'sports'; data: SportsEvent }
  | { type: 'train'; data: TrainJourney }
  | { type: 'cruise'; data: CruiseCollection };

interface ExperienceDetailModalProps {
  item: DetailItem | null;
  onClose: () => void;
  onBook: (type: string, title: string) => void;
}

export const ExperienceDetailModal: React.FC<ExperienceDetailModalProps> = ({
  item,
  onClose,
  onBook,
}) => {
  if (!item) return null;

  const renderContent = () => {
    if (item.type === 'sports') {
      const event = item.data;
      return (
        <div>
          {/* Header Image */}
          <div className="relative h-72 sm:h-96 w-full">
            <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/40 to-black/60" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#C5A880] text-[#080E1E] inline-block mb-2">
                {event.badge}
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                {event.title}
              </h3>
              <p className="text-sm text-slate-300 mt-1">{event.subtitle}</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Description */}
            <div className="bg-[#080E1E] p-5 rounded-2xl border border-[#C5A880]/20">
              <h4 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-2">
                Visión General
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed">{event.description}</p>
              {event.heroQuote && (
                <p className="mt-3 text-xs italic text-[#C5A880] border-l border-[#C5A880] pl-3">
                  "{event.heroQuote}"
                </p>
              )}
            </div>

            {/* Inclusiones VIP */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                Acceso Oficial & Hospitalidad en Garaje
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {event.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 bg-[#080E1E] p-3 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Logística LG Travel */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-3 flex items-center gap-1.5">
                <Plane className="w-4 h-4 text-[#C5A880]" />
                Logística Suiza & Perfección en Destino
              </h4>
              <div className="space-y-2">
                {event.includedPerks.map((p, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 bg-[#131F3D] p-3 rounded-xl border border-[#C5A880]/20">
                    <Sparkles className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">
                Circuitos & Sedes Disponibles:
              </h4>
              <div className="flex flex-wrap gap-2">
                {event.locations.map((loc, i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-lg bg-[#080E1E] text-slate-200 border border-slate-700 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (item.type === 'train') {
      const train = item.data;
      return (
        <div>
          <div className="relative h-72 sm:h-96 w-full">
            <img src={train.image} alt={train.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/40 to-black/60" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#C5A880] text-[#080E1E] inline-block mb-2">
                {train.region} · {train.duration}
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                {train.title}
              </h3>
              <p className="text-sm text-[#C5A880] mt-1">{train.route}</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="bg-[#080E1E] p-5 rounded-2xl border border-[#C5A880]/20">
              <h4 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-2">
                Descripción & Vivencia
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed">{train.description}</p>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed">{train.experienceNotes}</p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-3 flex items-center gap-1.5">
                <Wine className="w-4 h-4 text-[#C5A880]" />
                Privilegios a Bordo
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {train.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 bg-[#080E1E] p-3 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">
                Cabinas & Suites Disponibles:
              </h4>
              <div className="flex flex-wrap gap-2">
                {train.cabinStyles.map((cabin, i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-lg bg-[#131F3D] text-[#C5A880] border border-[#C5A880]/30 font-medium">
                    {cabin}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (item.type === 'cruise') {
      const cruise = item.data;
      return (
        <div>
          <div className="relative h-72 sm:h-96 w-full">
            <img src={cruise.image} alt={cruise.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/40 to-black/60" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#C5A880] text-[#080E1E] inline-block mb-2">
                {cruise.category}
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                {cruise.title}
              </h3>
              <p className="text-sm text-slate-300 mt-1">{cruise.tagline}</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="bg-[#080E1E] p-5 rounded-2xl border border-[#C5A880]/20">
              <h4 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-2">
                Enfoque de Navegación
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed">{cruise.description}</p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-3 flex items-center gap-1.5">
                <Anchor className="w-4 h-4 text-[#C5A880]" />
                Inclusiones Exclusivas de Ultralujo
              </h4>
              <div className="space-y-2">
                {cruise.exclusiveInclusions.map((inc, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 bg-[#080E1E] p-3 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">
                Navieras Élite Seleccionadas:
              </h4>
              <div className="flex flex-wrap gap-2">
                {cruise.featuredShips.map((ship, i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-lg bg-[#131F3D] text-slate-200 border border-slate-700">
                    {ship}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  const getTitle = () => {
    if (item.type === 'sports') return item.data.title;
    if (item.type === 'train') return item.data.title;
    if (item.type === 'cruise') return item.data.title;
    return 'Experiencia LG Travel';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0B132B] border border-[#C5A880]/40 rounded-3xl shadow-2xl overflow-hidden text-slate-100 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-slate-300 hover:text-white backdrop-blur-md border border-white/10 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {renderContent()}

        {/* Modal Footer */}
        <div className="p-6 bg-[#080E1E] border-t border-[#C5A880]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Consultoría y asignación de suite gestionada desde Plaza Monarka.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Cerrar
            </button>
            <button
              onClick={() => {
                onClose();
                onBook(item.type, getTitle());
              }}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl text-xs uppercase tracking-widest font-semibold text-[#080E1E] bg-[#C5A880] hover:bg-[#D4BC99] transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              Solicitar Disponibilidad
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
