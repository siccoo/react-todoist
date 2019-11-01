import React, { useState } from 'react';
import { useProjectsValue } from '../context';

export const Projects = ({ activeValue = null }) => {
    const [active, setActive] = useState(activeValue);
    const {setSelectedProject} = useSelectedProject();
    const {projects} = useProjectsValue();

    return (
        projects &&
        projects.map(project => (
            <li 
               key={project.projectId}>

            </li>
        ))
    )
}