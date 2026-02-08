// src/utils/sfSymbolMapper.ts

/**
 * Maps SF Symbol names to SVG icon components
 * Use this to convert iOS SF Symbols to web-compatible SVG icons
 */

interface SVGIconProps {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
}

export const SFSymbolMap: Record<string, (props?: SVGIconProps) => string> = {
  // MARK: - Common Symbols
  
  'sparkles': (props = {}) => {
    const { width = 24, height = 24, color = 'currentColor', strokeWidth = 2 } = props;
    return `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg>`;
  },
  
  'bolt': (props = {}) => {
    const { width = 24, height = 24, color = 'currentColor', strokeWidth = 2 } = props;
    return `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/></svg>`;
  },
  
  'bolt.fill': (props = {}) => {
    const { width = 24, height = 24, color = 'currentColor' } = props;
    return `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="${color}"><path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/></svg>`;
  },
  
  'heart': (props = {}) => {
    const { width = 24, height = 24, color = 'currentColor', strokeWidth = 2 } = props;
    return `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
  },
  
  'heart.fill': (props = {}) => {
    const { width = 24, height = 24, color = 'currentColor' } = props;
    return `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="${color}"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
  },
  
  'star': (props = {}) => {
    const { width = 24, height = 24, color = 'currentColor', strokeWidth = 2 } = props;
    return `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
  },
  
  'star.fill': (props = {}) => {
    const { width = 24, height = 24, color = 'currentColor' } = props;
    return `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="${color}"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
  },
  
  'wand.and.stars': (props = {}) => {
    const { width = 24, height = 24, color = 'currentColor', strokeWidth = 2 } = props;
    return `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2m0 14v-2M8 9h2m10 0h2M17.8 11.8L19 13M17.8 6.2L19 5m-3.8 7.8L13 15m7.8-2.2L19 11m-1.2 6.8L16 19"/><path d="M3 21l9-9M12.2 6.2L11 5"/></svg>`;
  },
  
  'brain': (props = {}) => {
    const { width = 24, height = 24, color = 'currentColor', strokeWidth = 2 } = props;
    return `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>`;
  },
  
  'lightbulb': (props = {}) => {
    const { width = 24, height = 24, color = 'currentColor', strokeWidth = 2 } = props;
    return `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4M15 2a7 7 0 0 1 0 14h-1v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2H7a7 7 0 0 1 0-14h8z"/></svg>`;
  },
  
  'book': (props = {}) => {
    const { width = 24, height = 24, color = 'currentColor', strokeWidth = 2 } = props;
    return `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`;
  },
  
  'rectangle.stack': (props = {}) => {
    const { width = 24, height = 24, color = 'currentColor', strokeWidth = 2 } = props;
    return `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M6 3h12"/><path d="M8 3v4"/><path d="M16 3v4"/></svg>`;
  },
  
  'text.bubble': (props = {}) => {
    const { width = 24, height = 24, color = 'currentColor', strokeWidth = 2 } = props;
    return `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
  },
  
  'person': (props = {}) => {
    const { width = 24, height = 24, color = 'currentColor', strokeWidth = 2 } = props;
    return `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
  },
  
  'hand.thumbsup': (props = {}) => {
    const { width = 24, height = 24, color = 'currentColor', strokeWidth = 2 } = props;
    return `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>`;
  },
  
  'arrow.right': (props = {}) => {
    const { width = 24, height = 24, color = 'currentColor', strokeWidth = 2 } = props;
    return `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
  },
  
  'chevron.right': (props = {}) => {
    const { width = 24, height = 24, color = 'currentColor', strokeWidth = 2 } = props;
    return `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>`;
  },
  
  'checkmark': (props = {}) => {
    const { width = 24, height = 24, color = 'currentColor', strokeWidth = 2 } = props;
    return `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`;
  },
  
  'checkmark.circle': (props = {}) => {
    const { width = 24, height = 24, color = 'currentColor', strokeWidth = 2 } = props;
    return `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>`;
  },
  
  'xmark': (props = {}) => {
    const { width = 24, height = 24, color = 'currentColor', strokeWidth = 2 } = props;
    return `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`;
  },
  
  'lock': (props = {}) => {
    const { width = 24, height = 24, color = 'currentColor', strokeWidth = 2 } = props;
    return `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;
  },
  
  'doc.text': (props = {}) => {
    const { width = 24, height = 24, color = 'currentColor', strokeWidth = 2 } = props;
    return `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>`;
  },
  
  'graduationcap': (props = {}) => {
    const { width = 24, height = 24, color = 'currentColor', strokeWidth = 2 } = props;
    return `<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>`;
  },
};

/**
 * Get SVG icon from SF Symbol name
 * @param symbolName - SF Symbol name (e.g., "sparkles", "bolt.fill")
 * @param props - Optional SVG properties
 * @returns SVG string or fallback
 */
export function getSVGFromSymbol(
  symbolName: string,
  props?: SVGIconProps
): string {
  const normalizedName = symbolName.toLowerCase().trim();
  
  // Check if symbol exists in map
  if (SFSymbolMap[normalizedName]) {
    return SFSymbolMap[normalizedName](props);
  }
  
  // Fallback to sparkles if symbol not found
  console.warn(`SF Symbol "${symbolName}" not found, using fallback`);
  return SFSymbolMap['sparkles'](props);
}

/**
 * Check if SF Symbol exists in map
 */
export function hasSymbol(symbolName: string): boolean {
  return symbolName.toLowerCase().trim() in SFSymbolMap;
}

/**
 * Get list of all available symbols
 */
export function getAvailableSymbols(): string[] {
  return Object.keys(SFSymbolMap);
}

/**
 * Render symbol with custom class
 */
export function renderSymbol(
  symbolName: string,
  className?: string,
  props?: SVGIconProps
): string {
  const svg = getSVGFromSymbol(symbolName, props);
  
  if (className) {
    return svg.replace('<svg', `<svg class="${className}"`);
  }
  
  return svg;
}