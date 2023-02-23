import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import articles from './project-content';

const ProjectPage = () => {
    const { projectId } = useParams();
    const article = articles.find(article => article.name === projectId);

    if(!article) {
        return (
            <NotFoundPage />
        )
    }

    return (
        <>
        <h1>{article.title}</h1>
        {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
        </>
    )
}

export default ProjectPage;