import './HomePage.css';
import './ProjectsListPage';
import ProjectsListPage from './ProjectsListPage';

const HomePage = () => {
    return (
        <div className = "homepage">
           <div className="introduction">
            <div className="text">
                <h3>Seola Carrano</h3>
                <h1>Software Engineer</h1>
                <h2>identify details and develop software projects</h2>
            </div>
            <img className="picture" src="https://res.cloudinary.com/dqduwnrb1/image/upload/v1678806502/mainpic_gxnmd6.png" alt="profile picture"></img>
           </div>
           <ProjectsListPage />
        </div>

    )
}

export default HomePage;