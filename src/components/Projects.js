import React, { useState } from 'react';
import { useProjectsValue } from '../context';

export const Projects = ({ activeValue = null }) => {
    const [active, setActive] = useState(activeValue);
    const { setSelectedProject } = useSelectedProject();
    const { projects } = useProjectsValue();

    return (
        projects &&
        projects.map(project => (
            <li
                key={project.projectId}
                data-doc-id={project.docId}
                data-testid="project-action"
                className={
                    active === project.projectId
                        ? 'active sidebar__project'
                        : 'sidebar__project'
                }
                onKeyDown={() => {
                    setActive(project.projectId);
                    setSelectedProject(project.projectId);
                }}
                onClick={() => {
                    setActive(project.projectId);
                    setSelectedProject(project.projectId);
                }}>
                Hi, this is the project.
            </li>
        ))
    )
}