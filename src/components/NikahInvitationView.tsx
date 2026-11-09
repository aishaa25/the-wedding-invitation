import React, { useState, useEffect } from 'react';
import { weddingData } from '../config/weddingData';
import { MapPin, ExternalLink, Sparkles } from 'lucide-react';

export const NikahInvitationView: React.FC = () => {
  const {
    host,
    nikahCelebration,
    receptionCelebration,
    event,
    bismillah,
    openingPairVerse,
    closing,
  } = weddingData;

  // Live Countdown logic
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    const target = new Date(event.targetIsoDate).getTime();

    const calculate = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [event.targetIsoDate]);

  return (
    <div className="relative mx-auto w-full max-w-2xl px-4 py-4 space-y-12 sm:space-y-14 text-[#40352F]">
      {/* ========================================================
          1. SACRED OPENING: BISMILLAH & PAIR VERSE
         ======================================================== */}
      <section
        aria-label="Sacred Opening"
        className="relative overflow-hidden rounded-xl bg-[#FAF7F0] p-8 sm:p-12 editorial-paper border border-[#E7DDCE] text-center animate-fadeInUp shadow-xs"
      >
        <div className="absolute inset-3 sm:inset-4 rounded-lg border border-[#AE9366]/40 pointer-events-none" />

        {/* Minimal Persian Arch Header Motif */}
        <div className="mx-auto mb-4 w-24 h-5 opacity-60">
          <svg viewBox="0 0 140 30" fill="none" className="w-full h-full stroke-[#AE9366]">
            <path d="M 5 25 Q 45 25 60 12 Q 67 6 70 2 Q 73 6 80 12 Q 95 25 135 25" strokeWidth="1.2" />
            <circle cx="70" cy="2" r="2" fill="#AE9366" />
          </svg>
        </div>

        <div className="relative z-10 space-y-4 max-w-lg mx-auto">
          {/* Authentic Arabic Bismillah */}
          <p
            dir="rtl"
            className="font-arabic text-3xl sm:text-4xl text-[#8E7449] font-bold leading-relaxed tracking-wide select-none"
          >
            {bismillah.arabic}
          </p>

          <p className="font-cinzel text-xs sm:text-sm tracking-[0.25em] uppercase text-[#40352F] font-bold">
            {bismillah.translation}
          </p>

          {/* "And We created you in pairs" */}
          <div className="pt-4 pb-1 border-t border-[#D8C6A5]">
            <p
              dir="rtl"
              className="font-arabic text-2xl sm:text-3xl text-[#40352F] font-bold leading-relaxed"
            >
              {openingPairVerse.arabic}
            </p>
            <p className="font-cormorant italic text-base sm:text-lg text-[#40352F] font-semibold mt-1">
              &ldquo;{openingPairVerse.translation}&rdquo;
            </p>
            <span className="font-cinzel text-xs sm:text-sm tracking-widest uppercase text-[#8E7449] font-bold mt-1.5 block">
              {openingPairVerse.reference}
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. THE HOST INVITATION BLOCK
          (Mr and Mrs Rizwan Kadiri)
         ======================================================== */}
      <section
        aria-label="Host Invitation"
        className="relative overflow-hidden rounded-xl bg-[#F5EFE4] p-8 sm:p-10 editorial-paper border border-[#D8C6A5] text-center transition-all hover:border-[#AE9366] animate-fadeInUp [animation-delay:150ms] shadow-xs"
      >
        <div className="relative z-10 space-y-3.5 max-w-lg mx-auto">
          <span className="font-cinzel text-xs sm:text-sm tracking-[0.25em] uppercase text-[#8E7449] font-bold block">
            With the Blessings of Almighty Allah
          </span>

          <p className="font-cormorant italic text-lg sm:text-xl text-[#40352F] font-medium">
            {host.blessingText}
          </p>

          {/* HOST NAMES: Mr and Mrs Rizwan Kadiri */}
          <div className="py-1">
            <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold tracking-normal text-[#40352F]">
              {host.parentsTitle}
            </h2>
          </div>

          <p className="font-cormorant italic text-lg sm:text-xl text-[#40352F] leading-relaxed max-w-lg mx-auto font-medium">
            cordially request the honor of your gracious presence and heartfelt prayers at the joyous celebration of the Nikah ceremony of their beloved daughter and the Wedding Reception of their beloved son
          </p>
        </div>
      </section>

      {/* ========================================================
          3. FIRST CELEBRATION: THE NIKAH CEREMONY (Bushra & Anab)
         ======================================================== */}
      <section
        aria-label="The Nikah Ceremony"
        className="relative overflow-hidden rounded-2xl bg-[#FAF7F0] p-6 sm:p-10 editorial-paper border border-[#D8C6A5] text-center animate-fadeInUp [animation-delay:250ms] shadow-xs"
      >
        {/* Celebration Header Badge */}
        <div className="mb-6">
          <span className="inline-block px-5 py-1.5 rounded-full border border-[#AE9366] bg-[#F1E9DD] font-cinzel text-xs sm:text-sm tracking-[0.25em] uppercase text-[#8E7449] font-bold">
            {nikahCelebration.title}
          </span>
          <p className="font-cormorant italic text-base sm:text-lg text-[#40352F] font-medium mt-1.5">
            {nikahCelebration.subTitle}
          </p>
        </div>

        <div className="max-w-xl mx-auto space-y-7">
          {/* THE BRIDE: Bushra */}
          <div className="space-y-1.5">
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] uppercase text-[#8E7449] font-bold block">
              The Bride
            </span>
            <h3 className="font-pinyon text-6xl sm:text-7xl md:text-8xl text-[#40352F] font-normal tracking-normal my-1 select-none leading-tight transition-transform hover:scale-102">
              {nikahCelebration.bride.shortName}
            </h3>
            <p className="font-cormorant text-base sm:text-lg text-[#40352F] font-medium">
              Daughter of <strong className="font-bold text-[#40352F]">{nikahCelebration.bride.parentsTitle}</strong>
            </p>
          </div>

          {/* Delicate Floating Decorative Ampersand in Centre */}
          <div className="my-3 flex items-center justify-center">
            <span className="w-16 sm:w-20 h-px bg-[#D8C6A5]" />
            <span className="mx-4 font-pinyon text-4xl sm:text-5xl text-[#8E7449] select-none animate-softFloat">
              &amp;
            </span>
            <span className="w-16 sm:w-20 h-px bg-[#D8C6A5]" />
          </div>

          {/* THE GROOM: Anab */}
          <div className="space-y-1.5">
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] uppercase text-[#8E7449] font-bold block">
              The Groom
            </span>
            <h3 className="font-pinyon text-6xl sm:text-7xl md:text-8xl text-[#40352F] font-normal tracking-normal my-1 select-none leading-tight transition-transform hover:scale-102">
              {nikahCelebration.groom.shortName}
            </h3>
            <p className="font-cormorant text-base sm:text-lg text-[#40352F] font-medium">
              Son of <strong className="font-bold text-[#40352F]">{nikahCelebration.groom.parentsTitle}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Delicate Ornamental Separator between celebrations */}
      <div className="flex items-center justify-center gap-3 my-2">
        <span className="w-20 sm:w-28 h-px bg-[#AE9366]/40" />
        <span className="w-2.5 h-2.5 rotate-45 border-2 border-[#AE9366]" />
        <span className="w-20 sm:w-28 h-px bg-[#AE9366]/40" />
      </div>

      {/* ========================================================
          4. SECOND CELEBRATION: THE WEDDING RECEPTION (Saifuddin & Ayesha)
         ======================================================== */}
      <section
        aria-label="The Wedding Reception"
        className="relative overflow-hidden rounded-2xl bg-[#FAF7F0] p-6 sm:p-10 editorial-paper border border-[#D8C6A5] text-center animate-fadeInUp [animation-delay:350ms] shadow-xs"
      >
        {/* Celebration Header Badge */}
        <div className="mb-6">
          <span className="inline-block px-5 py-1.5 rounded-full border border-[#AE9366] bg-[#F1E9DD] font-cinzel text-xs sm:text-sm tracking-[0.25em] uppercase text-[#8E7449] font-bold">
            {receptionCelebration.title}
          </span>
          <p className="font-cormorant italic text-base sm:text-lg text-[#40352F] font-medium mt-1.5">
            {receptionCelebration.subTitle}
          </p>
        </div>

        <div className="max-w-xl mx-auto space-y-7">
          {/* THE GROOM: Saifuddin */}
          <div className="space-y-1.5">
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] uppercase text-[#8E7449] font-bold block">
              The Groom
            </span>
            <h3 className="font-pinyon text-6xl sm:text-7xl md:text-8xl text-[#40352F] font-normal tracking-normal my-1 select-none leading-tight transition-transform hover:scale-102">
              {receptionCelebration.groom.shortName}
            </h3>
            <p className="font-cormorant text-base sm:text-lg text-[#40352F] font-medium">
              Son of <strong className="font-bold text-[#40352F]">{receptionCelebration.groom.parentsTitle}</strong>
            </p>
          </div>

          {/* Delicate Floating Decorative Ampersand in Centre */}
          <div className="my-3 flex items-center justify-center">
            <span className="w-16 sm:w-20 h-px bg-[#D8C6A5]" />
            <span className="mx-4 font-pinyon text-4xl sm:text-5xl text-[#8E7449] select-none animate-softFloat">
              &amp;
            </span>
            <span className="w-16 sm:w-20 h-px bg-[#D8C6A5]" />
          </div>

          {/* THE BRIDE: Ayesha */}
          <div className="space-y-1.5">
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] uppercase text-[#8E7449] font-bold block">
              The Bride
            </span>
            <h3 className="font-pinyon text-6xl sm:text-7xl md:text-8xl text-[#40352F] font-normal tracking-normal my-1 select-none leading-tight transition-transform hover:scale-102">
              {receptionCelebration.bride.shortName}
            </h3>
            <p className="font-cormorant text-base sm:text-lg text-[#40352F] font-medium">
              Daughter of <strong className="font-bold text-[#40352F]">{receptionCelebration.bride.parentsTitle}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. "INSHAALLAH" & CEREMONY & RECEPTION PROGRAMME DETAILS
         ======================================================== */}
      <section
        aria-label="Ceremony and Reception Programme Details"
        className="relative overflow-hidden rounded-2xl bg-[#FAF7F0] p-6 sm:p-12 editorial-paper border border-[#D8C6A5] transition-all duration-300 hover:border-[#AE9366] animate-fadeInUp [animation-delay:450ms] shadow-xs"
      >
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-transparent via-[#AE9366]/50 to-transparent" />

        <div className="text-center mb-6 sm:mb-8">
          {/* INSHAALLAH BADGE */}
          <div className="inline-block px-6 py-2.5 rounded-full border border-[#AE9366] bg-[#F1E9DD] mb-3 shadow-xs animate-softGlow">
            <span className="font-arabic text-2xl text-[#8E7449] font-bold block leading-none">
              إِنْ شَاءَ اللَّهُ
            </span>
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.25em] uppercase text-[#40352F] font-bold mt-1 block">
              InshaAllah
            </span>
          </div>

          <h4 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#40352F] mt-2">
            Wedding Programme
          </h4>
        </div>

        <div className="space-y-5 sm:space-y-6 max-w-md mx-auto text-center">
          {/* Day & Date Block (Saturday, 19th December) */}
          <div className="p-4 sm:p-5 rounded-xl border border-[#D8C6A5] bg-[#F8F4EC] transition-transform duration-300 hover:-translate-y-0.5">
            <span className="font-cinzel text-xs sm:text-sm tracking-wider uppercase text-[#8E7449] font-bold block">
              Day &amp; Date
            </span>
            <p className="font-cinzel text-xl sm:text-2xl font-bold text-[#40352F] mt-1">
              {event.dayOfWeek}, {event.dateFormatted}
            </p>
          </div>

          {/* Time Block: Nikah Ceremony */}
          <div className="p-4 sm:p-5 rounded-xl border border-[#D8C6A5] bg-[#F8F4EC] transition-transform duration-300 hover:-translate-y-0.5">
            <span className="font-cinzel text-xs sm:text-sm tracking-wider uppercase text-[#8E7449] font-bold block">
              Nikah
            </span>
            <p className="font-cinzel text-xl sm:text-2xl font-bold text-[#40352F] mt-1">
              {nikahCelebration.timeFormatted}
            </p>
            <span className="font-cormorant italic text-sm sm:text-base text-[#40352F] font-medium mt-0.5 block">
              Bushra &amp; Anab
            </span>
          </div>

          {/* Time Block: Wedding Reception */}
          <div className="p-4 sm:p-5 rounded-xl border border-[#D8C6A5] bg-[#F8F4EC] transition-transform duration-300 hover:-translate-y-0.5">
            <span className="font-cinzel text-xs sm:text-sm tracking-wider uppercase text-[#8E7449] font-bold block">
              Wedding Reception
            </span>
            <p className="font-cinzel text-lg sm:text-xl font-bold text-[#40352F] mt-1">
              {receptionCelebration.timeFormatted}
            </p>
            <span className="font-cormorant italic text-sm sm:text-base text-[#40352F] font-medium mt-0.5 block">
              Saifuddin &amp; Ayesha
            </span>
          </div>

          {/* Venue Block */}
          <div className="p-5 sm:p-6 rounded-xl border border-[#AE9366] bg-[#F1E9DD] transition-transform duration-300 hover:-translate-y-0.5">
            <span className="font-cinzel text-xs sm:text-sm tracking-wider uppercase text-[#8E7449] font-bold block">
              Venue
            </span>
            <h5 className="font-playfair text-2xl sm:text-3xl font-bold text-[#40352F] mt-1">
              {event.venue}
            </h5>
            <p className="font-cinzel text-sm sm:text-base tracking-wider uppercase text-[#40352F] font-semibold mt-1">
              {event.address}
            </p>

            {/* Direct Google Maps View Location Button */}
            <div className="mt-5 pt-4 border-t border-[#D8C6A5]">
              <a
                href={event.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-[#AE9366] bg-[#FAF7F0] px-6 py-2.5 text-xs sm:text-sm font-cinzel font-bold tracking-wider text-[#40352F] shadow-xs hover:bg-[#AE9366] hover:text-[#FAF7F0] transition duration-300 hover:scale-102"
              >
                <MapPin className="h-4 w-4 text-[#8E7449] group-hover:text-[#FAF7F0] transition-colors" />
                <span>View Location (Google Maps)</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-80 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. COUNTDOWN
         ======================================================== */}
      <section
        aria-label="Countdown"
        className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#FAF7F0] to-[#F5EFE4] p-5 sm:p-10 editorial-paper border border-[#D8C6A5] text-center animate-fadeInUp [animation-delay:550ms] shadow-xs"
      >
        {/* Subtle decorative arch watermark */}
        <div className="absolute inset-x-8 top-4 bottom-4 pointer-events-none opacity-20 flex items-center justify-center">
          <svg viewBox="0 0 200 120" fill="none" className="w-full h-full stroke-[#AE9366]" strokeWidth="0.8">
            <path d="M 10 120 L 10 50 Q 10 15 50 10 Q 90 5 100 0 Q 110 5 150 10 Q 190 15 190 50 L 190 120" />
          </svg>
        </div>

        <div className="relative z-10 space-y-4 sm:space-y-5">
          {/* TITLE CHANGED TO "COUNTDOWN" ONLY */}
          <div className="inline-flex items-center gap-2 mb-1">
            <Sparkles className="h-4 w-4 text-[#8E7449]" />
            <h4 className="font-cinzel text-base sm:text-lg tracking-[0.3em] uppercase text-[#8E7449] font-bold">
              Countdown
            </h4>
            <Sparkles className="h-4 w-4 text-[#8E7449]" />
          </div>

          {timeLeft.isPast ? (
            <div className="py-2">
              <p className="font-cinzel text-lg font-bold text-[#40352F]">
                Alhamdulillah, The Blessed Day Has Arrived
              </p>
              <p className="font-cormorant italic text-base text-[#40352F] font-medium mt-1">
                May Allah bless these sacred unions with eternal love and barakah.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-1.5 sm:gap-3 max-w-lg mx-auto pt-2">
              {[
                { label: 'Days', val: timeLeft.days },
                { label: 'Hours', val: timeLeft.hours },
                { label: 'Minutes', val: timeLeft.minutes },
                { label: 'Seconds', val: timeLeft.seconds },
              ].map((unit) => (
                <div
                  key={unit.label}
                  className="group relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-[#D8C6A5] bg-[#FAF7F0] py-3 px-1 sm:py-5 sm:px-2 shadow-xs transition-all duration-300 hover:border-[#AE9366] hover:shadow-md hover:-translate-y-0.5"
                >
                  <span className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-[#40352F] tracking-tight leading-tight">
                    {String(unit.val).padStart(2, '0')}
                  </span>
                  <span className="font-cinzel text-[10px] sm:text-xs font-bold uppercase tracking-tight sm:tracking-wider text-[#40352F] mt-1.5 block w-full text-center truncate px-0.5">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          <p className="font-cormorant italic text-base sm:text-lg text-[#40352F] font-semibold pt-2">
            Saturday, 19th December 2026 • 11:30 AM
          </p>
        </div>
      </section>

      {/* ========================================================
          7. PURE CLOSING BLESSING & DUA
          (NO family names at the ending! Pure Islamic prayer)
         ======================================================== */}
      <section
        aria-label="Closing Blessings"
        className="relative overflow-hidden rounded-xl bg-[#FAF7F0] p-8 sm:p-14 editorial-paper border border-[#D8C6A5] text-center space-y-4 animate-fadeInUp [animation-delay:650ms] shadow-xs"
      >
        <div className="space-y-4 max-w-lg mx-auto">
          {/* Sunnah Wedding Dua */}
          <p
            dir="rtl"
            className="font-arabic text-2xl sm:text-3xl text-[#8E7449] font-bold leading-relaxed select-none"
          >
            « {closing.duaArabic} »
          </p>

          <p className="font-cormorant italic text-lg sm:text-xl text-[#40352F] font-semibold leading-relaxed">
            &ldquo;{closing.duaTranslation}&rdquo;
          </p>

          <p className="font-cormorant text-base sm:text-lg text-[#40352F] font-medium pt-2 leading-relaxed">
            {closing.blessingNote}
          </p>
        </div>

        {/* Subtle Persian ornamental detail at bottom */}
        <div className="mx-auto pt-3 w-16 h-4 opacity-60">
          <svg viewBox="0 0 100 20" fill="none" className="w-full h-full stroke-[#AE9366]">
            <path d="M 15 10 L 45 10 M 55 10 L 85 10" strokeWidth="1" />
            <circle cx="50" cy="10" r="2.5" fill="#AE9366" />
          </svg>
        </div>
      </section>
    </div>
  );
};
