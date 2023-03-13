import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about">
            <div>
                <h1 className="title">About Me</h1>
                <h2 className="role">I am a software engineer.</h2>
                <p className="detail">I enjoy identifying details and developing products that can enhance the user's experience.</p>
                <p className="detail">Prior to my journey as a software engineer, I worked as an educator. My background in teaching languages equipped me with the ability to articulate my thoughts effectively and communicate with others proficiently. </p>
                <p className="detail">I am enthusiastic about utilizing my expertise to create an impact on society.</p>
            </div>
            <div className="picture">
            <img src="https://res.cloudinary.com/dqduwnrb1/image/upload/v1678733652/profile_yaygpt.png" alt="profile picture"></img>
            </div>
        </div>
    )
}

export default AboutPage;