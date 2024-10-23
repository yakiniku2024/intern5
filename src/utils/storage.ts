const STORAGE_KEY = 'tetris-settings';

export const loadSettings = () => {
  try {
    const settings = localStorage.getItem(STORAGE_KEY);
    return settings ? JSON.parse(settings) : null;
  } catch (error) {
    console.error('Error loading settings:', error);
    return null;
  }
};

export const saveSettings = (settings) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch (error) {
    console.error('Error saving settings:', error);
  }
};