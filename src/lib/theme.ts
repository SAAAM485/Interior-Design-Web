
import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

// 1. Create a writable store with an initial value.
const createThemeStore = () => {
  const { subscribe, set } = writable<Theme>('light');

  // 2. Initialize the store on the client side.
  if (browser) {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial theme based on localStorage or system preference
    const initialTheme = storedTheme ?? (systemPrefersDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    set(initialTheme);
  }

  return {
    subscribe,
    // 3. Function to toggle the theme
    toggle: () => {
      let newTheme: Theme;
      // This update function gets the current value and calculates the new one.
      // It's guaranteed to be synchronous.
      let currentTheme: Theme = 'light';
      subscribe(value => currentTheme = value)(); // Get current value
      
      newTheme = currentTheme === 'light' ? 'dark' : 'light';

      // Update the DOM and localStorage
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      localStorage.setItem('theme', newTheme);
      set(newTheme);
    }
  };
};

export const theme = createThemeStore();
