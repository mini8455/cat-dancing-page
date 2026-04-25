import { useState, useCallback } from 'react';

const MODES = ['idle', 'dancing', 'spinning', 'bouncing', 'swaying'];

export function useAnimation() {
  const [mode, setMode] = useState('idle');
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = useCallback(() => {
    if (isPlaying) {
      setMode('idle');
      setIsPlaying(false);
    } else {
      setMode('dancing');
      setIsPlaying(true);
    }
  }, [isPlaying]);

  const changeMode = useCallback((newMode) => {
    setMode(newMode);
    setIsPlaying(newMode !== 'idle');
  }, []);

  return { mode, isPlaying, toggle, changeMode, MODES };
}
