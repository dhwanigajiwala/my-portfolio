import React, { useEffect, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle.js';
import { makeTheme } from './theme.js';
import { useLocalStorage } from './hooks.js';
import { profile } from './data.js';
import Header from './sections/Header.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Journey from './sections/Journey.jsx';
import Contact from './sections/Contact.jsx';
import BuildInfo from './sections/BuildInfo.jsx';
import Footer from './sections/Footer.jsx';

const prefersDark = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

export default function App() {
  const [mode, setMode] = useLocalStorage('portfolio-mode', prefersDark() ? 'dark' : 'light');
  const [hue, setHue] = useLocalStorage('portfolio-hue', 215);
  const theme = useMemo(() => makeTheme(mode, hue), [mode, hue]);

  useEffect(() => {
    document.title = `${profile.name} | Portfolio`;
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header mode={mode} toggleMode={() => setMode(mode === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero hue={hue} setHue={setHue} />
        <About />
        <Projects />
        <Journey />
        <Contact />
        <BuildInfo />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
