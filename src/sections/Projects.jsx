import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, Section, SectionTitle, Lede, Button, LinkButton } from '../ui.jsx';
import { projects, skills } from '../data.js';
import { ArrowUpRightIcon, CloseIcon, GitHubIcon } from '../Icons.jsx';

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Chip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.95rem;
  border-radius: 999px;
  border: 1px solid ${(p) => (p.$on ? p.theme.colors.accent : p.theme.colors.line)};
  background: ${(p) => (p.$on ? p.theme.colors.accent : 'transparent')};
  color: ${(p) => (p.$on ? p.theme.colors.onAccent : p.theme.colors.text)};
  font-family: ${(p) => p.theme.fonts.display};
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: ${(p) => p.theme.colors.accent};
  }

  small {
    font-size: 0.8rem;
    opacity: 0.75;
  }
`;

const Status = styled.p`
  margin: 1.25rem 0 0.5rem;
  font-size: 0.95rem;
  color: ${(p) => p.theme.colors.muted};
`;

const List = styled.ul`
  border-top: 1px solid ${(p) => p.theme.colors.line};
`;

const Item = styled.li`
  display: grid;
  gap: 0.75rem 2rem;
  padding: 1.6rem 0.5rem;
  border-bottom: 1px solid ${(p) => p.theme.colors.line};
  transition: background 0.2s ease;

  &:hover {
    background: ${(p) => p.theme.colors.accentSoft};
  }

  @media (min-width: 760px) {
    grid-template-columns: 5rem 1fr auto;
    align-items: start;
  }
`;

const Year = styled.span`
  font-family: ${(p) => p.theme.fonts.display};
  color: ${(p) => p.theme.colors.muted};
`;

const ItemTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 650;
  letter-spacing: -0.01em;
`;

const Summary = styled.p`
  margin-top: 0.35rem;
  max-width: 34rem;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.9rem;
  margin-top: 0.75rem;
  font-size: 0.95rem;
  color: ${(p) => p.theme.colors.muted};
`;

const Empty = styled.div`
  padding: 2.5rem 0;
  display: grid;
  gap: 1rem;
  justify-items: start;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px) scale(0.98); }
  to   { opacity: 1; transform: none; }
`;

const Dialog = styled.dialog`
  width: min(100% - 2rem, 40rem);
  max-height: calc(100dvh - 2rem);
  padding: 0;
  border: 1px solid ${(p) => p.theme.colors.line};
  border-radius: 16px;
  background: ${(p) => p.theme.colors.surface};
  color: ${(p) => p.theme.colors.text};
  overflow: auto;

  &[open] {
    animation: ${fadeIn} 0.22s ease both;
  }
  &::backdrop {
    background: rgba(8, 10, 18, 0.6);
  }
`;

const DialogBody = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1.75rem;
`;

const DialogTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;

  h3 {
    font-size: 1.9rem;
    letter-spacing: -0.01em;
  }
`;

const CloseButton = styled.button`
  flex: none;
  display: inline-grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid ${(p) => p.theme.colors.line};
  background: transparent;
  cursor: pointer;

  &:hover {
    border-color: ${(p) => p.theme.colors.accent};
  }
`;

const DialogActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

function ProjectDialog({ project, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  return (
    <Dialog
      ref={ref}
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      {project && (
        <DialogBody>
          <DialogTop>
            <h3 id="project-dialog-title">{project.title}</h3>
            <CloseButton type="button" onClick={onClose} aria-label="Close project details">
              <CloseIcon />
            </CloseButton>
          </DialogTop>
          <p>{project.details}</p>
          <Tags aria-label="Skills used">
            {project.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </Tags>
          <DialogActions>
            {project.liveUrl && (
              <LinkButton $primary href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Open live site <ArrowUpRightIcon size={18} />
              </LinkButton>
            )}
            {project.repoUrl && (
              <LinkButton href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <GitHubIcon size={18} /> View code
              </LinkButton>
            )}
          </DialogActions>
        </DialogBody>
      )}
    </Dialog>
  );
}

export default function Projects() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [selected, setSelected] = useState(null);

  const counts = useMemo(
    () =>
      Object.fromEntries(
        skills.map((s) => [s, projects.filter((p) => p.skills.includes(s)).length])
      ),
    []
  );

  const visible = activeSkill ? projects.filter((p) => p.skills.includes(activeSkill)) : projects;

  return (
    <Section id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <Lede>Pick a skill to see the projects that use it. Open any project for the details.</Lede>

        <Filters role="group" aria-label="Filter projects by skill">
          <Chip type="button" $on={activeSkill === null} aria-pressed={activeSkill === null} onClick={() => setActiveSkill(null)}>
            All skills
          </Chip>
          {skills.map((skill) => (
            <Chip
              key={skill}
              type="button"
              $on={activeSkill === skill}
              aria-pressed={activeSkill === skill}
              onClick={() => setActiveSkill(activeSkill === skill ? null : skill)}
            >
              {skill} <small>{counts[skill]}</small>
            </Chip>
          ))}
        </Filters>

        <Status role="status" aria-live="polite">
          Showing {visible.length} of {projects.length} projects
          {activeSkill ? ` that use ${activeSkill}` : ''}.
        </Status>

        {visible.length === 0 ? (
          <Empty>
            <p>No projects use {activeSkill} yet.</p>
            <Button type="button" onClick={() => setActiveSkill(null)}>
              Show all projects
            </Button>
          </Empty>
        ) : (
          <List>
            {visible.map((project) => (
              <Item key={project.id}>
                <Year>{project.year}</Year>
                <div>
                  <ItemTitle>{project.title}</ItemTitle>
                  <Summary>{project.summary}</Summary>
                  <Tags aria-label="Skills used">
                    {project.skills.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </Tags>
                </div>
                <Button type="button" onClick={() => setSelected(project)}>
                  View details
                </Button>
              </Item>
            ))}
          </List>
        )}
      </Container>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
