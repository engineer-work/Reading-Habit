export interface SentenceData {
  id: number;
  text: string;
  words: string[];
  wordStartIndices: number[]; // Character index where each word starts (for Native TTS mapping)
}

export enum PlayerState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  PLAYING = 'PLAYING',
  PAUSED = 'PAUSED',
  COMPLETED = 'COMPLETED',
  ERROR = 'ERROR'
}

export enum TTSMode {
  GEMINI = 'GEMINI',
  NATIVE = 'NATIVE'
}

export interface AudioSegment {
  audioBuffer: AudioBuffer;
  duration: number; // in seconds
}

// --- New Types for Library/Admin System ---

export interface LibraryItem {
  id: string;
  title: string;
  author: string;
  category: string; // Acts as "Folder"
  text: string;
  createdAt: number;
}

export enum UserRole {
  GUEST = 'GUEST',
  STUDENT = 'STUDENT',
  ADMIN = 'ADMIN'
}

export enum AppView {
  LOGIN = 'LOGIN',
  LIBRARY = 'LIBRARY',
  ADMIN = 'ADMIN',
  PLAYER = 'PLAYER'
}