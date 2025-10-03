import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Product', href: '#' },
    { label: 'Resources', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'App', href: '#' },
  ];

  return (
    <header className="w-full bg-background border-b border-[hsl(var(--border))] sticky top-0 z-50">
      <nav className="section-container px-6 md:px-8 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/b652779f-5683-4f89-9b1c-e1f8d0f9aa01.png" 
            alt="Run Logo" 
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2.5 text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Login Button */}
        <div className="hidden md:block">
          <Button variant="primary" size="sm">
            Log in
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-foreground-secondary transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-[hsl(var(--border))] md:hidden">
            <div className="section-container px-6 md:px-8 py-3">
              <div className="flex flex-col space-y-2 py-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-4 py-3 text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-2">
                  <Button variant="primary" size="sm" className="w-full">
                    Log in
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;