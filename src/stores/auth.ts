import { createSignal } from 'solid-js';

const STORAGE_KEY = 'opencode-auth';

function getInitialState() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'true';
}

export const [isLoggedIn, setIsLoggedIn] = createSignal(getInitialState());

export function login(password: string) {
  // Simple check for demonstration. In a real app, this would verify with backend.
  const expected = import.meta.env.VITE_ACCESS_PASSWORD || 'opencode';

  if (password === expected) {
    setIsLoggedIn(true);
    localStorage.setItem(STORAGE_KEY, 'true');
    return true;
  }
  return false;
}

export function logout() {
  setIsLoggedIn(false);
  localStorage.removeItem(STORAGE_KEY);
}
