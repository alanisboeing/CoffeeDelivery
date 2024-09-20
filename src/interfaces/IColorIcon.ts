export interface IColorIcon {
  iconcolor: keyof typeof ICON_COLORS;
}

export const ICON_COLORS = {
  yellow: 'yellow-500',
  darkYellow: 'yellow-700',
  purple: 'purple-500',
  gray: 'gray-700'
} as const