import ProjectsList from '../components/ProjectsList';
import articles from './project-content';

const ProjectsListPage = () => {
    return (
        <>
        <h1 className="bodyText">Projects</h1>
        <ProjectsList articles={articles} />
        </>
    )
}

export default ProjectsListPage;