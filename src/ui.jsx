import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: min(100% - 2.5rem, 68rem);
  margin-inline: auto;
`;

export const Section = styled.section`
  padding-block: clamp(4rem, 9vw, 7rem);
  border-top: 1px solid ${(p) => p.theme.colors.line};
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
`;

export const Lede = styled.p`
  max-width: 38rem;
  color: ${(p) => p.theme.colors.muted};
  margin-bottom: 2.5rem;
`;

const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  min-height: 2.9rem;
  padding: 0.6rem 1.35rem;
  border-radius: 999px;
  border: 2px solid ${(p) => (p.$primary ? p.theme.colors.accent : p.theme.colors.line)};
  background: ${(p) => (p.$primary ? p.theme.colors.accent : 'transparent')};
  color: ${(p) => (p.$primary ? p.theme.colors.onAccent : p.theme.colors.text)};
  font-family: ${(p) => p.theme.fonts.display};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.15s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: ${(p) => p.theme.colors.accent};
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const Button = styled.button`
  ${buttonStyles}
`;

export const LinkButton = styled.a`
  ${buttonStyles}
`;

export const IconLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 0.9rem 0.5rem 0.75rem;
  border-radius: 999px;
  border: 1px solid ${(p) => p.theme.colors.line};
  text-decoration: none;
  font-family: ${(p) => p.theme.fonts.display};
  font-weight: 600;
  font-size: 0.95rem;
  transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: ${(p) => p.theme.colors.accent};
    color: ${(p) => p.theme.colors.accent};
    background: ${(p) => p.theme.colors.accentSoft};
  }
`;
