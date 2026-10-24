import React from 'react';
import styled from 'styled-components';
import { Container, Section, SectionTitle, Lede } from '../ui.jsx';
import { buildInfo } from '../data.js';

const Grid = styled.div`
  display: grid;
  gap: 2.5rem;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  ul {
    display: grid;
    gap: 0.75rem;
  }
  li {
    padding-bottom: 0.75rem;
    border-bottom: 1px solid ${(p) => p.theme.colors.line};
  }
  strong {
    font-family: ${(p) => p.theme.fonts.display};
    font-weight: 600;
  }
`;

export default function BuildInfo() {
  return (
    <Section id="built-with">
      <Container>
        <SectionTitle>How this site was built</SectionTitle>
        <Lede>The tools behind this portfolio, including the AI assistants I used and how.</Lede>
        <Grid>
          <div>
            <h3>Technology</h3>
            <ul>
              {buildInfo.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>AI tools</h3>
            <ul>
              {buildInfo.aiTools.map((tool) => (
                <li key={tool.name}>
                  <strong>{tool.name}.</strong> {tool.use}
                </li>
              ))}
            </ul>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
