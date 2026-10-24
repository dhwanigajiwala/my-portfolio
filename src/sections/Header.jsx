import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../ui.jsx';
import { useScrollSpy } from '../hooks.js';
import { profile } from '../data.js';
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from '../Icons.jsx';

const links = [
  ['about', 'About'],
  ['projects', 'Projects'],
  ['journey', 'Journey'],
  ['contact', 'Contact'],
];

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: ${(p) => p.theme.colors.glass};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${(p) => p.theme.colors.line};
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 4rem;
`;

const Brand = styled.a`
  font-family: ${(p) => p.theme.fonts.display};
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: -0.01em;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 0.25rem;
  margin-left: auto;

  @media (max-width: 760px) {
    display: ${(p) => (p.$open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin: 0;
    padding: 0.75rem 1.25rem 1.25rem;
    background: ${(p) => p.theme.colors.bg};
    border-bottom: 1px solid ${(p) => p.theme.colors.line};
  }
`;

const NavLink = styled.a`
  padding: 0.45rem 0.8rem;
  font-family: ${(p) => p.theme.fonts.display};
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
  color: ${(p) => (p.$active ? p.theme.colors.text : p.theme.colors.muted)};
  box-shadow: inset 0 -3px 0 ${(p) => (p.$active ? p.theme.colors.accent : 'transparent')};
  transition: color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    color: ${(p) => p.theme.colors.text};
  }
`;

const IconButton = styled.button`
  display: inline-grid;
  place-items: center;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  border: 1px solid ${(p) => p.theme.colors.line};
  background: transparent;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: ${(p) => p.theme.colors.accent};
    background: ${(p) => p.theme.colors.accentSoft};
  }
`;

const MenuButton = styled(IconButton)`
  @media (min-width: 761px) {
    display: none;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export default function Header({ mode, toggleMode }) {
  const active = useScrollSpy(links.map(([id]) => id));
  const [open, setOpen] = useState(false);

  return (
    <Bar>
      <Container>
        <Inner>
          <Brand href="#top">{profile.name}</Brand>
          <Nav id="site-nav" aria-label="Main" $open={open}>
            {links.map(([id, label]) => (
              <NavLink
                key={id}
                href={`#${id}`}
                $active={active === id}
                aria-current={active === id ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </Nav>
          <Actions>
            <IconButton
              type="button"
              onClick={toggleMode}
              aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {mode === 'dark' ? <SunIcon /> : <MoonIcon />}
            </IconButton>
            <MenuButton
              type="button"
              aria-expanded={open}
              aria-controls="site-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </MenuButton>
          </Actions>
        </Inner>
      </Container>
    </Bar>
  );
}
