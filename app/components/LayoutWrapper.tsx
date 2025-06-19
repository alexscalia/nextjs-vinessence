'use client';

import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AgeVerificationModal from './AgeVerificationModal';
import ClearAgeVerification from './ClearAgeVerification';

interface LayoutWrapperProps {
  children: React.ReactNode;
  locale: string;
}

export default function LayoutWrapper({ children, locale }: LayoutWrapperProps) {
  const [isAgeVerified, setIsAgeVerified] = useState<boolean | null>(null); // null = loading

  const handleVerificationChange = (isVerified: boolean) => {
    setIsAgeVerified(isVerified);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AgeVerificationModal 
        locale={locale} 
        onVerificationChange={handleVerificationChange}
      />
      
      {/* Always show content, disable interaction when age verification is needed */}
      <div className={isAgeVerified === false ? 'pointer-events-none' : ''}>
        <Header />
        
        <main className="flex-1">
          {children}
        </main>
        
        <Footer />
      </div>
      
      {process.env.NODE_ENV === 'development' && <ClearAgeVerification />}
    </div>
  );
} 