// src/utils/sfSymbolToSvg.ts

/**
 * SF Symbol to SVG Translation Utility
 * Maps SF Symbol names from iOS app to web-compatible SVG icons
 */

export interface SvgIcon {
  viewBox: string;
  path: string | string[];
  strokeWidth?: number;
  fill?: 'none' | 'currentColor';
}

/**
 * SF Symbol name mapping to SVG data
 * Add your app's SF Symbol names here as you encounter them
 */
export const SF_SYMBOL_MAP: Record<string, SvgIcon> = {
  // Sparkles / Stars
  'sparkles': {
    viewBox: '0 0 24 24',
    path: 'M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83',
    strokeWidth: 2,
    fill: 'none'
  },
  'sparkle': {
    viewBox: '0 0 24 24',
    path: 'M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83',
    strokeWidth: 2,
    fill: 'none'
  },
  
  // Lightning / Bolt
  'bolt': {
    viewBox: '0 0 24 24',
    path: 'M13 2L3 14h8l-1 8 10-12h-8l1-8z',
    strokeWidth: 2,
    fill: 'none'
  },
  'bolt.fill': {
    viewBox: '0 0 24 24',
    path: 'M13 2L3 14h8l-1 8 10-12h-8l1-8z',
    fill: 'currentColor'
  },
  'bolt.circle': {
    viewBox: '0 0 24 24',
    path: ['M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z', 'M13 8L9 14h3l-1 4 4-6h-3l1-4z'],
    strokeWidth: 2,
    fill: 'none'
  },
  
  // Heart
  'heart': {
    viewBox: '0 0 24 24',
    path: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
    strokeWidth: 2,
    fill: 'none'
  },
  'heart.fill': {
    viewBox: '0 0 24 24',
    path: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
    fill: 'currentColor'
  },
  
  // Brain / Head
  'brain': {
    viewBox: '0 0 24 24',
    path: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z',
    fill: 'currentColor'
  },
  'brain.head.profile': {
    viewBox: '0 0 24 24',
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
    strokeWidth: 2,
    fill: 'none'
  },
  
  // Wand / Magic
  'wand.and.stars': {
    viewBox: '0 0 24 24',
    path: ['M15 4l-3 3m0 0l-3-3m3 3V1m8 7l-3 3m0 0l3 3m-3-3h3M7 11L4 8m0 0l3-3M4 8h3', 'M3 21l18-18'],
    strokeWidth: 2,
    fill: 'none'
  },
  'sparkles.rectangle.stack': {
    viewBox: '0 0 24 24',
    path: ['M4 4h16v16H4V4z', 'M8 2h8v2H8V2z', 'M8 20h8v2H8v-2z', 'M12 8v8m-4-4h8'],
    strokeWidth: 2,
    fill: 'none'
  },
  
  // Light / Bulb
  'lightbulb': {
    viewBox: '0 0 24 24',
    path: 'M9 21h6m-6-4h6m-3-13a5 5 0 015 5c0 1.5-.5 2.5-1.5 4-.5.5-1 1-1.5 1.5V17H11v-2.5c-.5-.5-1-1-1.5-1.5-1-.5-1.5-2-1.5-4a5 5 0 015-5z',
    strokeWidth: 2,
    fill: 'none'
  },
  'lightbulb.fill': {
    viewBox: '0 0 24 24',
    path: 'M9 21h6m-6-4h6m-3-13a5 5 0 015 5c0 1.5-.5 2.5-1.5 4-.5.5-1 1-1.5 1.5V17H11v-2.5c-.5-.5-1-1-1.5-1.5-1-.5-1.5-2-1.5-4a5 5 0 015-5z',
    fill: 'currentColor'
  },
  
  // Star
  'star': {
    viewBox: '0 0 24 24',
    path: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    strokeWidth: 2,
    fill: 'none'
  },
  'star.fill': {
    viewBox: '0 0 24 24',
    path: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    fill: 'currentColor'
  },
  
  // Checkmark
  'checkmark': {
    viewBox: '0 0 24 24',
    path: 'M5 13l4 4L19 7',
    strokeWidth: 2,
    fill: 'none'
  },
  'checkmark.circle': {
    viewBox: '0 0 24 24',
    path: ['M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z', 'M8 12l3 3 5-6'],
    strokeWidth: 2,
    fill: 'none'
  },
  'checkmark.circle.fill': {
    viewBox: '0 0 24 24',
    path: ['M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'],
    fill: 'currentColor'
  },
  
  // Arrow
  'arrow.right': {
    viewBox: '0 0 24 24',
    path: 'M5 12h14m-7-7l7 7-7 7',
    strokeWidth: 2,
    fill: 'none'
  },
  'arrow.left': {
    viewBox: '0 0 24 24',
    path: 'M19 12H5m7 7l-7-7 7-7',
    strokeWidth: 2,
    fill: 'none'
  },
  'arrow.up': {
    viewBox: '0 0 24 24',
    path: 'M12 19V5m-7 7l7-7 7 7',
    strokeWidth: 2,
    fill: 'none'
  },
  'arrow.down': {
    viewBox: '0 0 24 24',
    path: 'M12 5v14m7-7l-7 7-7-7',
    strokeWidth: 2,
    fill: 'none'
  },
  
  // Book / Document
  'book': {
    viewBox: '0 0 24 24',
    path: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20',
    strokeWidth: 2,
    fill: 'none'
  },
  'book.fill': {
    viewBox: '0 0 24 24',
    path: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15z',
    fill: 'currentColor'
  },
  'doc.text': {
    viewBox: '0 0 24 24',
    path: ['M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z', 'M14 2v6h6M16 13H8m8 4H8m8 4H8'],
    strokeWidth: 2,
    fill: 'none'
  },
  
  // Pencil / Edit
  'pencil': {
    viewBox: '0 0 24 24',
    path: 'M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z',
    strokeWidth: 2,
    fill: 'none'
  },
  'square.and.pencil': {
    viewBox: '0 0 24 24',
    path: ['M3 3h12v12H3V3z', 'M17 7l4-4m0 0l-4-4m4 4H10'],
    strokeWidth: 2,
    fill: 'none'
  },
  
  // Circle / Badge
  'circle': {
    viewBox: '0 0 24 24',
    path: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z',
    strokeWidth: 2,
    fill: 'none'
  },
  'circle.fill': {
    viewBox: '0 0 24 24',
    path: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z',
    fill: 'currentColor'
  },
  
  // Lock
  'lock': {
    viewBox: '0 0 24 24',
    path: ['M5 11h14v10H5V11z', 'M7 11V7a5 5 0 0 1 10 0v4'],
    strokeWidth: 2,
    fill: 'none'
  },
  'lock.fill': {
    viewBox: '0 0 24 24',
    path: 'M19 11V7a7 7 0 0 0-14 0v4H3v12h18V11h-2zM7 7a5 5 0 0 1 10 0v4H7V7z',
    fill: 'currentColor'
  },
  
  // Plus / Add
  'plus': {
    viewBox: '0 0 24 24',
    path: 'M12 5v14m-7-7h14',
    strokeWidth: 2,
    fill: 'none'
  },
  'plus.circle': {
    viewBox: '0 0 24 24',
    path: ['M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z', 'M12 8v8m-4-4h8'],
    strokeWidth: 2,
    fill: 'none'
  },
  
  // Message / Chat
  'message': {
    viewBox: '0 0 24 24',
    path: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z',
    strokeWidth: 2,
    fill: 'none'
  },
  'message.fill': {
    viewBox: '0 0 24 24',
    path: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z',
    fill: 'currentColor'
  },
  
  // Graduation Cap
  'graduationcap': {
    viewBox: '0 0 24 24',
    path: ['M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z', 'M22 10v6', 'M6 12.5V16a6 3 0 0 0 12 0v-3.5'],
    strokeWidth: 2,
    fill: 'none'
  },
  'graduationcap.fill': {
    viewBox: '0 0 24 24',
    path: ['M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z', 'M22 10v6', 'M6 12.5V16a6 3 0 0 0 12 0v-3.5'],
    fill: 'currentColor'
  },
};

/**
 * Get SVG icon data from SF Symbol name
 * Falls back to a generic symbol if not found
 */
export function getSvgFromSFSymbol(symbolName: string): SvgIcon {
  const normalized = symbolName.toLowerCase().trim();
  
  // Try exact match
  if (SF_SYMBOL_MAP[normalized]) {
    return SF_SYMBOL_MAP[normalized];
  }
  
  // Try partial match (e.g., "sparkles.square" -> "sparkles")
  const baseSymbol = normalized.split('.')[0];
  if (SF_SYMBOL_MAP[baseSymbol]) {
    return SF_SYMBOL_MAP[baseSymbol];
  }
  
  // Fallback to generic sparkle
  return SF_SYMBOL_MAP['sparkles'];
}

/**
 * Render SVG from SF Symbol name
 * Returns complete SVG HTML string
 */
export function renderSvgFromSFSymbol(
  symbolName: string,
  size: number = 24,
  color: string = 'currentColor',
  className: string = ''
): string {
  const icon = getSvgFromSFSymbol(symbolName);
  const paths = Array.isArray(icon.path) ? icon.path : [icon.path];
  
  const svgAttrs = [
    `width="${size}"`,
    `height="${size}"`,
    `viewBox="${icon.viewBox}"`,
    `fill="${icon.fill || 'none'}"`,
    `stroke="${icon.fill === 'currentColor' ? 'none' : color}"`,
    icon.strokeWidth ? `stroke-width="${icon.strokeWidth}"` : '',
    `stroke-linecap="round"`,
    `stroke-linejoin="round"`,
    className ? `class="${className}"` : '',
  ].filter(Boolean).join(' ');
  
  const pathElements = paths.map(p => {
    if (icon.fill === 'currentColor') {
      return `<path d="${p}" fill="${color}"/>`;
    }
    return `<path d="${p}"/>`;
  }).join('');
  
  return `<svg ${svgAttrs}>${pathElements}</svg>`;
}

/**
 * Check if SF Symbol is mapped
 */
export function isSFSymbolMapped(symbolName: string): boolean {
  const normalized = symbolName.toLowerCase().trim();
  return normalized in SF_SYMBOL_MAP || normalized.split('.')[0] in SF_SYMBOL_MAP;
}

/**
 * Get list of all mapped SF Symbols
 */
export function getAllMappedSymbols(): string[] {
  return Object.keys(SF_SYMBOL_MAP).sort();
}