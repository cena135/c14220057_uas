import { User } from '../types';

const USER_KEY = 'session_user';

export function saveUserSession(user: User) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
}

export function getUserSession(): User | null {
  if (typeof window === 'undefined') return null;
  const data = localStorage.getItem(USER_KEY);
  return data ? JSON.parse(data) : null;
}

export function clearUserSession() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(USER_KEY);
  }
}