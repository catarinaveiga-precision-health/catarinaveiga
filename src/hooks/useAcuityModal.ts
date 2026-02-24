import { useState, useEffect, useCallback } from "react";

const ACUITY_EVENT = "open-acuity";

export function useAcuityModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(ACUITY_EVENT, handler);
    return () => window.removeEventListener(ACUITY_EVENT, handler);
  }, []);

  const onClose = useCallback(() => setOpen(false), []);

  return { open, onClose };
}

export function openAcuity() {
  window.dispatchEvent(new Event(ACUITY_EVENT));
}
