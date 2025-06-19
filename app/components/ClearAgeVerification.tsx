'use client';

import { deleteCookie } from 'cookies-next';
import { Button } from './ui/button';

export default function ClearAgeVerification() {
  const clearCookie = () => {
    deleteCookie('vinessence_age_check');
    window.location.reload();
  };

  return (
    <Button 
      onClick={clearCookie}
      variant="outline"
      size="sm"
      className="fixed bottom-4 right-4 z-40 bg-white"
    >
      Clear Age Verification (Test)
    </Button>
  );
} 