/**
 * Central Configuration for the Luxury Islamic Nikah & Reception Invitation
 * Joint celebration of Bushra & Anab (Nikah) and Saifuddin & Ayesha (Wedding Reception)
 */

export interface WeddingConfig {
  host: {
    parentsTitle: string;
    blessingText: string;
  };
  nikahCelebration: {
    title: string;
    subTitle: string;
    timeFormatted: string;
    bride: {
      fullName: string;
      shortName: string;
      parentsTitle: string;
    };
    groom: {
      fullName: string;
      shortName: string;
      parentsTitle: string;
    };
  };
  receptionCelebration: {
    title: string;
    subTitle: string;
    timeFormatted: string;
    groom: {
      fullName: string;
      shortName: string;
      parentsTitle: string;
    };
    bride: {
      fullName: string;
      shortName: string;
      parentsTitle: string;
    };
  };
  event: {
    dateFormatted: string;
    dayOfWeek: string;
    targetIsoDate: string;
    venue: string;
    address: string;
    googleMapsUrl: string;
  };
  bismillah: {
    arabic: string;
    transliteration: string;
    translation: string;
  };
  openingPairVerse: {
    arabic: string;
    translation: string;
    reference: string;
  };
  closing: {
    duaArabic: string;
    duaTranslation: string;
    blessingNote: string;
  };
}

export const weddingData: WeddingConfig = {
  host: {
    parentsTitle: "Mr and Mrs Rizwan Kadiri",
    blessingText: "By the grace and divine mercy of Allah,",
  },
  nikahCelebration: {
    title: "The Nikah Ceremony",
    subTitle: "Nikah of our beloved daughter",
    timeFormatted: "11:30 AM",
    bride: {
      fullName: "Bushra Rizwan Kadiri",
      shortName: "Bushra",
      parentsTitle: "Mr and Mrs Rizwan Kadiri",
    },
    groom: {
      fullName: "Anab Mansoor Admane",
      shortName: "Anab",
      parentsTitle: "Mr and Mrs Mansoor Admane",
    },
  },
  receptionCelebration: {
    title: "The Wedding Reception",
    subTitle: "Wedding Reception of our beloved son",
    timeFormatted: "Following the Nikah Ceremony",
    groom: {
      fullName: "Saifuddin Rizwan Kadiri",
      shortName: "Saifuddin",
      parentsTitle: "Mr and Mrs Rizwan Kadiri",
    },
    bride: {
      fullName: "Ayesha Aijaz Daroge",
      shortName: "Ayesha",
      parentsTitle: "Mr and Mrs Aijaz Daroge",
    },
  },
  event: {
    dateFormatted: "19 December 2026",
    dayOfWeek: "Saturday",
    targetIsoDate: "2026-12-19T11:30:00",
    venue: "Noor Masjid",
    address: "Darbar Road",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Noor+Masjid+Darbar+Road",
  },
  bismillah: {
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    transliteration: "Bismillāhir-Raḥmānir-Raḥīm",
    translation: "In the name of Allah, the Most Gracious, the Most Merciful",
  },
  openingPairVerse: {
    arabic: "« وَخَلَقْنَاكُمْ أَزْوَاجًا »",
    translation: "And We created you in pairs.",
    reference: "Surah An-Naba [78:8]",
  },
  closing: {
    duaArabic: "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    duaTranslation:
      "May Allah bless you and shower His blessings upon you and join you together in goodness.",
    blessingNote:
      "May these sacred unions be blessed with eternal love, harmony, peace, and barakah. Your gracious presence and sincere duas are our family's most treasured gift.",
  },
};
