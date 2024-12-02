// src/services/midiService.ts
import { Midi } from '@tonejs/midi';

export const loadMIDIFile = async (file: File): Promise<Midi> => {
  const arrayBuffer = await file.arrayBuffer();
  const midi = new Midi(arrayBuffer);
  return midi;
};

export const saveMIDIFile = (midi: Midi, fileName: string) => {
  const midiArray = midi.toArray();
  const blob = new Blob([midiArray], { type: 'audio/midi' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
};

// src/utils/midiUtils.ts
export const pitchToNoteName = (pitch: number): string => {
  const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const octave = Math.floor(pitch / 12) - 1;
  const noteName = noteNames[pitch % 12];
  return `${noteName}${octave}`;
};

export const timeToPixels = (time: number, pixelsPerBeat: number, bpm: number): number => {
  const beatsPerSecond = bpm / 60;
  return time * beatsPerSecond * pixelsPerBeat;
};

export const pixelsToTime = (pixels: number, pixelsPerBeat: number, bpm: number): number => {
  const beatsPerSecond = bpm / 60;
  return pixels / (beatsPerSecond * pixelsPerBeat);
};