import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Currency } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency: Currency): string {
  switch (currency) {
    case 'EUR':
      return `€${price.toLocaleString()}`;
    case 'GBP':
      return `£${price.toLocaleString()}`;
    case 'USD':
    default:
      return `$${price.toLocaleString()}`;
  }
}
