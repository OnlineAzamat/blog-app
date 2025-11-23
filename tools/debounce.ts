"use client"

import { useEffect, useState } from "react";

// Debounce - tek User 300-500ms jaziwdi toqtatqanda request jiberedi
export function useDebounce(value: string, delay = 400) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value]);

  return debounced;
}