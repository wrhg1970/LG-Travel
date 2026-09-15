import React, { useState } from 'react';
import { PageId, SportsEvent, TrainJourney, CruiseCollection } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SportsPage } from './components/SportsPage';
import { MethodPage } from './components/MethodPage';
import { TrainsPage } from './components/TrainsPage';
import { CruisesPage } from './components/CruisesPage';
import { JourneyModal } from './components/JourneyModal';
import { ExperienceDetailModal } from './components/ExperienceDetailModal';
import { MessageSquare, Calendar, Sparkles } from 'lucide-react';
import { OFFICE_LOCATION } from './data/travelData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('sports');
  const [journeyModalOpen, setJourneyModalOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState('sports');
  const [inquiryExperience, setInquiryExperience] = useState('');
  const [detailItem, setDetailItem] = useState<{
    type: 'sports' | 'train' | 'cruise';
    data: any;
  } | null>(null);

  const handleOpenInquiry = (type: string = 'sports', experienceTitle: string = '') => {
    setInquiryType(type);
    setInquiryExperience(experienceTitle);
    setJourneyModalOpen(true);
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      'Hola Concierge LG Travel, me pongo en contacto desde el portal para coordinar una experiencia de viaje privada.'
    );
    window.open(`https://wa.me/${OFFICE_LOCATION.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#080E1E] text-slate-100 flex flex-col font-sans selection:bg-[#C5A880]/30 selection:text-[#E2CEB5]">
      {/* Fixed Luxury Navigation */}
      <Navbar
        currentPage={currentPage}
        onSelectPage={(page) => setCurrentPage(page)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main Content Router */}
      <main className="flex-grow">
        {currentPage === 'sports' && (
          <SportsPage
            onOpenInquiry={handleOpenInquiry}
            onSelectEvent={(event: SportsEvent) => setDetailItem({ type: 'sports', data: event })}
            onNavigateToMethod={() => {
              setCurrentPage('method');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentPage === 'method' && (
          <MethodPage onOpenInquiry={handleOpenInquiry} />
        )}

        {currentPage === 'trains' && (
          <TrainsPage
            onOpenInquiry={handleOpenInquiry}
            onSelectTrain={(train: TrainJourney) => setDetailItem({ type: 'train', data: train })}
          />
        )}

        {currentPage === 'cruises' && (
          <CruisesPage
            onOpenInquiry={handleOpenInquiry}
            onSelectCruise={(cruise: CruiseCollection) =>
              setDetailItem({ type: 'cruise', data: cruise })
            }
          />
        )}
      </main>

      {/* Floating Concierge / VIP Contact Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <div className="hidden sm:flex items-center gap-2 bg-[#0B132B]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C5A880]/40 shadow-xl text-[11px] text-slate-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[#C5A880] font-semibold">Concierge En Línea</span>
          <span className="text-slate-400">· San Pedro</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleOpenInquiry('office_visit', 'Cita Presencial en Plaza Monarka')}
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0B132B] hover:bg-[#131F3D] text-[#C5A880] border border-[#C5A880] shadow-2xl transition-all cursor-pointer hover:scale-105"
            title="Agendar Cita en Plaza Monarka"
          >
            <Calendar className="w-4 h-4 text-[#C5A880]" />
            Cita en Plaza Monarka
          </button>

          <button
            onClick={openWhatsApp}
            className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all hover:scale-110 cursor-pointer"
            title="Abrir WhatsApp con Concierge"
            aria-label="WhatsApp Concierge"
          >
            <MessageSquare className="w-6 h-6 fill-slate-950 text-slate-950" />
          </button>
        </div>
      </div>

      {/* Global Footer */}
      <Footer
        onSelectPage={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Interactive Booking / Inquiry Modal */}
      <JourneyModal
        isOpen={journeyModalOpen}
        onClose={() => setJourneyModalOpen(false)}
        initialType={inquiryType}
        initialExperience={inquiryExperience}
      />

      {/* Detail Slideover / Modal for Specific Experiences */}
      <ExperienceDetailModal
        item={detailItem}
        onClose={() => setDetailItem(null)}
        onBook={(type, title) => handleOpenInquiry(type, title)}
      />
    </div>
  );
}

