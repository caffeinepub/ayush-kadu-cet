export interface Theme {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  bg1: string;
  bg2: string;
  glow: string;
}

export const themes: Theme[] = [
  {
    name: "CyberNeon",
    primary: "#18D7FF",
    secondary: "#A855F7",
    accent: "#FF4FD8",
    bg1: "#070A12",
    bg2: "#0B1020",
    glow: "rgba(24,215,255,0.3)",
  },
  {
    name: "SunsetBlaze",
    primary: "#FF6B35",
    secondary: "#FF4FD8",
    accent: "#FFD700",
    bg1: "#120807",
    bg2: "#1A0B10",
    glow: "rgba(255,107,53,0.3)",
  },
  {
    name: "ForestMatrix",
    primary: "#22E6C8",
    secondary: "#4ADE80",
    accent: "#818CF8",
    bg1: "#071209",
    bg2: "#0A1A10",
    glow: "rgba(34,230,200,0.3)",
  },
  {
    name: "GalaxyViolet",
    primary: "#A855F7",
    secondary: "#6366F1",
    accent: "#EC4899",
    bg1: "#0A0712",
    bg2: "#100B1A",
    glow: "rgba(168,85,247,0.3)",
  },
  {
    name: "CoralFusion",
    primary: "#FF6B6B",
    secondary: "#FFE66D",
    accent: "#4ECDC4",
    bg1: "#120707",
    bg2: "#1A100A",
    glow: "rgba(255,107,107,0.3)",
  },
];

export function getCurrentTheme(): Theme {
  const count = Number.parseInt(localStorage.getItem("cetThemeVisit") || "0");
  localStorage.setItem("cetThemeVisit", String(count + 1));
  return themes[count % themes.length];
}
