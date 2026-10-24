import React from 'react';
import styled from 'styled-components';
import { Container, Section, SectionTitle } from '../ui.jsx';
import { journey } from '../data.js';

const Timeline = styled.ol`
  position: relative;
  margin-top: 2rem;
  padding-left: 2rem;
  border-left: 2px solid ${(p) => p.theme.colors.line};
  display: grid;
  gap: 2.25rem;
`;

const Step = styled.li`
  position: relative;
  max-width: 38rem;

  &::before {
    content: '';
    position: absolute;
    left: calc(-2rem - 7px);
    top: 0.55rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${(p) => p.theme.colors.accent};
    box-shadow: 0 0 0 4px ${(p) => p.theme.colors.bg};
  }

  time {
    font-family: ${(p) => p.theme.fonts.display};
    color: ${(p) => p.theme.colors.muted};
  }
  h3 {
    margin-top: 0.15rem;
    font-size: 1.4rem;
    font-weight: 650;
  }
  .place {
    font-family: ${(p) => p.theme.fonts.display};
    font-weight: 500;
    color: ${(p) => p.theme.colors.accent};
  }
  p {
    margin-top: 0.4rem;
  }
`;

export default function Journey() {
  return (
    <Section id="journey">
      <Container>
        <SectionTitle>Journey</SectionTitle>
        <Timeline>
          {journey.map((step) => (
            <Step key={step.title}>
              {step.when && <time>{step.when}</time>}
              <h3>{step.title}</h3>
              <div className="place">{step.place}</div>
              {step.note && <p>{step.note}</p>}
            </Step>
          ))}
        </Timeline>
      </Container>
    </Section>
  );
}
