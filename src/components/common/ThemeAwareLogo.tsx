import React from 'react';
import Link from 'next/link';

interface ThemeAwareLogoProps {
  height?: number;
  className?: string;
  lightOnly?: boolean;
  withLink?: boolean;
}

export const ThemeAwareLogo: React.FC<ThemeAwareLogoProps> = ({
  height = 36,
  className = '',
  lightOnly = false,
  withLink = true,
}) => {
  const content = (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Tourpublish Emblem (Pin + P Arrow) */}
      <img
        src="/emblem.png"
        alt="Tourpublish Emblem"
        width={58}
        height={36}
        className="h-9 w-auto object-contain shrink-0"
      />
      <div className="leading-tight">
        <span className="font-sans font-black tracking-tight text-xl flex items-center leading-none">
          <span className="text-[#F73F4E]">Tour</span>
          <span className={lightOnly ? 'text-white' : 'text-[#010621]'}>publish</span>
          <span className="text-[#F73F4E]">.</span>
        </span>
        <span className={`block text-[9px] uppercase tracking-widest font-mono font-bold mt-0.5 ${lightOnly ? 'text-[#a9a190]' : 'text-ink-muted'}`}>
          Italy Luxury Directory
        </span>
      </div>
    </div>
  );

  if (!withLink) {
    return content;
  }

  return (
    <Link
      href="/"
      className="inline-flex items-center group transition-transform hover:scale-[1.01]"
      aria-label="Tourpublish Home"
    >
      {content}
    </Link>
  );
};
