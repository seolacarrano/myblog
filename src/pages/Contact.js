import './Contact.css';


const Contact = () => {
    return (
        <div className="contact">
            <div>
                <h1>Let's connect!</h1>
                <ul className="iconContainer">
                    <li className="iconList">
                        <a href="https://www.linkedin.com/in/seola-carrano/" target="_blank">
                            <i class="icon fab fa-linkedin fa-2x"></i>
                        </a>
                    </li>
                    <li className="iconList">
                        <a href="https://github.com/seolacarrano/" target="_blank">
                            <i class="icon fab fa-github fa-2x"></i>
                        </a>
                    </li>
                    <li className="iconList">
                        <a href="mailto: carrano.seola@gmail.com" target="_blank">
                            <i class="icon far fa-envelope fa-2x"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;