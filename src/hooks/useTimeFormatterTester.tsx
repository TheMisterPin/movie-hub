import { useCallback } from 'react';

export const useTimeFormatter = () => {
  const formatMinutes = useCallback((minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const paddedMinutes = remainingMinutes.toString().padStart(2, '0');

    return hours > 0 ? `${hours}h ${paddedMinutes}m` : `${paddedMinutes}m`;
  }, []);

  return formatMinutes;
};