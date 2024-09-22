import "./Home.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Home() {
    return (
        <div className="wrap">
            <div className="wrapper">
                <div className="wrap-welcome-name">

                    <p className="welcome">
                        Hi there! I’m Mohamed, a passionate and dedicated  Frontend Developer with a knack for creating stunning
                        and efficient web applications. With a strong foundation in React and a keen eye for design,
                        I strive to build user-friendly and visually appealing interfaces.
                    </p>

                    <h1 className="designedName">
                        <span className="firstName">Mohamed</span> <span className="lastName">El-sherif</span>
                    </h1>
                </div>
                <div className="media">
                    <a target="blank" href="https://www.linkedin.com/in/mohamed-elsherif-380a18225?utm_source=share&utm_campaign=share_via&
                    utm_content=profile&utm_medium=android_app"><LinkedInIcon className="mediaIcon" /></a>
                    <a target="blank" href="https://github.com/Mohamed-297"><GitHubIcon className="mediaIcon" /></a>
                    <a target="blank" href="https://www.facebook.com/share/2Eyb693qEx1pbYZN/?mibextid=qi2Omg"><FacebookIcon className="mediaIcon" /></a>
                </div>
            </div>
        </div>
    )
}
