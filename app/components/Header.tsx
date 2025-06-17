'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Wine Portfolio', href: '/wines' },
    { name: 'Services', href: '/services' },
    { name: 'Education', href: '/education' },
    { name: 'Blog & News', href: '/blog' },
    { name: 'Events', href: '/events' },
    { name: 'For Producers', href: '/producers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-wine-200/30 bg-white transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-24'}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className={`font-serif font-light text-wine-charcoal tracking-[0.2em] leading-tight transition-all duration-300 ${isScrolled ? 'text-2xl' : 'text-3xl'}`}>
                VINESSENCE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex space-x-1">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={`group inline-flex w-max items-center justify-center bg-transparent px-5 py-2 text-sm font-light text-wine-charcoal tracking-wide transition-all duration-300 hover:text-wine-gold focus:text-wine-gold focus:outline-none relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-wine-gold after:transition-all after:duration-300 hover:after:w-full ${isScrolled ? 'h-10' : 'h-12'}`}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex flex-col mb-6">
                  <span className="text-xl font-bold text-wine-800 tracking-wider">
                    VINESSENCE
                  </span>
                </div>
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center py-2 text-lg font-medium text-wine-700 hover:text-wine-900 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header; 