export class SessionStorageManager<T = unknown> {
  set(key: string, value: T): void {
    try {
      const data = JSON.stringify(value);
      sessionStorage.setItem(key, data);
    } catch (error) {
      console.error('Error setting data to Session Storage:', error);
    }
  }

  get(key: string): T | null {
    try {
      const data = sessionStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error getting data from Session Storage:', error);
      return null;
    }
  }

  remove(key: string): void {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data from Session Storage:', error);
    }
  }

  clear(): void {
    try {
      sessionStorage.clear();
    } catch (error) {
      console.error('Error clearing Session Storage:', error);
    }
  }
}
