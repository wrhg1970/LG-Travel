import React from 'react';
import { ShieldCheck, Award, Sparkles } from 'lucide-react';

interface VipBadgeProps {
  variant?: 'seal' | 'horizontal' | 'compact';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const VipBadge: React.FC<VipBadgeProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
}) => {
  if (variant === 'seal') {
    const dimensions =
      size === 'sm' ? 'w-24 h-24' : size === 'lg' ? 'w-48 h-48 sm:w-56 sm:h-56' : 'w-36 h-36';

    return (
      <div className={`relative flex items-center justify-center select-none ${dimensions} ${className}`}>
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-[#C5A880]/15 rounded-full blur-xl pointer-events-none" />
        <img
          src="/assets/authorized_vip_concierge_badge.svg"
          alt="Insignia Authorized VIP Concierge · San Pedro Garza García"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain drop-shadow-[0_8px_20px_rgba(197,168,128,0.25)] hover:scale-105 transition-transform duration-300"
        />
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B132B] border border-[#C5A880]/40 text-[#C5A880] shadow-md ${className}`}
      >
        <img
          src="/assets/authorized_vip_concierge_badge.svg"
          alt="Authorized VIP Concierge Seal"
          referrerPolicy="no-referrer"
          className="w-5 h-5 object-contain"
        />
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#E2CEB5]">
          Authorized VIP Concierge
        </span>
      </div>
    );
  }

  // Horizontal Card Variant
  return (
    <div
      className={`inline-flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#0B132B] via-[#0E1830] to-[#080E1E] border border-[#C5A880]/40 shadow-xl ${className}`}
    >
      <div className="w-11 h-11 shrink-0 rounded-full border border-[#C5A880]/60 p-0.5 bg-[#050914] shadow-inner flex items-center justify-center">
        <img
          src="/assets/authorized_vip_concierge_badge.svg"
          alt="Insignia Authorized VIP Concierge"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain"
        />
      </div>
      <div>
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C5A880]">
            Authorized VIP Concierge
          </span>
          <span className="text-[9px] bg-[#C5A880]/20 text-[#DFCAAB] px-1.5 py-0.5 rounded font-mono font-medium">
            OFICIAL
          </span>
        </div>
        <div className="text-[10px] text-slate-400 tracking-wider">
          San Pedro Garza García · Acceso Global Garantizado
        </div>
      </div>
    </div>
  );
};
