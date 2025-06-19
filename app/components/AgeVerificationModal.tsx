'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { setCookie, getCookie } from 'cookies-next';

interface AgeVerificationModalProps {
  locale: string;
  onVerificationChange?: (isVerified: boolean) => void;
}

export default function AgeVerificationModal({ locale, onVerificationChange }: AgeVerificationModalProps) {
  const t = useTranslations('age_verification');
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  // English translations (hardcoded to ensure they always show)
  const tEn = {
    title: "Age Verification Required",
    subtitle: "Welcome to VINESSENCE",
    disclaimer: "This website contains information about alcoholic beverages. By Thai law, you must be at least 18 years old to access this content.",
    question: "Are you 18 years of age or older?",
    yes_button: "Yes, I am 18 or older",
    no_button: "No, I am under 18",
    legal_text: "By clicking 'Yes', you confirm that you are of legal drinking age in Thailand and agree to our terms of use."
  };

  // Thai translations (hardcoded to ensure they always show)
  const tTh = {
    title: "จำเป็นต้องตรวจสอบอายุ",
    subtitle: "ยินดีต้อนรับสู่ วิเนสเซนซ์",
    disclaimer: "เว็บไซต์นี้มีข้อมูลเกี่ยวกับเครื่องดื่มแอลกอฮอล์ ตามกฎหมายไทย คุณต้องมีอายุอย่างน้อย 18 ปีเพื่อเข้าถึงเนื้อหานี้",
    question: "คุณมีอายุ 18 ปีหรือมากกว่านั้นหรือไม่?",
    yes_button: "ใช่ ฉันอายุ 18 ปีหรือมากกว่า",
    no_button: "ไม่ ฉันอายุไม่ถึง 18 ปี",
    legal_text: "เมื่อคลิก 'ใช่' คุณยืนยันว่าคุณมีอายุถูกต้องตามกฎหมายในการดื่มในประเทศไทยและยอมรับเงื่อนไขการใช้งานของเรา"
  };

  useEffect(() => {
    // Check if age verification cookie exists
    const ageVerified = getCookie('vinessence_age_check');
    const isVerified = !!ageVerified;
    
    if (!isVerified) {
      setIsVisible(true);
      // Trigger fade in animation after a short delay
      setTimeout(() => setIsAnimating(true), 100);
    }
    setIsLoading(false);
    
    // Notify parent component of verification status
    onVerificationChange?.(isVerified);
  }, [onVerificationChange]);

  const handleYes = () => {
    // Start fade out animation
    setIsAnimating(false);
    
    // After animation completes, hide modal and set cookie
    setTimeout(() => {
      // Set cookie for 30 days
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 30);
      
      setCookie('vinessence_age_check', 'verified', {
        expires: expiryDate,
        path: '/',
        sameSite: 'lax'
      });
      
      setIsVisible(false);
      
      // Notify parent component that verification is complete
      onVerificationChange?.(true);
    }, 300); // Match the CSS transition duration
  };

  const handleNo = () => {
    // Immediate redirect to Google
    window.location.href = 'https://www.google.com';
  };

  // Don't render anything while loading
  if (isLoading) {
    return null;
  }

  // Don't render modal if not visible
  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
    >
      <div className="min-h-screen flex items-center justify-center p-4 overflow-auto">
        <Card 
          className={`w-full max-w-3xl mx-auto shadow-2xl bg-white transition-all duration-300 rounded-lg overflow-hidden ${
            isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ maxHeight: '90vh' }}
        >
          <CardHeader className="text-center pb-4" style={{ background: 'linear-gradient(to bottom, #6d4c35, #8b6142)' }}>
            <div className="py-4">
              {/* Logo directly on header background */}
              <div className="flex justify-center">
                <Image
                  src="/images/vinessence-logo-full-horizontal.svg"
                  alt="Vinessence"
                  width={250}
                  height={75}
                  className="brightness-0 invert"
                  priority
                />
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-6 overflow-auto" style={{ backgroundColor: '#fefbf7' }}>
            <div className="text-center space-y-6">
              {/* English Section */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold" style={{ color: '#523929', fontFamily: 'serif' }}>
                  {tEn.title}
                </h2>
                
                <div className="space-y-3" style={{ color: '#6d4c35' }}>
                  <p className="text-base leading-relaxed">
                    {tEn.disclaimer}
                  </p>
                  
                  <p className="text-lg font-semibold" style={{ color: '#523929', fontFamily: 'serif' }}>
                    {tEn.question}
                  </p>
                </div>
              </div>

              {/* Elegant Divider */}
              <div className="flex items-center justify-center">
                <div className="flex-1 border-t" style={{ borderColor: '#e8d5b7' }}></div>
                <div className="px-4">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#d4b896' }}></div>
                </div>
                <div className="flex-1 border-t" style={{ borderColor: '#e8d5b7' }}></div>
              </div>

              {/* Thai Section */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold" style={{ color: '#523929', fontFamily: 'serif' }}>
                  {tTh.title}
                </h2>
                
                <div className="space-y-3" style={{ color: '#6d4c35' }}>
                  <p className="text-base leading-relaxed">
                    {tTh.disclaimer}
                  </p>
                  
                  <p className="text-lg font-semibold" style={{ color: '#523929', fontFamily: 'serif' }}>
                    {tTh.question}
                  </p>
                </div>
              </div>

              {/* Legal Text */}
              <div className="rounded-lg p-4 space-y-2 text-xs italic border" style={{ backgroundColor: '#fdf5e6', color: '#8b6142', borderColor: '#f7e6d3' }}>
                <p>{tEn.legal_text}</p>
                <p>{tTh.legal_text}</p>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={handleYes}
                  className="flex-1 py-4 text-base font-medium rounded-md text-white transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                  style={{ 
                    backgroundColor: '#8b6142',
                    fontFamily: 'serif'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#6d4c35';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#8b6142';
                  }}
                >
                  <div className="flex flex-col space-y-1">
                    <span>{tEn.yes_button}</span>
                    <span className="text-sm opacity-90">{tTh.yes_button}</span>
                  </div>
                </button>
                
                <button
                  onClick={handleNo}
                  className="flex-1 py-4 text-base font-medium rounded-md border-2 transition-all duration-300 cursor-pointer"
                  style={{ 
                    borderColor: '#a67c52',
                    color: '#8b6142',
                    backgroundColor: 'transparent',
                    fontFamily: 'serif'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fdf5e6';
                    e.currentTarget.style.borderColor = '#8b6142';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = '#a67c52';
                  }}
                >
                  <div className="flex flex-col space-y-1">
                    <span>{tEn.no_button}</span>
                    <span className="text-sm opacity-75">{tTh.no_button}</span>
                  </div>
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 