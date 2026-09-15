import React, { useState } from 'react';
import { MapPin, Navigation, Compass, ExternalLink, Copy, Check, Clock, Car, Shield } from 'lucide-react';
import { OFFICE_LOCATION } from '../data/travelData';

export const MonarkaMap: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [mapMode, setMapMode] = useState<'blueprint' | 'satellite'>('blueprint');

  const copyAddress = () => {
    navigator.clipboard.writeText(
      `${OFFICE_LOCATION.commercialCenter}, ${OFFICE_LOCATION.address}, ${OFFICE_LOCATION.neighborhood}, ${OFFICE_LOCATION.city}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Plaza Monarka San Pedro Garza Garcia Vasconcelos'
  )}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent('Plaza Monarka San Pedro Garza Garcia')}`;

  return (
    <div className="w-full bg-[#0B132B] border border-[#C5A880]/30 rounded-2xl overflow-hidden shadow-2xl">
      {/* Map Header / Location Bar */}
      <div className="bg-[#080E1E] p-4 sm:p-6 border-b border-[#C5A880]/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A880]">
            <MapPin className="w-4 h-4 text-[#C5A880]" />
            Ubicación Presencial Privada
          </div>
          <h4 className="text-xl font-serif text-white font-medium mt-1">
            {OFFICE_LOCATION.commercialCenter} · San Pedro Garza García
          </h4>
          <p className="text-sm text-slate-300 mt-0.5">
            {OFFICE_LOCATION.address} · {OFFICE_LOCATION.neighborhood}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={copyAddress}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#131F3D] hover:bg-[#1A2A54] text-slate-200 border border-slate-700/60 transition-colors"
            title="Copiar dirección completa"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#C5A880]" />}
            {copied ? 'Dirección Copiada' : 'Copiar Dirección'}
          </button>
          
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[#C5A880] text-[#080E1E] hover:bg-[#D4BC99] transition-all font-semibold shadow-sm"
          >
            <Navigation className="w-3.5 h-3.5" />
            Google Maps
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>

          <a
            href={wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1A2A54] text-slate-200 hover:bg-[#23386E] border border-[#C5A880]/30 transition-colors"
          >
            <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
            Waze
          </a>
        </div>
      </div>

      {/* Visual Interactive Map Canvas / Simulation */}
      <div className="relative h-80 sm:h-96 w-full bg-[#050914] overflow-hidden select-none">
        {/* Toggle Mode */}
        <div className="absolute top-4 right-4 z-20 flex bg-[#080E1E]/90 backdrop-blur-md rounded-lg p-1 border border-[#C5A880]/30 text-xs">
          <button
            onClick={() => setMapMode('blueprint')}
            className={`px-3 py-1 rounded transition-all ${
              mapMode === 'blueprint'
                ? 'bg-[#C5A880] text-[#080E1E] font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Plano Arquitectónico
          </button>
          <button
            onClick={() => setMapMode('satellite')}
            className={`px-3 py-1 rounded transition-all ${
              mapMode === 'satellite'
                ? 'bg-[#C5A880] text-[#080E1E] font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Vista Satelital
          </button>
        </div>

        {mapMode === 'blueprint' ? (
          /* Architectural Blueprint View */
          <div className="w-full h-full relative flex items-center justify-center bg-[#070D1E]">
            {/* Grid Lines */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  'radial-gradient(#C5A880 1px, transparent 1px), linear-gradient(to right, #C5A88015 1px, transparent 1px), linear-gradient(to bottom, #C5A88015 1px, transparent 1px)',
                backgroundSize: '24px 24px, 48px 48px, 48px 48px'
              }}
            />

            {/* Stylized San Pedro Street Outlines */}
            <svg className="absolute inset-0 w-full h-full opacity-40 stroke-slate-500" viewBox="0 0 800 400" preserveAspectRatio="none">
              <path d="M-50,220 L850,180" stroke="#C5A880" strokeWidth="4" strokeDasharray="6 3" />
              <path d="M-50,120 C200,140 400,100 850,130" stroke="#475569" strokeWidth="2" />
              <path d="M120,-20 L260,420" stroke="#475569" strokeWidth="2" />
              <path d="M420,-20 L450,420" stroke="#475569" strokeWidth="2.5" />
              <path d="M620,-20 L580,420" stroke="#475569" strokeWidth="2" />
              
              {/* Plaza Polygon Area */}
              <rect x="360" y="140" width="130" height="90" rx="8" fill="#C5A880" fillOpacity="0.12" stroke="#C5A880" strokeWidth="1.5" />
            </svg>

            {/* Street Names Labels */}
            <div className="absolute top-[38%] left-[10%] text-[10px] tracking-widest text-[#C5A880]/80 uppercase font-mono">
              Av. José Vasconcelos
            </div>
            <div className="absolute top-[20%] left-[62%] text-[10px] tracking-widest text-slate-400 uppercase font-mono rotate-12">
              Calzada del Valle
            </div>
            <div className="absolute bottom-[18%] left-[22%] text-[10px] tracking-widest text-slate-400 uppercase font-mono">
              Col. Santa Engracia · San Pedro Garza García
            </div>

            {/* Central Monarka Marker */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-4 bg-[#C5A880]/20 rounded-full animate-ping pointer-events-none" />
                <div className="w-14 h-14 rounded-full bg-[#0B132B] border-2 border-[#C5A880] shadow-[0_0_25px_rgba(197,168,128,0.45)] flex items-center justify-center text-[#C5A880]">
                  <MapPin className="w-7 h-7 fill-[#C5A880]/20" />
                </div>
              </div>
              
              <div className="mt-3 bg-[#080E1E]/95 backdrop-blur-md border border-[#C5A880] text-center px-4 py-2 rounded-xl shadow-xl">
                <div className="text-[11px] uppercase tracking-wider text-[#C5A880] font-semibold">
                  Plaza Monarka · Nivel 2
                </div>
                <div className="text-sm font-serif font-medium text-white">
                  LG Travel Private Lounge
                </div>
                <div className="text-[11px] text-slate-300">
                  Acceso Privado & Valet Parking
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Satellite Visual View */
          <div className="w-full h-full relative">
            <img
              src="https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1600&auto=format&fit=crop"
              alt="San Pedro Garza Garcia vista aérea"
              className="w-full h-full object-cover brightness-[0.6] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080E1E] via-transparent to-black/60" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#C5A880] border-2 border-white text-[#080E1E] flex items-center justify-center shadow-2xl animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="mt-2 bg-[#080E1E]/90 backdrop-blur-md px-4 py-1.5 rounded-lg border border-[#C5A880]/50 text-white text-xs font-medium">
                  Plaza Monarka · Vasconcelos #345
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Coords Badge */}
        <div className="absolute bottom-3 left-3 z-10 bg-[#080E1E]/80 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-mono text-slate-400 border border-slate-700/50">
          LAT: {OFFICE_LOCATION.coordinates.lat}° N · LNG: {Math.abs(OFFICE_LOCATION.coordinates.lng)}° W
        </div>
      </div>

      {/* Office Amenities / Access Protocols */}
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#C5A880]/15 bg-[#091024] p-4 sm:p-5 text-xs text-slate-300">
        <div className="flex items-start gap-3 p-2 sm:p-0">
          <Car className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white block">Valet Parking en Puerta</span>
            <span>Servicio de valet exclusivo para clientes de la plaza con acceso directo a elevadores.</span>
          </div>
        </div>

        <div className="flex items-start gap-3 p-2 sm:p-0 sm:px-4">
          <Shield className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white block">Privacidad & Discreción Total</span>
            <span>Salas de juntas acústicas cerradas y acuerdos de confidencialidad estrictos para clientes VIP.</span>
          </div>
        </div>

        <div className="flex items-start gap-3 p-2 sm:p-0 sm:pl-4">
          <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white block">Horarios de Concierge</span>
            <span>{OFFICE_LOCATION.hours}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
