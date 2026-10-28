import React from 'react';
import styled from 'styled-components';
import { Container, Section, SectionTitle } from '../ui.jsx';
import { profile } from '../data.js';

const Grid = styled.div`
  display: grid;
  gap: 3rem;
  margin-top: 1.5rem;

  @media (min-width: 900px) {
    grid-template-columns: 1.4fr 1fr;
    gap: 5rem;
  }
`;

const Copy = styled.div`
  max-width: 38rem;
  display: grid;
  gap: 1.25rem;
`;

const Facts = styled.dl`
  display: grid;
  align-content: start;
  border-top: 1px solid ${(p) => p.theme.colors.line};

  div {
    display: grid;
    gap: 0.1rem;
    padding: 0.9rem 0;
    border-bottom: 1px solid ${(p) => p.theme.colors.line};
  }
  dt {
    font-size: 0.95rem;
    color: ${(p) => p.theme.colors.muted};
  }
  dd {
    font-family: ${(p) => p.theme.fonts.display};
    font-weight: 600;
    font-size: 1.1rem;
  }
`;

// `about` can be a single string (use a blank line or \n between paragraphs) or an array of strings.
const paragraphs = (Array.isArray(profile.about) ? profile.about : String(profile.about || '').split(/\n+/))
  .map((text) => text.trim())
  .filter(Boolean);

export default function About() {
  return (
    <Section id="about">
      <Container>
        <SectionTitle>About me</SectionTitle>
        <Grid>
          <Copy>
            {paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </Copy>
          <Facts>
            {profile.facts.map(({ label, value }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </Facts>
        </Grid>
      </Container>
    </Section>
  );
}