import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Section, SectionTitle, Lede, Button, IconLink } from '../ui.jsx';
import { profile } from '../data.js';
import { CopyIcon, GitHubIcon, LinkedInIcon, MailIcon } from '../Icons.jsx';

const Grid = styled.div`
  display: grid;
  gap: 3rem;

  @media (min-width: 900px) {
    grid-template-columns: 1.2fr 1fr;
    gap: 5rem;
  }
`;

const Form = styled.form`
  display: grid;
  gap: 1.1rem;
`;

const Field = styled.div`
  display: grid;
  gap: 0.35rem;

  label {
    font-family: ${(p) => p.theme.fonts.display};
    font-weight: 600;
  }
  input,
  textarea {
    width: 100%;
    padding: 0.75rem 0.9rem;
    border-radius: 8px;
    border: 1px solid ${(p) => p.theme.colors.line};
    background: ${(p) => p.theme.colors.surface};
    transition: border-color 0.2s ease;
  }
  input:hover,
  textarea:hover {
    border-color: ${(p) => p.theme.colors.muted};
  }
  input:focus-visible,
  textarea:focus-visible {
    border-color: ${(p) => p.theme.colors.accent};
    outline-offset: 1px;
  }
  textarea {
    min-height: 9rem;
    resize: vertical;
  }
`;

const Side = styled.div`
  display: grid;
  align-content: start;
  gap: 1.5rem;
`;

const Email = styled.p`
  font-family: ${(p) => p.theme.fonts.display};
  font-size: 1.25rem;
  font-weight: 600;
  overflow-wrap: anywhere;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const Message = styled.p`
  min-height: 1.6rem;
  font-size: 0.95rem;
  color: ${(p) => p.theme.colors.accent};
`;

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${data.get('name')}`);
    const body = encodeURIComponent(`${data.get('message')}\n\n${data.get('name')} (${data.get('email')})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus('Your email app should open with the message ready to send.');
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus('Email address copied.');
    } catch {
      setStatus(`Copy this address: ${profile.email}`);
    }
  };

  return (
    <Section id="contact">
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <Lede>Tell me about a project, an opportunity or a question. I read every message.</Lede>
        <Grid>
          <Form onSubmit={handleSubmit}>
            <Field>
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" autoComplete="name" required />
            </Field>
            <Field>
              <label htmlFor="email">Your email</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </Field>
            <Field>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required />
            </Field>
            <div>
              <Button $primary type="submit">
                <MailIcon size={18} /> Send message
              </Button>
            </div>
            <Message role="status" aria-live="polite">
              {status}
            </Message>
          </Form>

          <Side>
            <div>
              <Email>{profile.email}</Email>
              <Row style={{ marginTop: '0.75rem' }}>
                <Button type="button" onClick={copyEmail}>
                  <CopyIcon size={18} /> Copy email
                </Button>
              </Row>
            </div>
            <Row>
              <IconLink href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon size={20} /> LinkedIn
              </IconLink>
              <IconLink href={profile.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon size={20} /> GitHub
              </IconLink>
            </Row>
          </Side>
        </Grid>
      </Container>
    </Section>
  );
}
