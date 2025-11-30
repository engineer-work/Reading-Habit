
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

export enum AppTheme {
  MIDNIGHT = 'theme-midnight',
  SEPIA = 'theme-sepia',
  FOREST = 'theme-forest',
  PAPER = 'theme-paper'
}

export interface AudioSegment {
  audioBuffer: AudioBuffer;
  duration: number; // in seconds
}

// --- VIEW MODEL (What the UI sees) ---
export interface LibraryItem {
  id: string;
  title: string;
  author: string; // "Name [details]"
  category: string; // "A/B/C"
  text: string;
  createdAt: number;
}

// --- V2 RELATIONAL STORAGE MODELS (What is saved in JSON) ---

export interface DataStore {
  meta: {
    version: string; // "2.0"
    exportedAt: string;
  };
  taxonomy: CategoryNodeV2[];
  authors: AuthorProfile[];
  library: LibraryItemV2[];
}

export interface CategoryNodeV2 {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
}

export interface AuthorProfile {
  id: string;
  name: string;
  details: string; // "dob : ... | email ..."
}

export interface LibraryItemV2 {
  id: string;
  title: string;
  authorId: string;   // Relational Link
  categoryId: string; // Relational Link
  text: string;       // We could break this into blocks later, but keeping text for compatibility
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
