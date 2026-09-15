import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, MessageSquare, Coffee, Shield, Calendar, Users, Wine, MapPin } from 'lucide-react';
import { OFFICE_LOCATION } from '../data/travelData';
import { JourneyInquiry } from '../types';

interface JourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
  initialExperience?: string;
}

export const JourneyModal: React.FC<JourneyModalProps> = ({
  isOpen,
  onClose,
  initialType = 'sports',
  initialExperience = '',
}) => {
  const [formData, setFormData] = useState<JourneyInquiry>({
    fullName: '',
    email: '',
    phone: '',
    travelType: (initialType as any) || 'sports',
    specificExperience: initialExperience || '',
    travelDate: '',
    guestsCount: '2 personas',
    specialRequests: '',
    preferredMeeting: initialType === 'office_visit' ? 'office' : 'whatsapp',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setFormData((prev) => ({
        ...prev,
        travelType: (initialType as any) || 'sports',
        specificExperience: initialExperience || '',
        preferredMeeting: initialType === 'office_visit' ? 'office' : prev.preferredMeeting,
      }));
    }
  }, [isOpen, initialType, initialExperience]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const openDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hola Concierge LG Travel, me pongo en contacto desde el portal.\n\n` +
      `*Nombre:* ${formData.fullName || 'Cliente VIP'}\n` +
      `*Experiencia:* ${formData.specificExperience || formData.travelType}\n` +
      `*Modalidad preferida:* ${formData.preferredMeeting === 'office' ? 'Cita en Plaza Monarka' : 'Atención WhatsApp'}\n` +
      `*Acompañantes:* ${formData.guestsCount}\n` +
      `*Notas:* ${formData.specialRequests || 'Solicito cotización de disponibilidad e itinerario.'}`
    );
    window.open(`https://wa.me/${OFFICE_LOCATION.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0B132B] border border-[#C5A880]/40 rounded-3xl shadow-2xl overflow-hidden text-slate-100 my-8">
        {/* Modal Header */}
        <div className="bg-[#080E1E] p-6 sm:p-8 border-b border-[#C5A880]/20 flex items-start justify-between relative">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.25em] uppercase text-[#C5A880] mb-1">
              <Shield className="w-3.5 h-3.5 text-[#C5A880]" />
              Design Your Journey · Concierge Privado
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {formData.travelType === 'office_visit'
                ? 'Agendar Cita en Plaza Monarka'
                : 'Planear Experiencia de Ultra-Lujo'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-light">
              San Pedro Garza García · Atención confidencial y asesoría personalizada.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#131F3D] border-2 border-[#C5A880] text-[#C5A880] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(197,168,128,0.3)]">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-2xl font-serif text-white font-bold">
                  Solicitud Recibida con Éxito
                </h4>
                <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto">
                  Un Travel Designer senior de LG Travel revisará tus requerimientos y se comunicará contigo con la mayor discreción.
                </p>
              </div>

              {formData.preferredMeeting === 'office' && (
                <div className="bg-[#080E1E] p-4 rounded-xl border border-[#C5A880]/30 text-xs text-left max-w-md mx-auto space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-[#C5A880]">
                    <Coffee className="w-4 h-4" />
                    Cita en Plaza Monarka
                  </div>
                  <div className="text-slate-300">
                    Av. José Vasconcelos #345, Nivel 2, San Pedro Garza García.
                  </div>
                  <div className="text-slate-400 text-[11px]">
                    Valet parking disponible en la entrada principal.
                  </div>
                </div>
              )}

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={openDirectWhatsApp}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#25D366] text-slate-950 hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Abrir Chat Inmediato por WhatsApp
                </button>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-slate-800 text-slate-200 hover:bg-slate-700 transition-all"
                >
                  Entendido / Cerrar
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Category selector */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Tipo de Experiencia
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'sports', label: 'Deportes VIP' },
                    { id: 'trains', label: 'Trenes de Lujo' },
                    { id: 'cruises', label: 'Cruceros & Yates' },
                    { id: 'office_visit', label: 'Cita en Oficina' },
                  ].map((cat) => (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() =>
                        setFormData({
                          ...formData,
                          travelType: cat.id as any,
                          preferredMeeting: cat.id === 'office_visit' ? 'office' : formData.preferredMeeting,
                        })
                      }
                      className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                        formData.travelType === cat.id
                          ? 'bg-[#C5A880] text-[#080E1E] font-semibold border-[#C5A880] shadow-md'
                          : 'bg-[#080E1E] text-slate-300 border-slate-700 hover:border-[#C5A880]/40'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Specific experience name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
                  Evento o Itinerario Específico
                </label>
                <input
                  type="text"
                  value={formData.specificExperience}
                  onChange={(e) => setFormData({ ...formData, specificExperience: e.target.value })}
                  placeholder="Ej. Formula 1 Paddock Club Mónaco, Orient Express, o Expedición Antártida"
                  className="w-full px-4 py-3 rounded-xl bg-[#080E1E] border border-slate-700 focus:border-[#C5A880] text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              {/* Personal info grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ej. Ing. Roberto Garza"
                    className="w-full px-4 py-3 rounded-xl bg-[#080E1E] border border-slate-700 focus:border-[#C5A880] text-sm text-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Ej. +52 81 8123 4567"
                    className="w-full px-4 py-3 rounded-xl bg-[#080E1E] border border-slate-700 focus:border-[#C5A880] text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ejemplo@empresa.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#080E1E] border border-slate-700 focus:border-[#C5A880] text-sm text-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
                    Número de Huéspedes / Boletos
                  </label>
                  <select
                    value={formData.guestsCount}
                    onChange={(e) => setFormData({ ...formData, guestsCount: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#080E1E] border border-slate-700 focus:border-[#C5A880] text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="1 persona">1 Persona (Individual VIP)</option>
                    <option value="2 personas">2 Personas (Pareja / Parejas)</option>
                    <option value="3 a 4 personas">3 a 4 Personas</option>
                    <option value="Grupo Privado (5+)">Grupo Privado / Familia (5+)</option>
                    <option value="Corporativo / Suite Completa">Corporativo / Suite Completa</option>
                  </select>
                </div>
              </div>

              {/* Preferred Meeting Channel */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Canal de Contacto Preferido
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'office', label: 'Cita en Plaza Monarka', icon: Coffee },
                    { id: 'whatsapp', label: 'WhatsApp Concierge', icon: MessageSquare },
                    { id: 'call', label: 'Llamada Confidencial', icon: Shield },
                  ].map((channel) => {
                    const Icon = channel.icon;
                    return (
                      <button
                        type="button"
                        key={channel.id}
                        onClick={() => setFormData({ ...formData, preferredMeeting: channel.id as any })}
                        className={`p-3 rounded-xl text-xs flex flex-col items-center gap-1.5 border transition-all ${
                          formData.preferredMeeting === channel.id
                            ? 'bg-[#131F3D] border-[#C5A880] text-[#C5A880] font-medium'
                            : 'bg-[#080E1E] border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-center">{channel.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
                  Notas Particulares (Preferencias de vino, fechas tentativas o requerimientos especiales)
                </label>
                <textarea
                  rows={2}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="Ej. Requerimos traslado en helicóptero y reservación para 4 en restaurante Michelin post-evento."
                  className="w-full px-4 py-3 rounded-xl bg-[#080E1E] border border-slate-700 focus:border-[#C5A880] text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-widest bg-[#C5A880] hover:bg-[#D4BC99] text-[#080E1E] transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Enviar Solicitud al Concierge
                </button>

                <button
                  type="button"
                  onClick={openDirectWhatsApp}
                  className="w-full sm:w-auto px-6 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#0F1D3C] hover:bg-[#182C5A] text-white border border-[#C5A880]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  WhatsApp Directo
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500 pt-1">
                Garantizamos estricta confidencialidad bajo estándares de hospitalidad privada.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
