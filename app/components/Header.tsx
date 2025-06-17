'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, ChevronDown, Languages } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from './ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations('navigation');
  const tLang = useTranslations('language');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLanguage = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  // Navigation structure with translations
  const navigationItems = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('wines'), href: '/wines' },
    { name: t('producers'), href: '/producers' },
    { 
      name: t('resources'), 
      href: '/blog',
      dropdown: [
        { name: t('blog'), href: '/blog' },
        { name: t('events'), href: '/events' },
      ]
    },
    { name: t('contact'), href: '/contact' },
  ];

  // Flattened items for mobile menu
  const mobileMenuItems = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('wines'), href: '/wines' },
    { name: t('producers'), href: '/producers' },
    { name: t('blog'), href: '/blog' },
    { name: t('events'), href: '/events' },
    { name: t('contact'), href: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-wine-200/30 bg-white transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-24'}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative">
              {/* Full Logo - shown when header is tall */}
              <Image
                src="/images/vinessence-logo-full.svg"
                alt="Vinessence"
                width={isScrolled ? 0 : 120}
                height={isScrolled ? 0 : 48}
                className={`transition-all duration-300 ${isScrolled ? 'opacity-0 w-0 h-0' : 'opacity-100'}`}
                priority
              />
              
              {/* Text Logo - shown when header is small */}
              <Image
                src="/images/vinessence-logo-text.svg"
                alt="Vinessence"
                width={isScrolled ? 100 : 0}
                height={isScrolled ? 32 : 0}
                className={`transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 w-0 h-0'} ${isScrolled ? '' : 'absolute top-0 left-0'}`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-1">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.dropdown ? (
                      <>
                        <NavigationMenuTrigger className={`group inline-flex w-max items-center justify-center bg-transparent px-4 py-2 text-sm font-light text-wine-charcoal tracking-wide transition-all duration-300 hover:text-wine-gold focus:text-wine-gold focus:outline-none relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-wine-gold after:transition-all after:duration-300 hover:after:w-full ${isScrolled ? 'h-10' : 'h-12'}`}>
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-48 p-2">
                            {item.dropdown.map((subItem) => (
                              <NavigationMenuLink key={subItem.name} asChild>
                                <Link
                                  href={subItem.href}
                                  className="block px-3 py-2 text-sm text-wine-charcoal hover:text-wine-gold hover:bg-wine-50 rounded-md transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={`group inline-flex w-max items-center justify-center bg-transparent px-4 py-2 text-sm font-light text-wine-charcoal tracking-wide transition-all duration-300 hover:text-wine-gold focus:text-wine-gold focus:outline-none relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-wine-gold after:transition-all after:duration-300 hover:after:w-full ${isScrolled ? 'h-10' : 'h-12'}`}
                        >
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-wine-charcoal hover:text-wine-gold">
                  <Languages className="h-4 w-4" />
                  <span className="text-sm font-light">{locale.toUpperCase()}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => switchLanguage('en')} className={locale === 'en' ? 'bg-wine-50' : ''}>
                  {tLang('english')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => switchLanguage('th')} className={locale === 'th' ? 'bg-wine-50' : ''}>
                  {tLang('thai')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

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
                  <Image
                    src="/images/vinessence-logo-text.svg"
                    alt="Vinessence"
                    width={120}
                    height={40}
                    className="mb-2"
                  />
                </div>
                
                {/* Mobile Language Switcher */}
                <div className="flex space-x-2 mb-4">
                  <Button
                    variant={locale === 'en' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => switchLanguage('en')}
                    className="flex-1"
                  >
                    {tLang('english')}
                  </Button>
                  <Button
                    variant={locale === 'th' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => switchLanguage('th')}
                    className="flex-1"
                  >
                    {tLang('thai')}
                  </Button>
                </div>

                {mobileMenuItems.map((item) => (
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