// app/hooks/useTypingEffect.ts
"use client";

import { useState, useEffect } from 'react';

export function useTypingEffect(text: string, speed: number = 50) {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    setTypedText('');

    if (text) {
      const intervalId = setInterval(() => {
        setTypedText((prev) => {
          if (prev.length < text.length) {
            return prev + text[prev.length];
          } else {
            clearInterval(intervalId);
            return prev;
          }
        });
      }, speed);

      return () => clearInterval(intervalId);
    }
  }, [text, speed]);

  const isFinished = typedText.length === text.length;

  return { typedText, isFinished };
}