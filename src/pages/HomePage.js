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
                <h2>developing software projects, identifying details</h2>
            </div>
            <div className="picture">
            <img src="https://res.cloudinary.com/dqduwnrb1/image/upload/v1601408107/profile_ou0hwh.jpg" alt="profile picture"></img>
            </div>
           </div>
           <ProjectsListPage />
        </div>

    )
}

export default HomePage;