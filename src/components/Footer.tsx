import React from 'react';
import { PageId } from '../types';
import { MapPin, Phone, Mail, Shield, Sparkles, ArrowUp } from 'lucide-react';
import { OFFICE_LOCATION } from '../data/travelData';
import { VipBadge } from './VipBadge';

interface FooterProps {
  onSelectPage: (page: PageId) => void;
  onOpenInquiry: (type?: string, experienceTitle?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectPage, onOpenInquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050914] text-slate-400 border-t border-[#C5A880]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Manifesto */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded border border-[#C5A880] flex items-center justify-center bg-[#0B132B]">
                <span className="font-serif font-bold text-base text-[#C5A880]">LG</span>
              </div>
              <span className="font-serif font-bold text-lg tracking-[0.2em] text-white">
                LG TRAVEL
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-300">
              Curaduría de viajes de ultra-lujo, acceso prioritario a eventos deportivos globales y travesías privadas. La máxima expresión de confort y logística orquestada desde San Pedro Garza García.
            </p>
            
            {/* Authorized VIP Concierge Seal & Protocol */}
            <div className="pt-2 flex flex-col gap-2.5">
              <VipBadge variant="horizontal" />
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[10px] tracking-wider uppercase px-2.5 py-1 rounded bg-slate-800/90 text-slate-300 border border-slate-700">
                  <Shield className="w-3 h-3 text-emerald-400" />
                  NDA Confidencial
                </span>
                <span className="text-[10px] text-slate-400">
                  Plaza Monarka · Nivel 2
                </span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h5 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-4">
              Colecciones Privadas
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onSelectPage('sports')}
                  className="hover:text-[#C5A880] transition-colors text-left"
                >
                  Formula 1 Paddock Club™ & Super Bowl
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectPage('sports')}
                  className="hover:text-[#C5A880] transition-colors text-left"
                >
                  UEFA Champions League & Wimbledon
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectPage('trains')}
                  className="hover:text-[#C5A880] transition-colors text-left"
                >
                  Classic Journeys: Venice Simplon & Belmond
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectPage('trains')}
                  className="hover:text-[#C5A880] transition-colors text-left"
                >
                  Seven Stars in Kyushu & The Golden Eagle
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectPage('cruises')}
                  className="hover:text-[#C5A880] transition-colors text-left"
                >
                  Expedición Polar, Galápagos & Yacht Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectPage('method')}
                  className="hover:text-[#C5A880] transition-colors text-left"
                >
                  The LG Method: Los 4 Pasos
                </button>
              </li>
            </ul>
          </div>

          {/* Office in San Pedro Garza García */}
          <div>
            <h5 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-4">
              Sede San Pedro Garza García
            </h5>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">{OFFICE_LOCATION.commercialCenter}</span>
                  <span>{OFFICE_LOCATION.address}</span>
                  <span className="block text-slate-400">{OFFICE_LOCATION.city}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <span>{OFFICE_LOCATION.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <span>{OFFICE_LOCATION.email}</span>
              </div>
            </div>
            <button
              onClick={() => onOpenInquiry('office_visit', 'Cita Presencial en Plaza Monarka')}
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#C5A880] hover:text-[#E2CEB5] font-medium underline underline-offset-4"
            >
              Agendar cita presencial con un Travel Designer &rarr;
            </button>
          </div>

          {/* Concierge & Horario */}
          <div>
            <h5 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-4">
              Servicio Privado 24/7
            </h5>
            <p className="text-xs leading-relaxed text-slate-300 mb-3">
              Monitoreo logístico en tiempo real para todos los itinerarios activos en los cinco continentes.
            </p>
            <div className="bg-[#0B132B] p-3.5 rounded-xl border border-[#C5A880]/20 space-y-1 text-xs">
              <div className="text-[11px] uppercase tracking-wider text-slate-400">Atención en Oficina:</div>
              <div className="text-white font-medium">Lun – Vie: 09:30 - 19:30 hrs</div>
              <div className="text-[#C5A880] text-[11px]">Sábados con reservación previa</div>
            </div>
            <button
              onClick={scrollToTop}
              className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#C5A880]" />
              Volver al inicio
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} LG Travel Private Concierge S.A. de C.V. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Aviso de Privacidad</span>
            <span className="hover:text-slate-300 cursor-pointer">Términos de Hospitalidad</span>
            <span className="hover:text-slate-300 cursor-pointer">Protocolo de Confidencialidad</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
