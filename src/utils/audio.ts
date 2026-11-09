// Audio player utilizing user's uploaded vocal-only track: Bi Saraha (Abeer Nehme - Vocal Only)
const AUDIO_SRC = "/assets/aistudio/Bi_Saraha_without_music_vocal_only_76ba1a04.mp3";

class WeddingAudioPlayer {
  private audio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private listeners: ((playing: boolean) => void)[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      this.audio = new Audio(AUDIO_SRC);
      this.audio.loop = true;
      this.audio.volume = 0.55;

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
        this.notify();
      });
    }
  }

  public subscribe(cb: (playing: boolean) => void) {
    this.listeners.push(cb);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== cb);
    };
  }

  private notify() {
    this.listeners.forEach((cb) => cb(this.isPlaying));
  }

  public play() {
    if (!this.audio) return;
    this.audio.play().catch(() => {
      // Browser autoplay restriction handling
    });
  }

  public pause() {
    if (!this.audio) return;
    this.audio.pause();
  }

  public toggle(): boolean {
    if (!this.audio) return false;
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getPlaying(): boolean {
    return this.isPlaying;
  }
}

export const weddingAudio = new WeddingAudioPlayer();
