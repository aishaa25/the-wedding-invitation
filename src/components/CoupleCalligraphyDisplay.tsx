import React from 'react';

interface CoupleCalligraphyDisplayProps {
  brideName?: string;
  brideParentage?: string;
  groomName?: string;
  groomParentage?: string;
  className?: string;
}

export const CoupleCalligraphyDisplay: React.FC<CoupleCalligraphyDisplayProps> = ({
  brideName = 'Bushra',
  brideParentage = 'Daughter of Mr. & Mrs. Rizwan Kadri',
  groomName = 'Anab',
  groomParentage = 'Son of Mr. & Mrs. Mansoor Admane',
  className = '',
}) => {
  return (
    <div className={`relative max-w-xl mx-auto text-center select-none ${className}`}>
      {/* ==================== THE BRIDE ==================== */}
      <div className="space-y-1">
        <span className="font-cinzel text-[10px] tracking-[0.35em] uppercase text-[#AE9366] font-semibold block">
          The Bride
        </span>
        
        {/* Prominent Calligraphic Script: Bushra */}
        <h3 className="font-alex text-5xl sm:text-6xl md:text-7xl text-[#40352F] tracking-wide my-1 transition-transform duration-300 hover:scale-[1.02]">
          {brideName}
        </h3>

        {/* Parentage */}
        <p className="font-cormorant italic text-sm sm:text-base text-[#7D6E63]">
          {brideParentage}
        </p>
      </div>

      {/* ==================== MINIMALIST GOLD DIVIDER ==================== */}
      <div className="my-6 sm:my-8 flex items-center justify-center gap-3">
        {/* Left gold hairline */}
        <span className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#AE9366]" />

        {/* Center Minimalist Ampersand & Diamond Accent */}
        <div className="flex items-center gap-2">
          <span className="w-1 h-1 rotate-45 bg-[#AE9366]/70" />
          <span className="font-alex text-3xl sm:text-4xl text-[#AE9366] px-1 select-none leading-none">
            &amp;
          </span>
          <span className="w-1 h-1 rotate-45 bg-[#AE9366]/70" />
        </div>

        {/* Right gold hairline */}
        <span className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#AE9366]" />
      </div>

      {/* ==================== THE GROOM ==================== */}
      <div className="space-y-1">
        <span className="font-cinzel text-[10px] tracking-[0.35em] uppercase text-[#AE9366] font-semibold block">
          The Groom
        </span>

        {/* Prominent Calligraphic Script: Anab */}
        <h3 className="font-alex text-5xl sm:text-6xl md:text-7xl text-[#40352F] tracking-wide my-1 transition-transform duration-300 hover:scale-[1.02]">
          {groomName}
        </h3>

        {/* Parentage */}
        <p className="font-cormorant italic text-sm sm:text-base text-[#7D6E63]">
          {groomParentage}
        </p>
      </div>
    </div>
  );
};
