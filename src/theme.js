export const makeTheme = (mode, hue) => {
  const dark = mode === 'dark';
  // Light-mode accents in the yellow-to-cyan range need to be darker to keep text readable.
  const lightL = hue > 40 && hue < 190 ? 25 : 38;

  const colors = dark
    ? {
        bg: `hsl(${hue} 24% 9%)`,
        glass: `hsl(${hue} 24% 9% / 0.85)`,
        surface: `hsl(${hue} 22% 14%)`,
        text: `hsl(${hue} 18% 93%)`,
        muted: `hsl(${hue} 10% 68%)`,
        line: `hsl(${hue} 16% 24%)`,
        accent: `hsl(${hue} 90% 68%)`,
        onAccent: `hsl(${hue} 40% 10%)`,
        accentSoft: `hsl(${hue} 70% 68% / 0.14)`,
      }
    : {
        bg: `hsl(${hue} 30% 96%)`,
        glass: `hsl(${hue} 30% 96% / 0.85)`,
        surface: `hsl(${hue} 30% 100%)`,
        text: `hsl(${hue} 35% 11%)`,
        muted: `hsl(${hue} 12% 36%)`,
        line: `hsl(${hue} 20% 82%)`,
        accent: `hsl(${hue} 80% ${lightL}%)`,
        onAccent: '#ffffff',
        accentSoft: `hsl(${hue} 80% ${lightL}% / 0.1)`,
      };

  return {
    mode,
    hue,
    colors,
    fonts: {
      display: "'Bricolage Grotesque', system-ui, -apple-system, 'Segoe UI', sans-serif",
      body: "'Newsreader', Georgia, 'Times New Roman', serif",
    },
  };
};
