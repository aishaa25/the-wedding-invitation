export interface DuaMessage {
  id: string;
  name: string;
  dua: string;
  relation?: string;
  timestamp: number;
}

export interface ProgramEvent {
  time: string;
  title: string;
  arabicTitle?: string;
  description: string;
  icon: string;
}
