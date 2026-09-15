import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Navigation, Compass, Copy, Check, Car, Shield, Clock, Layers } from 'lucide-react';
import { OFFICE_LOCATION } from '../data/travelData';

export const MonarkaLeafletMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeTileTheme, setActiveTileTheme] = useState<'dark' | 'streets'>('dark');

  const coords: [number, number] = [
    OFFICE_LOCATION.coordinates.lat,
    OFFICE_LOCATION.coordinates.lng,
  ];

  const copyAddress = () => {
    navigator.clipboard.writeText(
      `${OFFICE_LOCATION.commercialCenter}, ${OFFICE_LOCATION.address}, ${OFFICE_LOCATION.neighborhood}, ${OFFICE_LOCATION.city}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Plaza Monarka San Pedro Garza Garcia Vasconcelos 345'
  )}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent('Plaza Monarka San Pedro Garza Garcia')}`;

  const tileUrls = {
    dark: {
      url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 19,
    },
    streets: {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    },
  };

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Destroy any existing instance to avoid duplicate containers
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    const map = L.map(mapContainerRef.current, {
      center: coords,
      zoom: 16,
      scrollWheelZoom: false,
      zoomControl: false,
    });

    // Custom Zoom control positioned at bottom-right
    L.control
      .zoom({
        position: 'bottomright',
      })
      .addTo(map);

    const chosenTheme = tileUrls[activeTileTheme];
    const tiles = L.tileLayer(chosenTheme.url, {
      attribution: chosenTheme.attribution,
      maxZoom: chosenTheme.maxZoom,
      subdomains: 'abcd',
    }).addTo(map);

    tileLayerRef.current = tiles;

    // Custom Luxury Gold Marker Icon
    const luxuryIcon = L.divIcon({
      className: 'custom-leaflet-pin',
      html: `
        <div style="position: relative; display: flex; flex-direction: column; align-items: center; cursor: pointer;">
          <div style="position: absolute; width: 44px; height: 44px; background: rgba(197, 168, 128, 0.25); border-radius: 50%; animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
          <div style="width: 38px; height: 38px; border-radius: 50%; background: #080E1E; border: 2.5px solid #C5A880; box-shadow: 0 0 20px rgba(197,168,128,0.7); display: flex; align-items: center; justify-content: center; color: #C5A880; font-family: 'Cormorant Garamond', Georgia, serif; font-weight: bold; font-size: 14px; letter-spacing: 1px;">
            LG
          </div>
          <div style="width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 8px solid #C5A880; margin-top: -1px;"></div>
        </div>
      `,
      iconSize: [40, 50],
      iconAnchor: [20, 48],
      popupAnchor: [0, -45],
    });

    const marker = L.marker(coords, { icon: luxuryIcon }).addTo(map);

    const popupHtml = `
      <div style="background: #080E1E; color: #F1F5F9; padding: 12px 14px; border-radius: 12px; border: 1px solid rgba(197, 168, 128, 0.4); font-family: 'Plus Jakarta Sans', system-ui, sans-serif; min-width: 220px;">
        <div style="color: #C5A880; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px;">
          Plaza Monarka · Nivel 2
        </div>
        <div style="color: #FFFFFF; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 17px; font-weight: 700; margin-top: 2px;">
          LG Travel Private Concierge
        </div>
        <div style="color: #94A3B8; font-size: 11px; margin-top: 4px; line-height: 1.4;">
          Av. José Vasconcelos #345, Col. Santa Engracia<br/>
          San Pedro Garza García, N.L.
        </div>
        <div style="margin-top: 8px; padding-top: 6px; border-top: 1px solid rgba(197,168,128,0.2); font-size: 10px; color: #E2CEB5;">
          ✓ Valet parking en acceso principal<br/>
          ✓ Salas privadas de consulta VIP
        </div>
      </div>
    `;

    marker.bindPopup(popupHtml).openPopup();

    mapInstanceRef.current = map;

    // Recalculate dimensions in case container animated in
    setTimeout(() => {
      map.invalidateSize();
    }, 250);

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [activeTileTheme]);

  const recenter = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView(coords, 16, { animate: true });
    }
  };

  return (
    <div className="w-full bg-[#0B132B] border border-[#C5A880]/40 rounded-2xl overflow-hidden shadow-2xl">
      {/* Top Details & Action Bar */}
      <div className="bg-[#080E1E] p-4 sm:p-6 border-b border-[#C5A880]/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A880]">
            <MapPin className="w-4 h-4 text-[#C5A880]" />
            Sede Física · Plaza Monarka
          </div>
          <h4 className="text-xl font-serif text-white font-medium mt-1">
            {OFFICE_LOCATION.commercialCenter} · San Pedro Garza García
          </h4>
          <p className="text-sm text-slate-300 mt-0.5">
            {OFFICE_LOCATION.address} · {OFFICE_LOCATION.neighborhood}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Tile layer switcher */}
          <div className="inline-flex rounded-lg p-1 bg-[#050914] border border-[#C5A880]/30 text-xs">
            <button
              onClick={() => setActiveTileTheme('dark')}
              className={`px-3 py-1 rounded transition-all flex items-center gap-1.5 ${
                activeTileTheme === 'dark'
                  ? 'bg-[#C5A880] text-[#080E1E] font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3 h-3" />
              Carto Dark
            </button>
            <button
              onClick={() => setActiveTileTheme('streets')}
              className={`px-3 py-1 rounded transition-all ${
                activeTileTheme === 'streets'
                  ? 'bg-[#C5A880] text-[#080E1E] font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Calles
            </button>
          </div>

          <button
            onClick={copyAddress}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#131F3D] hover:bg-[#1A2A54] text-slate-200 border border-slate-700/60 transition-colors"
            title="Copiar dirección"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#C5A880]" />}
            {copied ? 'Copiada' : 'Copiar'}
          </button>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#C5A880] text-[#080E1E] hover:bg-[#D4BC99] transition-all shadow-sm"
          >
            <Navigation className="w-3.5 h-3.5" />
            Google Maps
          </a>

          <a
            href={wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[#1A2A54] text-slate-200 hover:bg-[#23386E] border border-[#C5A880]/30 transition-colors"
          >
            <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
            Waze
          </a>
        </div>
      </div>

      {/* Leaflet Map Stage */}
      <div className="relative w-full h-84 sm:h-96 bg-[#080E1E]">
        <div ref={mapContainerRef} className="w-full h-full z-10" />

        {/* Center Button Float */}
        <button
          onClick={recenter}
          className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#080E1E]/90 hover:bg-[#0B132B] text-slate-200 border border-[#C5A880]/40 backdrop-blur-md transition-all shadow-lg flex items-center gap-1.5 cursor-pointer"
        >
          <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
          Centrar en Monarka
        </button>

        {/* Geo Coords Tag */}
        <div className="absolute bottom-3 left-3 z-20 bg-[#080E1E]/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-slate-300 border border-[#C5A880]/30">
          25.6575° N, 100.3664° W · San Pedro Garza García
        </div>
      </div>

      {/* Access and Valet Guidance */}
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#C5A880]/20 bg-[#091024] p-4 sm:p-5 text-xs text-slate-300">
        <div className="flex items-start gap-3 p-2 sm:p-0">
          <Car className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white block">Valet Parking en Puerta</span>
            <span>Servicio de valet exclusivo para clientes de la plaza con acceso directo a elevadores corporativos.</span>
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
