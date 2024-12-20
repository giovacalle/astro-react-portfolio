import { SessionStorageManager } from '@utils/sessionStorage';
import { useEffect, useState } from 'react';

export function useSessionStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void, () => void] {
  const manager = new SessionStorageManager<T>();

  // Initialize state with the value from sessionStorage or the initial value
  const [storedValue, setStoredValue] = useState<T>(() => {
    const value = manager.get(key);
    return value !== null ? value : initialValue;
  });

  // Update sessionStorage whenever the state changes
  useEffect(() => {
    manager.set(key, storedValue);
  }, [key, storedValue]);

  // Function to update the stored value
  const setValue = (value: T) => {
    setStoredValue(value);
  };

  // Function to remove the stored value
  const removeValue = () => {
    manager.remove(key);
    setStoredValue(initialValue);
  };

  return [storedValue, setValue, removeValue];
}
