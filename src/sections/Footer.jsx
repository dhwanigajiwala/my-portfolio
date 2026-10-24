import React from 'react';
import styled from 'styled-components';
import { Container, IconLink } from '../ui.jsx';
import { profile } from '../data.js';
import { ArrowUpIcon, GitHubIcon, LinkedInIcon } from '../Icons.jsx';

const Bar = styled.footer`
  padding-block: 2.5rem;
  border-top: 1px solid ${(p) => p.theme.colors.line};
`;

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

export default function Footer() {
  return (
    <Bar>
      <Container>
        <Inner>
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <Row>
            <IconLink href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon size={18} /> LinkedIn
            </IconLink>
            <IconLink href={profile.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon size={18} /> GitHub
            </IconLink>
            <IconLink href="#top">
              <ArrowUpIcon size={18} /> Back to top
            </IconLink>
          </Row>
        </Inner>
      </Container>
    </Bar>
  );
}
