import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { weddingAudio } from '../utils/audio';

export const AudioToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(weddingAudio.getPlaying());

  useEffect(() => {
    const unsub = weddingAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return unsub;
  }, []);

  const handleToggle = () => {
    weddingAudio.toggle();
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center">
      <button
        onClick={handleToggle}
        className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-[#D8C6A5] bg-[#F8F4EC]/95 shadow-sm backdrop-blur-xs transition-all duration-300 hover:border-[#AE9366] hover:bg-[#F1E9DD] hover:scale-105 active:scale-95"
        title={isPlaying ? "Mute Music" : "Play Wedding Song"}
        aria-label="Toggle Wedding Music"
      >
        {isPlaying ? (
          <Volume2 className="h-4 w-4 text-[#8E7449]" />
        ) : (
          <VolumeX className="h-4 w-4 text-[#7D6E63]" />
        )}

        {isPlaying && (
          <span className="absolute -bottom-1 flex items-end gap-0.5 h-2">
            <span className="w-0.5 bg-[#8E7449] animate-[pulse_0.7s_ease-in-out_infinite] h-2"></span>
            <span className="w-0.5 bg-[#D8C6A5] animate-[pulse_1s_ease-in-out_infinite_0.2s] h-2.5"></span>
            <span className="w-0.5 bg-[#8E7449] animate-[pulse_0.8s_ease-in-out_infinite_0.4s] h-1.5"></span>
          </span>
        )}
      </button>
    </div>
  );
};
