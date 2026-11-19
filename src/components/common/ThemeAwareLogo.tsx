import React from 'react';
import Link from 'next/link';

interface ThemeAwareLogoProps {
  height?: number;
  className?: string;
  lightOnly?: boolean;
}

export const ThemeAwareLogo: React.FC<ThemeAwareLogoProps> = ({
  height = 32,
  className = '',
  lightOnly = false,
}) => {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-1.5 select-none transition-transform hover:scale-[1.02] ${className}`}
      aria-label="Tourpublish Home"
    >
      <span
        className="font-sans font-black tracking-[-0.04em] flex items-center leading-none"
        style={{ fontSize: Math.max(18, height * 0.75) }}
      >
        <span className="text-brand-coral">Tour</span>
        <span className={lightOnly ? 'text-white' : 'text-white'}>publish</span>
        <span className="text-brand-coral">.</span>
      </span>
      <span className="ml-1 text-[9px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded border border-brand-coral/30 bg-brand-coral/10 text-brand-coral font-semibold hidden sm:inline-block">
        Directory
      </span>
    </Link>
  );
};
