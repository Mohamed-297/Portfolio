import "./Contact.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
    return (
        <div id="contact" className='contact'>
            <div className="contactWrapper">
                <div className="allWrapped">

                    <h1 className="inTouch">Let's Get in Touch!</h1>
                    <p className="motivation">I’m always excited to connect with fellow developers, potential employers,
                        or anyone looking to collaborate on exciting projects. Whether you have a question,
                        a job opportunity, or just want to chat about tech, feel free to reach out!
                    </p>
                    <ul className="how-to-contact">
                        <li>Email: mohamedelsherif671@gmail.com</li>
                        <li>Phone: 01098763904</li>
                        <li>LinkedIn-Username: Mohamed-297</li>
                    </ul>
                </div>
                <div className="socialMedia">
                    <a target="blank" href="https://www.linkedin.com/in/mohamed-elsherif-380a18225?utm_source=share&utm_campaign=share_via&
                    utm_content=profile&utm_medium=android_app"><LinkedInIcon className="socialMediaIcon" /></a>
                    <a target="blank" href="https://github.com/Mohamed-297"><GitHubIcon className="socialMediaIcon" /></a>
                    <a target="blank" href="https://www.facebook.com/share/2Eyb693qEx1pbYZN/?mibextid=qi2Omg"><FacebookIcon className="socialMediaIcon" /></a>

                </div>
            </div>
            <h2 className="copyRights">© 2024 All-rights-reserved</h2>
        </div>

    )
}
