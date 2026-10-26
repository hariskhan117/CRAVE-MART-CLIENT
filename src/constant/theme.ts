import { Platform } from "react-native";

export const Colors = {
  // Primary blues
  primary: "#0A2E6D",
  primaryLight: "#1A5C9F",
  primaryDark: "#061B42",

  // Navy buttons
  navy: "#0D2A5A",

  // Status colors
  success: "#28A745",
  successLight: "#E6F4EA",
  warning: "#F5A623",
  warningLight: "#FFF4E5",
  danger: "#DC3545",
  dangerLight: "#FCE8E6",
  info: "#17A2B8",
  infoLight: "#E8F4F8",
  warningRed: "#C62828",
  warningRedBorder: "#FFCDD2",
  warningRedLight: "#FFEBEE",

  // Blues for badges/tags
  blueBadge: "#1A73E8",
  purpleBadge: "#7B1FA2",
  blueBadgeLight: "#E8F0FE",
  purpleBadgeLight: "#F3E5F5",
  orangeBadge: "#F5A623",
  orangeBadgeLight: "#FFF4E5",
  greenBadge: "#28A745",
  greenBadgeLight: "#E6F4EA",
  revisionBadge: "#1A73E8",
  revisionBadgeLight: "#E8F0FE",

  // Feature tag colors
  featureTagBg: "#E8F5E9",
  featureTagText: "#2E7D32",

  // Neutrals
  white: "#FFFFFF",
  black: "#000000",
  background: "#F5F6FA",
  card: "#FFFFFF",
  border: "#E1E4E8",
  divider: "#F1F3F4",

  // Text
  text: "#1A1A2E",
  textSecondary: "#6B7280",
  textTertiary: "#9CA3AF",
  textLink: "#0D2A5A",

  // AuthTitle
  title: "#212121",

  // Overlay
  overlay: "rgba(10, 46, 109, 0.08)",
  whiteOverlay: "rgba(255, 255, 255, 0.15)",
  statsCard: "#FFFFFF1A",
  statsCardBorder: "#FFFFFF33",

  // Tab bar
  tabActive: "#0A2E6D",
  tabInactive: "#9CA3AF",
  title2: "#0A1F44",
  // Rating
  ratingYellow: "#F59E0B",
  ratingOrange: "#F97316",

  // Light/Dark mode compat
  light: {
    text: "#11181C",
    background: "#fff",
    tint: "#0A2E6D",
    icon: "#687076",
    tabIconDefault: "#9CA3AF",
    tabIconSelected: "#0A2E6D",
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: "#FFFFFF1A",
    tintBorder: "#FFFFFF33",
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: "#FFFFFF",
  },
};

export const Typography = {
  sizes: {
    xs: 10,
    sm: 11,
    md: 12,
    base: 13,
    normal: 14,
    lg: 16,
    xl: 18,
    "2xl": 20,
    "3xl": 24,
    "4xl": 28,
  },
  weights: {
    regular: "400" as const,
    medium: "500" as const,
    semibold: "600" as const,
    bold: "700" as const,
    extrabold: "800" as const,
  },
  lineHeights: {
    tight: 16,
    normal: 20,
    relaxed: 24,
    loose: 28,
  },
};

// ── Spacing Scale ───────────────────────────────────────────────────
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  "2xl": 28,
  "3xl": 32,
  "4xl": 40,
  "5xl": 48,
};

// ── Border Radius Scale ─────────────────────────────────────────────
export const BorderRadius = {
  sm: 6,
  md: 8,
  base: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  full: 9999,
};

// ── Shadow Presets ──────────────────────────────────────────────────
export const Shadows = {
  sm: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
    },
    android: { elevation: 2 },
  }),
  md: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
    },
    android: { elevation: 4 },
  }),
  lg: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.12,
      shadowRadius: 16,
    },
    android: { elevation: 6 },
  }),
  xl: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.15,
      shadowRadius: 24,
    },
    android: { elevation: 8 },
  }),
};

// ── Font Family ─────────────────────────────────────────────────────
export const Fonts = Platform.select({
  ios: {
    sans: "system-ui",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
