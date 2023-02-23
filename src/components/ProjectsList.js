import { Link } from 'react-router-dom';

const ProjectsList = ({articles}) => {
    return (
        <>
        {articles.map(article=>(
            <Link key={article.name} className="article-list-item" to={`/project/${article.name}`}>
                <h3 className="bodyText">{article.title}</h3>
                <p className="bodyText">{article.content[0].substring(0, 150)}...</p>
            </Link>
        ))}
        </>
    )
}

export default ProjectsList;