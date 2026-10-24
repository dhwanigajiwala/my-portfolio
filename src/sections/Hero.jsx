import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, LinkButton } from '../ui.jsx';
import { profile } from '../data.js';
import { usePrefersReducedMotion } from '../hooks.js';
import { GitHubIcon, LinkedInIcon } from '../Icons.jsx';

const reveal = keyframes`
  from { clip-path: inset(-0.1em 100% -0.1em 0); }
  to   { clip-path: inset(-0.1em 0 -0.1em 0); }
`;

const Wrap = styled.section`
  padding-top: clamp(4rem, 10vw, 8rem);
  padding-bottom: clamp(3rem, 8vw, 6rem);
`;

const Name = styled.h1`
  font-size: clamp(3rem, 10.5vw, 8.5rem);
  letter-spacing: -0.035em;
  line-height: 0.98;
  font-variation-settings: 'wght' var(--wght, 700), 'wdth' var(--wdth, 100);
  animation: ${reveal} 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both;
  overflow-wrap: anywhere;
`;

const Hint = styled.p`
  margin-top: 0.75rem;
  font-size: 0.95rem;
  color: ${(p) => p.theme.colors.muted};
`;

const Role = styled.p`
  margin-top: 2.5rem;
  font-family: ${(p) => p.theme.fonts.display};
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 500;
  color: ${(p) => p.theme.colors.accent};
`;

const Intro = styled.p`
  margin-top: 0.75rem;
  max-width: 36rem;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
`;

const Panel = styled.div`
  margin-top: 3.5rem;
  max-width: 28rem;
  padding: 1.25rem 1.4rem 1.4rem;
  border: 1px solid ${(p) => p.theme.colors.line};
  border-radius: 6px;
  background: ${(p) => p.theme.colors.surface};
`;

const PanelLabel = styled.label`
  display: block;
  margin-bottom: 0.9rem;
  font-family: ${(p) => p.theme.fonts.display};
  font-weight: 600;
`;

const Range = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  height: 12px;
  border-radius: 999px;
  cursor: pointer;
  background: linear-gradient(
    to right,
    hsl(0 85% 55%),
    hsl(60 85% 50%),
    hsl(120 70% 45%),
    hsl(180 80% 45%),
    hsl(240 85% 60%),
    hsl(300 80% 55%),
    hsl(360 85% 55%)
  );

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: ${(p) => p.theme.colors.accent};
    border: 4px solid ${(p) => p.theme.colors.surface};
    box-shadow: 0 0 0 1px ${(p) => p.theme.colors.text};
  }
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${(p) => p.theme.colors.accent};
    border: 4px solid ${(p) => p.theme.colors.surface};
    box-shadow: 0 0 0 1px ${(p) => p.theme.colors.text};
  }
`;

const PanelNote = styled.p`
  margin-top: 0.9rem;
  font-size: 0.95rem;
  color: ${(p) => p.theme.colors.muted};
`;

export default function Hero({ hue, setHue }) {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();

  // The name gets bolder and wider as the pointer moves across it.
  const handleMove = (e) => {
    if (!ref.current || reduced()) return;
    const rect = ref.current.getBoundingClientRect();
    const x = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    ref.current.style.setProperty('--wght', String(Math.round(300 + x * 500)));
    ref.current.style.setProperty('--wdth', String(Math.round(75 + x * 25)));
  };

  return (
    <Wrap id="top" ref={ref} onPointerMove={handleMove}>
      <Container>
        <Name>{profile.name}</Name>
        <Hint>Move your pointer across the page and the name responds.</Hint>
        <Role>{profile.role}</Role>
        <Intro>{profile.intro}</Intro>
        <Row>
          <LinkButton $primary href="#projects">
            See my projects
          </LinkButton>
          <LinkButton href="#contact">Get in touch</LinkButton>
          <LinkButton href={profile.github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon size={18} /> GitHub
          </LinkButton>
          <LinkButton href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon size={18} /> LinkedIn
          </LinkButton>
        </Row>

        <Panel>
          <PanelLabel htmlFor="hue">Choose an accent colour</PanelLabel>
          <Range
            id="hue"
            type="range"
            min="0"
            max="360"
            value={hue}
            onChange={(e) => setHue(Number(e.target.value))}
          />
          <PanelNote>
            The whole site follows this colour. Your choice is saved on this device.
          </PanelNote>
        </Panel>
      </Container>
    </Wrap>
  );
}
