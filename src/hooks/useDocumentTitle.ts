import { useEffect } from "react";

const SITE_NAME = "Ghana Neuroscience Masterclass 2026";

export function useDocumentTitle(title: string) {
  useEffect(() => {
    const prev = document.title;
    document.title = `${title} | ${SITE_NAME}`;
    return () => { document.title = prev; };
  }, [title]);
}
