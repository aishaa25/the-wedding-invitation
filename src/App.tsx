import React, { useState, useRef } from 'react';
import { AudioToggle } from './components/AudioToggle';
import { LuxuryEnvelope } from './components/LuxuryEnvelope';
import { NikahInvitationView } from './components/NikahInvitationView';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const invitationSectionRef = useRef<HTMLDivElement | null>(null);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      invitationSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 450);
  };

  return (
    <div
      style={{
        backgroundColor: '#F8F4EC',
        color: '#40352F',
        colorScheme: 'light',
      }}
      className="relative min-h-screen bg-[#F8F4EC] text-[#40352F] font-cormorant selection:bg-[#D8C6A5]/40 selection:text-[#40352F] overflow-x-hidden flex flex-col justify-between"
    >
      {/* Discreet Audio Player Toggle */}
      <AudioToggle />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-8 sm:py-12">
        {/* =========================================
            1. THE CLOSED ENVELOPE WITH INITIAL LOGO
            (No names on envelope face; tap to open)
           ========================================= */}
        <section
          aria-label="Nikah Envelope"
          className={`w-full transition-all duration-700 ${
            !isOpen ? 'flex flex-col items-center justify-center my-auto' : 'mb-8'
          }`}
        >
          <LuxuryEnvelope
            isOpen={isOpen}
            onOpen={handleOpen}
          />
        </section>

        {/* =========================================
            2. EVERYTHING ELSE REVEALED ONLY AFTER OPENING
           ========================================= */}
        {isOpen && (
          <div
            ref={invitationSectionRef}
            className="w-full max-w-2xl animate-[fadeIn_0.8s_ease-out] space-y-6"
          >
            {/* The Full Editorial Nikah Invitation Suite */}
            <NikahInvitationView />

            {/* Peaceful, Dignified Islamic Footer (NO family names at the ending) */}
            <footer className="border-t border-[#D8C6A5] bg-[#F1E9DD] rounded-xl py-6 px-4 text-center my-6 space-y-2">
              <p className="font-arabic text-2xl sm:text-3xl text-[#8E7449] font-bold">
                جَزَاكُمُ اللَّهُ خَيْرًا
              </p>
              <p className="font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#40352F]">
                Jazakumullahu Khayran
              </p>
            </footer>
          </div>
        )}
      </main>
    </div>
  );
}
