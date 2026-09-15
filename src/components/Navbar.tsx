import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Compass, Calendar, Phone, MessageSquare, Menu, X, ShieldCheck } from 'lucide-react';
import { OFFICE_LOCATION } from '../data/travelData';

interface NavbarProps {
  currentPage: PageId;
  onSelectPage: (page: PageId) => void;
  onOpenInquiry: (type?: string, experienceTitle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onSelectPage,
  onOpenInquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string; tag: string }[] = [
    { id: 'sports', label: 'Deportes VIP', tag: 'F1 & Super Bowl' },
    { id: 'method', label: 'The LG Method', tag: 'Nosotros / San Pedro' },
    { id: 'trains', label: 'Classic Journeys', tag: 'Trenes de Lujo' },
    { id: 'cruises', label: 'Expedición & Cruceros', tag: 'Yates & Mares' },
  ];

  const handleNavClick = (pageId: PageId) => {
    onSelectPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      'Hola Concierge de LG Travel, me pongo en contacto desde el portal para coordinar una experiencia de viaje privada.'
    );
    window.open(`https://wa.me/${OFFICE_LOCATION.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080E1E]/95 backdrop-blur-md border-b border-[#C5A880]/20 shadow-2xl py-3.5'
            : 'bg-gradient-to-b from-[#080E1E]/90 via-[#080E1E]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('sports')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg border border-[#C5A880] flex items-center justify-center bg-[#0B132B] shadow-[0_0_15px_rgba(197,168,128,0.2)] group-hover:border-[#DFCAAB] transition-colors">
              <span className="font-serif font-bold text-lg text-[#C5A880] tracking-wider">
                LG
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-xl tracking-[0.2em] text-white">
                  LG TRAVEL
                </span>
                <span className="hidden md:inline-flex items-center gap-1 text-[9px] uppercase tracking-widest text-[#C5A880] bg-[#C5A880]/10 px-1.5 py-0.5 rounded border border-[#C5A880]/30">
                  <ShieldCheck className="w-2.5 h-2.5" />
                  VIP Private
                </span>
              </div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-slate-400 font-sans">
                San Pedro Garza García
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#0B132B]/80 border border-[#C5A880]/25 px-3 py-1.5 rounded-full backdrop-blur-md shadow-inner">
            {navItems.map((item) => {
              const active = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs tracking-wider transition-all duration-200 font-medium ${
                    active
                      ? 'text-[#080E1E] bg-[#C5A880] font-semibold shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium text-slate-200 hover:text-white bg-[#0F1D3C] hover:bg-[#162A57] border border-[#C5A880]/30 transition-all shadow-sm"
              title="Chat con Concierge"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span className="hidden xl:inline">WhatsApp</span> Concierge
            </button>

            <button
              onClick={() => onOpenInquiry('office_visit', 'Cita Presencial en Plaza Monarka')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-[#080E1E] bg-[#C5A880] hover:bg-[#D8C1A0] transition-all tracking-wider uppercase shadow-[0_0_20px_rgba(197,168,128,0.25)] hover:shadow-[0_0_25px_rgba(197,168,128,0.4)] cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#080E1E]" />
              Agendar Cita
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-[#0B132B] border border-[#C5A880]/30 focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#C5A880]" /> : <Menu className="w-6 h-6 text-[#C5A880]" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080E1E]/95 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col justify-between border-b border-[#C5A880]/30 lg:hidden">
          <div className="space-y-3">
            <div className="text-[11px] uppercase tracking-widest text-[#C5A880] font-semibold mb-2">
              Colecciones & Experiencias
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                  currentPage === item.id
                    ? 'bg-[#C5A880] text-[#080E1E] border-[#C5A880] font-semibold'
                    : 'bg-[#0B132B] text-slate-200 border-slate-800 hover:border-[#C5A880]/40'
                }`}
              >
                <div>
                  <div className="font-serif text-base">{item.label}</div>
                  <div className={`text-xs ${currentPage === item.id ? 'text-[#080E1E]/80' : 'text-slate-400'}`}>
                    {item.tag}
                  </div>
                </div>
                <Compass className={`w-4 h-4 ${currentPage === item.id ? 'text-[#080E1E]' : 'text-[#C5A880]'}`} />
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-800 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('office_visit', 'Cita Presencial en Plaza Monarka');
              }}
              className="w-full py-3.5 rounded-xl text-center text-xs font-semibold uppercase tracking-wider bg-[#C5A880] text-[#080E1E] shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Agendar Cita en Plaza Monarka
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp();
              }}
              className="w-full py-3 rounded-xl text-center text-xs font-medium bg-[#0B132B] text-white border border-[#C5A880]/40 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              Conectar vía WhatsApp (+52 81 1234 5678)
            </button>

            <div className="text-center text-[11px] text-slate-500 pt-2">
              Plaza Monarka · Av. Vasconcelos #345 · San Pedro Garza García
            </div>
          </div>
        </div>
      )}
    </>
  );
};
