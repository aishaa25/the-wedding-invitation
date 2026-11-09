import React, { useState } from 'react';
import { weddingAudio } from '../utils/audio';

interface LuxuryEnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const LuxuryEnvelope: React.FC<LuxuryEnvelopeProps> = ({
  isOpen,
  onOpen,
}) => {
  const [isOpeningAnim, setIsOpeningAnim] = useState(false);

  const handleOpenClick = () => {
    if (isOpen || isOpeningAnim) return;
    setIsOpeningAnim(true);

    try {
      weddingAudio.play();
    } catch {
      // Audio autoplay policy
    }

    setTimeout(() => {
      onOpen();
      setIsOpeningAnim(false);
    }, 600);
  };

  return (
    <div className="relative mx-auto w-full max-w-lg px-4 select-none">
      {/* Outer Envelope Wrapper */}
      <div
        className="relative mx-auto aspect-[16/11] w-full max-w-md transition-all duration-700"
        style={{ perspective: '1200px' }}
      >
        {/* Soft Photography Shadow Beneath Envelope */}
        <div className="absolute inset-x-4 -bottom-3 h-8 rounded-full bg-[#40352F]/10 blur-xl pointer-events-none" />

        {/* Physical Envelope Container (NO names on envelope face) */}
        <div
          onClick={!isOpen ? handleOpenClick : undefined}
          className={`relative h-full w-full overflow-hidden rounded-xl border border-[#E7DDCE] bg-[#FAF7F0] editorial-paper transition-all duration-500 ${
            !isOpen
              ? 'cursor-pointer hover:border-[#AE9366]/60 hover:shadow-2xl hover:-translate-y-1'
              : ''
          }`}
        >
          {/* Subtle Outer Hairline Gold Border */}
          <div className="absolute inset-2.5 sm:inset-3 rounded-lg border border-[#AE9366]/35 pointer-events-none z-10" />

          {/* Envelope Diagonal Fold Crease Lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-25 z-0"
            style={{
              background:
                'linear-gradient(to top left, transparent 49.6%, rgba(174, 147, 102, 0.4) 50%, transparent 50.4%), linear-gradient(to top right, transparent 49.6%, rgba(174, 147, 102, 0.4) 50%, transparent 50.4%)',
            }}
          />

          {/* Bottom & Side Pockets (visual shading) */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              clipPath: 'polygon(0 100%, 50% 50%, 100% 100%)',
              background: 'linear-gradient(180deg, #F5EFE4 0%, #FAF7F0 100%)',
              borderTop: '1px solid rgba(174, 147, 102, 0.25)',
            }}
          />

          {/* Top Triangular Flap */}
          <div
            className={`absolute top-0 left-0 right-0 h-[55%] origin-top transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              isOpen || isOpeningAnim ? '-rotate-x-180 opacity-0 pointer-events-none z-0' : 'z-20'
            }`}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              background: 'linear-gradient(180deg, #FAF7F0 0%, #F5EFE4 90%, #EFE7D8 100%)',
              borderBottom: '1px solid rgba(174, 147, 102, 0.5)',
              boxShadow: '0 6px 18px rgba(64, 53, 47, 0.08)',
            }}
          >
            {/* Flap gold foil piping */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 98%, 49% 98%)',
                background: 'linear-gradient(180deg, transparent 60%, rgba(174, 147, 102, 0.3) 100%)',
              }}
            />
          </div>

          {/* Minimal Watermark (No names on envelope!) */}
          <div className="absolute inset-0 flex flex-col items-center justify-start p-6 text-center z-10 pointer-events-none">
            <div className="pt-2">
              <p dir="rtl" className="font-arabic text-2xl sm:text-3xl text-[#8E7449] font-bold select-none">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
            </div>
          </div>

          {/* Center Initial Wax Seal / Logo (B & A) with Tap to Open */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-500 ${
              isOpen ? 'scale-75 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
            }`}
          >
            <div className="relative group cursor-pointer flex flex-col items-center">
              {/* Antique Gold Seal Disc with Initials B & A */}
              <div
                className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full transition-transform duration-300 group-hover:scale-105"
                style={{
                  background:
                    'radial-gradient(circle at 35% 35%, #F4EFE6 0%, #D8C6A5 35%, #AE9366 75%, #8E7449 100%)',
                  boxShadow:
                    '0 8px 20px rgba(64, 53, 47, 0.22), inset 0 2px 3px rgba(255, 255, 255, 0.6), inset 0 -2px 3px rgba(0, 0, 0, 0.25)',
                  border: '1.5px solid rgba(255, 255, 255, 0.6)',
                }}
              >
                {/* Inner beaded ring */}
                <div className="absolute inset-1.5 rounded-full border border-[#FAF7F0]/60 pointer-events-none" />

                {/* Initial Logo: Royal Kadiri Crest (K) */}
                <svg
                  viewBox="0 0 80 80"
                  className="w-full h-full p-2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40" cy="40" r="34" stroke="#FAF7F0" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.7" />
                  <path d="M 22 40 C 22 28 32 20 40 20 C 48 20 58 28 58 40" stroke="#FAF7F0" strokeWidth="0.6" opacity="0.4" />
                  <text
                    x="40"
                    y="47"
                    fontFamily="'Pinyon Script', cursive"
                    fontSize="42"
                    fill="#40352F"
                    textAnchor="middle"
                  >
                    K
                  </text>
                  <text
                    x="40"
                    y="62"
                    fontFamily="'Cinzel', serif"
                    fontSize="7"
                    letterSpacing="2.5"
                    fill="#FAF7F0"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    KADIRI
                  </text>
                </svg>
              </div>

              {/* TAP TO OPEN label directly below seal */}
              <div className="mt-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#AE9366] bg-[#FAF7F0] px-5 py-1.5 text-xs sm:text-sm font-cinzel font-bold tracking-[0.22em] uppercase text-[#40352F] shadow-xs transition group-hover:bg-[#F5EFE4] group-hover:border-[#8E7449]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#AE9366] animate-pulse" />
                  Tap to Open
                  <span className="w-1.5 h-1.5 rounded-full bg-[#AE9366] animate-pulse" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
