import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import articles from './project-content';

const ProjectPage = () => {
    const [articleInfo, setArticleInfo] = useState({updates: 0, comments: []});

    useEffect(() => {
        setArticleInfo({upvotes: 3, comments: [] });
    })

    const { projectId } = useParams();
    const article = articles.find(article => article.name === projectId);

    if(!article) {
        return (
            <NotFoundPage />
        )
    }

    return (
        <>
        <h1 className="bodyText">{article.title}</h1>
        <p>This project has {articleInfo.upvotes} upvote(s)</p>
        {article.content.map((paragraph, i) => (
            <p className="bodyText" key={i}>{paragraph}</p>
        ))}
        </>
    )
}

export default ProjectPage;