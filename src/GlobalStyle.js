import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    background: ${(p) => p.theme.colors.bg};
    color: ${(p) => p.theme.colors.text};
    font-family: ${(p) => p.theme.fonts.body};
    font-size: 1.125rem;
    line-height: 1.65;
    transition: background 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, p, ul, ol, dl, dd { margin: 0; padding: 0; }
  ul, ol { list-style: none; }

  h1, h2, h3 {
    font-family: ${(p) => p.theme.fonts.display};
    line-height: 1.1;
  }

  a { color: inherit; }
  button, input, textarea { font: inherit; color: inherit; }

  :focus-visible {
    outline: 3px solid ${(p) => p.theme.colors.accent};
    outline-offset: 3px;
    border-radius: 4px;
  }

  ::selection {
    background: ${(p) => p.theme.colors.accent};
    color: ${(p) => p.theme.colors.onAccent};
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
