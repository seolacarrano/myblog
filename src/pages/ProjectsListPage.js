import ProjectsList from '../components/ProjectsList';
import articles from './project-content';

const ProjectsListPage = () => {
    return (
        <>
        <h1>Projects</h1>
        <ProjectsList articles={articles} />
        </>
    )
}

export default ProjectsListPage;