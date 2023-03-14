import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about">
            <div className="aboutTop">
                <div>
                    <h1 className="title">About Me</h1>
                    <h2 className="role">I am a software engineer.</h2>
                    <p className="detail">I enjoy identifying details and developing products that can enhance user experience.</p>
                    <p className="detail">Prior to my journey as a software engineer, I worked as an educator. My background in teaching languages equipped me with the ability to articulate my thoughts effectively and communicate with others proficiently. </p>
                    <p className="detail">I am enthusiastic about utilizing my expertise to create an impact on society.</p>
                </div>
                <img className="picture" src="https://res.cloudinary.com/dqduwnrb1/image/upload/v1678806502/mainpic_gxnmd6.png" alt="profile picture"></img>
            </div>
            <div className="aboutBottom">
                <div className="experience">
                    <ul>
                        <h3 className="list">Experience</h3>
                        <li className="list">
                            <div><strong>✲ Software Engineer</strong></div>
                            <div>Bevy</div>
                            <div>June 2022 - Oct 2022</div>
                        </li>
                        <li className="list">
                            <div><strong>✲ Associate Software Engineer</strong></div>
                            <div>Bevy</div>
                            <div>Aug 2021 - June 2022</div>
                        </li>
                        <li className="list">
                            <div><strong>✲ Software Engineer Intern</strong></div>
                            <div>Bevy</div>
                            <div>June 2021 - Aug 2021</div>
                        </li>
                        <li className="list">
                            <div><strong>✲ Software Engineer Fellow</strong></div>
                            <div>The Marcy Lab School</div>
                            <div>Feb 2021 - May 2021</div>
                        </li>
                    </ul>
                </div>
                <div className="skill">
                <ul>
                        <h3 className="list">Technologies I've been working with</h3>
                        <li className="list">✲ JavaScript</li>
                        <li className="list">✲ React</li>
                        <li className="list">✲ Python</li>
                        <li className="list">✲ Django</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;