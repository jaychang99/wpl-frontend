// converts 6 character hex color value to red, green, blue, and alpha
export function hexToRgba(hex: string, alpha?: number) {
  const target = hex.startsWith("#") ? hex.slice(1, 7) : hex;
  const r = parseInt(target.slice(0, 2), 16);
  const g = parseInt(target.slice(2, 4), 16);
  const b = parseInt(target.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
