import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Wine Portfolio', href: '/wines' },
    { name: 'Services', href: '/services' },
    { name: 'Education', href: '/education' },
  ];

  const resources = [
    { name: 'Blog & News', href: '/blog' },
    { name: 'Events', href: '/events' },
    { name: 'For Producers', href: '/producers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-wine-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold tracking-wider mb-2">VINESSENCE</h3>
              <p className="text-wine-200 text-sm font-medium">
                Boutique French Wine Importer – Thailand
              </p>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-wine-300 flex-shrink-0" />
                <div className="text-wine-200">
                  <p>123 Business District</p>
                  <p>Bangkok 10110, Thailand</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-wine-300 flex-shrink-0" />
                <a 
                  href="tel:+66-2-xxx-xxxx" 
                  className="text-wine-200 hover:text-white transition-colors"
                >
                  +66 (0) 2-XXX-XXXX
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-wine-300 flex-shrink-0" />
                <a 
                  href="mailto:info@vinessence.co.th" 
                  className="text-wine-200 hover:text-white transition-colors"
                >
                  info@vinessence.co.th
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 pt-4">
              <a 
                href="#" 
                className="p-2 bg-wine-800 rounded-full hover:bg-wine-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-wine-800 rounded-full hover:bg-wine-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-wine-800 rounded-full hover:bg-wine-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <div className="p-2 bg-wine-800 rounded-full">
                <div className="h-4 w-4 bg-green-500 rounded flex items-center justify-center text-xs font-bold">
                  L
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-wine-200 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-wine-200 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Additional Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
            <div className="space-y-2 text-sm text-wine-200">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-2">Certifications</h5>
              <p className="text-xs text-wine-300">
                Licensed Wine Importer<br />
                Thai Import/Export License
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-wine-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-wine-300">
              <p>© {currentYear} VINESSENCE CO., LTD. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-wine-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-wine-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/shipping" className="text-wine-300 hover:text-white transition-colors">
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 