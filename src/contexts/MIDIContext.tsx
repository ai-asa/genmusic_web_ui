import React, { createContext, useState, useContext } from 'react';

interface MIDINote {
  id: string;
  pitch: number;
  startTime: number;
  duration: number;
}

export interface MIDITrack {
  id: string;
  name: string;
  instrument: string;
  notes: MIDINote[];
}

interface MIDIContextType {
  tracks: MIDITrack[];
  currentTime: number;
  addTrack: () => void;
  updateTrack: (trackId: string, updates: Partial<MIDITrack>) => void;
  addNote: (trackId: string, note: MIDINote) => void;
  updateNote: (trackId: string, noteId: string, updates: Partial<MIDINote>) => void;
  deleteNote: (trackId: string, noteId: string) => void;
  setCurrentTime: (time: number) => void;
}

const MIDIContext = createContext<MIDIContextType | undefined>(undefined);

export const MIDIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tracks, setTracks] = useState<MIDITrack[]>([]);
  const [currentTime, setCurrentTime] = useState(0);

  const addTrack = () => {
    const newTrack: MIDITrack = {
      id: `track-${tracks.length}`,
      name: `Track ${tracks.length + 1}`,
      instrument: 'piano',
      notes: [],
    };
    setTracks([...tracks, newTrack]);
  };

  const updateTrack = (trackId: string, updates: Partial<MIDITrack>) => {
    setTracks(tracks.map(track => 
      track.id === trackId ? { ...track, ...updates } : track
    ));
  };

  const addNote = (trackId: string, note: MIDINote) => {
    setTracks(tracks.map(track => 
      track.id === trackId ? { ...track, notes: [...track.notes, note] } : track
    ));
  };

  const updateNote = (trackId: string, noteId: string, updates: Partial<MIDINote>) => {
    setTracks(tracks.map(track => 
      track.id === trackId ? {
        ...track,
        notes: track.notes.map(note => 
          note.id === noteId ? { ...note, ...updates } : note
        )
      } : track
    ));
  };

  const deleteNote = (trackId: string, noteId: string) => {
    setTracks(tracks.map(track => 
      track.id === trackId ? {
        ...track,
        notes: track.notes.filter(note => note.id !== noteId)
      } : track
    ));
  };

  return (
    <MIDIContext.Provider value={{ 
      tracks, 
      currentTime, 
      addTrack, 
      updateTrack, 
      addNote, 
      updateNote, 
      deleteNote, 
      setCurrentTime 
    }}>
      {children}
    </MIDIContext.Provider>
  );
};

export const useMIDI = () => {
  const context = useContext(MIDIContext);
  if (context === undefined) {
    throw new Error('useMIDI must be used within a MIDIProvider');
  }
  return context;
};